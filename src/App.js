
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/error-page/ErrorPage';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import QuizPage from './components/QuizPage/QuizPage';
import RootPage from './components/root-page/RootPage';
import Statistcs from './components/Statistics/Statistcs';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage></RootPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <HomePage></HomePage>,
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <HomePage></HomePage>,
        },
        {

          element: <QuizPage />,
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          }
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistcs></Statistcs>
        }

      ],
      errorElement: <ErrorPage></ErrorPage>,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
