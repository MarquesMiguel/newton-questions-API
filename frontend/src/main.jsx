import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Question1Page from './pages/question1.jsx'
import Question2Page from './pages/question2.jsx'
import YouLostPage from './pages/youLostPage.jsx'
import Question3Page from './pages/question3.jsx'
import Question4Page from './pages/question4.jsx'
import Question5Page from './pages/question5.jsx'
import Question6Page from './pages/question6.jsx'
import LastPage from './pages/LastPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/question1',
    element: <Question1Page/>
  },
  {
    path: '/question2',
    element: <Question2Page/>
  },
  {
    path: '/gameover',
    element: <YouLostPage/>
  },
  {
    path: '/question3',
    element: <Question3Page/>
  },
  {
    path: '/question4',
    element: <Question4Page/>
  },
  {
    path: '/question5',
    element: <Question5Page/>
  },
  {
    path: '/question6',
    element: <Question6Page/>
  },
  {
    path: '/congratulations',
    element: <LastPage/>
  },
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
