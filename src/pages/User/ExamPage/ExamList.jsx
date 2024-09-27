import React, { useState } from 'react';
import ExamContent from './ExamContent';
import { Routes, Route, Link } from "react-router-dom";

function ExamList() {
    const [selectedClass, setSelectedClass] = useState(null);

    const handleButtonClick = (className) => {
        setSelectedClass(className);
    };

    const classes = ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12'];

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-3 bg-light border rounded p-3" style={{ height: '500px' }}>
                    <ul className="nav flex-column" style={{ fontSize: '20px' }}>
                        {classes.map((className, index) => (
                            <li key={index} className="mb-3">
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

                <div className="col-md-9 bg-light border rounded p-3">
                    <ExamContent selectedClass={selectedClass} />
                </div>
            </div>
        </div>
    );
}

export default ExamList;