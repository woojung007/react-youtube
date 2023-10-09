/* eslint-disable testing-library/prefer-find-by */
import '@testing-library/jest-dom';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import RelatedVideos from 'components/RelatedVideos';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from 'tests/utils';
import { fakeVideos } from 'tests/videos';

describe('RelatedVideos', () => {
    const fakeYoutube = {
        relatedVideos: jest.fn(),
    };

    afterEach(() => {
        fakeYoutube.relatedVideos.mockReset();
    });

    it('renders correctly', async () => {
        fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
        const { asFragment } = renderRelatedVideos();

        await waitForElementToBeRemoved(screen.queryByText('Loading...'));
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders related videos correctly', async () => {
        fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
        renderRelatedVideos();

        expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith('videoId');
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(fakeVideos.length));
    });

    it('renders loading', () => {
        fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
        renderRelatedVideos();

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error', async () => {
        fakeYoutube.relatedVideos.mockImplementation(() => {
            throw new Error('error');
        });

        renderRelatedVideos();

        await waitFor(() => expect(screen.getByText('Something is wrong 😅')).toBeInTheDocument());
    });

    function renderRelatedVideos() {
        return render(
            withAllContexts(withRouter(<Route path='/' element={<RelatedVideos id='videoId' />} />), fakeYoutube),
        );
    }
});
