import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styles from './Videos.module.css';
import { fetchVideos } from './Videos.queries';
import VideoCard from './item/VideoCard';

export default function Videos() {
    // const [videos, setVideos] = useState();
    const { data: videos, isLoading, error } = useQuery(['videos'], fetchVideos);

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
