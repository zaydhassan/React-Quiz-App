import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Root from './routes/Root'
import Category from './routes/Category'
import Guide from './routes/Guide'
import Quiz from './routes/Quiz'
const router = createHashRouter([
  {
    path:'/',
    element: <Root />,
  },
  {
    path:'/category',
    element: <Category />,
  },
  {
    path:'/guide',
    element: <Guide />,
  },
  {
    path:'/quiz',
    element: <Quiz />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode> 
);
