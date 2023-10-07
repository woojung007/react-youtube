import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VideoCard from 'components/VideoCard';
import { Route, useLocation } from 'react-router-dom';
import { withRouter } from 'tests/utils';
import { fakeVideo as video } from 'tests/videos';
import { formatAgo } from 'util/date';

describe('VideoCard', () => {
    const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

    it('renders video item', () => {
        // Given
        render(withRouter(<Route path='/' element={<VideoCard video={video} />} />));

        // When
        const image = screen.getByRole('img');

        // Then
        expect(image.src).toBe(thumbnails.medium.url);
        expect(image.alt).toBe(title);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(channelTitle)).toBeInTheDocument();
        expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument();
    });

    it('navigates to detailed video page with video state when clicked', () => {
        // 전달된 상태를 보여주기 위해서 만든 임의의 테스트용 컴포넌트
        function LocationStateDisplay() {
            return <pre>{JSON.stringify(useLocation().state)}</pre>;
        }

        render(
            withRouter(
                <>
                    <Route path='/' element={<VideoCard video={video} />} />
                    <Route path={`/videos/watch/${video.id}`} element={<LocationStateDisplay />} />
                </>,
            ),
        );

        const card = screen.getByRole('listitem'); // li 태그
        userEvent.click(card); // list 카드가 클릭되면

        expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
    });
});
