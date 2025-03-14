import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaShieldAlt, FaThermometerHalf, FaLightbulb, FaHeadset, FaCog } from 'react-icons/fa';
import UserAvatar from './UserAvatar';

const Sidebar = () => {
  const [homeName, setHomeName] = useState("Martine's Home");
  const [isEditing, setIsEditing] = useState(false);
  
  // 处理编辑图标点击
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  // 处理名称输入变化
  const handleNameChange = (e) => {
    setHomeName(e.target.value);
  };
  
  // 处理名称编辑完成
  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditing(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="home-title">
          {isEditing ? (
            <input
              type="text"
              value={homeName}
              onChange={handleNameChange}
              onKeyDown={handleNameSubmit}
              onBlur={handleNameSubmit}
              className="home-title-input"
              autoFocus
            />
          ) : (
            <h2>{homeName}</h2>
          )}
          <span className="edit-icon" onClick={handleEditClick}>✏️</span>
        </div>
        <div className="users-container">
          <UserAvatar src="/avatars/image.png" />
          <UserAvatar src="/avatars/image1.png" />
          <UserAvatar src="/avatars/image2.png" />
          <UserAvatar src="/avatars/image3.png" />
          <span className="more-users">+2</span>
        </div>
        <div className="access-control">
          <span>Limited access</span>
          <span className="dropdown-icon">▼</span>
          <button className="invite-button">+ Invite</button>
        </div>
      </div>
      
      {/* 侧边栏菜单 */}
      <div className="sidebar-menu">
        <div className="menu-item active">
          <FaHome className="menu-icon" />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <FaShieldAlt className="menu-icon" />
          <span>Security</span>
          <span className="pro-badge">PRO+</span>
        </div>
        <div className="menu-item">
          <FaThermometerHalf className="menu-icon" />
          <span>Temperature</span>
        </div>
        <div className="menu-item">
          <FaLightbulb className="menu-icon" />
          <span>Lighting</span>
          <span className="percentage">60%</span>
        </div>
        <div className="menu-item">
          <FaHeadset className="menu-icon" />
          <span>Support</span>
        </div>
        <div className="menu-item">
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </div>
      </div>
      
      {/* 设备部分 */}
      <div className="device-section">
        <div className="device-label">Device</div>
        <div className="device-icons">
          <div className="device-icon">🌱</div>
          <div className="device-icon">📱</div>
          <div className="device-icon">💻</div>
          <div className="device-icon active">🔊</div>
          <div className="device-icon">📺</div>
          <div className="device-icon add">+</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-title">TiDot</div>
          <div className="speaker-controls">
            <button className="control-button">⏮</button>
            <button className="control-button play">▶</button>
            <button className="control-button">⏭</button>
          </div>
          <div className="speaker-info">
            <span className="speaker-icon">🔊</span>
            <span className="speaker-name">Speaker</span>
            <span className="speaker-status">PLAYING</span>
          </div>
        </div>
      </div>
      
      {/* 应用设置 */}
      <div className="app-settings">
        <div className="settings-header">
          <span>App Settings</span>
          <span className="view-all">View all &gt;</span>
        </div>
        <div className="theme-settings">
          <div className="setting-label">Color theme</div>
          <div className="theme-options">
            <button className="theme-option active">White</button>
            <button className="theme-option">Dark</button>
          </div>
        </div>
        <div className="color-settings">
          <div className="setting-label">App color</div>
          <div className="color-options">
            <button className="color-option" style={{ backgroundColor: '#FFD700' }}></button>
            <button className="color-option" style={{ backgroundColor: '#FF69B4' }}></button>
            <button className="color-option" style={{ backgroundColor: '#4169E1' }}></button>
            <button className="color-picker">
              <span className="color-picker-icon">🎨</span>
              <span>Open editor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;