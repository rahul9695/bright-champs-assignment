import React from 'react'
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IntroTwo from './pages/Intro2.jsx';
import Intro3 from './pages/Intro3.jsx';
import Instructions from './pages/Instructions.jsx';
import Game from './pages/Game.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/intro2",
    element: <IntroTwo />,
  },
  {
    path: "/intro3",
    element: <Intro3 />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
