import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import Recipes from './components/home/cooking/Recipes.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import ErrorPage from './components/shared/ErrorPage.jsx'
import Privet from './hooks/Privet.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {path : 'chef/:id', element : <Privet><Recipes /></Privet>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
