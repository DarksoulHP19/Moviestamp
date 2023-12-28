import React from 'react'
import Navbar from './components/user/Navbar'
// import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/auth/Signin';
import Emailverification from './components/auth/Emailverification';
import Forgetpassword from './components/auth/Forgetpassword';
import Confirmpassword from './components/auth/Confirmpassword';

export default function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/auth/signin' element={<Signin/>} />
    <Route path='/auth/signup' element={<Signup/>} />
    <Route path='/auth/verification' element={<Emailverification/>} />
    <Route path='/auth/forget-password' element={<Forgetpassword/>} />
    <Route path='/auth/confirm-password' element={<Confirmpassword/>} />



   </Routes>

   </>
   
  );
}
