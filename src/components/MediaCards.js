import React, { useState } from 'react';
import './MediaCards.css';

const MediaCards = () => {
  // 状态管理
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTheme, setActiveTheme] = useState('white');
  const [activeColor, setActiveColor] = useState('yellow');
  
  // 处理播放/暂停切换
  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };
  
  // 处理主题切换
  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };
  
  // 处理颜色切换
  const handleColorChange = (color) => {
    setActiveColor(color);
  };
  
  return (
    <div className="media-cards">
      <div className="card-row">
        {/* TiDot 音乐播放器卡片 */}
        <div className="tidot-card">
          <div className="tidot-header">
            <h3>TiDot</h3>
          </div>
          <div className="player-controls">
            <button className="control-button prev">
              <span>⏮</span>
            </button>
            <button 
              className={`control-button play ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayToggle}
            >
              <span>{isPlaying ? '⏸' : '▶'}</span>
            </button>
            <button className="control-button next">
              <span>⏭</span>
            </button>
          </div>
          <div className="player-info">
            <div className="volume-control">
              <span className="volume-icon">🔊</span>
              <span>Speaker</span>
            </div>
            <div className="playing-status">
              <span>PLAYING</span>
            </div>
          </div>
        </div>
        
        {/* App Settings 卡片 */}
        <div className="settings-card">
          <div className="settings-header">
            <h3>App Settings</h3>
            <span className="view-all">View all &gt;</span>
          </div>
          
          <div className="theme-section">
            <h4>Color theme</h4>
            <div className="theme-options">
              <button 
                className={`theme-button ${activeTheme === 'white' ? 'active' : ''}`}
                onClick={() => handleThemeChange('white')}
              >
                White
              </button>
              <button 
                className={`theme-button ${activeTheme === 'dark' ? 'active' : ''}`}
                onClick={() => handleThemeChange('dark')}
              >
                Dark
              </button>
            </div>
          </div>
          
          <div className="color-section">
            <h4>App color</h4>
            <div className="color-options">
              <button 
                className={`color-button yellow ${activeColor === 'yellow' ? 'active' : ''}`}
                onClick={() => handleColorChange('yellow')}
              ></button>
              <button 
                className={`color-button pink ${activeColor === 'pink' ? 'active' : ''}`}
                onClick={() => handleColorChange('pink')}
              ></button>
              <button 
                className={`color-button blue ${activeColor === 'blue' ? 'active' : ''}`}
                onClick={() => handleColorChange('blue')}
              ></button>
              <button className="open-editor-button">
                <span className="color-palette">🎨</span>
                <span>Open editor</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCards; 