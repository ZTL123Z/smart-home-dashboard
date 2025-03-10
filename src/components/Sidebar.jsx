import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="new-button">
          <span className="plus-icon">+</span>
          New Automation
        </div>
        <div className="home-title">
          <h2>My Home</h2>
          <span className="edit-icon">✏️</span>
        </div>
        <div className="users-container">
          <span className="user-avatar">👤</span>
          <span className="user-avatar">👤</span>
          <span className="more-users">+2</span>
        </div>
        <div className="access-control">
          Full Access <span className="dropdown-icon">▼</span>
          <button className="invite-button">Invite</button>
        </div>
      </div>
      
      <div className="sidebar-menu">
        <div className="menu-item active">
          <span className="menu-icon">🏠</span>
          Home
        </div>
        <div className="menu-item">
          <span className="menu-icon">🔒</span>
          Security
          <span className="pro-badge">PRO+</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">🌡️</span>
          Temperature
        </div>
        <div className="menu-item">
          <span className="menu-icon">💡</span>
          Lighting
          <span className="percentage">60%</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">🎧</span>
          Support
        </div>
        <div className="menu-item">
          <span className="menu-icon">⚙️</span>
          Settings
        </div>
      </div>
      
      <div className="device-section">
        <div className="device-label">Connected Devices</div>
        <div className="device-icons">
          <div className="device-icon active">📱</div>
          <div className="device-icon">💻</div>
          <div className="device-icon">🔊</div>
          <div className="device-icon">📺</div>
          <div className="device-icon add">+</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;