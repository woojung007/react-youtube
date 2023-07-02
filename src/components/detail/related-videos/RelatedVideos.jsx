import React from 'react';
import styles from './RelatedVideos.module.css';

export default function RelatedVideos() {
    return (
        <div className={styles.related}>
            {new Array(8).fill(1).map((item, idx) => (
                <div className={styles.item} key={idx}>
                    <div className={styles.video}>video</div>
                    <div className={styles.content}>
                        <div>title</div>
                        <div>name</div>
                        <div>time</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
