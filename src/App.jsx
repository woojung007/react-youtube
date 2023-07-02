import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import VideoDetailPage from 'pages/VideoDetailPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:videoId' element={<VideoDetailPage />} />
        </Routes>
    );
}

export default App;