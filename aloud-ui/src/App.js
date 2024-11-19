import React from "react"
import './index.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";


function App() {
  return (
    <div className='bg-[#fffcf7] min-h-screen'>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
