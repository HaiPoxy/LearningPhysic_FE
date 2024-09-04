import React, {useState} from 'react';
import {Box, Button, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {styled} from '@mui/system';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// Styled components for better UI
const StyledModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    backgroundColor: '#fff',  // You can replace '#fff' with any color you prefer
    borderRadius: '10px',
    boxShadow: 24,
    padding: '24px',
    outline: 'none',
    overflowY: 'auto',
    maxHeight: '80vh',
});

const StyledCommentBox = styled(Paper)({
    padding: '16px',
    marginBottom: '16px',
    borderLeft: '4px solid #1976d2',
    backgroundColor: '#f5f5f5',  // A neutral background color for the comment box
});

const ChildCommentBox = styled(Box)({
    marginLeft: '16px',
    paddingLeft: '16px',
    borderLeft: '2px solid #ddd',
});

const ActionButtonBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
});

const StyledButton = styled(Button)({
    textTransform: 'none',
    borderRadius: '20px',
});

const ReplyTextField = styled(TextField)({
    marginTop: '12px',
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
    },
});

function ChatDetailsModal({open, onClose, selectedQuestion}) {
    const [newReplies, setNewReplies] = useState({});
    const [newComment, setNewComment] = useState(''); // Independent state for a new comment
    const [showChildComments, setShowChildComments] = useState({});
    const [showReplyInput, setShowReplyInput] = useState({});

    const handleAddReply = (commentId) => {
        const replyContent = commentId ? newReplies[commentId] : newComment;

        if (replyContent && replyContent.trim() !== '' && selectedQuestion.id != null) {
            axios.post("http://localhost:8081/api/v1/comments", {
                "content": replyContent,
                "postId": selectedQuestion.id,
                "parentCommentId": commentId,
                "childCommentIds": [],
                "status": "active",
                "accountId": 1
            }).then((res) => {
                // console.log("res:", res);

                if (commentId) {
                    // Clear reply field after successful submission
                    setNewReplies(prev => ({...prev, [commentId]: ''}));
                } else {
                    // Clear new comment field after submission
                    setNewComment('');
                }
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

    const handleNewCommentChange = (value) => {
        setNewComment(value);
    };

    // useEffect(() => {
    //     // console.log("selectedQuestion: ", JSON.stringify(selectedQuestion));
    // }, [selectedQuestion]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <StyledModalBox>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                {selectedQuestion ? (
                    <>
                        <Typography id="modal-title" variant="h6" sx={{fontWeight: 'bold', mb: 2}}>
                            {selectedQuestion.question}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Người hỏi: </strong> {selectedQuestion.fullName}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Nội dung: </strong>{selectedQuestion.content}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            <strong>Thời gian hỏi: </strong>{selectedQuestion.createdAt}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 3}}>
                            <strong>Các bình luận:</strong>
                        </Typography>
                        {selectedQuestion.comments && selectedQuestion.comments.length > 0 ? (
                            selectedQuestion.comments
                                .filter(comment => !comment.parentCommentId)
                                .map((comment, index) => (
                                    <StyledCommentBox key={index}>
                                        <Typography variant="body2">
                                            <strong>{comment.fullName}:</strong> {comment.content}
                                        </Typography>

                                        {/* Toggle Show Child Comments */}
                                        <ActionButtonBox>
                                            <StyledButton
                                                variant="text"
                                                onClick={() => toggleShowChildComments(comment.id)}
                                                startIcon={showChildComments[comment.id] ? <ArrowDropUpIcon/> :
                                                    <ArrowDropDownIcon/>}>
                                                {showChildComments[comment.id] ? 'Ẩn' : 'Hiện'} câu trả lời
                                            </StyledButton>
                                            <StyledButton variant="text" onClick={() => toggleReplyInput(comment.id)}
                                                          startIcon={<ChatBubbleOutlineIcon/>}>
                                                Trả lời
                                            </StyledButton>
                                        </ActionButtonBox>

                                        {/* Show Child Comments if toggled */}
                                        {showChildComments[comment.id] && comment.childComments?.map((child, childIndex) => (
                                            <ChildCommentBox key={childIndex}>
                                                <Typography variant="body2">
                                                    <strong>{child.fullName}:</strong> {child.content}
                                                </Typography>
                                            </ChildCommentBox>
                                        ))}

                                        {/* Show reply input if toggled */}
                                        {showReplyInput[comment.id] && (
                                            <>
                                                <ReplyTextField
                                                    label="Nhập câu trả lời mới"
                                                    fullWidth
                                                    variant="outlined"
                                                    multiline
                                                    rows={2}
                                                    value={newReplies[comment.id] || ''}
                                                    onChange={(e) => handleNewReplyChange(comment.id, e.target.value)}
                                                />
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleAddReply(comment.id)}
                                                    endIcon={<SendIcon/>}
                                                    sx={{mt: 1}}
                                                >
                                                    Gửi
                                                </Button>
                                            </>
                                        )}
                                    </StyledCommentBox>
                                ))
                        ) : (
                            <Typography variant="body2">Chưa có bình luận nào.</Typography>
                        )}

                        {/* New comment input */}
                        <ReplyTextField
                            label="Nhập bình luận mới"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={2}
                            value={newComment}
                            onChange={(e) => handleNewCommentChange(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddReply(null)}  // Pass null for a new top-level comment
                            endIcon={<SendIcon/>}
                            sx={{mt: 2}}
                        >
                            Bình luận
                        </Button>
                    </>
                ) : (
                    <Typography variant="h6" component="h2">
                        Không có câu hỏi được chọn.
                    </Typography>
                )}
            </StyledModalBox>
        </Modal>
    );
}

export default ChatDetailsModal;
