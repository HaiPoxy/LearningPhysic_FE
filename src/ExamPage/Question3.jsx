import React from 'react';

function Question3({ currentQuestion, userAnswers, handleAnswer, submitted }) {
    // Dữ liệu 20 câu hỏi và các đáp án
    const questionData = {
        1: { question: "Hệ mặt trời có bao nhiêu hành tinh?", options: { A: "8", B: "9", C: "7", D: "6" }, correctAnswer: "A" },
        2: { question: "Thành phố nào được biết đến là 'Thành phố vĩnh cửu'?", options: { A: "Paris", B: "London", C: "Rome", D: "New York" }, correctAnswer: "C" },
        3: { question: "Hóa học là nghiên cứu về gì?", options: { A: "Sự sống", B: "Chất và sự biến đổi của chất", C: "Chuyển động", D: "Thời gian" }, correctAnswer: "B" },
        4: { question: "Môn thể thao nào có vòng đua?", options: { A: "Bóng rổ", B: "Bóng đá", C: "Điền kinh", D: "Đua xe" }, correctAnswer: "D" },
        5: { question: "Đại dương nào lớn nhất trên thế giới?", options: { A: "Đại Tây Dương", B: "Thái Bình Dương", C: "Ấn Độ Dương", D: "Bắc Băng Dương" }, correctAnswer: "B" },
        6: { question: "Hình dạng của Trái Đất là gì?", options: { A: "Hình cầu", B: "Hình chóp", C: "Hình vuông", D: "Hình chữ nhật" }, correctAnswer: "A" },
        7: { question: "Nước nào nổi tiếng với các kim tự tháp?", options: { A: "Mexico", B: "Ai Cập", C: "Hy Lạp", D: "Thái Lan" }, correctAnswer: "B" },
        8: { question: "Số nguyên tố đầu tiên là gì?", options: { A: "0", B: "1", C: "2", D: "3" }, correctAnswer: "C" },
        9: { question: "Ai là người sáng lập Apple?", options: { A: "Bill Gates", B: "Steve Jobs", C: "Mark Zuckerberg", D: "Elon Musk" }, correctAnswer: "B" },
        10: { question: "Cá voi thuộc loại nào?", options: { A: "Thú", B: "Cá", C: "Bò sát", D: "Động vật không xương sống" }, correctAnswer: "A" },
        11: { question: "Thuyết tiến hóa được đề xuất bởi ai?", options: { A: "Darwin", B: "Newton", C: "Einstein", D: "Huxley" }, correctAnswer: "A" },
        12: { question: "Loài chim nào là biểu tượng của hòa bình?", options: { A: "Chim bồ câu", B: "Chim ưng", C: "Chim đại bàng", D: "Chim vạc" }, correctAnswer: "A" },
        13: { question: "Hành tinh nào gần Mặt Trời nhất?", options: { A: "Venus", B: "Mars", C: "Mercury", D: "Jupiter" }, correctAnswer: "C" },
        14: { question: "Thành phố nào được biết đến là 'Thành phố ánh sáng'?", options: { A: "Tokyo", B: "Paris", C: "Berlin", D: "London" }, correctAnswer: "B" },
        15: { question: "Người viết 'Romeo và Juliet' là ai?", options: { A: "Charles Dickens", B: "Mark Twain", C: "William Shakespeare", D: "Jane Austen" }, correctAnswer: "C" },
        16: { question: "Cấu trúc nào là lớn nhất trên Trái Đất?", options: { A: "Himalaya", B: "Cascades", C: "Rockies", D: "Andes" }, correctAnswer: "A" },
        17: { question: "Nơi nào được gọi là 'Lục địa đen'?", options: { A: "Châu Âu", B: "Châu Á", C: "Châu Phi", D: "Châu Mỹ" }, correctAnswer: "C" },
        18: { question: "Ai là Tổng thống đầu tiên của Hoa Kỳ?", options: { A: "George Washington", B: "Thomas Jefferson", C: "Abraham Lincoln", D: "John Adams" }, correctAnswer: "A" },
        19: { question: "Chất nào làm cho máu có màu đỏ?", options: { A: "Hemoglobin", B: "Cholesterol", C: "Insulin", D: "Glucose" }, correctAnswer: "A" },
        20: { question: "Năm nào con người đặt chân lên Mặt Trăng lần đầu tiên?", options: { A: "1965", B: "1969", C: "1971", D: "1973" }, correctAnswer: "B" },
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

export default Question3;
