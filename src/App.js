import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // 处理侧边栏菜单项点击
  const handleMenuItemClick = (menuItem) => {
    setActiveSection(menuItem);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
