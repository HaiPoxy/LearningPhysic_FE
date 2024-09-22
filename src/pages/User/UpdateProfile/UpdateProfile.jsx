import React, { useEffect, useState } from 'react';
import './UpdateProfile.css';
import User_Information from '../../../components/User_Information/User_Information';

const UpdateProfile = () => {


  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  useEffect(() => {
    console.log(fullName, email, phone);
  }, [fullName, email, phone]);





  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <User_Information />
      <div className="update-profile-container">
        <div className="update-profile-form">
          <h3>Cập nhật thông tin cá nhân</h3>
          <form onClick={handleClick}>
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleInput}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInput}
              readOnly />

            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInput} />


            <button type="submit">Cập nhật thông tin</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;