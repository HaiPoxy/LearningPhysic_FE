import React from 'react';

function Question2({ currentQuestion, userAnswers, handleAnswer, submitted }) {
    // Dữ liệu 20 câu hỏi và các đáp án mới
    const questionData = {
        1: { question: "Kim tự tháp Ai Cập nằm ở châu lục nào?", options: { A: "Châu Á", B: "Châu Âu", C: "Châu Phi", D: "Châu Mỹ" }, correctAnswer: "C" },
        2: { question: "Người phát minh ra bóng đèn là ai?", options: { A: "Thomas Edison", B: "Nikola Tesla", C: "Albert Einstein", D: "Isaac Newton" }, correctAnswer: "A" },
        3: { question: "Quốc gia nào có thủ đô là Madrid?", options: { A: "Ý", B: "Pháp", C: "Tây Ban Nha", D: "Bồ Đào Nha" }, correctAnswer: "C" },
        4: { question: "Quốc gia nào nổi tiếng với lễ hội Mardi Gras?", options: { A: "Brazil", B: "Pháp", C: "Mỹ", D: "Tây Ban Nha" }, correctAnswer: "C" },
        5: { question: "Ai là người vẽ bức tranh Mona Lisa?", options: { A: "Pablo Picasso", B: "Leonardo da Vinci", C: "Vincent van Gogh", D: "Claude Monet" }, correctAnswer: "B" },
        6: { question: "Nguyên tố hóa học có ký hiệu là Au là gì?", options: { A: "Bạc", B: "Nhôm", C: "Vàng", D: "Đồng" }, correctAnswer: "C" },
        7: { question: "Đơn vị đo cường độ dòng điện là gì?", options: { A: "Volt", B: "Ampe", C: "Ohm", D: "Watt" }, correctAnswer: "B" },
        8: { question: "Bộ phim hoạt hình nào có nhân vật chính là Woody và Buzz Lightyear?", options: { A: "Shrek", B: "Toy Story", C: "Finding Nemo", D: "Frozen" }, correctAnswer: "B" },
        9: { question: "Ngôi sao nào là trung tâm của hệ Mặt Trời?", options: { A: "Sao Kim", B: "Sao Thủy", C: "Mặt Trời", D: "Sao Hỏa" }, correctAnswer: "C" },
        10: { question: "Hồ nào lớn nhất thế giới?", options: { A: "Hồ Baikal", B: "Hồ Michigan", C: "Hồ Caspi", D: "Hồ Victoria" }, correctAnswer: "C" },
        11: { question: "Vật nào rơi nhanh hơn khi không có không khí?", options: { A: "Lông vũ", B: "Viên đá", C: "Cả hai rơi cùng tốc độ", D: "Viên đá rơi nhanh hơn" }, correctAnswer: "C" },
        12: { question: "Thành phố nào nổi tiếng với biểu tượng tháp Eiffel?", options: { A: "London", B: "Paris", C: "New York", D: "Rome" }, correctAnswer: "B" },
        13: { question: "Cơ quan nào trong cơ thể con người bơm máu?", options: { A: "Phổi", B: "Gan", C: "Tim", D: "Thận" }, correctAnswer: "C" },
        14: { question: "Đơn vị đo khoảng cách thiên văn là gì?", options: { A: "Kilomet", B: "Dặm", C: "Năm ánh sáng", D: "Đơn vị thiên văn" }, correctAnswer: "C" },
        15: { question: "Đất nước nào được gọi là 'Xứ sở mặt trời mọc'?", options: { A: "Hàn Quốc", B: "Nhật Bản", C: "Thái Lan", D: "Trung Quốc" }, correctAnswer: "B" },
        16: { question: "Loài chim nào có khả năng bắt chước tiếng người?", options: { A: "Chim én", B: "Chim cánh cụt", C: "Vẹt", D: "Cú" }, correctAnswer: "C" },
        17: { question: "Nhạc cụ nào có phím đàn và dây?", options: { A: "Piano", B: "Violon", C: "Guitar", D: "Cả ba đều đúng" }, correctAnswer: "D" },
        18: { question: "Hệ điều hành phổ biến của Apple là gì?", options: { A: "Windows", B: "Linux", C: "iOS", D: "Android" }, correctAnswer: "C" },
        19: { question: "Vịnh Hạ Long thuộc tỉnh nào?", options: { A: "Quảng Ninh", B: "Hải Phòng", C: "Đà Nẵng", D: "Hà Nội" }, correctAnswer: "A" },
        20: { question: "Thế vận hội mùa hè 2020 được tổ chức tại quốc gia nào?", options: { A: "Pháp", B: "Anh", C: "Nhật Bản", D: "Brazil" }, correctAnswer: "C" },
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

export default Question2;
