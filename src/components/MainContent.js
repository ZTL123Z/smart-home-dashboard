import React, { useState, useEffect, useRef } from 'react';
import './MainContent.css';
import DeviceCards from './DeviceCards';
import { FaChartLine, FaLock, FaThermometerHalf, FaLightbulb, FaHeadset, FaCog, FaInfoCircle, FaExclamationTriangle, FaRegLightbulb, FaRegSun, FaRegMoon, FaShieldAlt, FaToggleOn, FaToggleOff, FaRegSnowflake, FaFire, FaMagic, FaWind, FaCouch, FaUtensils, FaBed, FaShower, FaTint, FaSnowflake, FaRandom, FaHome } from 'react-icons/fa';
import ShapeBlur from './ShapeBlur';
import Orb from './Orb';
import CircleBackground from './CircleBackground';
import RoomNav from './RoomNav';
import StatCard from './StatCard';
import EnergyModal from './EnergyModal';
import LightsModal from './LightsModal';

const TiltedCard = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

const MainContent = ({ activeSection = 'home', theme = 'white' }) => {
  // 状态管理
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // 温度控制状态
  const [temperature, setTemperature] = useState(22);
  const [temperatureMode, setTemperatureMode] = useState('auto');
  
  // 添加鼠标位置状态
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 灯光控制状态
  const [lightBrightness, setLightBrightness] = useState(60);
  const [lightMode, setLightMode] = useState('day');
  
  // 房间状态
  const [activeRoom, setActiveRoom] = useState(0);
  
  // 安全页面状态
  const [securityLevel, setSecurityLevel] = useState('away');
  const [securityFeatures, setSecurityFeatures] = useState({
    motionDetection: true,
    remoteAccess: true,
    notifications: true
  });
  
  // 模态框状态
  const [showEnergyModal, setShowEnergyModal] = useState(false);
  const [showLightsModal, setShowLightsModal] = useState(false);
  
  // 添加灯光数据状态
  const [lights, setLights] = useState([
    { id: 1, name: 'Living Room Main', isOn: true, brightness: 80, room: 'Living Room' },
    { id: 2, name: 'Living Room Corner', isOn: true, brightness: 60, room: 'Living Room' },
    { id: 3, name: 'Kitchen Ceiling', isOn: true, brightness: 100, room: 'Kitchen' },
    { id: 4, name: 'Kitchen Counter', isOn: true, brightness: 70, room: 'Kitchen' },
    { id: 5, name: 'Bedroom Main', isOn: true, brightness: 50, room: 'Bedroom' },
    { id: 6, name: 'Bedroom Reading', isOn: true, brightness: 90, room: 'Bedroom' },
    { id: 7, name: 'Bathroom', isOn: true, brightness: 100, room: 'Bathroom' },
    { id: 8, name: 'Hallway', isOn: true, brightness: 70, room: 'Hallway' },
    { id: 9, name: 'Dining Room', isOn: false, brightness: 0, room: 'Dining Room' },
    { id: 10, name: 'Office Desk', isOn: false, brightness: 0, room: 'Office' },
    { id: 11, name: 'Office Ceiling', isOn: false, brightness: 0, room: 'Office' },
    { id: 12, name: 'Guest Room', isOn: false, brightness: 0, room: 'Guest Room' }
  ]);
  
  // 添加灯光数量变化动画状态
  const [isLightCountChanging, setIsLightCountChanging] = useState(false);
  
  // 监测灯光数量变化
  useEffect(() => {
    setIsLightCountChanging(true);
    const timer = setTimeout(() => {
      setIsLightCountChanging(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [lights]);
  
  // 计算活跃灯光数量
  const activeLightsCount = lights.filter(light => light.isOn).length;
  
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
  
  // 处理房间切换
  const handleRoomChange = (roomIndex) => {
    setActiveRoom(roomIndex);
  };
  
  // 处理能源使用详情模态框
  const handleEnergyModalToggle = () => {
    setShowEnergyModal(!showEnergyModal);
  };
  
  // 处理灯光详情模态框
  const handleLightsModalToggle = () => {
    setShowLightsModal(!showLightsModal);
  };
  
  // 灯光相关函数
  const toggleLight = (id) => {
    setLights(lights.map(light => 
      light.id === id ? { ...light, isOn: !light.isOn, brightness: !light.isOn ? 70 : 0 } : light
    ));
  };

  const adjustBrightness = (id, value) => {
    setLights(lights.map(light => 
      light.id === id ? { ...light, brightness: value, isOn: value > 0 } : light
    ));
  };

  const turnOffAllLights = () => {
    setLights(lights.map(light => ({ ...light, isOn: false, brightness: 0 })));
  };

  const turnOnAllLights = () => {
    setLights(lights.map(light => ({ ...light, isOn: true, brightness: 70 })));
  };
  
  // 处理鼠标移动
  const handleMouseMove = (event) => {
    const circle = event.currentTarget;
    const rect = circle.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    circle.style.setProperty('--mouse-x', `${x}%`);
    circle.style.setProperty('--mouse-y', `${y}%`);
    setMousePosition({ x, y });
  };
  
  // 处理安全级别切换
  const handleSecurityLevelChange = (level) => {
    setSecurityLevel(level);
  };
  
  // 处理安全特性切换
  const toggleSecurityFeature = (feature) => {
    setSecurityFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };
  
  // 渲染主内容区域
  const renderMainContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <RoomNav onRoomChange={handleRoomChange} />
            <DeviceCards />
          </>
        );
      
      case 'security':
        return (
          <div className="security-content">
            <div className="section-header">
              <h2>Security</h2>
            </div>
            
            <div className="security-dashboard">
              {/* 主要安全控制 - 改为全宽卡片样式 */}
              <div className="security-controls security-main-card">
                <div className="security-main-content">
                  <div className="security-icon-container">
                    <CircleBackground size="120px" color="#e8f5e9" dashArray="5,5">
                      <Orb color="#43a047" size="80px" intensity={0.8}>
                        <FaShieldAlt className="control-icon" />
                      </Orb>
                    </CircleBackground>
                  </div>
                  <div className="security-info">
                    <h3>警报系统: <span className={isPowerOn ? "status-active" : "status-inactive"}>{isPowerOn ? "已启动" : "已停用"}</span></h3>
                    <div className="toggle-container">
                      <div 
                        className={`toggle-switch ${isPowerOn ? 'active' : ''}`}
                        onClick={() => setIsPowerOn(!isPowerOn)}
                      >
                        <div className="toggle-button">
                          <span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 安全级别选择 - 改为图片中的扁平卡片设计 */}
              <div className="security-section-title">安全级别</div>
              <div className="security-level-container">
                <button 
                  className={`security-level-button ${securityLevel === 'home' ? 'active' : ''}`} 
                  onClick={() => handleSecurityLevelChange('home')}
                >
                  <div className={`level-icon-wrapper ${securityLevel === 'home' ? 'active' : ''}`}>
                    <FaHome className="level-icon" />
                  </div>
                  <span>在家</span>
                </button>
                <button 
                  className={`security-level-button ${securityLevel === 'away' ? 'active' : ''}`}
                  onClick={() => handleSecurityLevelChange('away')}
                >
                  <div className={`level-icon-wrapper ${securityLevel === 'away' ? 'active' : ''}`}>
                    <FaLock className="level-icon" />
                  </div>
                  <span>外出</span>
                </button>
                <button 
                  className={`security-level-button ${securityLevel === 'night' ? 'active' : ''}`}
                  onClick={() => handleSecurityLevelChange('night')}
                >
                  <div className={`level-icon-wrapper ${securityLevel === 'night' ? 'active' : ''}`}>
                    <FaShieldAlt className="level-icon" />
                  </div>
                  <span>夜间</span>
                </button>
              </div>
              
              {/* 安全统计信息 - 改为图片中的卡片风格 */}
              <div className="security-stats-container">
                <div className="security-stat-card">
                  <div className="stat-icon-container status-icon">
                    <FaChartLine />
                  </div>
                  <div className="stat-content">
                    <div className="stat-title">系统状态</div>
                    <div className="stat-value">受保护</div>
                    <div className="stat-progress-bar">
                      <div className="stat-progress-fill" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="security-stat-card">
                  <div className="stat-icon-container check-icon">
                    <FaChartLine />
                  </div>
                  <div className="stat-content">
                    <div className="stat-title">最后检查</div>
                    <div className="stat-value">2分钟前</div>
                    <div className="stat-description">所有系统正常</div>
                    <div className="stat-progress-bar">
                      <div className="stat-progress-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 最近活动 */}
              <div className="security-alerts modern-card">
                <h3>最近活动</h3>
                <div className="alerts-list">
                  <div className="alert-item info">
                    <div className="alert-icon"><FaInfoCircle /></div>
                    <div className="alert-content">
                      <div className="alert-message">前门已解锁</div>
                      <div className="alert-time">今天, 10:23</div>
                    </div>
                  </div>
                  <div className="alert-item info">
                    <div className="alert-icon"><FaInfoCircle /></div>
                    <div className="alert-content">
                      <div className="alert-message">系统已设置为外出模式</div>
                      <div className="alert-time">今天, 8:15</div>
                    </div>
                  </div>
                  <div className="alert-item warning">
                    <div className="alert-icon"><FaExclamationTriangle /></div>
                    <div className="alert-content">
                      <div className="alert-message">后院检测到移动</div>
                      <div className="alert-time">昨天, 23:42</div>
                    </div>
                  </div>
                  <div className="alert-item info">
                    <div className="alert-icon"><FaInfoCircle /></div>
                    <div className="alert-content">
                      <div className="alert-message">后门已锁定</div>
                      <div className="alert-time">昨天, 22:30</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 安全设置 */}
              <div className="security-settings modern-card">
                <h3>设置</h3>
                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-name">移动检测</div>
                      <div className="setting-description">当检测到移动时发出警报</div>
                    </div>
                    <div 
                      className={`toggle-switch ${securityFeatures.motionDetection ? 'active' : ''}`}
                      onClick={() => toggleSecurityFeature('motionDetection')}
                    >
                      <div className="toggle-button">
                        <span></span><span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-name">远程访问</div>
                      <div className="setting-description">允许远程系统访问</div>
                    </div>
                    <div 
                      className={`toggle-switch ${securityFeatures.remoteAccess ? 'active' : ''}`}
                      onClick={() => toggleSecurityFeature('remoteAccess')}
                    >
                      <div className="toggle-button">
                        <span></span><span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <div className="setting-name">通知</div>
                      <div className="setting-description">发送推送通知</div>
                    </div>
                    <div 
                      className={`toggle-switch ${securityFeatures.notifications ? 'active' : ''}`}
                      onClick={() => toggleSecurityFeature('notifications')}
                    >
                      <div className="toggle-button">
                        <span></span><span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'temperature':
        return (
          <div className="temperature-content">
            <div className="temperature-dashboard modern-dashboard">
              <div className="temperature-background">
                <div className="mode-selection">
                  <div className="temp-mode-buttons">
                    <button
                      className={`temp-mode-button ${temperatureMode === 'cool' ? 'active' : ''}`}
                      onClick={() => handleTemperatureModeChange('cool')}
                      data-mode="cool"
                    >
                      <FaSnowflake className="mode-icon" />
                      Cool
                    </button>
                    <button
                      className={`temp-mode-button ${temperatureMode === 'dry' ? 'active' : ''}`}
                      onClick={() => handleTemperatureModeChange('dry')}
                      data-mode="dry"
                    >
                      <FaTint className="mode-icon" />
                      Dry
                    </button>
                    <button
                      className={`temp-mode-button ${temperatureMode === 'heat' ? 'active' : ''}`}
                      onClick={() => handleTemperatureModeChange('heat')}
                      data-mode="heat"
                    >
                      <FaThermometerHalf className="mode-icon" />
                      Heat
                    </button>
                    <button
                      className={`temp-mode-button ${temperatureMode === 'auto' ? 'active' : ''}`}
                      onClick={() => handleTemperatureModeChange('auto')}
                      data-mode="auto"
                    >
                      <FaRandom className="mode-icon" />
                      Auto
                    </button>
                  </div>
                </div>
                
                <div className="temperature-display">
                  <div className="temp-circle-container">
                    <TiltedCard>
                      <div className="temp-circle">
                        <div className="temp-value">{temperature}°C</div>
                        <div className="temp-status">
                          Room<br />Temperature
                        </div>
                      </div>
                    </TiltedCard>
                  </div>
                </div>

                <div className="temperature-stats modern-stats">
                  <StatCard 
                    title="Average Temperature"
                    value={`${temperature}°C`}
                    icon="thermometer"
                    progressValue={75}
                    color="#4285f4"
                  />
                  <StatCard 
                    title="Energy Efficiency"
                    value="92%"
                    icon="chart"
                    progressValue={92}
                    comparisonText="5% better than last week"
                    color="#4caf50"
                  />
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
            
            <div className="lighting-dashboard modern-dashboard">
              <div className="brightness-control modern-card">
                <div className="icon-container light-icon-container">
                  <CircleBackground size="160px" color="#a0c4ff" dashArray="5,5">
                    <Orb color="#ffc107" size="120px" intensity={lightBrightness/100}>
                      <FaLightbulb className="control-icon" />
                    </Orb>
                  </CircleBackground>
                </div>
                <h3>Brightness: <span>{lightBrightness}%</span></h3>
                <div className="brightness-slider">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={lightBrightness} 
                    onChange={(e) => handleBrightnessChange(parseInt(e.target.value))}
                    className="slider modern-slider"
                  />
                </div>
              </div>
              
              <div className="light-modes modern-card">
                <h3>Mode</h3>
                <div className="mode-buttons modern-buttons">
                  <button 
                    className={`mode-button modern-mode-button ${lightMode === 'day' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('day')}
                  >
                    <div className="mode-icon-wrapper">
                      <FaRegSun className="mode-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <span>Day</span>
                  </button>
                  <button 
                    className={`mode-button modern-mode-button ${lightMode === 'evening' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('evening')}
                  >
                    <div className="mode-icon-wrapper">
                      <FaRegLightbulb className="mode-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <span>Evening</span>
                  </button>
                  <button 
                    className={`mode-button modern-mode-button ${lightMode === 'night' ? 'active' : ''}`}
                    onClick={() => handleLightModeChange('night')}
                  >
                    <div className="mode-icon-wrapper">
                      <FaRegMoon className="mode-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <span>Night</span>
                  </button>
                </div>
              </div>
              
              <div className="lighting-stats modern-stats">
                <StatCard 
                  title="Active Lights"
                  value={
                    <span className={isLightCountChanging ? 'changing-count' : ''}>
                      {activeLightsCount} of {lights.length}
                    </span>
                  }
                  icon="lightbulb"
                  progressValue={Math.round((activeLightsCount / lights.length) * 100)}
                  color="#FFA000"
                  onClick={handleLightsModalToggle}
                />
                <StatCard 
                  title="Energy Usage"
                  value="0.8 kWh"
                  icon="chart"
                  progressValue={30}
                  comparisonText="10% less than yesterday"
                  color="#4caf50"
                  onClick={handleEnergyModalToggle}
                />
              </div>
            </div>
            
            {/* 能源使用详情模态框 */}
            <EnergyModal 
              isOpen={showEnergyModal} 
              onClose={handleEnergyModalToggle} 
            />
            
            {/* 灯光详情模态框 */}
            <LightsModal 
              isOpen={showLightsModal} 
              onClose={handleLightsModalToggle}
              lights={lights}
              setLights={setLights}
              toggleLight={toggleLight}
              adjustBrightness={adjustBrightness}
              turnOffAllLights={turnOffAllLights}
              turnOnAllLights={turnOnAllLights}
            />
          </div>
        );
      
      case 'support':
        return (
          <div className="support-content">
            <div className="section-header">
              <h2>Support</h2>
            </div>
            
            <div className="support-dashboard centered-support">
              <div className="support-center-card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                  <ShapeBlur
                    className="support-shape-blur"
                    variation={1}
                    pixelRatioProp={window.devicePixelRatio || 1}
                    shapeSize={0.8}
                    roundness={0.6}
                    borderSize={0.03}
                    circleSize={0.7}
                    circleEdge={0.3}
                  />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="icon-container">
                    <FaInfoCircle className="support-icon" />
                  </div>
                  <h3>Help Center</h3>
                  <p>Browse our knowledge base and find solutions to your questions</p>
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
                      <div className="toggle-button">
                        <span></span><span></span><span></span><span></span>
                      </div>
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
            <RoomNav onRoomChange={handleRoomChange} />
            <DeviceCards />
          </>
        );
    }
  };

  return (
    <div className={`main-content ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="header">
        <div className="edit-section">
          <span className="update-time">Updated 4 min ago</span>
        </div>
        <div className="search-section">
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
            onClick={() => setIsPowerOn(!isPowerOn)}
          >
            <div className="toggle-button">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-content-scrollable">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default MainContent;