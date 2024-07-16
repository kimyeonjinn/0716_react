import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import { dummy_data } from './data/dummy_data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'latest', element: <HomePage /> },
      {
        path: 'detail/:postID',
        element: <PostDetailPage />, // PostDetailPage 컴포넌트를 직접 렌더링
      }
    ]
  }
]);

export default router;
