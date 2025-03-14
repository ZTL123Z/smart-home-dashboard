import React, { useEffect, useRef } from "react";
import "./Orb.css";

export default function Orb({
  color = "#ffc107", // 默认为黄色，适合灯泡
  size = "200px",
  intensity = 0.8,
  children
}) {
  const orbRef = useRef(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    
    // 设置Orb的大小
    orb.style.width = size;
    orb.style.height = size;
    
    // 创建动画效果
    const animate = () => {
      const time = Date.now() * 0.001;
      const scale = 1 + Math.sin(time) * 0.03;
      
      orb.style.transform = `scale(${scale})`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size]);
  
  // 计算颜色的RGB值，用于生成辉光效果
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 193, b: 7 }; // 默认黄色
  };
  
  const rgb = hexToRgb(color);
  
  // 生成辉光效果的样式
  const glowStyle = {
    boxShadow: `0 0 10px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${intensity * 0.5}),
                0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${intensity * 0.3}),
                0 0 30px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${intensity * 0.1})`,
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`
  };
  
  return (
    <div className="orb-container" ref={orbRef} style={glowStyle}>
      <div className="orb-inner" style={{ backgroundColor: color }}>
        {children}
      </div>
      <div className="orb-glow" style={{ borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)` }}></div>
    </div>
  );
} 