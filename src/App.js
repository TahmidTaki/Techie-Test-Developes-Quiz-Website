
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/error-page/ErrorPage';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RootPage from './components/root-page/RootPage';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage></RootPage>,
      children: [
        {
          path: '/',
          element: <Header></Header>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>,
    }
  ]);
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
