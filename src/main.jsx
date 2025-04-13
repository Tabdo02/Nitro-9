import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Service from './Service.jsx'
import Work from './Work.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import Policy from './Policy.jsx'
import Contact from './Contact.jsx'
import WorkItem from './WorkItem.jsx'
import BlogPost from './BlogPost.jsx'

const router =createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/service",element:<Service />},
  {path:"/work",element:<Work />},
  {path:"/work/:id",element:<WorkItem />},
  {path:"/about",element:<About />},
  {path:"/blog",element:<Blog />},
  {path:"/blog/:id",element:<BlogPost />},
  {path:"/policy",element:<Policy />},
  {path:"/contact",element:<Contact />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
