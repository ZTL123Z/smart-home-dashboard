import React, { useState, useEffect } from 'react';
import './StatCard.css';
import { FaChartLine, FaLightbulb, FaInfoCircle } from 'react-icons/fa';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  progressValue, 
  comparisonText, 
  color = "#FFA000",
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 添加点击动画效果
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // 根据图标类型返回对应的图标组件
  const renderIcon = () => {
    switch(icon) {
      case 'lightbulb':
        return <FaLightbulb className="stat-icon" />;
      case 'chart':
        return <FaChartLine className="stat-icon" />;
      case 'info':
        return <FaInfoCircle className="stat-icon" />;
      default:
        return <FaChartLine className="stat-icon" />;
    }
  };

  return (
    <div 
      className={`modern-stat-card ${isHovered ? 'hovered' : ''} ${isAnimating ? 'clicked' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        '--card-color': color,
        '--card-color-light': `${color}33`, // 添加透明度
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <div className="stat-icon-container">
        {renderIcon()}
      </div>
      <div className="stat-info">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        {progressValue !== undefined && (
          <div className="stat-progress">
            <div 
              className="progress-bar" 
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        )}
        {comparisonText && (
          <p className="stat-comparison">{comparisonText}</p>
        )}
      </div>
      <div className="stat-card-glow"></div>
    </div>
  );
};

export default StatCard; 