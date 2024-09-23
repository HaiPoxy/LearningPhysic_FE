
import React, { useState } from 'react';
import ExamContent from './ExamContent';
 import { Routes, Route ,Link} from "react-router-dom";
function ExamList() {
    // State để theo dõi lớp đang được chọn
    const [selectedClass, setSelectedClass] = useState(null);

    // Hàm xử lý sự kiện khi nhấn vào nút
    const handleButtonClick = (className) => {
        setSelectedClass(className);  // Cập nhật lớp được chọn
    };

    const classes = ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12'];

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Phần bên trái với 20% chiều rộng và viền */}
                <div className="col-md-2" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
                    <ul className="nav nav-pills nav-stacked text-left">
                        {classes.map((className, index) => (
                            <li key={index} style={{ marginBottom: '30px' }}>
                                <button
                                    className={`btn ${selectedClass === className ? 'btn-danger' : 'btn-primary'}`}
                                    onClick={() => handleButtonClick(className)}
                                >
                                    {className}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Phần bên phải với 80% chiều rộng và viền */}
                <div className="col-md-8" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
                    {/* Hiển thị nội dung tương ứng với lớp được chọn */}
                    <ExamContent selectedClass={selectedClass} />
                </div>
            </div>
        </div>
    );
}

export default ExamList;







