import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import App from './App.jsx';
import Error from './pages/Error.jsx';
import Contact from './pages/Contact.jsx';
import Guide from './pages/Programmers-Guide.jsx';
import Umbrella from './pages/Umbrella.jsx';
import About from './pages/About.jsx';
import Social from './pages/Social-Network.jsx';
import Archive from './pages/Magazine-Archive.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Programmers-Guide',
        element: <Guide />,
      },
      {
        path: '/Umbrella',
        element: <Umbrella />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Social-Network',
        element: <Social />,
      },
      {
        path: '/Magazine-Archive',
        element: <Archive />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);