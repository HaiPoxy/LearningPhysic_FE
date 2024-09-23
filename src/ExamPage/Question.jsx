import React from 'react';
import { Routes, Route ,Link} from "react-router-dom";
function Question({ currentQuestion, userAnswers, handleAnswer, submitted }) {
    // Dữ liệu 20 câu hỏi và các đáp án
    const questionData = {
        1: { question: "Thủ đô của Việt Nam là gì?", options: { A: "Hà Nội", B: "TP. Hồ Chí Minh", C: "Đà Nẵng", D: "Huế" }, correctAnswer: "A" },
        2: { question: "Nước nào lớn nhất thế giới?", options: { A: "Trung Quốc", B: "Nga", C: "Mỹ", D: "Canada" }, correctAnswer: "B" },
        3: { question: "Loài vật nào lớn nhất trên Trái Đất?", options: { A: "Voi", B: "Cá voi xanh", C: "Hà mã", D: "Tê giác" }, correctAnswer: "B" },
        4: { question: "Ngọn núi cao nhất thế giới?", options: { A: "Everest", B: "Phú Sĩ", C: "K2", D: "Kilimanjaro" }, correctAnswer: "A" },
        5: { question: "Năm có 365 ngày trừ năm nào?", options: { A: "Năm nhuận", B: "Năm bình thường", C: "Năm âm", D: "Năm chẵn" }, correctAnswer: "A" },
        6: { question: "Ngôi sao nào gần Trái Đất nhất?", options: { A: "Mặt Trăng", B: "Sao Kim", C: "Mặt Trời", D: "Sao Hỏa" }, correctAnswer: "C" },
        7: { question: "Kim loại nào có tính dẫn điện tốt nhất?", options: { A: "Đồng", B: "Bạc", C: "Vàng", D: "Sắt" }, correctAnswer: "B" },
        8: { question: "Ai là người đầu tiên đặt chân lên Mặt Trăng?", options: { A: "Neil Armstrong", B: "Yuri Gagarin", C: "Buzz Aldrin", D: "John Glenn" }, correctAnswer: "A" },
        9: { question: "Tác giả của bộ truyện Harry Potter?", options: { A: "J.K. Rowling", B: "J.R.R. Tolkien", C: "George R.R. Martin", D: "Stephen King" }, correctAnswer: "A" },
        10: { question: "Quốc gia nào tổ chức World Cup 2018?", options: { A: "Brazil", B: "Nga", C: "Pháp", D: "Mỹ" }, correctAnswer: "B" },
        11: { question: "Số Pi có giá trị gần bằng?", options: { A: "3.14", B: "2.17", C: "1.62", D: "4.67" }, correctAnswer: "A" },
        12: { question: "Bài thơ 'Truyện Kiều' là của ai?", options: { A: "Nguyễn Du", B: "Tố Hữu", C: "Xuân Diệu", D: "Nguyễn Bính" }, correctAnswer: "A" },
        13: { question: "Thể loại nhạc nào ra đời từ văn hóa hip hop?", options: { A: "Rock", B: "Jazz", C: "Rap", D: "Pop" }, correctAnswer: "C" },
        14: { question: "Quốc gia nào có diện tích lớn thứ hai trên thế giới?", options: { A: "Canada", B: "Nga", C: "Mỹ", D: "Trung Quốc" }, correctAnswer: "A" },
        15: { question: "Chữ cái đầu tiên trong bảng chữ cái?", options: { A: "A", B: "B", C: "C", D: "D" }, correctAnswer: "A" },
        16: { question: "Môn thể thao nào sử dụng vợt và quả bóng nỉ?", options: { A: "Bóng đá", B: "Bóng rổ", C: "Tennis", D: "Bóng chuyền" }, correctAnswer: "C" },
        17: { question: "Công thức hóa học của nước?", options: { A: "H2O", B: "CO2", C: "O2", D: "HCl" }, correctAnswer: "A" },
        18: { question: "Vườn quốc gia Phong Nha - Kẻ Bàng thuộc tỉnh nào?", options: { A: "Quảng Trị", B: "Quảng Bình", C: "Huế", D: "Nghệ An" }, correctAnswer: "B" },
        19: { question: "Loài hoa nào là biểu tượng của Nhật Bản?", options: { A: "Hoa Anh Đào", B: "Hoa Hồng", C: "Hoa Lan", D: "Hoa Cúc" }, correctAnswer: "A" },
        20: { question: "Tàu Titanic chìm vào năm nào?", options: { A: "1910", B: "1912", C: "1915", D: "1918" }, correctAnswer: "B" },
    };

    const { question, options, correctAnswer } = questionData[currentQuestion] || {};

    return question ? (
        <div>
            <h4>{question}</h4>
            <form>
                {Object.keys(options).map((key) => (
                    <div className="radio" key={key}>
                        <label>
                            <input
                                type="radio"
                                name="answer"
                                value={key}
                                checked={userAnswers[currentQuestion] === key}
                                onChange={() => handleAnswer(currentQuestion, key)}
                                disabled={submitted} // Không thể chọn lại sau khi đã nộp bài
                            />{' '}
                            {key}. {options[key]}
                            {submitted && (
                                <span className="float-right">
                                    {key === correctAnswer ? (
                                        <span className="text-success"> (Đúng) </span>
                                    ) : userAnswers[currentQuestion] === key ? (
                                        <span className="text-danger"> (Sai) </span>
                                    ) : null}
                                </span>
                            )}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    ) : (
        <p>Chọn một câu hỏi để hiển thị</p>
    );
}

export default Question;
