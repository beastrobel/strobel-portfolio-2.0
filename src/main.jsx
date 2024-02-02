import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  //  errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);