import React from "react"
import './index.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import UserProfile from "./pages/userProfile"


function App() {
  return (
    <div className='bg-[#fffcf7] min-h-screen'>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
