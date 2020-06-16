import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from './components/auth/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Register/>
    </div>
  );
}

export default App;
