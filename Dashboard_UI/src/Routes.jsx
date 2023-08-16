import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login';

const Routess = () => {
  return (
    <Routes>
    <Route index path="/login" element={<LoginForm/>}/>
  </Routes>
  )
}

export default Routess