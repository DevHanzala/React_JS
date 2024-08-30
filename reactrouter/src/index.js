import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/HomeComponent.jsx';
import About from './Components/About.jsx';
import Contact from './Components/ContactUs.jsx';
import User from './Components/User.jsx';
import GitHub from './Components/GitHub.jsx';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children: [
    {
    path:"",
    element:<Home/>
  },
{
  path:"about",
  element:<About/>
},
{
  path:"contact",
  element:<Contact/>
},
{
  path:"user/:userid",
  element:<User/>
},
{
  // loader={}
  path:"github",
  element:<GitHub/>
}
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

