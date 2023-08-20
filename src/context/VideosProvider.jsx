import { createContext, useContext, useState } from 'react';

import React from 'react';

export const VideosContext = createContext();

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState();

    return (
        <VideosContext.Provider
            value={{
                videos,
                setVideos,
            }}
        >
            {children}
        </VideosContext.Provider>
    );
}

export const useVideosStore = () => useContext(VideosContext);
