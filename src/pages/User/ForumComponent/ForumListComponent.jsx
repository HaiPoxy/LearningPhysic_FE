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
import {Favorite, FavoriteBorder} from '@mui/icons-material';


function ForumListComponent() {
    const [showReplyInput, setShowReplyInput] = useState({});
    const [showAllComments, setShowAllComments] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 2;

    const [data, setData] = useState([
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
    ]);
    const [favoritePost, setFavoritePost] = useState([1, 2]);
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

        // Create a new data array with the updated comments
        const newData = [...data];
        newData[0].comments[commentIndex].commentchilds.push({
            name: "You", // Replace with the actual user name
            comment: value,
        });

        // Update the state with the modified data
        setData(newData);

        // Hide the reply input field
        setShowReplyInput((prevShowReplyInput) => ({
            ...prevShowReplyInput,
            [commentIndex]: false,
        }));
        handleShowAllComments(commentIndex);
    };

    const handleShowAllComments = (commentIndex) => {
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [commentIndex]: !prevShowAllComments[commentIndex],
        }));
    };
    const handleAddFavorite = (postId) => {
        console.log('handleAddFavorite' + postId)
        setFavoritePost((prevFavorites) => [...prevFavorites, postId]);
    };

    const handleRemoveFavorite = (postId) => {
        console.log('handleRemoveFavorite' + postId)
        setFavoritePost((prevFavorites) =>
            prevFavorites.filter((id) => id !== postId)
        );
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
                                {favoritePost.includes(item.id) ? (
                                    <Favorite fontSize="normal" onClick={() => handleRemoveFavorite(item.id)}/>
                                ) : (
                                    <FavoriteBorder fontSize="normal" onClick={() => handleAddFavorite(item.id)}/>
                                )}
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
                                    <Typography variant="body2">
                                        <strong>{user.name}:</strong> {user.comment}
                                    </Typography>
                                    {showAllComments[i] ? (
                                        <>
                                            {
                                                user.commentchilds?.map((child, j) => (
                                                    <Typography
                                                        key={j}
                                                        variant="body2"
                                                        sx={{mt: 1, ml: 4}}
                                                    >
                                                        <strong>{child.name}:</strong> {child.comment}
                                                    </Typography>
                                                ))}
                                            <Button
                                                size="small"
                                                onClick={() => handleShowAllComments(i)}
                                                sx={{fontSize: '0.65rem'}}
                                            >
                                                Ẩn
                                            </Button>

                                        </>
                                    ) : (
                                        <Button size="small" onClick={() => handleShowAllComments(i)}
                                                sx={{fontSize: '0.65rem'}}>
                                            Xem thêm
                                        </Button>
                                    )}
                                    <Button size="small"
                                            onClick={() => handleReplyClick(i)}
                                            sx={{fontSize: '0.65rem'}}>
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

export default ForumListComponent;
