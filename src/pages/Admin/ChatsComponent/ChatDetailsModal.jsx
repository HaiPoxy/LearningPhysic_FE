import React, {useEffect, useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

function ChatDetailsModal({open, onClose, selectedQuestion}) {
    const [newReplies, setNewReplies] = useState({});
    const [showChildComments, setShowChildComments] = useState({});
    const [showReplyInput, setShowReplyInput] = useState({});

    const handleAddReply = (commentId) => {
        const replyContent = newReplies[commentId];

        if (replyContent.trim() !== '' && selectedQuestion.id != null) {
            axios.post("http://localhost:8081/api/v1/comments", {
                "content": replyContent,
                "postId": selectedQuestion.id,
                "parentCommentId": commentId,
                "childCommentIds": [],
                "status": "active",
                "accountId": 4
            }).then((res) => {
                console.log("res: lan 1 ", res);
                // Clear reply field after successful submission
                setNewReplies(prev => ({...prev, [commentId]: ''}));
            });
        }
    };

    const toggleShowChildComments = (commentId) => {
        setShowChildComments(prevState => ({
            ...prevState,
            [commentId]: !prevState[commentId],
        }));
    };

    const toggleReplyInput = (commentId) => {
        setShowReplyInput(prevState => ({
            ...prevState,
            [commentId]: !prevState[commentId],
        }));
    };

    const handleNewReplyChange = (commentId, value) => {
        setNewReplies(prevState => ({
            ...prevState,
            [commentId]: value,
        }));
    };

    useEffect(() => {
        console.log("selectedQuestion: ", JSON.stringify(selectedQuestion));
    }, [selectedQuestion]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                borderRadius: '10px',
                boxShadow: 24,
                p: 3,
                outline: 'none',
                overflowY: 'auto',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'top',
                    }}
                >
                    <Button
                        variant="link"
                        onClick={onClose}
                        sx={{mt: 2}}
                        startIcon={<CloseIcon/>}
                    >
                    </Button>
                </Box>
                {selectedQuestion ? (
                    <>
                        <Typography id="modal-title" variant="h6" component="h2" sx={{mb: 2, fontWeight: 'bold'}}>
                            {selectedQuestion.question}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Người hỏi:</strong> {selectedQuestion.fullName}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 3}}>
                            <strong>Các bình luận:</strong>
                        </Typography>
                        {selectedQuestion.comments && selectedQuestion.comments.length > 0 ? (
                            selectedQuestion.comments
                                .filter(comment => !comment.parentCommentId)
                                .map((comment, index) => (
                                    <Box key={index} sx={{mb: 2, pl: 2, borderLeft: '2px solid #ddd'}}>
                                        <Typography variant="body2">
                                            <strong>{comment.fullName}:</strong> {comment.content}
                                        </Typography>

                                        {/* Toggle Show Child Comments */}
                                        <Box>
                                            <Button onClick={() => toggleShowChildComments(comment.id)}>
                                                {showChildComments[comment.id] ? 'Ẩn' : 'Hiện'}
                                            </Button>
                                            <Button onClick={() => toggleReplyInput(comment.id)}>Trả lời</Button>
                                        </Box>

                                        {/* Show Child Comments if toggled */}
                                        {showChildComments[comment.id] && comment.childComments?.map((child, childIndex) => (
                                            <Typography key={childIndex} variant="body2" sx={{ml: 2, mt: 1}}>
                                                <strong>{child.fullName}:</strong> {child.content}
                                            </Typography>
                                        ))}

                                        {/* Show reply input if toggled */}
                                        {showReplyInput[comment.id] && (
                                            <>
                                                <TextField
                                                    label="Nhập câu trả lời mới"
                                                    fullWidth
                                                    variant="outlined"
                                                    multiline
                                                    rows={2}
                                                    value={newReplies[comment.id] || ''}
                                                    onChange={(e) => handleNewReplyChange(comment.id, e.target.value)}
                                                    sx={{mt: 2}}
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleAddReply(comment.id)}
                                                    sx={{mt: 1}}
                                                >
                                                    Trả lời
                                                </Button>
                                            </>

                                        )}
                                    </Box>
                                ))
                        ) : (
                            <Typography variant="body2">Chưa có bình luận nào.</Typography>
                        )}
                    </>
                ) : (
                    <Typography variant="h6" component="h2">
                        No question selected.
                    </Typography>
                )}
            </Box>
        </Modal>
    );
}

export default ChatDetailsModal;
