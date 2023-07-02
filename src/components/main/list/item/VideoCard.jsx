import React from 'react';
import styles from './VideoCard.module.css';

export default function VideoCard() {
    return (
        <section className={styles.card}>
            <div className={styles.thumbnail}></div>
            <div className={styles.title}>title</div>
            <div className={styles.name}>BANGTAN TV</div>
            <div className={styles.time}>1 day ago</div>
        </section>
    );
}
