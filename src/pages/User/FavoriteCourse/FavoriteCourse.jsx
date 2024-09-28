import React from 'react';
import './FavoriteCourse.css';
import nc16 from '../../../assets/advance_Courses/nc16.png';
import cb14 from '../../../assets/basic_Courses/cb14.png';
import { FaHeart } from 'react-icons/fa';

const FavoriteCourse = () => {

  const listFavoriteCourse = [
    {
      id: 1,
      image: nc16,
      title_1: "Vật lý lớp 9 NC",
      title_2: "Vật lý lớp 9 Nâng Cao",
      price: "1.000.000 đ"
    },
    {
      id: 2,
      image: cb14,
      title_1: "Vật lý lớp 7 CB",
      title_2: "Vật lý lớp 7 Cơ bản",
      price: "Miễn phí"
    },
  ]

  return (
    <div className='favorite-Courses'>
      <div className='favorite-Courses-title'>
        <h2>Khoá học yêu thích  của bạn</h2>
      </div>

      <div className='favorite-Courses-cart'>
        {listFavoriteCourse.map((item, index) => (
          <div className='favorite-Courses-cart-list' key={index}>
            <div className='favorite-Courses-cart-top'>
              <img src={item.image} alt={item.title_1} />
              <div className='favorite-Courses-cart-top-content'>
                <h1>{item.title_1}</h1>
              </div>
            </div>
            <div className='favorite-Courses-cart-bottom'>
              <div className='top'>
                <a href='#'>{item.title_2}</a>
                <FaHeart style={{ color: "red", fontSize: "20px", marginTop: "3px" }} />
              </div>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCourse;