import React from 'react';
import SearchHeader from './header/SearchHeader';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <SearchHeader />
            <div>{children}</div>
        </div>
    );
}
