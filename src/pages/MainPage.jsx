import SearchHeader from 'components/main/header/SearchHeader';
import VideoList from 'components/main/list/VideoList';
import React from 'react';

export default function MainPage() {
    return (
        <div>
            <SearchHeader />
            <VideoList />
        </div>
    );
}
