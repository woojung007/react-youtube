import FakeYoutubeClient from 'api/fakeYoutubeClient';
import Youtube from 'api/youtube';
import YoutubeClient from 'api/youtubeClient';
import { createContext, useContext } from 'react';

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
    const client = new FakeYoutubeClient();
    // const client = new YoutubeClient();
    const youtube = new Youtube(client);

    return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
