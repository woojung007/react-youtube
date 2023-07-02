import React from 'react';
import styles from './RelatedVideos.module.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchRelatedVideos } from '../Detail.queries';

export default function RelatedVideos() {
    const { videoId } = useParams();

    const { data: videos, isLoading, error } = useQuery(['related-videos', videoId], fetchRelatedVideos);

    console.log('@@@', videos);
    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;
    return (
        <div className={styles.related}>
            {videos?.map(({ id, snippet }) => (
                <div className={styles.item} key={id.videoId}>
                    <div className={styles.video}>video</div>
                    <div className={styles.content}>
                        <div>{snippet.title}</div>
                        <div>{snippet.channelTitle}</div>
                        <div>{snippet.publishedAt}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
