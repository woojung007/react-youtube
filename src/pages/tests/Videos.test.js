import { fakeVideo, fakeVideos } from 'tests/videos';
import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { withAllContexts, withRouter } from 'tests/utils';
import Videos from 'pages/Videos';
import { Route } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Videos', () => {
    const fakeYoutube = {
        search: jest.fn(),
    };

    beforeEach(() => {
        fakeYoutube.search.mockImplementation((keyword) => {
            return keyword ? [fakeVideo] : fakeVideos;
        });
    });

    afterEach(() => {
        fakeYoutube.search.mockReset();
    });

    it('renders correctly - Snapshot', async () => {
        const { asFragment } = renderWithPath('/');

        await waitForElementToBeRemoved(screen.queryByText('Loading...'));
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders all videos when keyword is not specified', async () => {
        renderWithPath('/');

        expect(fakeYoutube.search).toHaveBeenCalledWith(undefined);
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(fakeVideos.length));
    });

    it('when keyword is specified, renders search keyword', async () => {
        const searchKeyword = 'fake-keyword';
        renderWithPath(`/${searchKeyword}`);

        expect(fakeYoutube.search).toHaveBeenCalledWith(searchKeyword);
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(1));
    });

    it('renders loading state when items are being fetched', async () => {
        renderWithPath('/');

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('renders error state when fetching items fails', async () => {
        fakeYoutube.search.mockImplementation(async () => {
            throw new Error('error');
        });

        renderWithPath('/');

        await waitFor(() => {
            expect(screen.getByText(/Something is wrong/i)).toBeInTheDocument();
        });
    });

    function renderWithPath(path) {
        return render(
            withAllContexts(
                withRouter(
                    <>
                        <Route path='/' element={<Videos />} />
                        <Route path='/:keyword' element={<Videos />} />
                    </>,
                    path,
                ),
                fakeYoutube,
            ),
        );
    }
});
