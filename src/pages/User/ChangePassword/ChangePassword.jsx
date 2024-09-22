import React, { useState } from 'react';
import './ChangePassword.css';
import User_Information from '../../../components/User_Information/User_Information';

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'currentPassword') {
      setCurrentPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmNewPassword') {
      setConfirmNewPassword(value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <User_Information />
      <div className="change-password-container">
        <div className="change-password-form">
          <h3>Thay đổi mật khẩu</h3>
          <form onClick={handleClick}>
            <label htmlFor="currentPassword">Mật khẩu hiện tại:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword" />

            <label htmlFor="newPassword">Mật khẩu mới:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword" />

            <label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới:</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={handleInput} />


            <button type="submit">Thay đổi mật khẩu</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;