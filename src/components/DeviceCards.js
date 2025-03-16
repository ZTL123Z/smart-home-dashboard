import React, { useState, useEffect } from 'react';
import './DeviceCards.css';

const DeviceCards = () => {
  // 状态管理
  const [bluetoothActive, setBluetoothActive] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(20);
  const [uploadPaused, setUploadPaused] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(50);
  const [intensity, setIntensity] = useState(70);
  const [lightMode, setLightMode] = useState('brightest');
  const [thermostatOn, setThermostatOn] = useState(true);
  const [temperature, setTemperature] = useState(24.3);
  const [thermostatMode, setThermostatMode] = useState('auto');
  const [batteryLevel, setBatteryLevel] = useState(31);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isQrLoading, setIsQrLoading] = useState(true);
  const [customQrImage, setCustomQrImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [devices, setDevices] = useState([
    { id: 1, name: "Kalen's mobile", ip: "102.432.457.113", icon: "📱" },
    { id: 2, name: "Tablet2", ip: "122.353.364.111", icon: "💻" }
  ]);

  // 文件输入引用
  const fileInputRef = React.useRef(null);
  const dropZoneRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const cropperRef = React.useRef(null);

  // 生成QR码
  useEffect(() => {
    // 使用猫咪图片作为默认QR码
    setQrCodeUrl('/imgs/cat-6602447_1280.jpg');
    setIsQrLoading(false);
  }, []);
  
  // 生成新的QR码
  const generateQRCode = () => {
    setIsQrLoading(true);
    // 模拟加载延迟
    setTimeout(() => {
      // 使用猫咪图片作为QR码
      setQrCodeUrl('/imgs/cat-6602447_1280.jpg');
      setIsQrLoading(false);
    }, 800);
  };

  // 处理蓝牙开关切换
  const handleBluetoothToggle = () => {
    setBluetoothActive(!bluetoothActive);
    
    // 添加点击效果
    const toggleSwitch = document.querySelector('.bluetooth-card .toggle-switch');
    toggleSwitch.classList.add('clicked');
    setTimeout(() => toggleSwitch.classList.remove('clicked'), 300);
  };

  // 处理上传进度
  const handleUploadProgress = () => {
    if (!uploadPaused && uploadProgress < 100) {
      setTimeout(() => {
        setUploadProgress(prev => Math.min(prev + 5, 100));
      }, 1000);
    }
  };

  // 处理暂停上传
  const handlePauseUpload = () => {
    setUploadPaused(!uploadPaused);
  };

  // 处理取消上传
  const handleCancelUpload = () => {
    setUploadProgress(0);
  };

  // 处理设备删除
  const handleRemoveDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  // 处理灯光开关
  const handleLightToggle = () => {
    setLightOn(!lightOn);
    
    // 添加点击效果
    const toggleSwitch = document.querySelector('.light-status .toggle-switch');
    toggleSwitch.classList.add('clicked');
    setTimeout(() => toggleSwitch.classList.remove('clicked'), 300);
  };

  // 处理亮度调整
  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  // 处理亮度调整 - 添加拖动功能
  const handleBrightnessSliderDrag = (e) => {
    e.preventDefault();
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;
    
    const updateBrightness = (clientX) => {
      const rect = sliderTrack.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.round((x / rect.width) * 100);
      handleBrightnessChange(Math.max(0, Math.min(100, percentage)));
      
      // 添加视觉反馈
      const thumb = document.querySelector('.slider-thumb');
      if (thumb) {
        thumb.style.boxShadow = '0 0 10px rgba(66, 133, 244, 0.8)';
        setTimeout(() => {
          thumb.style.boxShadow = '';
        }, 300);
      }
    };
    
    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      updateBrightness(moveEvent.clientX);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
    
    updateBrightness(e.clientX);
  };

  // 添加亮度调整的触摸支持
  const handleBrightnessSliderTouch = (e) => {
    e.preventDefault();
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;
    
    const updateBrightness = (clientX) => {
      const rect = sliderTrack.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.round((x / rect.width) * 100);
      handleBrightnessChange(Math.max(0, Math.min(100, percentage)));
    };
    
    const handleTouchMove = (moveEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      updateBrightness(touch.clientX);
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    const touch = e.touches[0];
    updateBrightness(touch.clientX);
  };

  // 处理灯光模式切换
  const handleLightModeChange = (mode) => {
    setLightMode(mode);
    
    // 添加点击效果
    const buttons = document.querySelectorAll('.mode-buttons .mode-button');
    buttons.forEach(button => {
      if (button.textContent.includes(mode.charAt(0).toUpperCase() + mode.slice(1))) {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 300);
      }
    });
  };

  // 处理恒温器开关
  const handleThermostatToggle = () => {
    setThermostatOn(!thermostatOn);
    
    // 添加点击效果
    const toggleSwitch = document.querySelector('.thermostat-controls .toggle-switch');
    toggleSwitch.classList.add('clicked');
    setTimeout(() => toggleSwitch.classList.remove('clicked'), 300);
  };

  // 处理温度调整
  const handleTemperatureChange = (value) => {
    setTemperature(parseFloat(value.toFixed(1)));
  };

  // 处理恒温器模式切换
  const handleThermostatModeChange = (mode) => {
    setThermostatMode(mode);
  };

  // 处理强度调整 - 添加拖动功能
  const handleIntensitySliderDrag = (e) => {
    e.preventDefault();
    const updateIntensity = (clientX) => {
      const rect = document.querySelector('.intensity-slider-track').getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.round((x / rect.width) * 100);
      setIntensity(Math.max(0, Math.min(100, percentage)));
      
      // 添加视觉反馈
      const thumb = document.querySelector('.intensity-slider-track .slider-thumb');
      if (thumb) {
        thumb.style.boxShadow = '0 0 10px rgba(66, 133, 244, 0.8)';
        setTimeout(() => {
          thumb.style.boxShadow = '';
        }, 300);
      }
    };
    
    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      updateIntensity(moveEvent.clientX);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
    
    updateIntensity(e.clientX);
  };

  // 添加强度调整的触摸支持
  const handleIntensitySliderTouch = (e) => {
    e.preventDefault();
    const updateIntensity = (clientX) => {
      const rect = document.querySelector('.intensity-slider-track').getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.round((x / rect.width) * 100);
      setIntensity(Math.max(0, Math.min(100, percentage)));
    };
    
    const handleTouchMove = (moveEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      updateIntensity(touch.clientX);
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    const touch = e.touches[0];
    updateIntensity(touch.clientX);
  };

  // 处理温度调整 - 添加拖动功能
  const handleTemperatureDrag = (e) => {
    e.preventDefault();
    const dialElement = document.querySelector('.temp-dial');
    if (!dialElement) return;
    
    const rect = dialElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const updateTemperature = (clientX, clientY) => {
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // 将角度映射到温度范围 (16°C - 30°C)
      let newTemp;
      if (angle >= -180 && angle < 0) {
        // 右半圆 (顺时针旋转，温度增加)
        newTemp = 23 + ((-angle) / 180) * 7;
      } else {
        // 左半圆 (逆时针旋转，温度减少)
        newTemp = 23 - (angle / 180) * 7;
      }
      
      // 限制温度范围
      newTemp = Math.max(16, Math.min(30, newTemp));
      handleTemperatureChange(newTemp);
      
      // 添加视觉反馈
      const indicator = document.querySelector('.dial-indicator');
      if (indicator) {
        indicator.style.filter = 'drop-shadow(0 0 5px rgba(66, 133, 244, 0.8))';
        setTimeout(() => {
          indicator.style.filter = '';
        }, 300);
      }
    };
    
    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      updateTemperature(moveEvent.clientX, moveEvent.clientY);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
    
    updateTemperature(e.clientX, e.clientY);
  };

  // 处理温度调整 - 添加触摸支持
  const handleTemperatureTouch = (e) => {
    e.preventDefault();
    const dialElement = document.querySelector('.temp-dial');
    if (!dialElement) return;
    
    const rect = dialElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const updateTemperature = (clientX, clientY) => {
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // 将角度映射到温度范围 (16°C - 30°C)
      let newTemp;
      if (angle >= -180 && angle < 0) {
        // 右半圆 (顺时针旋转，温度增加)
        newTemp = 23 + ((-angle) / 180) * 7;
      } else {
        // 左半圆 (逆时针旋转，温度减少)
        newTemp = 23 - (angle / 180) * 7;
      }
      
      // 限制温度范围
      newTemp = Math.max(16, Math.min(30, newTemp));
      handleTemperatureChange(newTemp);
      
      // 添加视觉反馈
      const indicator = document.querySelector('.dial-indicator');
      if (indicator) {
        indicator.style.filter = 'drop-shadow(0 0 5px rgba(66, 133, 244, 0.8))';
        setTimeout(() => {
          indicator.style.filter = '';
        }, 300);
      }
    };
    
    const handleTouchMove = (moveEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      updateTemperature(touch.clientX, touch.clientY);
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    const touch = e.touches[0];
    updateTemperature(touch.clientX, touch.clientY);
  };

  // 模拟上传进度
  React.useEffect(() => {
    if (!uploadPaused && uploadProgress < 100) {
      const timer = setTimeout(() => {
        setUploadProgress(prev => Math.min(prev + 5, 100));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [uploadProgress, uploadPaused]);

  // 处理本地图片选择
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsQrLoading(true);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomQrImage(event.target.result);
        setQrCodeUrl('');
        setIsQrLoading(false);
        
        // 显示成功上传的视觉反馈
        const qrCodeImage = document.querySelector('.qr-code-image');
        qrCodeImage.classList.add('upload-success');
        setTimeout(() => qrCodeImage.classList.remove('upload-success'), 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  // 处理拖拽事件
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setIsQrLoading(true);
        
        const reader = new FileReader();
        reader.onload = (event) => {
          setCustomQrImage(event.target.result);
          setQrCodeUrl('');
          setIsQrLoading(false);
          
          // 显示成功上传的视觉反馈
          const qrCodeImage = document.querySelector('.qr-code-image');
          qrCodeImage.classList.add('upload-success');
          setTimeout(() => qrCodeImage.classList.remove('upload-success'), 1000);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // 打开文件选择器
  const openFileSelector = () => {
    // 添加点击效果
    const button = document.querySelector('.upload-button');
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
    
    fileInputRef.current.click();
  };

  // 处理拖拽事件
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  // 设置拖拽事件监听
  React.useEffect(() => {
    const dropZone = dropZoneRef.current;
    if (dropZone) {
      dropZone.addEventListener('dragover', handleDragOver);
      dropZone.addEventListener('dragleave', handleDragLeave);
      dropZone.addEventListener('drop', handleDrop);
      
      return () => {
        dropZone.removeEventListener('dragover', handleDragOver);
        dropZone.removeEventListener('dragleave', handleDragLeave);
        dropZone.removeEventListener('drop', handleDrop);
      };
    }
  }, []);

  // 清除自定义图片
  const clearCustomImage = () => {
    setCustomQrImage(null);
    generateQRCode();
  };

  // 下载QR码图片
  const downloadQrCode = () => {
    const imageUrl = customQrImage || qrCodeUrl;
    if (!imageUrl) return;
    
    // 创建一个临时链接
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // 添加点击效果
    const button = document.querySelector('.download-button');
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
  };

  return (
    <div className="device-cards">
      <div className="device-row">
        <div className="bluetooth-card">
          <div className="card-header">
            <h3>Bluetooth</h3>
            <span className="bluetooth-icon">🔵</span>
          </div>
          <div className="device-item">
            <div className="device-info">
              <span className="check-icon">✓</span>
              <span>Martine's</span>
            </div>
            <div 
              className={`toggle-switch ${bluetoothActive ? 'active' : ''}`}
              onClick={handleBluetoothToggle}
            >
              <div className="toggle-button"></div>
            </div>
          </div>
        </div>
        
        <div className="add-device-card">
          <div className="add-device-content" onClick={() => alert("Add device functionality would open here")}>
            <span className="plus-icon">+</span>
            <p>Add device by Bluetooth</p>
          </div>
        </div>
        
        <div className="upload-device-card">
          <div className="upload-header">
            <span className="cloud-icon">☁️</span>
            <span>Uploads device</span>
          </div>
          <div className="upload-progress">
            <div className="progress-text">
              <span>{uploadPaused ? "Paused..." : "Uploading..."}</span>
              <span className="time-left">{uploadProgress}% / {Math.round((100 - uploadProgress) / 5)} seconds left</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
            </div>
            <div className="progress-controls">
              <button className="pause-button" onClick={handlePauseUpload}>
                {uploadPaused ? "▶️" : "⏸"}
              </button>
              <button className="cancel-button" onClick={handleCancelUpload}>✖</button>
              <button className="more-button" onClick={() => alert("More options")}>⋮</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="device-row">
        <div className="user-devices-card">
          <div className="user-header">
            <div className="user-avatar">
              <img src="/avatars/image2.png" alt="Kalen" />
            </div>
            <div className="user-info">
              <h3>Kalen</h3>
              <span>{devices.length} Devices</span>
            </div>
            <div className="time-setting">
              <span className="clock-icon">🕒</span>
              <span className="time">6:12</span>
              <button className="close-button" onClick={() => alert("Close time settings")}>✖</button>
            </div>
          </div>
          
          <div className="device-list">
            {devices.map(device => (
              <div className="device-item" key={device.id}>
                <div className="device-icon">{device.icon}</div>
                <div className="device-details">
                  <span>{device.name}</span>
                  <span className="ip-address">IP Address: {device.ip}</span>
                </div>
                <button className="remove-button" onClick={() => handleRemoveDevice(device.id)}>🗑️</button>
              </div>
            ))}
            
            <div className="profile-link" onClick={() => alert("View other profile")}>
              <span className="link-icon">🔗</span>
              <span>Other profile</span>
              <span className="hand-icon">👆</span>
            </div>
          </div>
        </div>
        
        <div className="smart-light-card">
          <div className="card-header">
            <h3>Smart Light</h3>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="light-controls">
            <div className="light-status">
              <span>On</span>
              <div 
                className={`toggle-switch ${lightOn ? 'active' : ''}`}
                onClick={handleLightToggle}
              >
                <div className="toggle-button"></div>
              </div>
              <button 
                className="brightness-button"
                onClick={() => {
                  handleBrightnessChange(brightness < 50 ? 100 : 0);
                  
                  // 添加点击效果
                  const button = document.querySelector('.brightness-button');
                  button.classList.add('clicked');
                  setTimeout(() => button.classList.remove('clicked'), 300);
                }}
              >
                ☀️
              </button>
            </div>
            
            <div className="brightness-value">
              {brightness}%
            </div>
            
            <div className="brightness-slider">
              <span>Brightness</span>
              <div className="slider-container">
                <div className="slider-gradient"></div>
                <div 
                  className="slider-track" 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = Math.round((x / rect.width) * 100);
                    handleBrightnessChange(Math.max(0, Math.min(100, percentage)));
                  }}
                >
                  <div className="slider-fill" style={{ width: `${brightness}%` }}></div>
                  <div 
                    className="slider-thumb" 
                    style={{ left: `${brightness}%` }}
                    onMouseDown={handleBrightnessSliderDrag}
                    onTouchStart={handleBrightnessSliderTouch}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="schedule-section">
              <div className="schedule-header">
                <span>Schedule</span>
                <button 
                  className="schedule-button"
                  onClick={() => {
                    alert("Schedule settings");
                    
                    // 添加点击效果
                    const button = document.querySelector('.schedule-button');
                    button.classList.add('clicked');
                    setTimeout(() => button.classList.remove('clicked'), 300);
                  }}
                >
                  <span className="calendar-icon">📅</span>
                </button>
              </div>
              <div className="time-labels">
                <span>From</span>
                <span>To</span>
              </div>
              <div className="time-slots">
                <div className="time-dropdown" onClick={() => alert("Select start time")}>
                  <span>12:00</span>
                  <span className="dropdown-icon">▼</span>
                </div>
                <div className="time-dropdown" onClick={() => alert("Select end time")}>
                  <span>12:00 PM</span>
                  <span className="dropdown-icon">▼</span>
                </div>
              </div>
            </div>
            
            <div className="intensity-section">
              <span>Intensity</span>
              <span className="intensity-value">{intensity}%</span>
            </div>
            
            <div className="intensity-slider">
              <div className="slider-container">
                <div className="slider-gradient intensity-gradient"></div>
                <div 
                  className="slider-track intensity-slider-track" 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = Math.round((x / rect.width) * 100);
                    setIntensity(Math.max(0, Math.min(100, percentage)));
                  }}
                >
                  <div className="slider-fill" style={{ width: `${intensity}%` }}></div>
                  <div 
                    className="slider-thumb" 
                    style={{ left: `${intensity}%` }}
                    onMouseDown={handleIntensitySliderDrag}
                    onTouchStart={handleIntensitySliderTouch}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mode-buttons">
              <button 
                className={`mode-button ${lightMode === 'brightest' ? 'active' : ''}`}
                onClick={() => handleLightModeChange('brightest')}
              >
                <span className="mode-icon">☀️</span>
                <span>Brightest</span>
              </button>
              <button 
                className={`mode-button ${lightMode === 'day' ? 'active' : ''}`}
                onClick={() => handleLightModeChange('day')}
              >
                <span className="mode-icon">🌤️</span>
                <span>Day</span>
              </button>
              <button 
                className={`mode-button ${lightMode === 'night' ? 'active' : ''}`}
                onClick={() => handleLightModeChange('night')}
              >
                <span className="mode-icon">🌙</span>
                <span>Night</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="thermostat-card">
          <div className="thermostat-header">
            <div className="thermostat-icon">❄️</div>
            <div className="thermostat-info">
              <h3>Thermostat</h3>
              <span>Auto Cooling</span>
            </div>
            <div className="thermostat-controls">
              <span>{thermostatOn ? 'On' : 'Off'}</span>
              <div 
                className={`toggle-switch ${thermostatOn ? 'active' : ''}`}
                onClick={handleThermostatToggle}
              >
                <div className="toggle-button"></div>
              </div>
            </div>
          </div>
          
          <div className="temperature-display">
            <div className="current-temp">
              <span className="temp-value">{temperature.toFixed(1)}</span>
              <span className="temp-unit">°</span>
            </div>
            <div 
              className="temp-dial" 
              onMouseDown={handleTemperatureDrag}
              onTouchStart={handleTemperatureTouch}
            >
              <div className="dial-circle">
                <span className="co2-text">CO<sub>2</sub></span>
              </div>
              <div className="dial-markers">
                <div className="marker min">16°</div>
                <div className="marker max">30°</div>
              </div>
              <div className="dial-indicator" style={{ 
                transform: `rotate(${((temperature - 16) / (30 - 16)) * 360}deg)` 
              }}></div>
            </div>
          </div>
          
          <div className="mode-controls">
            <button 
              className={`mode-button ${thermostatMode === 'swing' ? '' : ''}`}
              onClick={() => {
                handleThermostatModeChange('swing');
                const button = document.querySelector('.mode-button:nth-child(1)');
                button.classList.add('clicked');
                setTimeout(() => button.classList.remove('clicked'), 300);
              }}
            >
              <div className="mode-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 14L12 19L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Swing</span>
              <span className="mode-status">off</span>
            </button>
            <button 
              className={`mode-button ${thermostatMode === 'auto' ? 'active' : ''}`}
              onClick={() => {
                handleThermostatModeChange('auto');
                const button = document.querySelector('.mode-button:nth-child(2)');
                button.classList.add('clicked');
                setTimeout(() => button.classList.remove('clicked'), 300);
              }}
            >
              <div className="mode-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M4 12H2M6.31 6.31L3.87 3.87M17.69 6.31L20.13 3.87M6.31 17.69L3.87 20.13M17.69 17.69L20.13 20.13M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>Auto</span>
              <span className="mode-status">on</span>
            </button>
            <button 
              className={`mode-button ${thermostatMode === 'timer' ? '' : ''}`}
              onClick={() => {
                handleThermostatModeChange('timer');
                const button = document.querySelector('.mode-button:nth-child(3)');
                button.classList.add('clicked');
                setTimeout(() => button.classList.remove('clicked'), 300);
              }}
            >
              <div className="mode-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Timer</span>
              <span className="mode-status">off</span>
            </button>
          </div>
          
          <div className="power-usage" onClick={() => alert("View power usage details")}>
            <div className="usage-header">
              <span>600 W</span>
              <span className="arrow-icon">▶</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="device-row">
        <div className="qr-code-card">
          <div className="qr-code-header">
            <h3>Cat Image</h3>
            <div className="qr-actions">
              <button className="upload-button" onClick={openFileSelector} title="上传图片">
                <span className="upload-icon">📤</span>
              </button>
              <button className="download-button" onClick={downloadQrCode} disabled={!customQrImage && !qrCodeUrl} title="下载图片">
                <span className="download-icon">📥</span>
              </button>
              <button className="refresh-button" onClick={generateQRCode} title="重新加载猫咪图片">
                <span className="refresh-icon">🔄</span>
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handleImageSelect} 
              />
            </div>
          </div>
          <div 
            className={`qr-code-image ${isDragging ? 'dragging' : ''}`}
            ref={dropZoneRef}
          >
            {isQrLoading ? (
              <div className="qr-loading">
                <div className="loading-spinner"></div>
                <span>Generating...</span>
              </div>
            ) : customQrImage ? (
              <div className="custom-image-container">
                <img src={customQrImage} alt="QR Code" className="qr-code" />
                <button className="remove-image-button" onClick={clearCustomImage}>
                  <span>✖</span>
                </button>
              </div>
            ) : qrCodeUrl ? (
              <img src={qrCodeUrl} alt="QR Code" className="qr-code" />
            ) : (
              <div className="qr-placeholder" onClick={openFileSelector}>
                <div className="upload-placeholder">
                  <span className="upload-icon">🐱</span>
                  <span>拖拽猫咪图片到此处或点击上传</span>
                </div>
              </div>
            )}
          </div>
          <div className="qr-info">
            <p>Cute cat image for your smart home dashboard</p>
          </div>
          <button className="scan-button" onClick={() => {
            alert("View cat image");
            
            // 添加点击效果
            const button = document.querySelector('.scan-button');
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 300);
          }}>
            <span className="scan-icon">🐱</span>
            <span>View Cat</span>
          </button>
        </div>
        
        <div className="battery-card">
          <div className="battery-header">
            <h3>Battery</h3>
            <button className="more-button" onClick={() => alert("Battery options")}>⋯</button>
          </div>
          <div className="battery-content" onClick={() => {
            // 模拟电池电量变化
            const newLevel = Math.max(5, Math.min(100, batteryLevel + (Math.random() > 0.5 ? 5 : -5)));
            setBatteryLevel(newLevel);
            
            // 添加动画效果
            const percentageElement = document.querySelector('.battery-percentage');
            percentageElement.classList.add('changing');
            setTimeout(() => percentageElement.classList.remove('changing'), 500);
          }}>
            <div className="battery-percentage">{batteryLevel}%</div>
            <div className="battery-icon">
              <div 
                className={`battery-level ${batteryLevel <= 20 ? 'low' : batteryLevel <= 50 ? 'medium' : ''}`} 
                style={{ height: `${batteryLevel}%` }}
              ></div>
            </div>
          </div>
          <div className="battery-info">
            <span>{Math.round(batteryLevel / 5)} Hours remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCards;