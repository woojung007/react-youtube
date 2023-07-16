import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchHeader from 'components/SearchHeader';
import { YoutubeApiProvider } from 'context/YoutubeApiContext';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        refetchOnWindow: false,
        staleTime: 1000 * 60 * 5,
    },
});

function App() {
    return (
        <>
            <SearchHeader />
            <YoutubeApiProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </YoutubeApiProvider>
        </>
    );
}

export default App;
