import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailPage from 'pages/DetailPage';
import Layout from 'components/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
                refetchOnWindowFocus: false,
                retry: 2,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/:keyword' element={<MainPage />} />
                    <Route path='/videos/:videoId' element={<DetailPage />} />
                </Routes>
            </Layout>

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
