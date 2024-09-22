import React from 'react'
import './UserProfileMenu_Modal.css'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useUserContext } from '../../context/StoreContext'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'

const UserProfileMenu_Modal = ({ isOpenUserProfile, toggleMenu, modal_userProfileRef, handleLogout, closeUserProfileMenu }) => {

  const { user } = useUserContext();
  const fullName = user.fullName;
  const handleProfileClick = () => {
    closeUserProfileMenu(); // Đóng UserProfileMenu khi click vào "Thông tin cá nhân"
  };

  return (


    isOpenUserProfile && (
      <div className='sub-menu' ref={modal_userProfileRef} >
        <div className='sub-menu-user-info'>
          <p>{fullName}</p>
        </div>
        <hr />
        <Link to='/user-profile' className='sub-menu-link' onClick={handleProfileClick}>
          <CgProfile className='icon' />
          <p>Thông tin cá nhân</p>
        </Link>
        {/* <a href="#" className='sub-menu-link' >
          <FaUserEdit className='icon' />
          <p>Chỉnh sửa hồ sơ</p>
        </a> */}
        <a href="#" className='sub-menu-link' >
          <IoIosSettings className='icon' />
          <p>Cài đặt</p>

        </a>
        <a href="#" className='sub-menu-link' onClick={handleLogout}>
          <RiLogoutBoxRLine className='icon' />
          <p>Đăng xuất</p>

        </a>
      </div >
    )

  )
}

export default UserProfileMenu_Modal
