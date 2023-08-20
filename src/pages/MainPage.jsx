import Videos from 'components/main/list/Videos';
import React from 'react';
import styles from './Pages.module.css';

export default function MainPage() {
    return (
        <div className={styles.main}>
            <Videos />
        </div>
    );
}
