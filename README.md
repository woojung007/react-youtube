# Project Youtube

유투브 클론 코딩

## Demo

-   [배포 링크](https://main--relaxed-llama-55936e.netlify.app/)

https://github.com/woojung007/project-youtube/assets/99471927/bc8110b7-da8e-45de-b71b-044428ed4a57

<br/>

## 기능
- 라우팅
- 목록
   - 키워드 검색
      - 검색 결과 필터링
   - 썸네일
      - 이미지, 타이틀, 채널 정보
      - 업로드 날짜 - 몇일 전인지 변환
- 상세페이지
   - 영상 재생
   - 타이틀, 채널, 영상 정보
   - 채널 이미지 연결
   - 연관 비디오 목록
- 추가 기능
   - 뒤로가기 / 앞으로 가기
   - 검색창 검색어
   - 반응형
- API 연결
- 테스트 코드
   - 컴포넌트 테스트 (React Testing Library)
   - 스냅샷 테스트 (Jest)
   - E2E 테스트 (Cypress)

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
