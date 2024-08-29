import React, {useState} from 'react';
import {
    Box,
    Breadcrumbs,
    Button,
    Card,
    CardContent,
    IconButton,
    Link,
    MenuItem,
    Modal,
    Pagination,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import ChatDetailsModal from "./ChatDetailsModal.jsx";

function ChatsComponent() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Làm thế nào để tính vận tốc của một vật thể rơi tự do từ độ cao 10 mét?",
            asker: "Nguyễn Văn A",
            email: "nguyenvana@example.com",
            askedAt: "2024-08-14 10:00",
            class: "Lớp 12",
            status: "Đã trả lời",
            answer: [
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
            ]
        },
        {
            id: 2,
            question: "Tại sao gia tốc trọng trường lại là 9,8 m/s²?",
            asker: "Trần Thị B",
            email: "tranthib@example.com",
            askedAt: "2024-08-14 11:00",
            class: "Lớp 9",
            status: "Chưa trả lời",
            answer: [
                {
                    name: "Nguyễn Văn A",
                    comment: "Gia tốc trọng trường là giá trị gia tốc mà mọi vật thể chịu tác động của trọng lực đều trải qua khi rơi tự do."
                },
                {
                    name: "Trần Thị B",
                    comment: "Giá trị này là kết quả của lực hấp dẫn giữa Trái Đất và vật thể, và nó gần như không thay đổi trên bề mặt Trái Đất."
                }
            ]
        },
        {
            id: 3,
            question: "Vận tốc là gì và nó được đo như thế nào?",
            asker: "Lê Văn C",
            email: "levanc@example.com",
            askedAt: "2024-08-14 12:00",
            class: "Lớp 6",
            status: "Đã trả lời",
            answer: [
                {
                    name: "Nguyễn Văn A",
                    comment: "Vận tốc là đại lượng vật lý mô tả sự thay đổi vị trí của vật thể theo thời gian."
                },
                {
                    name: "Trần Thị B",
                    comment: "Nó được đo bằng m/s hoặc km/h và thường được tính bằng công thức v = s/t, trong đó s là quãng đường đi được và t là thời gian."
                },
                {
                    name: "Lê Văn C",
                    comment: "Để đo vận tốc, ta có thể sử dụng đồng hồ bấm giờ và thước đo quãng đường, hoặc các thiết bị đo vận tốc hiện đại hơn như radar hoặc GPS."
                }
            ]
        },
        {
            id: 4,
            question: "Lực hấp dẫn ảnh hưởng thế nào đến quỹ đạo của các hành tinh?",
            asker: "Phạm Thị D",
            email: "phamthid@example.com",
            askedAt: "2024-08-14 13:00",
            class: "Lớp 10",
            status: "Chưa trả lời",
            answer: [
                {
                    name: "Nguyễn Văn A",
                    comment: "Lực hấp dẫn là lực kéo các hành tinh vào quỹ đạo quanh Mặt Trời."
                },
                {
                    name: "Trần Thị B",
                    comment: "Nó giữ cho các hành tinh không bay ra khỏi hệ Mặt Trời và tạo ra quỹ đạo hình elip quanh Mặt Trời."
                },
                {
                    name: "Lê Văn C",
                    comment: "Nếu không có lực hấp dẫn, các hành tinh sẽ di chuyển theo đường thẳng ra khỏi hệ Mặt Trời thay vì quỹ đạo hiện tại."
                }
            ]
        },
        {
            id: 5,
            question: "Tại sao bầu trời có màu xanh?",
            asker: "Lê Thị E",
            email: "lethie@example.com",
            askedAt: "2024-08-14 14:00",
            class: "Lớp 7",
            status: "Đã trả lời",
            answer: [
                {
                    name: "Nguyễn Văn A",
                    comment: "Bầu trời có màu xanh do hiện tượng tán xạ Rayleigh."
                },
                {
                    name: "Trần Thị B",
                    comment: "Ánh sáng xanh bị tán xạ nhiều hơn các màu khác vì nó có bước sóng ngắn hơn."
                },
                {
                    name: "Lê Văn C",
                    comment: "Khi ánh sáng Mặt Trời chiếu vào bầu khí quyển, ánh sáng xanh bị tán xạ ra mọi hướng, làm cho bầu trời có màu xanh."
                }
            ]
        }
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (question) => {
        setSelectedQuestion(question);
        setOpen(true);
    };

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [questionToDelete, setQuestionToDelete] = useState(null);

    const handleOpenDelete = (question) => {
        setQuestionToDelete(question);
        setOpenDeleteModal(true);
    }

    const handleCloseDelete = () => {
        setOpenDeleteModal(false);
        setQuestionToDelete(null);
    }
    const handleConfirmDelete = () => {
        if (questionToDelete) {
            setQuestions(prevQuestions => prevQuestions.filter(q => q.id !== questionToDelete.id));
        }
        handleCloseDelete();
    }


    const handleClose = () => setOpen(false);

    const addReply = (questionId, reply) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.map(q => {
                if (q.id === questionId) {
                    const updatedAnswers = [...q.answer, {name: "Your Name", comment: reply}];
                    return {...q, answer: updatedAnswers};
                }
                return q;
            });
            // Update the selected question directly to reflect changes without re-rendering all questions
            setSelectedQuestion(prevSelected => ({
                ...prevSelected,
                answer: [...prevSelected.answer, {name: "Your Name", comment: reply}]
            }));
            return updatedQuestions;
        });
    };

    const searchQuestions = () => {
        // Implement search logic here
    };

    const filterQuestions = () => {
        // Implement filter logic here
    };

    const sortQuestions = () => {
        // Implement sort logic here
    };

    return (
        <>
            <Box sx={{mb: 3, textAlign: 'left'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        sx={{fontSize: 12}}
                    >
                        Home
                    </Link>
                    <Typography color="text.primary" sx={{fontSize: 12}}>
                        Quản lý hỏi đáp
                    </Typography>
                </Breadcrumbs>
                <Typography variant="h4" component="h1" sx={{mt: 2}}>
                    Quản lý hỏi đáp
                </Typography>

                <Card sx={{
                    width: '80vw',
                    margin: 'auto',
                    mt: 4,
                    boxShadow: 3
                }}>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Danh sách hỏi đáp
                        </Typography>

                        {/* Search and Filter Section */}
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
                            <TextField
                                id="searchInput"
                                label="Tìm kiếm câu hỏi..."
                                variant="outlined"
                                size="small"
                                sx={{flex: 1, mr: 2}}
                                onKeyUp={searchQuestions}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleOpen()}
                                sx={{minWidth: 40, padding: 0}}
                            >
                                <AddIcon/>
                            </Button>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
                            <Select
                                id="filterSelect"
                                defaultValue="all"
                                onChange={filterQuestions}
                                size="small"
                                sx={{width: 200}}
                            >
                                <MenuItem value="" disabled>
                                    Trạng thái câu hỏi
                                </MenuItem>
                                <MenuItem value="all">Tất cả</MenuItem>
                                <MenuItem value="unanswered">Chưa trả lời</MenuItem>
                                <MenuItem value="answered">Đã trả lời</MenuItem>
                                <MenuItem value="hidden">Đã ẩn</MenuItem>
                            </Select>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <span>Sắp xếp:</span>
                                <Select
                                    id="sortSelect"
                                    defaultValue="asc"
                                    onChange={sortQuestions}
                                    size="small"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        padding: 0,
                                        border: 'none',
                                        '.MuiOutlinedInput-notchedOutline': {border: 0},
                                        '& .MuiSvgIcon-root': {marginRight: 0}
                                    }}
                                    IconComponent={() => null}
                                >
                                    <MenuItem value="asc" sx={{justifyContent: 'center', padding: 0}}>
                                        <ArrowUpwardIcon fontSize="small"/>
                                    </MenuItem>
                                    <MenuItem value="desc" sx={{justifyContent: 'center', padding: 0}}>
                                        <ArrowDownwardIcon fontSize="small"/>
                                    </MenuItem>
                                </Select>
                            </Box>
                        </Box>

                        {/* Questions Table */}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Câu hỏi</TableCell>
                                    <TableCell>Người hỏi</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Thời gian hỏi</TableCell>
                                    <TableCell>Lớp</TableCell>
                                    <TableCell>Trạng thái</TableCell>
                                    <TableCell>Nội dung trả lời</TableCell>
                                    <TableCell>Thao tác</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {questions.map((question) => (
                                    <TableRow key={question.id} sx={{
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            cursor: 'pointer',
                                        }
                                    }} onClick={() => handleOpen(question)}>
                                        <TableCell>{question.id}</TableCell>
                                        <TableCell>{question.question}</TableCell>
                                        <TableCell>{question.asker}</TableCell>
                                        <TableCell>{question.email}</TableCell>
                                        <TableCell>{question.askedAt}</TableCell>
                                        <TableCell>{question.class}</TableCell>
                                        <TableCell>{question.status}</TableCell>
                                        <TableCell>{question.answer.length > 0 ? "Có trả lời" : "Chưa trả lời"}</TableCell>
                                        <TableCell>
                                            {/*<IconButton size="small" color="info" onClick={() => handleOpen(question)}>*/}
                                            {/*    <VisibilityIcon/>*/}
                                            {/*</IconButton>*/}
                                            <IconButton size="small" color="warning"
                                                        onClick={() => handleOpen(question)}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => handleOpenDelete(question)}
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                            <IconButton size="small" color="success"
                                                        onClick={() => handleOpen(question)}>
                                                <ReplyIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Pagination */}
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3}}>
                            <Typography variant="body2">
                                Total Pages: {3}
                            </Typography>
                            <Pagination count={3} color="primary"/>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Modal Component */}
            <ChatDetailsModal open={open} onClose={handleClose} selectedQuestion={selectedQuestion}
                              addReply={addReply}/>

            <Modal
                open={openDeleteModal}
                onClose={handleCloseDelete}
                aria-labelledby="delete-modal-title"
                aria-describedby="delete-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    outline: 'none',
                }}>
                    <Typography id="delete-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                        Xác nhận xoá
                    </Typography>
                    <Typography id="delete-modal-description" variant="body2" sx={{mb: 4}}>
                        Bạn có chắc chắn muốn xoá câu hỏi này không?
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" color="error" onClick={handleConfirmDelete} sx={{mr: 2}}>
                            Xoá
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleCloseDelete}>
                            Huỷ
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default ChatsComponent;
