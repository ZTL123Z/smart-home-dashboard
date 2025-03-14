import React, { useState } from 'react';
import './MainContent.css';
import RoomTabs from './RoomTabs';
import DeviceCards from './DeviceCards';
import { FaChartLine, FaLock, FaThermometerHalf, FaLightbulb, FaHeadset, FaCog, FaInfoCircle, FaExclamationTriangle, FaRegLightbulb, FaRegSun, FaRegMoon, FaShieldAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const MainContent = ({ activeSection = 'home', theme = 'white' }) => {
  // 状态管理
  const [isEditing, setIsEditing] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // 温度控制状态
  const [temperature, setTemperature] = useState(22);
  const [temperatureMode, setTemperatureMode] = useState('auto');
  
  // 灯光控制状态
  const [lightBrightness, setLightBrightness] = useState(60);
  const [lightMode, setLightMode] = useState('day');
  
  // 安全系统状态
  const [securityEnabled, setSecurityEnabled] = useState(true);
  const [securityLevel, setSecurityLevel] = useState('high');
  const [securityAlerts, setSecurityAlerts] = useState([
    { id: 1, message: "Front door opened", time: "Today, 14:32", level: "info" },
    { id: 2, message: "Motion detected in backyard", time: "Today, 12:15", level: "warning" },
    { id: 3, message: "Window sensor triggered", time: "Yesterday, 23:45", level: "alert" }
  ]);
  
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
  
  // 处理温度调整
  const handleTemperatureChange = (value) => {
    setTemperature(Math.max(16, Math.min(30, value)));
  };
  
  // 处理温度模式切换
  const handleTemperatureModeChange = (mode) => {
    setTemperatureMode(mode);
  };
  
  // 处理灯光亮度调整
  const handleBrightnessChange = (value) => {
    setLightBrightness(Math.max(0, Math.min(100, value)));
  };
  
  // 处理灯光模式切换
  const handleLightModeChange = (mode) => {
    setLightMode(mode);
  };
  
  // 处理安全系统开关
  const handleSecurityToggle = () => {
    setSecurityEnabled(!securityEnabled);
  };
  
  // 处理安全级别切换
  const handleSecurityLevelChange = (level) => {
    setSecurityLevel(level);
  };
  
  // 渲染主内容区域
  const renderMainContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <RoomTabs />
            <DeviceCards />
          </>
        );
      
      case 'security':
        return (
          <div className="security-content">
            <div className="section-header">
              <h2>Security</h2>
              <div className="security-toggle">
                <span>{securityEnabled ? 'Enabled' : 'Disabled'}</span>
                <div 
                  className={`toggle-switch ${securityEnabled ? 'active' : ''}`}
                  onClick={handleSecurityToggle}
                >
                  <div className="toggle-button"></div>
                </div>
              </div>
            </div>
            
            <div className="security-dashboard">
              <div className="security-stats">
                <div className="stat-card">
                  <FaShieldAlt className="stat-icon" />
                  <div className="stat-info">
                    <h3>System Status</h3>
                    <p className={securityEnabled ? 'status-active' : 'status-inactive'}>
                      {securityEnabled ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
                <div className="stat-card">
                  <FaLock className="stat-icon" />
                  <div className="stat-info">
                    <h3>Doors</h3>
                    <p className="status-active">All Locked</p>
                  </div>
                </div>
                <div className="stat-card">
                  <FaInfoCircle className="stat-icon" />
                  <div className="stat-info">
                    <h3>Alerts</h3>
                    <p>{securityAlerts.length} new alerts</p>
                  </div>
                </div>
              </div>
              
              <div className="security-level">
                <h3>Security Level</h3>
                <div className="level-buttons">
                  <button 
                    className={`level-button ${securityLevel === 'low' ? 'active' : ''}`}
                    onClick={() => handleSecurityLevelChange('low')}
                  >
                    Low
                  </button>
                  <button 
                    className={`level-button ${securityLevel === 'medium' ? 'active' : ''}`}
                    onClick={() => handleSecurityLevelChange('medium')}
                  >
                    Medium
                  </button>
                  <button 
                    className={`level-button ${securityLevel === 'high' ? 'active' : ''}`}
                    onClick={() => handleSecurityLevelChange('high')}
                  >
                    High
                  </button>
                </div>
              </div>
              
              <div className="security-cameras">
                <h3>Cameras</h3>
                <div className="camera-grid">
                  <div className="camera-feed">
                    <div className="camera-placeholder">Front Door</div>
                  </div>
                  <div className="camera-feed">
                    <div className="camera-placeholder">Backyard</div>
                  </div>
                  <div className="camera-feed">
                    <div className="camera-placeholder">Garage</div>
                  </div>
                  <div className="camera-feed">
                    <div className="camera-placeholder">Living Room</div>
                  </div>
                </div>
              </div>
              
              <div className="security-alerts">
                <h3>Recent Alerts</h3>
                <div className="alerts-list">
                  {securityAlerts.map(alert => (
                    <div key={alert.id} className={`alert-item ${alert.level}`}>
                      <div className="alert-icon">
                        {alert.level === 'info' && <FaInfoCircle />}
                        {alert.level === 'warning' && <FaExclamationTriangle />}
                        {alert.level === 'alert' && <FaExclamationTriangle />}
                      </div>
                      <div className="alert-content">
                        <p className="alert-message">{alert.message}</p>
                        <p className="alert-time">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="upgrade-banner">
                <div className="upgrade-content">
                  <h3>Upgrade to PRO+</h3>
                  <p>Get advanced security features, 24/7 monitoring and instant alerts</p>
                </div>
                <button className="upgrade-button">Upgrade</button>
              </div>
            </div>
          </div>
        );
      
      case 'temperature':
        return (
          <div className="temperature-content">
            <div className="section-header">
              <h2>Temperature Control</h2>
            </div>
            
            <div className="temperature-dashboard">
              <div className="temperature-display">
                <div className="temp-value">{temperature}°C</div>
                <div className="temp-controls">
                  <button 
                    className="temp-button decrease" 
                    onClick={() => handleTemperatureChange(temperature - 1)}
                  >
                    -
                  </button>
                  <div className="temp-slider">
                    <input 
                      type="range" 
                      min="16" 
                      max="30" 
                      value={temperature} 
                      onChange={(e) => handleTemperatureChange(parseInt(e.target.value))}
                      className="slider"
                    />
                  </div>
                  <button 
                    className="temp-button increase" 
                    onClick={() => handleTemperatureChange(temperature + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="mode-selection">
                <h3>Mode</h3>
                <div className="mode-buttons">
                  <button 
                    className={`mode-button ${temperatureMode === 'cool' ? 'active' : ''}`}
                    onClick={() => handleTemperatureModeChange('cool')}
                  >
                    Cool
                  </button>
                  <button 
                    className={`mode-button ${temperatureMode === 'heat' ? 'active' : ''}`}
                    onClick={() => handleTemperatureModeChange('heat')}
                  >
                    Heat
                  </button>
                  <button 
                    className={`mode-button ${temperatureMode === 'auto' ? 'active' : ''}`}
                    onClick={() => handleTemperatureModeChange('auto')}
                  >
                    Auto
                  </button>
                  <button 
                    className={`mode-button ${temperatureMode === 'fan' ? 'active' : ''}`}
                    onClick={() => handleTemperatureModeChange('fan')}
                  >
                    Fan
                  </button>
                </div>
              </div>
              
              <div className="temperature-stats">
                <div className="stat-card">
                  <FaThermometerHalf className="stat-icon" />
                  <div className="stat-info">
                    <h3>Current</h3>
                    <p>22.5°C</p>
                    <div className="stat-progress">
                      <div className="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaChartLine className="stat-icon" />
                  <div className="stat-info">
                    <h3>Energy Usage</h3>
                    <p>1.2 kWh</p>
                    <div className="stat-progress">
                      <div className="progress-bar" style={{ width: '40%' }}></div>
                    </div>
                    <p className="stat-comparison">15% less than yesterday</p>
                  </div>
                </div>
              </div>
              
              <div className="room-temperatures">
                <h3>Room Temperatures</h3>
                <div className="room-list">
                  <div className="room-item">
                    <span className="room-name">Living Room</span>
                    <span className="room-temp">22.5°C</span>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Kitchen</span>
                    <span className="room-temp">23.1°C</span>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Bedroom</span>
                    <span className="room-temp">21.8°C</span>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Bathroom</span>
                    <span className="room-temp">24.2°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'lighting':
        return (
          <div className="lighting-content">
            <div className="section-header">
              <h2>Lighting Control</h2>
            </div>
            
            <div className="lighting-dashboard">
              <div className="brightness-control">
                <h3>Brightness: {lightBrightness}%</h3>
                <div className="brightness-slider">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={lightBrightness} 
                    onChange={(e) => handleBrightnessChange(parseInt(e.target.value))}
                    className="slider"
                  />
                </div>
              </div>
              
              <div className="light-modes">
                <h3>Mode</h3>
                <div className="mode-buttons">
                  <button 
                    className={`mode-button ${lightMode === 'day' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('day')}
                  >
                    <FaRegSun />
                    <span>Day</span>
                  </button>
                  <button 
                    className={`mode-button ${lightMode === 'evening' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('evening')}
                  >
                    <FaRegLightbulb />
                    <span>Evening</span>
                  </button>
                  <button 
                    className={`mode-button ${lightMode === 'night' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('night')}
                  >
                    <FaRegMoon />
                    <span>Night</span>
                  </button>
                </div>
              </div>
              
              <div className="lighting-stats">
                <div className="stat-card">
                  <FaLightbulb className="stat-icon" />
                  <div className="stat-info">
                    <h3>Active Lights</h3>
                    <p>8 of 12</p>
                    <div className="stat-progress">
                      <div className="progress-bar" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaChartLine className="stat-icon" />
                  <div className="stat-info">
                    <h3>Energy Usage</h3>
                    <p>0.8 kWh</p>
                    <div className="stat-progress">
                      <div className="progress-bar" style={{ width: '30%' }}></div>
                    </div>
                    <p className="stat-comparison">10% less than yesterday</p>
                  </div>
                </div>
              </div>
              
              <div className="room-lights">
                <h3>Room Lights</h3>
                <div className="room-list">
                  <div className="room-item">
                    <span className="room-name">Living Room</span>
                    <div className="light-toggle">
                      <div className="toggle-switch active">
                        <div className="toggle-button"></div>
                      </div>
                    </div>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Kitchen</span>
                    <div className="light-toggle">
                      <div className="toggle-switch active">
                        <div className="toggle-button"></div>
                      </div>
                    </div>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Bedroom</span>
                    <div className="light-toggle">
                      <div className="toggle-switch">
                        <div className="toggle-button"></div>
                      </div>
                    </div>
                  </div>
                  <div className="room-item">
                    <span className="room-name">Bathroom</span>
                    <div className="light-toggle">
                      <div className="toggle-switch">
                        <div className="toggle-button"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'support':
        return (
          <div className="support-content">
            <div className="section-header">
              <h2>Support</h2>
            </div>
            
            <div className="support-dashboard centered-support">
              <div className="support-center-card">
                <FaInfoCircle className="support-icon" />
                <h3>Help Center</h3>
                <p>Browse our knowledge base</p>
                <a 
                  href="https://www.baidu.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="support-button"
                >
                  View Articles
                </a>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="settings-content">
            <div className="section-header">
              <h2>Settings</h2>
            </div>
            
            <div className="settings-dashboard">
              <div className="settings-section">
                <h3>Account Settings</h3>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Profile</span>
                    <span className="setting-description">Manage your personal information</span>
                  </div>
                  <button className="setting-button">Edit</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Notifications</span>
                    <span className="setting-description">Configure notification preferences</span>
                  </div>
                  <button className="setting-button">Configure</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Privacy</span>
                    <span className="setting-description">Manage privacy settings</span>
                  </div>
                  <button className="setting-button">Manage</button>
                </div>
              </div>
              
              <div className="settings-section">
                <h3>System Settings</h3>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Language</span>
                    <span className="setting-description">English (US)</span>
                  </div>
                  <button className="setting-button">Change</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Theme</span>
                    <span className="setting-description">Light</span>
                  </div>
                  <div className="theme-toggle">
                    <div className="toggle-switch active">
                      <div className="toggle-button"></div>
                    </div>
                  </div>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Software Update</span>
                    <span className="setting-description">Version 2.4.1 (Latest)</span>
                  </div>
                  <button className="setting-button">Check</button>
                </div>
              </div>
              
              <div className="settings-section">
                <h3>Device Settings</h3>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Device Management</span>
                    <span className="setting-description">Manage connected devices</span>
                  </div>
                  <button className="setting-button">Manage</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Automation</span>
                    <span className="setting-description">Configure device automation</span>
                  </div>
                  <button className="setting-button">Configure</button>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-name">Backup</span>
                    <span className="setting-description">Backup device settings</span>
                  </div>
                  <button className="setting-button">Backup</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <>
            <RoomTabs />
            <DeviceCards />
          </>
        );
    }
  };

  return (
    <div className={`main-content ${theme === 'dark' ? 'dark-theme' : ''}`}>
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
      
      {renderMainContent()}
    </div>
  );
};

export default MainContent;