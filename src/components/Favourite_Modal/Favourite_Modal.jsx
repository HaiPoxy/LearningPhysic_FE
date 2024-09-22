import React from 'react'
import './Favourite_Modal.css'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { FaBookReader, FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Favourite_Modal = ({ isOpenFavourite, modal_favouriteRef,
  toggleFavourite
}) => {

  const handleCloseModal = () => {
    toggleFavourite();
  };


  return (

    isOpenFavourite && (
      <div className='favourite-modal' ref={modal_favouriteRef}>
        <div className='favourite-header'>
          <h5>Yêu thích của bạn</h5>
        </div>
        <hr />
        <div className="favourite-content">
          <Link onClick={handleCloseModal} to='/favorite-course' className='favourite-link'>
            <FaGraduationCap className='icon' />
            <p>Khoá học yêu thích</p>
          </Link>

          <Link onClick={handleCloseModal} to='/favorite-book' className='favourite-link' >
            <FaBookReader className='icon' />
            <p>Sách yêu thích</p>
          </Link>
        </div>
      </div>
    )

  )
}

export default Favourite_Modal