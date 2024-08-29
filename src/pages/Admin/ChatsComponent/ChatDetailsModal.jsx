import React, {useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

function ChatDetailsModal({open, onClose, selectedQuestion, addReply}) {
    const [newReply, setNewReply] = useState('');

    const handleAddReply = () => {
        if (newReply.trim() !== '') {
            addReply(selectedQuestion.id, newReply);
            setNewReply('');
        }
    };

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
                width: 600,  // Adjusted width
                bgcolor: 'background.paper',
                borderRadius: '10px',
                boxShadow: 24,
                p: 4,
                outline: 'none',
                overflowY: 'auto', // Handle overflow content
            }}>
                {selectedQuestion && (
                    <>
                        <Typography id="modal-title" variant="h6" component="h2" sx={{mb: 2, fontWeight: 'bold'}}>
                            {selectedQuestion.question}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Người hỏi:</strong> {selectedQuestion.asker}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Email:</strong> {selectedQuestion.email}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Thời gian hỏi:</strong> {selectedQuestion.askedAt}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Lớp:</strong> {selectedQuestion.class}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Trạng thái:</strong> {selectedQuestion.status}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 3}}>
                            <strong>Các bình luận:</strong>
                        </Typography>
                        {selectedQuestion.answer.map((comment, index) => (
                            <Box key={index} sx={{mb: 2, pl: 2, borderLeft: '2px solid #ddd'}}>
                                <Typography variant="body2">
                                    <strong>{comment.name}:</strong> {comment.comment}
                                </Typography>
                                {comment.commentchilds && comment.commentchilds.map((child, childIndex) => (
                                    <Typography key={childIndex} variant="body2" sx={{ml: 2, mt: 1}}>
                                        <strong>{child.name}:</strong> {child.comment}
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
                        <Button variant="contained" color="primary" onClick={handleAddReply} sx={{mt: 2}}>
                            Trả lời
                        </Button>
                        <Button variant="contained" color="secondary" onClick={onClose} sx={{mt: 2, ml: 2}}>
                            Đóng
                        </Button>
                    </>
                )}
            </Box>
        </Modal>
    );
}

export default ChatDetailsModal;
