import React, { useState } from 'react'
import './BasicCourses.css'

import { basicCourses } from '../../data/basicCourses';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BasicCourses = () => {

  const [changeColor, setChangeColor] = useState(Array(basicCourses.length).fill(false));

  const handleClick = (index) => {
    const updatedColors = [...changeColor];
    updatedColors[index] = !updatedColors[index];
    setChangeColor(updatedColors);
  };

  return (
    <div className='basicCourses'>
      <div className='basicCourses-title'>
        <h2>Khoá học miễn phí</h2>
      </div>

      <div className='basicCourses-cart'>
        {basicCourses.map((item, index) => (
          <div className='basicCourses-cart-list' key={index}>
            <div className='basicCourses-cart-top'>
              <img src={item.image} />
              <div className='basicCourses-cart-top-content'>
                <h1>{item.title_1}</h1>
              </div>

            </div>
            <div className='basicCourses-cart-bottom'>
              <div className='top'>
                <a href='#'>{item.title_2}</a>


                <div style={{ cursor: "pointer" }} onClick={() => handleClick(index)} >
                  {changeColor[index] ? (
                    <FaHeart style={{ color: 'red', fontSize: '20px' }} />
                  ) : (
                    <FaRegHeart style={{ color: 'black', fontSize: '20px' }} />
                  )}
                </div>




              </div>

              <p>{item.price}</p>
            </div>
          </div>
        ))}

      </div>


    </div >
  )
}

export default BasicCourses