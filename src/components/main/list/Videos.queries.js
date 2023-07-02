export const fetchVideos = async () => {
    const response = await fetch('data/search.json');
    const videos = await response.json();
    console.log(videos.items);

    return videos.items;
};
