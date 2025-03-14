import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaShieldAlt, FaThermometerHalf, FaLightbulb, FaHeadset, FaCog, FaChartLine, FaLock, FaInfoCircle, FaExclamationTriangle, FaRegLightbulb, FaRegSun, FaRegMoon } from 'react-icons/fa';
import UserAvatar from './UserAvatar';
import ColorPicker from './ColorPicker';
import SettingsDetail from './SettingsDetail';

const Sidebar = ({ onMenuItemClick, onThemeChange, onColorChange, currentTheme, currentColor }) => {
  const [homeName, setHomeName] = useState("Martine's Home");
  const [isEditing, setIsEditing] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [accessLevel, setAccessLevel] = useState("Limited access");
  const [showAccessDropdown, setShowAccessDropdown] = useState(false);
  const [activeDevice, setActiveDevice] = useState('speaker'); // 默认选中扬声器设备
  const [isPlaying, setIsPlaying] = useState(true); // 播放状态
  const [showColorPicker, setShowColorPicker] = useState(false); // 颜色选择器显示状态
  const [showSettingsDetail, setShowSettingsDetail] = useState(false); // 设置详情显示状态
  
  // 预定义的颜色选项
  const colorOptions = [
    { id: 'yellow', color: '#FFD700' },
    { id: 'pink', color: '#FF69B4' },
    { id: 'blue', color: '#4169E1' }
  ];
  
  // 设备数据
  const devices = [
    { id: 'plant', icon: '🌱', name: 'Smart Plant', color: '#4CAF50' },
    { id: 'phone', icon: '📱', name: 'Smartphone', color: '#2196F3' },
    { id: 'laptop', icon: '💻', name: 'Laptop', color: '#03A9F4' },
    { id: 'speaker', icon: '🔊', name: 'Speaker', color: '#FF5722' },
    { id: 'tv', icon: '📺', name: 'Smart TV', color: '#9C27B0' },
    { id: 'add', icon: '+', name: 'Add Device', color: '#E0E0E0' }
  ];
  
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
  
  // 处理访问级别切换
  const handleAccessToggle = () => {
    setShowAccessDropdown(!showAccessDropdown);
  };
  
  // 处理选择访问级别
  const handleAccessSelect = (level) => {
    setAccessLevel(level);
    setShowAccessDropdown(false);
  };
  
  // 处理菜单项点击
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // 通知父组件更新主内容区域
    if (onMenuItemClick) {
      onMenuItemClick(menuItem);
    }
  };
  
  // 处理设备点击
  const handleDeviceClick = (deviceId) => {
    if (deviceId === 'add') {
      alert('Add new device functionality would open here');
      return;
    }
    setActiveDevice(deviceId);
  };
  
  // 处理播放/暂停切换
  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };
  
  // 处理主题切换
  const handleThemeClick = (theme) => {
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };
  
  // 处理颜色选择
  const handleColorClick = (color) => {
    if (onColorChange) {
      onColorChange(color);
    }
  };
  
  // 处理颜色编辑器打开
  const handleOpenColorEditor = () => {
    setShowColorPicker(true);
  };
  
  // 处理颜色编辑器关闭
  const handleCloseColorEditor = () => {
    setShowColorPicker(false);
  };
  
  // 处理自定义颜色选择
  const handleCustomColorSelect = (color) => {
    if (onColorChange) {
      onColorChange(color);
    }
  };
  
  // 获取当前活跃设备
  const getActiveDevice = () => {
    return devices.find(device => device.id === activeDevice);
  };
  
  // 获取TiDot卡片样式
  const getTiDotCardStyle = () => {
    const device = getActiveDevice();
    
    // 根据设备类型返回不同的渐变背景
    switch (device.id) {
      case 'plant':
        return { background: 'linear-gradient(135deg, #2E7D32, #4CAF50, #8BC34A)' };
      case 'phone':
        return { background: 'linear-gradient(135deg, #1565C0, #2196F3, #64B5F6)' };
      case 'laptop':
        return { background: 'linear-gradient(135deg, #0277BD, #03A9F4, #4FC3F7)' };
      case 'speaker':
        return { background: 'linear-gradient(135deg, #BF360C, #FF5722, #FF8A65)' };
      case 'tv':
        return { background: 'linear-gradient(135deg, #6A1B9A, #9C27B0, #CE93D8)' };
      default:
        return { background: 'linear-gradient(135deg, #8B4513, #A0522D, #CD853F)' };
    }
  };
  
  // 渲染TiDot卡片内容
  const renderTiDotContent = () => {
    const device = getActiveDevice();
    
    // 根据设备类型返回不同的内容
    switch (device.id) {
      case 'plant':
        return (
          <>
            <div className="speaker-title">Plant Monitor</div>
            <div className="plant-status">
              <div className="plant-info">
                <span className="plant-icon">💧</span>
                <span>Moisture: 65%</span>
              </div>
              <div className="plant-info">
                <span className="plant-icon">☀️</span>
                <span>Light: Good</span>
              </div>
            </div>
          </>
        );
      case 'phone':
        return (
          <>
            <div className="speaker-title">Smartphone</div>
            <div className="phone-status">
              <div className="battery-info">
                <span className="battery-icon">🔋</span>
                <span>Battery: 78%</span>
              </div>
              <div className="connection-info">
                <span className="wifi-icon">📶</span>
                <span>Connected</span>
              </div>
            </div>
          </>
        );
      case 'laptop':
        return (
          <>
            <div className="speaker-title">Laptop</div>
            <div className="laptop-status">
              <div className="battery-info">
                <span className="battery-icon">🔋</span>
                <span>Battery: 45%</span>
              </div>
              <div className="status-info">
                <span className="status-icon">💻</span>
                <span>Active</span>
              </div>
            </div>
          </>
        );
      case 'speaker':
        return (
          <>
            <div className="speaker-title">TiDot</div>
            <div className="speaker-controls">
              <button className="control-button">⏮</button>
              <button 
                className="control-button play"
                onClick={handlePlayToggle}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="control-button">⏭</button>
            </div>
            <div className="speaker-info">
              <span className="speaker-icon">🔊</span>
              <span className="speaker-name">Speaker</span>
              <span className="speaker-status">{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
            </div>
          </>
        );
      case 'tv':
        return (
          <>
            <div className="speaker-title">Smart TV</div>
            <div className="tv-controls">
              <button className="control-button">📺</button>
              <button className="control-button play">⏯</button>
              <button className="control-button">🔍</button>
            </div>
            <div className="tv-info">
              <span className="tv-icon">📺</span>
              <span className="tv-name">Living Room</span>
              <span className="tv-status">ON</span>
            </div>
          </>
        );
      default:
        return (
          <>
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
          </>
        );
    }
  };
  
  // 处理打开设置详情
  const handleOpenSettingsDetail = () => {
    setShowSettingsDetail(true);
  };
  
  // 处理关闭设置详情
  const handleCloseSettingsDetail = () => {
    setShowSettingsDetail(false);
  };

  return (
    <div className={`sidebar ${currentTheme === 'dark' ? 'dark-theme' : ''}`}>
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
          <div className="access-level" onClick={handleAccessToggle}>
            <span>{accessLevel}</span>
            <span className="dropdown-icon">▼</span>
          </div>
          {showAccessDropdown && (
            <div className="access-dropdown">
              <div 
                className={`access-option ${accessLevel === "Full access" ? "active" : ""}`}
                onClick={() => handleAccessSelect("Full access")}
              >
                <span>Full access</span>
                <span className="access-info">Unlimited users</span>
              </div>
              <div 
                className={`access-option ${accessLevel === "Limited access" ? "active" : ""}`}
                onClick={() => handleAccessSelect("Limited access")}
              >
                <span>Limited access</span>
                <span className="access-info">Max 6 users</span>
              </div>
              <div 
                className={`access-option ${accessLevel === "Basic access" ? "active" : ""}`}
                onClick={() => handleAccessSelect("Basic access")}
              >
                <span>Basic access</span>
                <span className="access-info">Max 3 users</span>
              </div>
            </div>
          )}
          <button className="invite-button">+ Invite</button>
        </div>
      </div>
      
      {/* 侧边栏菜单 */}
      <div className="sidebar-menu">
        <div 
          className={`menu-item ${activeMenuItem === 'home' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('home')}
        >
          <FaHome className="menu-icon" />
          <span>Home</span>
        </div>
        <div 
          className={`menu-item ${activeMenuItem === 'security' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('security')}
        >
          <FaShieldAlt className="menu-icon" />
          <span>Security</span>
          <span className="pro-badge">PRO+</span>
        </div>
        <div 
          className={`menu-item ${activeMenuItem === 'temperature' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('temperature')}
        >
          <FaThermometerHalf className="menu-icon" />
          <span>Temperature</span>
        </div>
        <div 
          className={`menu-item ${activeMenuItem === 'lighting' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('lighting')}
        >
          <FaLightbulb className="menu-icon" />
          <span>Lighting</span>
          <span className="percentage">60%</span>
        </div>
        <div 
          className={`menu-item ${activeMenuItem === 'support' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('support')}
        >
          <FaHeadset className="menu-icon" />
          <span>Support</span>
        </div>
      </div>
      
      {/* 设备部分 */}
      <div className="device-section">
        <div className="device-label">Device</div>
        <div className="device-icons">
          {devices.map(device => (
            <div 
              key={device.id}
              className={`device-icon ${activeDevice === device.id ? 'active' : ''} ${device.id === 'add' ? 'add' : ''}`}
              onClick={() => handleDeviceClick(device.id)}
              style={activeDevice === device.id ? { backgroundColor: device.color } : {}}
            >
              {device.icon}
            </div>
          ))}
        </div>
        <div className="speaker-card" style={getTiDotCardStyle()}>
          {renderTiDotContent()}
        </div>
      </div>
      
      {/* 应用设置 */}
      <div className="app-settings">
        <div className="settings-header">
          <span>App Settings</span>
          <span className="view-all" onClick={handleOpenSettingsDetail}>View all &gt;</span>
        </div>
        <div className="theme-settings">
          <div className="setting-label">Color theme</div>
          <div className="theme-options">
            <button 
              className={`theme-option ${currentTheme === 'white' ? 'active' : ''}`}
              onClick={() => handleThemeClick('white')}
            >
              White
            </button>
            <button 
              className={`theme-option ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => handleThemeClick('dark')}
            >
              Dark
            </button>
          </div>
        </div>
        <div className="color-settings">
          <div className="setting-label">App color</div>
          <div className="color-options">
            {colorOptions.map(option => (
              <button 
                key={option.id}
                className={`color-option ${currentColor === option.color ? 'active' : ''}`}
                style={{ backgroundColor: option.color }}
                onClick={() => handleColorClick(option.color)}
              ></button>
            ))}
            <button className="color-picker" onClick={handleOpenColorEditor}>
              <span className="color-picker-icon">🎨</span>
              <span>Open editor</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* 颜色选择器 */}
      <ColorPicker 
        isOpen={showColorPicker}
        onClose={handleCloseColorEditor}
        onColorSelect={handleCustomColorSelect}
        initialColor={currentColor}
      />
      
      {/* 设置详情 */}
      <SettingsDetail 
        isOpen={showSettingsDetail}
        onClose={handleCloseSettingsDetail}
        onThemeChange={onThemeChange}
        onColorChange={onColorChange}
        currentTheme={currentTheme}
        currentColor={currentColor}
      />
    </div>
  );
};

export default Sidebar;