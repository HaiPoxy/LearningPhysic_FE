import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(localStorage.getItem('menu') || 'về chúng tôi');

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    localStorage.setItem('menu', menuName);
  };

  useEffect(() => {
    const keepActive = localStorage.getItem('menu');
    if (keepActive) {
      setMenu(keepActive);
    }
  }, []);

  return (
    <div className='navbar-container'>
      <ul className='navbar-menu'>
        <li>
          <a href="#" onClick={() => handleMenuClick("về chúng tôi")} className={menu === "về chúng tôi" ? "active" : ""}>Về chúng tôi</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("lộ trình")} className={menu === "lộ trình" ? "active" : ""}>Lộ trình - Bí quyết học</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("kiểm tra")} className={menu === "kiểm tra" ? "active" : ""}>Kiểm tra</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("đgnl")} className={menu === "đgnl" ? "active" : ""}>ĐGNL</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("thi đấu")} className={menu === "thi đấu" ? "active" : ""}>Thi đấu</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("bài viết")} className={menu === "bài viết" ? "active" : ""}>Bài viết</a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuClick("sách")} className={menu === "sách" ? "active" : ""}>Sách</a>
        </li>
        <li>
          <a href="/forum" onClick={() => handleMenuClick("hỏi đáp")} className={menu === "hỏi đáp" ? "active" : ""}>Hỏi đáp</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;