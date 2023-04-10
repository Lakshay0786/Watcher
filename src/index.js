import React from 'react';
import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { LoaderLarge } from './components/Loader';

const VideoDetails = lazy(() => import('./components/VideoDetails'))
const ChannelDetails = lazy(() => import('./components/ChannelDetail'))
const SearchFeed = lazy(() => import('./components/SearchFeed'))
const Feed = lazy(() => import('./components/Feed'))


const root = ReactDOM.createRoot(document.getElementById('root'));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:
          <Suspense fallback={LoaderLarge} >
            <Feed />
          </Suspense >
      },
      {
        path: "/video/:id",
        element:
          <Suspense fallback={LoaderLarge}>
            <VideoDetails />,
          </Suspense>

      },
      {
        path: "/channel/:id",
        element:
          <Suspense fallback={LoaderLarge}>
            <ChannelDetails />,
          </Suspense>
      },
      {
        path: "/search/:id",
        element:
          <Suspense fallback={LoaderLarge}>
            <SearchFeed />,
          </Suspense>
      },
    ]
  }

])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
