import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchVideosByKeyword } from '../../layout/header/SearchHeader.queries';
import styles from './Videos.module.css';
import VideoCard from './item/VideoCard';

export default function Videos() {
    const { data: videos, isLoading, error } = useQuery(['videos', ''], fetchVideosByKeyword);
    // fetchVideos

    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;

    return (
        <div className={styles.container}>
            {videos?.map((video, idx) => (
                <VideoCard key={idx} video={video} />
            ))}
        </div>
    );
}
