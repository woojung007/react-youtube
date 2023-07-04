import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useVideosStore } from '../../../context/VideosProvider';
import styles from './SearchHeader.module.css';
import { fetchVideosByKeyword } from './SearchHeader.queries';

export default function SearchHeader() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const { setVideos } = useVideosStore();

    const { data: videos, isLoading, error } = useQuery(['videos', keyword], fetchVideosByKeyword);

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${keyword}`);
        setVideos(videos);
    };

    if (isLoading) return <div>loading ...</div>;

    if (error) return <div> {error}</div>;

    return (
        <header>
            <div onClick={() => navigate('/')} className={styles.logo}>
                {/* <img src='assets/logo.png' alt='logo' /> */}
                <img src='assets/logo-dark.png' alt='logo' />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    onChange={handleChangeKeyword}
                    type='text'
                    value={keyword}
                    placeholder='Search...'
                />
                <button type='submit'>
                    <BiSearch />
                </button>
            </form>
        </header>
    );
}
