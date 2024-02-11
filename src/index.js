import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Protected from './components/Protected';
import Home from './Pages/Home';
import Forgot from './Pages/Forgot';


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App />}>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/forgot' element={<Forgot />} />

    <Route path='/' element={<Protected />}>
      <Route path='/' index element={<Home />} />
    </Route>

  </Route>

))





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


