import React, { useEffect } from 'react';
import { notification } from '../../../data/notification.js';
import './Notification_ShowAll.css';


const Notification_ShowAll = () => {
  useEffect(() => {
    console.log("Danh sách thông báo:", notification);
  }, []);



  return (
    <>

      <div className="notification-show">
        <h3>Thông báo</h3>

        <div className="show-list">
          {notification.map((item, index) => (
            <div className="show-list-item" key={index}>
              <img src={item.image} alt="img" />
              <div className="text">
                <h4>{item.fullName}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Notification_ShowAll;