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
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReplyIcon from '@mui/icons-material/Reply';
import ListIcon from '@mui/icons-material/List';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';

function ChatsComponent() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Câu hỏi mẫu 1?",
            asker: "Người Hỏi 1",
            email: "email1@example.com",
            askedAt: "2024-08-14 10:00",
            class: "Lớp 9",
            status: "Chưa trả lời",
            answer: ""
        },
        {
            id: 2,
            question: "Câu hỏi mẫu 2?",
            asker: "Người Hỏi 2",
            email: "email2@example.com",
            askedAt: "2024-08-14 11:00",
            class: "Lớp 6",
            status: "Đã trả lời",
            answer: "Đây là câu trả lời mẫu cho câu hỏi 2."
        },
        {
            id: 3,
            question: "Câu hỏi mẫu 3?",
            asker: "Người Hỏi 3",
            email: "email3@example.com",
            askedAt: "2024-08-14 12:00",
            class: "Lớp 7",
            status: "Đã ẩn",
            answer: "Câu hỏi này đã bị ẩn."
        }
    ]);


    const searchQuestions = () => {
        // Implement search logic here
    };

    const filterQuestions = () => {
        // Implement filter logic here
    };

    const sortQuestions = () => {
        // Implement sort logic here
    };

    const addNewQuestion = () => {
        // Implement add new question logic here
    };

    const viewQuestion = (id) => {
        // Implement view question logic here
    };

    const editQuestion = (id) => {
        // Implement edit question logic here
    };

    const deleteQuestion = (id) => {
        // Implement delete question logic here
    };

    const answerQuestion = (id) => {
        // Implement answer question logic here
    };

    const viewAllAnswers = (id) => {
        // Implement view all answers logic here
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                onClick={() => {
                                    // viewQuestion(question.id)
                                    handleOpen()
                                }}
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
                                        width: 40, // Adjust width to fit only the icon
                                        height: 40,
                                        padding: 0,
                                        border: 'none',
                                        '.MuiOutlinedInput-notchedOutline': {border: 0}, // Remove border
                                        '& .MuiSvgIcon-root': {marginRight: 0} // Remove margin from icon
                                    }}
                                    IconComponent={() => null} // Hide default dropdown arrow
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
                                    <TableRow key={question.id}>
                                        <TableCell>{question.id}</TableCell>
                                        <TableCell>{question.question}</TableCell>
                                        <TableCell>{question.asker}</TableCell>
                                        <TableCell>{question.email}</TableCell>
                                        <TableCell>{question.askedAt}</TableCell>
                                        <TableCell>{question.class}</TableCell>
                                        <TableCell>{question.status}</TableCell>
                                        <TableCell>{question.answer}</TableCell>
                                        <TableCell>
                                            <IconButton size="small" color="info"
                                                        onClick={() => {
                                                            viewQuestion(question.id)
                                                            handleOpen()
                                                        }}>
                                                <VisibilityIcon/>
                                            </IconButton>
                                            <IconButton size="small" color="warning"
                                                        onClick={() => {
                                                            viewQuestion(question.id)
                                                            handleOpen()
                                                        }}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton size="small" color="error"
                                                        onClick={() => {
                                                            viewQuestion(question.id)
                                                            handleOpen()
                                                        }}>
                                                <DeleteIcon/>
                                            </IconButton>
                                            <IconButton size="small" color="success"
                                                        onClick={() => {
                                                            viewQuestion(question.id)
                                                            handleOpen()
                                                        }}>
                                                <ReplyIcon/>
                                            </IconButton>
                                            <IconButton size="small" color="secondary"
                                                        onClick={() => {
                                                            viewQuestion(question.id)
                                                            handleOpen()
                                                        }}>
                                                <ListIcon/>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '10px', // Làm tròn góc
                    boxShadow: 24, // Bóng đổ sâu hơn
                    p: 4,
                    outline: 'none', // Xóa viền mặc định
                }}>
                    <Typography id="modal-title" variant="h6" component="h2" sx={{mb: 2, fontWeight: 'bold'}}>
                        Nội dung Modal
                    </Typography>
                    <Typography id="modal-description" sx={{mb: 3}}>
                        Đây là một ví dụ về modal đẹp mắt với kiểu dáng được tùy chỉnh.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleClose} sx={{mt: 2}}>
                        Đóng
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default ChatsComponent;
