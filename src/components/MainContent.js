import React, { useState } from 'react';
import './MainContent.css';
import RoomTabs from './RoomTabs';
import DeviceCards from './DeviceCards';

const MainContent = () => {
  // 状态管理
  const [isEditing, setIsEditing] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // 处理编辑模式切换
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  
  // 处理电源开关切换
  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn);
  };
  
  // 处理搜索框显示切换
  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    if (!isSearching) {
      // 聚焦搜索框
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };
  
  // 处理搜索查询变化
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // 处理搜索提交
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };
  
  // 处理通知显示切换
  const handleNotificationsToggle = () => {
    setShowNotifications(!showNotifications);
  };
  
  // 处理同步按钮点击
  const handleSync = () => {
    alert('Syncing data...');
  };

  return (
    <div className="main-content">
      <div className="header">
        <div className="edit-section">
          <span 
            className={`edit-text ${isEditing ? 'active' : ''}`}
            onClick={handleEditToggle}
          >
            EDIT
          </span>
          <span className="update-time">Updated 4 min ago</span>
        </div>
        <div className="search-section">
          {isSearching ? (
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="search-input"
              />
              <button type="button" className="search-close" onClick={handleSearchToggle}>✖</button>
            </form>
          ) : (
            <>
              <div className="tablet-name">
                <span className="tablet-icon"></span>
                <span>Tablet_</span>
              </div>
              <div className="search-box" onClick={handleSearchToggle}>
                <span className="search-icon"></span>
              </div>
              <div className="voice-button" onClick={() => alert('Voice command activated')}>
                <span className="mic-icon"></span>
              </div>
            </>
          )}
        </div>
        <div className="controls-section">
          <div className="notification" onClick={handleNotificationsToggle}>
            <span className="notification-icon"></span>
            <span className="notification-badge">1</span>
            {showNotifications && (
              <div className="notifications-popup">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button onClick={handleNotificationsToggle}>✖</button>
                </div>
                <div className="notification-list">
                  <div className="notification-item">
                    <span className="notification-title">New device connected</span>
                    <span className="notification-time">2 minutes ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sync-button" onClick={handleSync}>
            <span className="sync-icon"></span>
          </div>
          <div 
            className={`power-toggle ${isPowerOn ? 'active' : ''}`}
            onClick={handlePowerToggle}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
      </div>
      
      <RoomTabs />
      
      <DeviceCards />
    </div>
  );
};

export default MainContent;