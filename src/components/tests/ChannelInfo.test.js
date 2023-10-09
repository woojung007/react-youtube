/* eslint-disable testing-library/prefer-find-by */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ChannelInfo from 'components/ChannelInfo';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from 'tests/utils';

describe('ChannelInfo', () => {
    // class(object instance)를 흉내내는 가짜 object
    const fakeYoutube = {
        channelImageUrl: jest.fn(),
    };

    afterEach(() => {
        fakeYoutube.channelImageUrl.mockReset();
    });

    /**
     * 1. snapshot(img, p)
     * 2. url X
     * (3. url O)
     */

    it('renders correctly', async () => {
        // Given
        fakeYoutube.channelImageUrl.mockImplementation(() => 'url');
        const { asFragment } = renderChannelInfo();

        await waitFor(() => expect(screen.getByRole('img')));
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without URL', () => {
        fakeYoutube.channelImageUrl.mockImplementation(() => {
            throw new Error('error');
        });
        renderChannelInfo();

        expect(screen.queryByRole('img')).toBeNull();
    });

    it('renders with URL', async () => {
        fakeYoutube.channelImageUrl.mockImplementation(() => 'url');
        renderChannelInfo();

        await waitFor(() => expect(screen.getByRole('img')).toBeInTheDocument());
    });

    function renderChannelInfo() {
        return render(
            withAllContexts(
                withRouter(<Route path='/' element={<ChannelInfo id='id' name='channel' />} />),
                fakeYoutube,
            ),
        );
    }
});
