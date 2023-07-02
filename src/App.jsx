import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailPage from 'pages/DetailPage';
import Layout from 'components/layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:keyword' element={<MainPage />} />
                <Route path='/videos/:videoId' element={<DetailPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
