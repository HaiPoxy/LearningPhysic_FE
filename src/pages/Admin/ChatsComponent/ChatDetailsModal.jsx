import React, {useEffect, useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import axios from "axios";

function ChatDetailsModal({open, onClose, selectedQuestion}) {
    const [newReply, setNewReply] = useState('');

    const handleAddReply = () => {
        if (newReply.trim() !== '') {
            axios.post("http://localhost:8081/api/v1/comments", {
                    "content": newReply,
                    "postId": selectedQuestion.id,
                    "parentCommentId": selectedQuestion.parentCommentId != null ? selectedQuestion.parentCommentId : null,
                    "childCommentIds": [],
                    "status": "active",
                    "accountId": 4
                }
            ).then((res) => {
                console.log("res : + ", res)
            })
            // addReply(selectedQuestion.id, newReply);
            setNewReply('');
            // onClose(); // Close the modal after adding a reply
        }
    };
    useEffect(() => {
        console.log("selectedQuestion: ", JSON.stringify(selectedQuestion))
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
                p: 4,
                outline: 'none',
                overflowY: 'auto',
            }}>
                {selectedQuestion ? (
                    <>
                        <Typography id="modal-title" variant="h6" component="h2" sx={{mb: 2, fontWeight: 'bold'}}>
                            {selectedQuestion.question}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Người hỏi:</strong> {selectedQuestion.fullName}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Email:</strong> {selectedQuestion.email}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Thời gian hỏi:</strong> {selectedQuestion.createdAt}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Lớp:</strong> {selectedQuestion.grade}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Trạng thái:</strong> {selectedQuestion.status}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 3}}>
                            <strong>Các bình luận:</strong>
                        </Typography>
                        {selectedQuestion.comments.map((comment, index) => (
                            <Box key={index} sx={{mb: 2, pl: 2, borderLeft: '2px solid #ddd'}}>
                                <Typography variant="body2">
                                    <strong>{comment.fullName}:</strong> {comment.content}
                                </Typography>
                                <Box>
                                    <Typography>Hiện</Typography> <Typography>Trả lời</Typography>
                                </Box>
                                {comment.childComments && comment.childComments.map((child, childIndex) => (
                                    <Typography key={childIndex} variant="body2" sx={{ml: 2, mt: 1}}>
                                        <strong>{child.fullName}:</strong> {child.content}
                                    </Typography>
                                ))}
                            </Box>
                        ))}

                        {/* Input for new reply */}
                        <TextField
                            label="Nhập câu trả lời mới"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={4}
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            sx={{mt: 2}}
                        />
                        <Box sx={{mt: 2}}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAddReply}
                                disabled={newReply.trim() === ''}
                            >
                                Trả lời
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={onClose}
                                sx={{ml: 2}}
                            >
                                Đóng
                            </Button>
                        </Box>
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
