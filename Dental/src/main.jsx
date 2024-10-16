import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Services from './pages/Services/services.jsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx'
import Page from './pages/Page/Page.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
     <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<ContactUs />} />
      <Route path='services' element={<Services/>}/>
      <Route path='page' element ={<Page/>}/>
       <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='404' element={<PageNotFound />} />
      <Route path='*' element={<Navigate to="/404" replace />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

import Home from './Component/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,

)
