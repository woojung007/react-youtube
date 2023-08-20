import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useVideosStore } from '../../../context/VideosProvider';
import styles from './SearchHeader.module.css';
import { fetchVideosByKeyword } from './SearchHeader.queries';

export default function SearchHeader() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const { setVideos } = useVideosStore();
    const { keyword } = useParams();

    const { data: videos } = useQuery(['videos', text], fetchVideosByKeyword);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
        setVideos(videos);
    };

    useEffect(() => {
        setText(keyword || '');
    }, [keyword]);

    return (
        <header>
            <Link to='/' className={styles.logo}>
                <BsYoutube />
                <h1>YouTube</h1>
            </Link>

            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    type='text'
                    value={text}
                    placeholder='Search...'
                />
                <button type='submit'>
                    <BiSearch />
                </button>
            </form>
        </header>
    );
}
