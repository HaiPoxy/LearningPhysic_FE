import React, { useState, useEffect } from 'react';
import Question from './Question'; // Bài tập cho Lớp 6
import Question2 from './Question2'; // Bài tập cho Lớp 7
import Question3 from './Question3'; // Bài tập cho Lớp 8
import { useParams } from "react-router-dom";

function DoingExam() {
    const { className } = useParams();  // Lấy tên lớp từ tham số đường dẫn
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600); // 1 giờ = 3600 giây
    const [score, setScore] = useState(0);
    const buttons = Array.from({ length: 20 }, (_, i) => i + 1); // Tạo danh sách 20 câu hỏi

    const handleAnswer = (questionId, answer) => {
        setUserAnswers({ ...userAnswers, [questionId]: answer });
    };

    const handleSubmit = () => {
        if (Object.keys(userAnswers).length !== buttons.length) {
            alert("Vui lòng trả lời tất cả các câu hỏi!");
            return;
        }
    
        let newScore = 0;
        let correctAnswers = {};
    
        switch (className) {
            case 'Lớp 6':
                correctAnswers = {
                    1: "A", 2: "B", 3: "B", 4: "A", 5: "A", 
                    6: "C", 7: "B", 8: "A", 9: "A", 10: "B", 
                    11: "A", 12: "A", 13: "C", 14: "A", 15: "A", 
                    16: "C", 17: "A", 18: "B", 19: "A", 20: "B"
                };
                break;
            case 'Lớp 7':
                correctAnswers = {
                    1: "C", 2: "A", 3: "C", 4: "C", 5: "B", 
                    6: "C", 7: "B", 8: "B", 9: "C", 10: "C", 
                    11: "C", 12: "B", 13: "C", 14: "C", 15: "B", 
                    16: "C", 17: "D", 18: "C", 19: "A", 20: "C"
                };
                break;
            case 'Lớp 8':
                correctAnswers = {
                    1: "A", 2: "C", 3: "B", 4: "D", 5: "B", 
                    6: "A", 7: "B", 8: "C", 9: "B", 10: "A", 
                    11: "A", 12: "A", 13: "C", 14: "B", 15: "C", 
                    16: "A", 17: "C", 18: "A", 19: "A", 20: "B"
                };
                break;
            default:
                break;
        }
    
        // Tính điểm
        buttons.forEach((questionId) => {
            if (userAnswers[questionId] === correctAnswers[questionId]) {
                newScore++;
            }
        });
    
        setScore(newScore);
        setSubmitted(true);
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0 && !submitted) {
                setTimeLeft(prevTime => prevTime - 1);
            } else if (timeLeft === 0) {
                handleSubmit(); // Tự động nộp bài khi hết giờ
            }
        }, 1000);

        return () => clearInterval(timer); // Dọn dẹp khi component unmount
    }, [timeLeft, submitted]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleReset = () => {
        setCurrentQuestion(1);
        setUserAnswers({});
        setSubmitted(false);
        setTimeLeft(3600); // Reset lại thời gian
        setScore(0);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Phần bên trái chứa các button */}
                <div className="col-md-4" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <div className="row">
                        {buttons.map((number) => (
                            <div key={number} className="col-md-3" style={{ marginBottom: '10px' }}>
                                <button
                                    className={`btn ${currentQuestion === number ? 'btn-danger' : 'btn-primary'} btn-block`}
                                    onClick={() => setCurrentQuestion(number)}
                                >
                                    {number}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4>Thời gian còn lại: {formatTime(timeLeft)}</h4>
                    </div>
                </div>

                {/* Phần bên phải chứa nội dung câu hỏi */}
                <div className="col-md-8" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h3>Câu hỏi {currentQuestion}</h3>
                    {className === "Lớp 6" ? (
                        <Question
                            currentQuestion={currentQuestion}
                            userAnswers={userAnswers}
                            handleAnswer={handleAnswer}
                            submitted={submitted}
                        />
                    ) : className === "Lớp 7" ? (
                        <Question2
                            currentQuestion={currentQuestion}
                            userAnswers={userAnswers}
                            handleAnswer={handleAnswer}
                            submitted={submitted}
                        />
                    ) : (
                        <Question3
                            currentQuestion={currentQuestion}
                            userAnswers={userAnswers}
                            handleAnswer={handleAnswer}
                            submitted={submitted}
                        />
                    )}
                    <br />
                    <button className="btn btn-success" onClick={handleSubmit} disabled={submitted}>
                        {submitted ? 'Đã nộp bài' : 'Nộp bài'}
                    </button>

                    {submitted && (
                        <div className="mt-4">
                            <h4>Điểm số: {score} / {buttons.length}</h4>
                            <p>Chúc mừng, bạn đã hoàn thành bài kiểm tra!</p>
                            <button className="btn btn-primary" onClick={handleReset}>
                                Làm lại
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DoingExam;
