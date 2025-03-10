import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ src }) => {
  // 添加错误处理，当头像加载失败时使用默认头像
  const handleError = (e) => {
    e.target.src = '/avatars/image.png'; // 使用image.png作为默认头像
  };

  return (
    <div className="user-avatar">
      <img src={src} alt="User" onError={handleError} />
    </div>
  );
};

export default UserAvatar;