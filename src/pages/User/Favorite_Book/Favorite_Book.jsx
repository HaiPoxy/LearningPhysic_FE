import React from 'react';
import './Favorite_Book.css';
import book1 from '../../../assets/list_books/book_1.png';
import book2 from '../../../assets/list_books/book_2.png';
import { FaHeart } from 'react-icons/fa';

const Favorite_Book = () => {
  const listBooks = [
    {
      id: 1,
      image: book1,
      title: "Tuyệt phẩm các chuyên đề vật lý"
    },
    {
      id: 2,
      image: book2,
      title: "Truyện: kể về các nhà khoa học vật lý"
    },
  ];

  return (
    <div className='favorite-books'>
      <div className='favorite-books-title'>
        <h2>Sách yêu thích của bạn</h2>
      </div>

      <div className='favorite-books-cart'>
        {listBooks.map((item, index) => (
          <div className='favorite-books-cart-list' key={index}>
            <div className='favorite-books-cart-top'>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='favorite-books-cart-bottom'>
              <div className='top'>
                <a href='#'>{item.title}</a>
                <FaHeart style={{ color: "red", fontSize: "20px", marginTop: "3px" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite_Book;