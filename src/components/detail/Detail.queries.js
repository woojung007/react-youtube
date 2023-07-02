export const fetchVideo = async () => {
    const response = await fetch('/data/search-id.json');
    const video = await response.json();
    console.log('video', video.items[0]);

    return video.items[0];
};

export const fetchRelatedVideos = async () => {
    const response = await fetch('/data/search-related-videos.json');
    const videos = await response.json();

    return videos.items;
};
