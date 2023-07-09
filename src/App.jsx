import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SearchHeader from 'components/layout/header/SearchHeader';
import VideosProvider from 'context/VideosProvider';
import { Outlet } from 'react-router-dom';
import './App.css';

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
        <VideosProvider>
            <QueryClientProvider client={queryClient}>
                <SearchHeader />
                <Outlet />

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </VideosProvider>
    );
}

export default App;
