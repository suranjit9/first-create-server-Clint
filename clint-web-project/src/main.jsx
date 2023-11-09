import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Component/Home/Home.jsx';

import UserList from './Component/User/UserList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path:'/serUser',
        element:<UserList/>,
        loader: ()=> fetch('http://localhost:5000/serUser')
      }
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>,
)
