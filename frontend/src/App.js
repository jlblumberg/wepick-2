import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Login />
    </div>
  );
}

export default App;
