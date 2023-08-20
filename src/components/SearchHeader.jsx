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
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            {/* 
              navigate 와 div 대신에 Link 태그 사용해도 된다. 
              <Link to='/'>
            */}
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand' />
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>

            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input
                    className='w-7/12 p-2 outline-none bg-black text-gray-50'
                    type='text'
                    placeholder='Search...'
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                />
                <button className='bg-zinc-600 px-4'>
                    <BsSearch />
                </button>
            </form>
        </header>
    );
}
