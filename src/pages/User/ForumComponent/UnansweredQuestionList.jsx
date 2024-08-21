// UnansweredQuestionList
import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Pagination,
    TextField,
    Typography,
} from '@mui/material';
import {FavoriteBorder} from '@mui/icons-material';

function UnansweredQuestionList() {
    const [showReplyInput, setShowReplyInput] = useState({});
    const [replies, setReplies] = useState({});
    const [showAllComments, setShowAllComments] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 2;

    const data = [
        {
            id: 1,
            name: "Nông Văn Điền",
            avatar: "NVĐ",
            timestamp: "22 giờ trước",
            content: "Một vật thể có khối lượng 5 kg được thả rơi tự do từ độ cao 10 mét. Hãy tính vận tốc của vật khi chạm đất. Biết rằng gia tốc trọng trường là 9,8 m/s².",
            comments: [
                {
                    name: "Nguyễn Văn A",
                    comment: "Vận tốc khi chạm đất khoảng 14 m/s.",
                    commentchilds: [
                        {name: "Trần Thị B", comment: "Có thể tính bằng công thức v = √(2 * g * h)."},
                        {name: "Lê Văn C", comment: "Câu hỏi này rất hay!"},
                    ],
                },
                {name: "Trần Thị B", comment: "Có thể tính bằng công thức v = √(2 * g * h)."},
                {name: "Lê Văn C", comment: "Câu hỏi này rất hay!"},
            ],
        },
    ];

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleReplyClick = (commentIndex) => {
        setShowReplyInput((prevShowReplyInput) => ({
            ...prevShowReplyInput,
            [commentIndex]: !prevShowReplyInput[commentIndex],
        }));
    };

    const handleReplySubmit = (commentIndex, value) => {
        if (!value.trim()) return;
        setReplies((prevReplies) => ({
            ...prevReplies,
            [commentIndex]: [...(prevReplies[commentIndex] || []), value],
        }));
        setShowReplyInput((prevShowReplyInput) => ({
            ...prevShowReplyInput,
            [commentIndex]: false,
        }));
    };

    const handleShowAllComments = (commentIndex) => {
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [commentIndex]: true,
        }));
    };

    return (
        <>
            {data.map((item, index) => (
                <Card
                    key={item.id}
                    sx={{
                        mb: 3,
                        position: 'relative',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: 6,
                        },
                    }}
                >
                    <CardContent sx={{textAlign: 'left'}}>
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{bgcolor: 'red', mr: 2}}>{item.avatar}</Avatar>
                            <Box>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {item.timestamp}
                                </Typography>
                            </Box>
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    color: 'red',
                                }}
                            >
                                <FavoriteBorder fontSize="normal"/>
                            </IconButton>
                        </Box>
                        <Typography sx={{mt: 1.5}}>{item.content}</Typography>
                        <Divider
                            sx={{
                                my: 2,
                                borderBottomWidth: 1,
                                borderColor: 'rgba(0, 0, 0, 0.8)',
                            }}
                        />
                        <Box sx={{mb: 3}}>
                            {item.comments.map((user, i) => (
                                <Box key={i} sx={{mb: 1}}>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>{user.name}:</strong> {user.comment}
                                    </Typography>
                                    {showAllComments[i] ? (
                                        user.commentchilds?.map((child, j) => (
                                            <Typography
                                                key={j}
                                                variant="body2"
                                                sx={{mt: 1, ml: 4}}
                                            >
                                                <strong>{child.name}:</strong> {child.comment}
                                            </Typography>
                                        ))
                                    ) : (
                                        <Button size="small" onClick={() => handleShowAllComments(i)}>
                                            Xem thêm
                                        </Button>
                                    )}
                                    <Button size="small" onClick={() => handleReplyClick(i)}>
                                        Trả lời
                                    </Button>
                                    {showReplyInput[i] && (
                                        <Box sx={{mt: 1}}>
                                            <TextField
                                                fullWidth
                                                placeholder="Nhập trả lời của bạn ở đây"
                                                variant="outlined"
                                                sx={{mr: 2}}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleReplySubmit(i, e.target.value);
                                                        e.target.value = '';
                                                    }
                                                }}
                                            />
                                        </Box>
                                    )}
                                    {replies[i] &&
                                        replies[i].map((reply, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="body2"
                                                sx={{mt: 1, ml: 4}}
                                            >
                                                {reply}
                                            </Typography>
                                        ))}
                                </Box>
                            ))}
                        </Box>
                        <Box display="flex" alignItems="center">
                            <TextField
                                fullWidth
                                placeholder="Nhập câu trả lời của bạn ở đây"
                                variant="outlined"
                                sx={{mr: 2}}
                            />
                            <Button variant="contained">Trả lời nhanh</Button>
                        </Box>
                    </CardContent>
                </Card>
            ))}
            <Pagination
                count={Math.ceil(data.length / commentsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{mt: 2, display: 'flex', justifyContent: 'center'}}
            />
        </>
    );
}

export default UnansweredQuestionList;

