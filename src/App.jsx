import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailPage from 'pages/DetailPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:keyword' element={<MainPage />} />
            <Route path='/videos/:videoId' element={<DetailPage />} />
        </Routes>
    );
}

export default App;
