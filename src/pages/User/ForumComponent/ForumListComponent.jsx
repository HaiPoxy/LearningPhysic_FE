import React, {useState} from 'react';
import {Avatar, Box, Button, Card, CardContent, Divider, IconButton, TextField, Typography,} from '@mui/material';
import {FavoriteBorder} from '@mui/icons-material';

function ForumListComponent() {
    const [showReplyInput, setShowReplyInput] = useState(null);
    const [replies, setReplies] = useState({});
    const [showAllComments, setShowAllComments] = useState({});

    const handleReplyClick = (index) => {
        setShowReplyInput(index);
    };

    const handleReplySubmit = (index, value) => {
        if (!value.trim()) return;
        setReplies((prevReplies) => ({
            ...prevReplies,
            [index]: [...(prevReplies[index] || []), value],
        }));
        setShowReplyInput(null);
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [index]: true,
        }));
    };

    const handleShowAllComments = (index) => {
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [index]: true,
        }));
    };

    return (
        <>
            {[...Array(5)].map((_, index) => (
                <Card
                    key={index}
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
                            <Avatar sx={{bgcolor: 'red', mr: 2}}>NVĐ</Avatar>
                            <Box>
                                <Typography variant="h6">Nông Văn Điền</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    22 giờ trước
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
                        <Typography sx={{mt: 1.5}}>
                            Một vật thể có khối lượng 5 kg được thả rơi tự do từ độ cao 10 mét. Hãy tính vận tốc của vật
                            khi chạm đất. Biết rằng gia tốc trọng trường là 9,8 m/s².
                        </Typography>
                        <Divider
                            sx={{
                                my: 2,
                                borderBottomWidth: 1,
                                borderColor: 'rgba(0, 0, 0, 0.8)',
                            }}
                        />
                        <Box sx={{mb: 3}}>
                            {[
                                {name: 'Nguyễn Văn A', comment: 'Vận tốc khi chạm đất khoảng 14 m/s.'},
                                {name: 'Trần Thị B', comment: 'Có thể tính bằng công thức v = √(2 * g * h).'},
                                {name: 'Lê Văn C', comment: 'Câu hỏi này rất hay!'},
                            ].map((user, i) => (
                                <Box key={i} sx={{mb: 1}}>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>{user.name}:</strong> {user.comment}
                                    </Typography>
                                    <Button size="small" onClick={() => handleReplyClick(i)}>
                                        Trả lời
                                    </Button>
                                    {!showAllComments[i] && (
                                        <Button size="small" onClick={() => handleShowAllComments(i)}>
                                            Xem
                                        </Button>
                                    )}
                                    {showReplyInput === i && (
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
                                    {showAllComments[i] && replies[i] &&
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
        </>
    );
}

export default ForumListComponent;
