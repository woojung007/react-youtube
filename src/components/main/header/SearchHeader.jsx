import React, { useState } from 'react';
import styles from './SearchHeader.module.css';
import { BiSearch } from 'react-icons/bi';

export default function SearchHeader() {
    const [keyword, setKeyword] = useState('');

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 새로 검색하고 필터한다
    };

    return (
        <header>
            <div className={styles.logo}>
                <img src='assets/logo.png' alt='logo' />
            </div>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeKeyword} type='text' value={keyword} />
                <button type='button'>
                    <BiSearch />
                </button>
            </form>
        </header>
    );
}
