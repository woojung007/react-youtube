import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import VideoCard from 'components/VideoCard';
import { MemoryRouter } from 'react-router-dom';
import { formatAgo } from 'util/date';

describe('VideoCard', () => {
    const video = {
        id: 1,
        snippet: {
            title: 'title',
            channelId: '1',
            channelTitle: 'channelTitle',
            publishedAt: new Date(),
            thumbnails: {
                medium: {
                    url: 'http://image/',
                },
            },
        },
    };

    const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

    it('renders video item', () => {
        // Given
        render(
            <MemoryRouter>
                <VideoCard video={video} />
            </MemoryRouter>,
        );

        // When
        const image = screen.getByRole('img');

        // Then
        expect(image.src).toBe(thumbnails.medium.url);
        expect(image.alt).toBe(title);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(channelTitle)).toBeInTheDocument();
        expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument();
    });
});
