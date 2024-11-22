import React from "react"
import './index.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import GroupCode from "./components/GroupCode";


function App() {
  return (
    <div className='bg-[#fffcf7] min-h-screen'>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/groupcode" element={<GroupCode />} />
      </Routes>
    </div>
  );
}

export default App;
