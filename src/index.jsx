import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from '../node_modules/react-router-dom/dist/index';
import App from './App';
import './index.css';
import Videos from 'components/main/list/Videos';
import DetailPage from 'pages/DetailPage';
import NotFound from 'pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Videos /> },
            { path: 'videos', element: <Videos /> },
            { path: 'videos/:keyword', element: <Videos /> },
            { path: 'videos/watch/:videoId', element: <DetailPage /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
