import React from 'react';
import styles from './Content.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchVideo } from '../Detail.queries';

export default function Content() {
    const { videoId } = useParams();

    const { data: video, isLoading, error } = useQuery(['video', videoId], fetchVideo);

    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;

    const { snippet, tags, statistics, id } = video;

    const { title, channelTitle, description } = snippet;

    return (
        <div className={styles.content}>
            <div className={styles.video}>
                <iframe
                    id='ytplayer'
                    type='text/html'
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
                    title={id}
                ></iframe>
            </div>

            <div>{title}</div>
            <div>
                <div>profile</div>
                <div>{channelTitle}</div>
            </div>
            <div>{description}</div>
        </div>
    );
}
