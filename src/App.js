import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">

 <Sidebar></Sidebar> <div style={{ textAlign : "center"  }}>  <Main> </Main> </div>

    </div>
  );
}

export default App;
