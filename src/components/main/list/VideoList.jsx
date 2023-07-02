import React from 'react';
import VideoCard from './item/VideoCard';
import styles from './VideoList.module.css';

export default function VideoList() {
    return (
        <div className={styles.container}>
            {new Array(20).fill(1).map((item, idx) => (
                <VideoCard key={idx} />
            ))}
        </div>
    );
}
