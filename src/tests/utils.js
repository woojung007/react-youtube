import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiContext } from 'context/YoutubeApiContext';
import { MemoryRouter, Routes } from 'react-router-dom';

export function withRouter(routes, initialEntry = '/') {
    return (
        <MemoryRouter initialEntries={[initialEntry]}>
            <Routes>{routes}</Routes>
        </MemoryRouter>
    );
}

export function withAllContexts(children, youtube) {
    const testClient = createTestQueryClient();
    return (
        <YoutubeApiContext.Provider value={{ youtube }}>
            <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
        </YoutubeApiContext.Provider>
    );
}

/**
 * test용 queryClient 잘 만드는 방법
 * https://tkdodo.eu/blog/testing-react-query
 */
function createTestQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
        logger: {
            log: console.log,
            warn: console.warn,
            error: () => {},
        },
    });
}
