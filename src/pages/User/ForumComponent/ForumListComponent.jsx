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
import axios from "axios";

function ForumListComponent({type, data, setData, page}) {
    const [showReplyInput, setShowReplyInput] = useState({});
    const [showAllComments, setShowAllComments] = useState({});
    const [currentPage, setCurrentPage] = useState(page);
    const commentsPerPage = 2;
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

    const handleReplySubmit = (postIndex, commentIndex, value) => {
        if (!value.trim()) return;
        axios.post("http://localhost:8081/api/v1/comments", {
            content: value,
            postId: data[postIndex].id,
            parentCommentId: data[postIndex].comments[commentIndex].id,
            childCommentIds: [],
            status: "active",
            accountId: 4
        }).then((res) => {
            // Create a new data array with the updated comments
            const newData = [...data];
            newData[postIndex].comments[commentIndex].childComments.push({
                fullName: "You", // Replace with the actual user name
                content: value,
            });

            // Update the state with the modified data
            setData(newData);
        })
        // Hide the reply input field
        setShowReplyInput((prevShowReplyInput) => ({
            ...prevShowReplyInput,
            [commentIndex]: false,
        }));
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [commentIndex]: true,
        }));
    };

    const handleShowAllComments = (commentIndex) => {
        setShowAllComments((prevShowAllComments) => ({
            ...prevShowAllComments,
            [commentIndex]: !prevShowAllComments[commentIndex],
        }));
    };

    const handleAddFavorite = (postId) => {
        setFavoritePost((prevFavorites) => [...prevFavorites, postId]);
    };

    const handleRemoveFavorite = (postId) => {
        setFavoritePost((prevFavorites) =>
            prevFavorites.filter((id) => id !== postId)
        );
    };

    // Calculate paginated data
    const startIndex = (currentPage - 1) * commentsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + commentsPerPage);

    return (
        <>
            {paginatedData.map((item, postIndex) => (
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
                            {/*<Avatar sx={{bgcolor: 'red', mr: 2}}>{item.avatar || item.fullName[0]}</Avatar>*/}
                            <Avatar sx={{bgcolor: 'red', mr: 2}}>
                                {item.avatar ? item.avatar : (item.fullName ? item.fullName[0] : 'Ẩn danh')}
                            </Avatar>

                            <Box>
                                <Typography variant="h6">{item.fullName ? item.fullName : 'Ẩn danh'}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <Typography
                                        variant="caption"
                                        color="text.primary"
                                        sx={{marginRight: 0.5}}
                                    >
                                        Lớp {item.grade}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        -
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{marginLeft: 0.5}}
                                    >
                                        {new Date(item.createdAt).toLocaleString()}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    top: 20,
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
                            {item.comments.map((user, commentIndex) => (
                                <Box key={commentIndex} sx={{mb: 1}}>
                                    <Typography variant="body2">
                                        <strong>{user.fullName ? user.fullName : "Ẩn danh"}:</strong> {user.content}
                                    </Typography>
                                    {showAllComments[commentIndex] ? (
                                        <>
                                            {user.childComments?.map((child, childIndex) => (
                                                <Typography
                                                    key={childIndex}
                                                    variant="body2"
                                                    sx={{mt: 1, ml: 4}}
                                                >
                                                    <strong>{child.fullName}:</strong> {child.content}
                                                </Typography>
                                            ))}
                                            <Button
                                                size="small"
                                                onClick={() => handleShowAllComments(commentIndex)}
                                                sx={{fontSize: '0.65rem'}}
                                            >
                                                Ẩn
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            size="small"
                                            onClick={() => handleShowAllComments(commentIndex)}
                                            sx={{fontSize: '0.65rem'}}
                                        >
                                            Xem thêm
                                        </Button>
                                    )}
                                    <Button
                                        size="small"
                                        onClick={() => handleReplyClick(commentIndex)}
                                        sx={{fontSize: '0.65rem'}}
                                    >
                                        Trả lời
                                    </Button>
                                    {showReplyInput[commentIndex] && (
                                        <Box sx={{mt: 1}}>
                                            <TextField
                                                fullWidth
                                                placeholder="Nhập trả lời của bạn ở đây"
                                                variant="outlined"
                                                sx={{mr: 2}}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleReplySubmit(postIndex, commentIndex, e.target.value);
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
