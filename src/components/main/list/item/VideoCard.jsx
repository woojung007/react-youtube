import React from 'react';
import styles from './VideoCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ videoId }) {
    const navigate = useNavigate();
    return (
        <section onClick={() => navigate(`/videos/${videoId}`)} className={styles.card}>
            <div className={styles.thumbnail}></div>
            <div className={styles.title}>title</div>
            <div className={styles.name}>BANGTAN TV</div>
            <div className={styles.time}>1 day ago</div>
        </section>
    );
}
