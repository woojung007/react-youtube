import Content from 'components/detail/content/Content';
import RelatedVideos from 'components/detail/related-videos/RelatedVideos';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
    const { videoId } = useParams();

    console.log(videoId);

    return (
        <div>
            <Content />
            <RelatedVideos />
        </div>
    );
}
