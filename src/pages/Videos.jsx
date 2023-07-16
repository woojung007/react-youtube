import { useQuery } from '@tanstack/react-query';
import FakeYoutube from 'api/fakeYoutube';
import VideoCard from 'components/VideoCard';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const { keyword } = useParams();
    const {
        isLoading,
        error,
        data: videos,
    } = useQuery(['videos', keyword], () => {
        const youtube = new FakeYoutube();
        return youtube.search(keyword);
    });

    return (
        <>
            <div>videos {keyword ? `${keyword}` : '🔥'}</div>

            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😅</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}
