import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('white'); // 默认主题为白色
  const [appColor, setAppColor] = useState('#4285f4'); // 默认应用颜色为蓝色
  
  // 处理侧边栏菜单项点击
  const handleMenuItemClick = (menuItem) => {
    setActiveSection(menuItem);
  };
  
  // 处理主题变化
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  
  // 处理应用颜色变化
  const handleColorChange = (newColor) => {
    setAppColor(newColor);
  };
  
  // 当主题变化时，更新文档根元素的类
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    
    // 设置CSS变量以便在整个应用中使用
    document.documentElement.style.setProperty('--app-primary-color', appColor);
  }, [theme, appColor]);

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="app-container">
        <Sidebar 
          onMenuItemClick={handleMenuItemClick} 
          onThemeChange={handleThemeChange}
          onColorChange={handleColorChange}
          currentTheme={theme}
          currentColor={appColor}
        />
        <MainContent 
          activeSection={activeSection} 
          theme={theme} 
        />
      </div>
    </div>
  );
}

export default App;
