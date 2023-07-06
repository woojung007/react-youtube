import React, { useEffect, useState } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    };

    // 검색창과 인풋값 동기화
    useEffect(() => {
        setText(keyword || '');
    }, [keyword]);

    return (
        <header>
            {/* 
              navigate 와 div 대신에 Link 태그 사용해도 된다. 
              <Link to='/'>
            */}
            <Link to='/'>
                <BsYoutube />
                <h1>Youtube</h1>
            </Link>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
                <button>
                    <BsSearch />
                </button>
            </form>
        </header>
    );
}
