import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetailPage() {
    const { videoId } = useParams();

    console.log(videoId);

    return (
        <div>
            <div>detail</div>
        </div>
    );
}
