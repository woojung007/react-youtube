import React from 'react';
import { formatAgo } from 'util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const navigate = useNavigate();
    const isList = type === 'list';

    return (
        <li
            className={isList ? 'flex gap-1 m-2' : ''}
            onClick={() => navigate(`/videos/watch/${video.id}`, { state: { video } })}
            /**
             * navigate할 때 앞에 '/'를 붙여 절대경로로 적어줘야 함.
             * 그렇지 않으면 상대경로로 들어가게 됨. => 현재 경로의 뒤에 추가된다.
             */
        >
            <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title} />
            <div>
                <p className='my-2 font-semibold line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    );
}
