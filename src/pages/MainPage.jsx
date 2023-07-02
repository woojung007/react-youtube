import Videos from 'components/main/list/Videos';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pages.module.css';
import SearchHeader from 'components/layout/header/SearchHeader';

export default function MainPage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${keyword}`);

        // 새로 검색하고 필터한다
    };

    return (
        <div className={styles.page}>
            {/* <SearchHeader handleChangeKeyword={handleChangeKeyword} handleSubmit={handleSubmit} keyword={keyword} /> */}
            <Videos />
        </div>
    );
}
