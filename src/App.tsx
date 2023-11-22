import React from 'react';
import './App.css';

import LoginPage from './component/LoginPage'
import Dashboard from './component/Dashboard';
import Register from './component/RegisterPage'
import Annnouncement from './component/AnnouncementPage'
import Quiz from './component/QuizPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={< Register />} />
        <Route path="/announcement" element={< Annnouncement />} />
        <Route path="/quiz" element={< Quiz />} />
       
      </Routes>
       </BrowserRouter>

    </div>
  ) 
}

export default App;
