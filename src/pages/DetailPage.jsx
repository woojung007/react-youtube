import Content from 'components/detail/content/Content';
import RelatedVideos from 'components/detail/related-videos/RelatedVideos';
import React from 'react';
import styles from './Pages.module.css';

export default function DetailPage() {
    return (
        <div className={styles.detail}>
            <Content />
            <RelatedVideos />
        </div>
    );
}
