import React from 'react';
import VideoCard from './item/VideoCard';
import styles from './Videos.module.css';

export default function Videos() {
    return (
        <div className={styles.container}>
            {new Array(20).fill(1).map((item, idx) => (
                <VideoCard key={idx} videoId={idx} />
            ))}
        </div>
    );
}
