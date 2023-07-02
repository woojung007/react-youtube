import React from 'react';
import styles from './Content.module.css';

export default function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.video}>detail video</div>

            <div>title</div>
            <div>
                <div>profile</div>
                <div>name</div>
            </div>
            <div>desc</div>
        </div>
    );
}
