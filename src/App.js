
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/error-page/ErrorPage';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import RootPage from './components/root-page/RootPage';


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
