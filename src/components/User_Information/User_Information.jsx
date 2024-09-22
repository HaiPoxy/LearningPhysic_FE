import React, { useState, useEffect } from 'react';
import './User_Information.css';
import { Link } from 'react-router-dom';

const User_Information = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  useEffect(() => {
    setClickedIndex(0);
  }, []);

  return (
    <>
      <div>
        <ul className="user-information-list">
          <li className={clickedIndex === 0 ? "active" : ""} onClick={() => handleClick(0)}>
            <Link to="/thông-tin-ca-nhân/thay-đổi-mật-khẩu">Thay đổi mật khẩu</Link>
          </li>
          <li className={clickedIndex === 1 ? "active" : ""} onClick={() => handleClick(1)}>
            <Link to="/thông-tin-ca-nhân/cập-nhật-thông-tin">Cập nhật thông tin cá nhân</Link>
          </li>
          <li className={clickedIndex === 2 ? "active" : ""} onClick={() => handleClick(2)}>
            <Link to="/thông-tin-ca-nhân/cài-đặt">Cài đặt ứng dụng</Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default User_Information;