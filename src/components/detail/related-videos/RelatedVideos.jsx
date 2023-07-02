import React from 'react';
import styles from './RelatedVideos.module.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchRelatedVideos } from '../Detail.queries';

export default function RelatedVideos() {
    const { videoId } = useParams();

    const { data: videos, isLoading, error } = useQuery(['related-videos', videoId], fetchRelatedVideos);

    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;
    return (
        <div className={styles.related}>
            {videos?.map(({ id, snippet }) => (
                <div className={styles.item} key={id.videoId}>
                    <div className={styles.thumbnail}>
                        {/* <img src={snippet.thumbnails.maxres.url} alt='thumbnail' /> */}

                        <iframe
                            id='ytplayer'
                            type='text/html'
                            src={`https://www.youtube.com/embed/${id.videoId}?autoplay=0&origin=http://example.com`}
                            title={id}
                        ></iframe>
                    </div>
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
