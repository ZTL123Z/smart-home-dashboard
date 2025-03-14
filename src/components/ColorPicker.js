import React, { useState, useEffect, useRef } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ isOpen, onClose, onColorSelect, initialColor }) => {
  const [selectedColor, setSelectedColor] = useState(initialColor || '#4285f4');
  const [showPalette, setShowPalette] = useState(true);
  const pickerRef = useRef(null);
  
  // 预定义的颜色选项
  const predefinedColors = [
    '#4285f4', // 蓝色
    '#ea4335', // 红色
    '#fbbc05', // 黄色
    '#34a853', // 绿色
    '#9c27b0', // 紫色
    '#ff5722', // 橙色
    '#795548', // 棕色
    '#607d8b', // 蓝灰色
    '#00bcd4', // 青色
    '#ff9800', // 橙黄色
    '#e91e63', // 粉色
    '#3f51b5'  // 靛蓝色
  ];
  
  // 点击外部关闭颜色选择器
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // 处理颜色选择
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  
  // 处理预定义颜色选择
  const handlePredefinedColorSelect = (color) => {
    setSelectedColor(color);
  };
  
  // 处理应用颜色
  const handleApplyColor = () => {
    onColorSelect(selectedColor);
    onClose();
  };
  
  // 处理取消
  const handleCancel = () => {
    onClose();
  };
  
  // 切换视图（调色板/自定义）
  const toggleView = () => {
    setShowPalette(!showPalette);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="color-picker-overlay">
      <div className="color-picker-modal" ref={pickerRef}>
        <div className="color-picker-header">
          <h3>选择颜色</h3>
          <button className="close-button" onClick={onClose}>✖</button>
        </div>
        
        <div className="color-picker-tabs">
          <button 
            className={`tab-button ${showPalette ? 'active' : ''}`} 
            onClick={() => setShowPalette(true)}
          >
            调色板
          </button>
          <button 
            className={`tab-button ${!showPalette ? 'active' : ''}`} 
            onClick={() => setShowPalette(false)}
          >
            自定义
          </button>
        </div>
        
        <div className="color-picker-content">
          {showPalette ? (
            <div className="color-palette">
              {predefinedColors.map((color, index) => (
                <div 
                  key={index}
                  className={`palette-color ${color === selectedColor ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handlePredefinedColorSelect(color)}
                ></div>
              ))}
            </div>
          ) : (
            <div className="custom-color">
              <div className="color-preview" style={{ backgroundColor: selectedColor }}></div>
              <input 
                type="color" 
                value={selectedColor} 
                onChange={handleColorChange} 
                className="color-input"
              />
              <input 
                type="text" 
                value={selectedColor} 
                onChange={(e) => setSelectedColor(e.target.value)}
                className="color-text-input"
              />
            </div>
          )}
        </div>
        
        <div className="color-picker-footer">
          <button className="cancel-button" onClick={handleCancel}>取消</button>
          <button className="apply-button" onClick={handleApplyColor}>应用</button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker; 