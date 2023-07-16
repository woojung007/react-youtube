import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from 'context/YoutubeApiContext';
import React from 'react';

export default function ChannelInfo({ id, name }) {
    const { youtube } = useYoutubeApi();
    const { error, isLoading, data: url } = useQuery(['channel', id], () => youtube.channelImageUrl(id));

    return (
        <div>
            <div>
                {url && <img src={url} alt={name} />}
                <p>{name}</p>
            </div>
        </div>
    );
}
