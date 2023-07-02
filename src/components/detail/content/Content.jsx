import React from 'react';
import styles from './Content.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchVideo } from '../Detail.queries';

export default function Content() {
    const { videoId } = useParams();

    const { data, isLoading, error } = useQuery(['video', videoId], fetchVideo);

    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;

    const { snippet, tags, statistics } = data;

    const { title, channelTitle, description } = snippet;

    return (
        <div className={styles.content}>
            <div className={styles.video}>detail video</div>

            <div>{title}</div>
            <div>
                <div>profile</div>
                <div>{channelTitle}</div>
            </div>
            <div>{description}</div>
        </div>
    );
}
