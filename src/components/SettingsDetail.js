import React, { useState, useEffect, useRef } from 'react';
import './SettingsDetail.css';
import { FaArrowLeft, FaToggleOn, FaToggleOff, FaBell, FaLock, FaLanguage, FaInfoCircle, FaQuestionCircle, FaWrench, FaCloudUploadAlt, FaUserCog } from 'react-icons/fa';
import ColorPicker from './ColorPicker';

const SettingsDetail = ({ isOpen, onClose, onThemeChange, onColorChange, currentTheme, currentColor }) => {
  const [activeTab, setActiveTab] = useState('appearance');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [language, setLanguage] = useState('english');
  const detailRef = useRef(null);
  
  // 预定义的颜色选项
  const colorOptions = [
    { id: 'blue', color: '#4285f4', name: '蓝色' },
    { id: 'red', color: '#ea4335', name: '红色' },
    { id: 'yellow', color: '#fbbc05', name: '黄色' },
    { id: 'green', color: '#34a853', name: '绿色' },
    { id: 'purple', color: '#9c27b0', name: '紫色' },
    { id: 'orange', color: '#ff5722', name: '橙色' }
  ];
  
  // 语言选项
  const languageOptions = [
    { id: 'english', name: 'English' },
    { id: 'chinese', name: '中文' },
    { id: 'spanish', name: 'Español' },
    { id: 'french', name: 'Français' },
    { id: 'german', name: 'Deutsch' },
    { id: 'japanese', name: '日本語' }
  ];
  
  // 点击外部关闭设置详情
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailRef.current && !detailRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // 处理主题切换
  const handleThemeChange = (theme) => {
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
  const handleOpenColorPicker = () => {
    setShowColorPicker(true);
  };
  
  // 处理颜色编辑器关闭
  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
  };
  
  // 处理自定义颜色选择
  const handleCustomColorSelect = (color) => {
    if (onColorChange) {
      onColorChange(color);
    }
  };
  
  // 处理通知开关
  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };
  
  // 处理音效开关
  const handleSoundEffectsToggle = () => {
    setSoundEffects(!soundEffects);
  };
  
  // 处理自动更新开关
  const handleAutoUpdateToggle = () => {
    setAutoUpdate(!autoUpdate);
  };
  
  // 处理语言切换
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  
  if (!isOpen) return null;
  
  // 渲染外观设置
  const renderAppearanceSettings = () => {
    return (
      <div className="settings-section">
        <h3>主题设置</h3>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">主题模式</span>
            <span className="setting-description">选择浅色或深色主题</span>
          </div>
          <div className="theme-buttons">
            <button 
              className={`theme-button ${currentTheme === 'white' ? 'active' : ''}`}
              onClick={() => handleThemeChange('white')}
            >
              浅色
            </button>
            <button 
              className={`theme-button ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              深色
            </button>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">主题颜色</span>
            <span className="setting-description">选择应用的主题颜色</span>
          </div>
          <div className="color-buttons">
            {colorOptions.map(option => (
              <button 
                key={option.id}
                className={`color-button ${currentColor === option.color ? 'active' : ''}`}
                style={{ backgroundColor: option.color }}
                onClick={() => handleColorClick(option.color)}
                title={option.name}
              ></button>
            ))}
            <button 
              className="custom-color-button"
              onClick={handleOpenColorPicker}
            >
              自定义
            </button>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">字体大小</span>
            <span className="setting-description">调整应用的字体大小</span>
          </div>
          <div className="font-size-slider">
            <span className="font-size-label small">A</span>
            <input 
              type="range" 
              min="12" 
              max="20" 
              defaultValue="16" 
              className="slider"
            />
            <span className="font-size-label large">A</span>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">动画效果</span>
            <span className="setting-description">启用或禁用界面动画</span>
          </div>
          <div 
            className={`toggle-switch ${true ? 'active' : ''}`}
            onClick={() => {}}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
      </div>
    );
  };
  
  // 渲染通知设置
  const renderNotificationSettings = () => {
    return (
      <div className="settings-section">
        <h3>通知设置</h3>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">推送通知</span>
            <span className="setting-description">接收重要事件的通知</span>
          </div>
          <div 
            className={`toggle-switch ${notifications ? 'active' : ''}`}
            onClick={handleNotificationsToggle}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">声音效果</span>
            <span className="setting-description">操作时播放声音效果</span>
          </div>
          <div 
            className={`toggle-switch ${soundEffects ? 'active' : ''}`}
            onClick={handleSoundEffectsToggle}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">通知时间</span>
            <span className="setting-description">设置接收通知的时间段</span>
          </div>
          <button className="setting-button">设置</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">通知类型</span>
            <span className="setting-description">选择接收的通知类型</span>
          </div>
          <button className="setting-button">自定义</button>
        </div>
      </div>
    );
  };
  
  // 渲染隐私设置
  const renderPrivacySettings = () => {
    return (
      <div className="settings-section">
        <h3>隐私与安全</h3>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">数据共享</span>
            <span className="setting-description">控制数据共享设置</span>
          </div>
          <button className="setting-button">管理</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">位置服务</span>
            <span className="setting-description">管理位置访问权限</span>
          </div>
          <div 
            className={`toggle-switch ${false ? 'active' : ''}`}
            onClick={() => {}}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">清除数据</span>
            <span className="setting-description">清除应用缓存和数据</span>
          </div>
          <button className="setting-button">清除</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">隐私政策</span>
            <span className="setting-description">查看隐私政策详情</span>
          </div>
          <button className="setting-button">查看</button>
        </div>
      </div>
    );
  };
  
  // 渲染常规设置
  const renderGeneralSettings = () => {
    return (
      <div className="settings-section">
        <h3>常规设置</h3>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">语言</span>
            <span className="setting-description">选择应用界面语言</span>
          </div>
          <select 
            className="language-select" 
            value={language}
            onChange={handleLanguageChange}
          >
            {languageOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">自动更新</span>
            <span className="setting-description">自动下载并安装更新</span>
          </div>
          <div 
            className={`toggle-switch ${autoUpdate ? 'active' : ''}`}
            onClick={handleAutoUpdateToggle}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">时区</span>
            <span className="setting-description">设置应用时区</span>
          </div>
          <button className="setting-button">选择</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">备份与恢复</span>
            <span className="setting-description">备份或恢复应用数据</span>
          </div>
          <button className="setting-button">管理</button>
        </div>
      </div>
    );
  };
  
  // 渲染帮助设置
  const renderHelpSettings = () => {
    return (
      <div className="settings-section">
        <h3>帮助与支持</h3>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">常见问题</span>
            <span className="setting-description">查看常见问题解答</span>
          </div>
          <button className="setting-button">查看</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">联系支持</span>
            <span className="setting-description">获取技术支持</span>
          </div>
          <button className="setting-button">联系</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">用户手册</span>
            <span className="setting-description">查看详细使用说明</span>
          </div>
          <button className="setting-button">打开</button>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-name">关于</span>
            <span className="setting-description">查看应用版本和信息</span>
          </div>
          <button className="setting-button">详情</button>
        </div>
      </div>
    );
  };
  
  // 根据当前选中的标签渲染对应的设置内容
  const renderContent = () => {
    switch (activeTab) {
      case 'appearance':
        return renderAppearanceSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'general':
        return renderGeneralSettings();
      case 'help':
        return renderHelpSettings();
      default:
        return renderAppearanceSettings();
    }
  };
  
  return (
    <div className={`settings-detail-overlay ${currentTheme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="settings-detail-modal" ref={detailRef}>
        <div className="settings-detail-header">
          <button className="back-button" onClick={onClose}>
            <FaArrowLeft />
            <span>返回</span>
          </button>
          <h2>设置</h2>
        </div>
        
        <div className="settings-detail-content">
          <div className="settings-sidebar">
            <div 
              className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              <FaWrench />
              <span>外观</span>
            </div>
            <div 
              className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <FaBell />
              <span>通知</span>
            </div>
            <div 
              className={`settings-tab ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <FaLock />
              <span>隐私</span>
            </div>
            <div 
              className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <FaUserCog />
              <span>常规</span>
            </div>
            <div 
              className={`settings-tab ${activeTab === 'help' ? 'active' : ''}`}
              onClick={() => setActiveTab('help')}
            >
              <FaQuestionCircle />
              <span>帮助</span>
            </div>
          </div>
          
          <div className="settings-main">
            {renderContent()}
          </div>
        </div>
      </div>
      
      {/* 颜色选择器 */}
      <ColorPicker 
        isOpen={showColorPicker}
        onClose={handleCloseColorPicker}
        onColorSelect={handleCustomColorSelect}
        initialColor={currentColor}
      />
    </div>
  );
};

export default SettingsDetail; 