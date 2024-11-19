import React from "react"
import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/auth/SignIn";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
