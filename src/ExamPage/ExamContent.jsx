import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left'
    },
    listItem: {
        marginBottom: '10px'
    },
    link: {
        fontSize: '14px',
        textDecoration: 'none',
        color: 'blue'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: '14px',
        color: 'black'
    }
};

const ExamContent = ({ selectedClass }) => {
    const content = {
        'Lớp 6': (
            <ul style={styles.list}>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 6" style={styles.link}>Chương 1: Lực trong đời sống</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 6" style={styles.link}>Chương 2: Năng lượng</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 6" style={styles.link}>Chương 3: Trái đất và bầu trời</Link></li>
                <li style={styles.listItem}>
                    <span style={styles.boldText}>Bài tập tổng hợp:</span> 
                    <Link to="/doing-exam/Lớp 6" style={styles.link}>Bài 1</Link>, 
                    <Link to="/doing-exam/Lớp 6" style={styles.link}>Bài 2</Link>
                </li>
            </ul>
        ),
        'Lớp 7': (
            <ul style={styles.list}>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 7" style={styles.link}>Chương 1: Tốc độ</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 7" style={styles.link}>Chương 2: Âm thanh</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 7" style={styles.link}>Chương 3: Ánh sáng</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 7" style={styles.link}>Chương 4: Từ</Link></li>
                <li style={styles.listItem}>
                    <span style={styles.boldText}>Bài tập tổng hợp:</span> 
                    <Link to="/doing-exam/Lớp 7" style={styles.link}>Bài 1</Link>, 
                    <Link to="/doing-exam/Lớp 7" style={styles.link}>Bài 2</Link>
                </li>
            </ul>
        ),
        'Lớp 8': (
            <ul style={styles.list}>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 8" style={styles.link}>Chương 1: Khối lượng riêng, áp suất, momen lực</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 8" style={styles.link}>Chương 2: Điện</Link></li>
                <li style={styles.listItem}><Link to="/doing-exam/Lớp 8" style={styles.link}>Chương 3: Nhiệt</Link></li>
                <li style={styles.listItem}>
                    <span style={styles.boldText}>Bài tập tổng hợp:</span> 
                    <Link to="/doing-exam/Lớp 8" style={styles.link}>Bài 1</Link>, 
                    <Link to="/doing-exam/Lớp 8" style={styles.link}>Bài 2</Link>
                </li>
            </ul>
        ),
        // Thêm nội dung cho các lớp khác...
    };

    return (
        <div>
            {content[selectedClass]}
        </div>
    );
};

export default ExamContent;
