import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import React from 'react'
import { Home } from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './Components/Layout/CountryDetails'

const router = createBrowserRouter([
    {
      path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[ {
      path:"/",
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
      path:"country",
      element:<Country/>
    },
    {
      path:"country/:id",
      element:<CountryDetails/>
    }]
    
    },
  
  
])


const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App