import React, { useEffect, useState } from 'react'
import './InformationAndAdvice.css'
import { HiOutlinePhone } from 'react-icons/hi';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InformationAndAdvice = () => {

  // const { user } = useUserContext();
  // const fullName = user.fullName;

  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    selectedClass: '',
    additionalRequests: ''
  });

  const handleClose = () => {
    setData({

      fullName: fullName,
      phoneNumber: '',
      selectedClass: '',
      additionalRequests: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    console.log("...data", data);

  }, [data]);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    // if (data.phoneNumber.trim() === '') {
    //   toast.error('Vui lòng nhập số điện thoại!');
    //   return;
    // } else if (data.selectedClass.trim() === '') {
    //   toast.error('Vui lòng chọn lớp học!');
    //   return;
    // } else {

    //   axios.post('http://localhost:3000/registerInformation', data)
    //     .then((res) => {
    //       toast.success('Đăng kí thành công!');
    //       console.log('response.data...', res.data);
    //       handleClose();
    //     })
    //     .catch((error) => {
    //       console.error('error...', error);
    //     });
    // }
  };

  return (
    <div >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: "100000" }}
      />
      <div className='informationAndAdvice'>
        <div className="advice">
          <div className='advice-title'>
            <h1>Thông tin liên hệ</h1>
          </div>

          <div className="advice-content">
            <div className="advice-item">
              <a href="tel:0123-456-789">
                <FaPhoneAlt className="icon" />
              </a>

              <p>Số điện thoại:0123-456-789</p>
            </div>

            <div className="advice-item">
              <a href="link-to-location">
                <IoLocationSharp className="icon" />
              </a>
              <p>Địa chỉ: 123 Đường ABC, Phường XYZ, Thành phố ABC</p>
            </div>
            <div className="advice-item">
              <a href="mailto:example@example.com">
                <MdEmail className="icon" />
              </a>
              <p>
                <a href="mailto:example@example.com">Email:example@example.com</a>
              </p>
            </div>

            <div className='btn-container'>
              <button className='app-download-btn'>TẢI ỨNG DỤNG</button>
              <button className='connect-btn'>KẾT NỐI VỚI CHÚNG TÔI</button>
            </div>

          </div>

        </div>

        <div className="information"  >
          <div className='information-title'>
            <h1>Thông tin tư vấn</h1>
          </div>


          <form className='form-register' onSubmit={handleSubmit}>
            <input
              type="text"
              name='fullName'
              value={data.fullName}
              onChange={handleInputChange}
              placeholder='Họ và tên'
              // onClick={handleInputClick}
              required />
            <input
              type="tel"
              name='phoneNumber'
              value={data.phoneNumber}
              onChange={handleInputChange}
              placeholder='Số điện thoại'
            // onClick={handleInputClick}
            />
            <select
              name="selectedClass"
              value={data.selectedClass}
              onChange={handleInputChange}

            // onClick={handleInputClick}
            >
              <option value="">Chọn lớp</option>
              <option value="6">Lớp 6</option>
              <option value="7">Lớp 7</option>
              <option value="8">Lớp 8</option>
              <option value="9">Lớp 9</option>
              <option value="10">Lớp 10</option>
              <option value="11">Lớp 11</option>
              <option value="12">Lớp 12</option>
            </select>

            <textarea
              name="additionalRequests"
              value={data.additionalRequests}
              onChange={handleInputChange}
              rows="3"
              placeholder='Yêu cầu thêm (nếu có)'>
              {/* onClick={handleInputClick} */}
            </textarea>
            <button type="submit">GỬI ĐĂNG KÝ</button>
          </form>


        </div>
      </div>
    </div>

  )
}

export default InformationAndAdvice;