import { render, screen, waitFor } from '@testing-library/react';
import { default as ChannelInfo } from 'components/ChannelInfo';
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

    it('renders correctly', async () => {
        fakeYoutube.channelImageUrl.mockImplementation(() => 'url');

        render(
            withAllContexts(
                withRouter(<Route path='/' element={<ChannelInfo id='id' name='channel' />} />),
                fakeYoutube,
            ),
        );

        await waitFor(() => expect(screen.getByText('channel')));
    });
});
