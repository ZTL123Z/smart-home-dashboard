import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <div className="app-title">Domotica</div>
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
