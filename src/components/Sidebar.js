import React from 'react';
import './Sidebar.css';
import { FaHome, FaShieldAlt, FaThermometerHalf, FaLightbulb, FaHeadset, FaCog } from 'react-icons/fa';
import UserAvatar from './UserAvatar';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="new-button">
          <span className="plus-icon">+</span>
          <span>NEW</span>
        </div>
        <div className="home-title">
          <h2>Martine's Home</h2>
          <span className="edit-icon">✏️</span>
        </div>
        // 在 Sidebar 组件中的 users-container 部分
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
          <span className="percentage">80%</span>
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
      
      <div className="device-section">
        <div className="device-header">
          <span>Device</span>
        </div>
        <div className="device-icons">
          <div className="device-icon">🌱</div>
          <div className="device-icon">📱</div>
          <div className="device-icon">💻</div>
          <div className="device-icon active">🔊</div>
          <div className="device-icon">📺</div>
          <div className="device-icon add">+</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-controls">
            <button className="control-button">⏮</button>
            <button className="control-button play">▶</button>
            <button className="control-button">⏭</button>
          </div>
          <div className="speaker-info">
            <span className="speaker-icon">🔊</span>
            <span className="speaker-name">Speaker</span>
          </div>
        </div>
      </div>
      
      <div className="app-settings">
        <div className="settings-header">
          <span>App Settings</span>
          <span className="toggle-icon">⚙️</span>
        </div>
        <div className="theme-settings">
          <div className="setting-label">Color Theme</div>
          <div className="theme-options">
            <button className="theme-option active">White</button>
            <button className="theme-option">Dark</button>
          </div>
        </div>
        <div className="color-settings">
          <div className="setting-label">App color</div>
          <div className="color-options">
            <button className="color-option" style={{ backgroundColor: 'red' }}></button>
            <button className="color-option" style={{ backgroundColor: 'blue' }}></button>
            <button className="color-option" style={{ backgroundColor: 'green' }}></button>
            <button className="color-picker">
              <span>🎨</span>
              <span>Open color</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;