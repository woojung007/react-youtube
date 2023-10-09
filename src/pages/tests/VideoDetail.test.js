import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ChannelInfo from 'components/ChannelInfo';
import RelatedVideos from 'components/RelatedVideos';
import VideoDetail from 'pages/VideoDetail';
import { Route } from 'react-router-dom';
import { withRouter } from 'tests/utils';
import { fakeVideo } from 'tests/videos';
import renderer from 'react-test-renderer';

jest.mock('../../components/ChannelInfo');
jest.mock('../../components/RelatedVideos');

describe('VideoDetail', () => {
    afterEach(() => {
        ChannelInfo.mockReset();
        RelatedVideos.mockReset();
    });

    it('renders correctly - Snapshot', () => {
        const component = renderer.create(
            withRouter(<Route path='/' element={<VideoDetail />} />, {
                pathname: '/',
                state: { video: fakeVideo },
                key: 'fake-key',
            }),
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders video item details', () => {
        render(
            withRouter(<Route path='/' element={<VideoDetail />} />, {
                pathname: '/',
                state: { video: fakeVideo },
                key: 'fake-key',
            }),
        );

        const { title, channelId, channelTitle } = fakeVideo.snippet;
        expect(screen.getByTitle(title)).toBeInTheDocument();
        expect(RelatedVideos.mock.calls[0][0]).toStrictEqual({ id: fakeVideo.id });
        expect(ChannelInfo.mock.calls[0][0]).toStrictEqual({
            id: channelId,
            name: channelTitle,
        });
    });
});
