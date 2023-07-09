export const fetchVideosByKeyword = async () => {
    const response = await fetch('/data/search-keyword.json');
    const videos = await response.json();

    return videos.items;
};
