import Youtube from 'api/youtube';
import YoutubeClient from 'api/youtubeClient';
import { YoutubeApiContext } from './YoutubeApiContext';

export function YoutubeApiProvider({ children }) {
    const client = new YoutubeClient();
    const youtube = new Youtube(client);

    return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}
