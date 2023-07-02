import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './SearchHeader.module.css';

export default function SearchHeader({ handleSubmit, handleChangeKeyword, keyword }) {
    return (
        <header>
            <div className={styles.logo}>
                {/* <img src='assets/logo.png' alt='logo' /> */}
                <img src='assets/logo-dark.png' alt='logo' />
            </div>

            <form onSubmit={handleSubmit}>
                <input className={styles.input} onChange={handleChangeKeyword} type='text' value={keyword} />
                <button type='button'>
                    <BiSearch />
                </button>
            </form>
        </header>
    );
}
