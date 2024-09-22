import React, { useEffect, useState } from 'react';
import './Notification_Modal.css';
import avatar1 from '../../assets/notification_image/avatar1.png';
import avatar2 from '../../assets/notification_image/avatar2.png';
import avatar3 from '../../assets/notification_image/avatar3.png';
import avatar4 from '../../assets/notification_image/avatar4.png';
import avatar5 from '../../assets/notification_image/avatar5.png';
import avatar6 from '../../assets/notification_image/avatar6.png';
import avatar7 from '../../assets/notification_image/avatar7.png';
import avatar8 from '../../assets/notification_image/avatar8.png';
import avatar9 from '../../assets/notification_image/avatar9.png';
import avatar10 from '../../assets/notification_image/avatar10.png';
import avatar11 from '../../assets/notification_image/avatar11.png';
import avatar12 from '../../assets/notification_image/avatar12.png';
import avatar13 from '../../assets/notification_image/avatar13.png';
import avatar14 from '../../assets/notification_image/avatar14.png';
import avatar15 from '../../assets/notification_image/avatar15.png';
import { Link } from 'react-router-dom';
import { notification } from '../../data/notification.js'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const Notification_Modal = ({ isOpenNotification, setIsOpenNotification, modal_NotificationRef
}) => {


  const [showAll, setShowAll] = useState(false);


  const handleShowAll = () => {
    setShowAll(true);
    setIsOpenNotification(false);
  };



  return (
    isOpenNotification && (
      <div className="notification-modal" ref={modal_NotificationRef} >
        <div className="modal-body" >
          <div className="modal-header">
            <h3>Thông báo</h3>

            {/* <a href='#' onClick={handleShowAll}>Xem tất cả</a> */}
            <Link to="/notification-showAll" onClick={handleShowAll}>
              Xem tất cả
            </Link>

          </div>

          <div className="content">
            {notification.map((avatar, index) => (
              <div className="notifi-item" key={index}>
                <img src={avatar.image} alt="img" />
                <div className="text">
                  <h4>{avatar.fullName}</h4>
                  <p>{avatar.description}</p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    )
  );
};

export default Notification_Modal;