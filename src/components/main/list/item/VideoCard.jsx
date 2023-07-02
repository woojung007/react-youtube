import React from 'react';
import styles from './VideoCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
    const navigate = useNavigate();

    const { id, snippet } = video;
    return (
        <section onClick={() => navigate(`/videos/${id.videoId}`)} className={styles.card}>
            <div className={styles.thumbnail}>
                <img src={snippet.thumbnails.high.url} alt='thumbnail' />
            </div>
            <div className={styles.title}>{snippet.title}</div>
            <div className={styles.channelTitle}>{snippet.channelTitle}</div>
            <div className={styles.publishedAt}>{snippet.publishedAt}</div>
        </section>
    );
}
