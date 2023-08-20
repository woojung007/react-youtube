# Project Youtube

유투브 클론 코딩

## Demo

-   [배포 링크](https://main--relaxed-llama-55936e.netlify.app/)

https://github.com/woojung007/project-youtube/assets/99471927/bc8110b7-da8e-45de-b71b-044428ed4a57

<br/>

## 실행

```
yarn install
yarn start
```

## 개발 환경

node `^16.15.1`

yarn `^1.22.15`

## directory

```
📁 project-youtube
├─ public
│  ├─ favicon.jpeg
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ videos
│     ├─ channel.json
│     ├─ popular.json
│     ├─ related.json
│     └─ search.json
├─ src
│  ├─ App.jsx
│  ├─ api
│  │  ├─ fakeYoutubeClient.js
│  │  ├─ youtube.js
│  │  └─ youtubeClient.js
│  ├─ components
│  │  ├─ ChannelInfo.jsx
│  │  ├─ RelatedVideos.jsx
│  │  ├─ SearchHeader.jsx
│  │  └─ VideoCard.jsx
│  ├─ context
│  │  └─ YoutubeApiContext.jsx
│  ├─ index.css
│  ├─ index.jsx
│  ├─ pages
│  │  ├─ NotFound.jsx
│  │  ├─ VideoDetail.jsx
│  │  └─ Videos.jsx
│  └─ util
│     └─ date.js
└─ tailwind.config.js
```


## APIS

-   [YouTube Data API](https://developers.google.com/youtube/v3/getting-started)

    -   [video list](https://developers.google.com/youtube/v3/docs/videos/list)
    -   [search by keyword](https://developers.google.com/youtube/v3/docs/search/list#usage)
    -   [search by related videos](https://developers.google.com/youtube/v3/docs/search/list#usage)

##
