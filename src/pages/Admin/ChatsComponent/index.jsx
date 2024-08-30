// ChatsComponent.jsx
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Box,
    Breadcrumbs,
    Card,
    CardContent,
    IconButton,
    Link,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import ChatDetailsModal from "./ChatDetailsModal.jsx";

function ChatsComponent() {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Fetch data from the API
        axios.get(`http://localhost:8081/api/v1/posts?page=${page}&size=${pageSize}`)
            .then(response => {
                const data = response.data;
                setQuestions(data.content || []);
                setTotalPages(data.totalPages || 1);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
                setQuestions([]);
            });
    }, [page, pageSize]);

    const handleOpen = (question) => {
        setSelectedQuestion(question);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handlePageChange = (event, value) => {
        setPage(value - 1); // Pagination component is 1-based, but API is 0-based
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

                        {/* Questions Table */}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Câu hỏi</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Thời gian hỏi</TableCell>
                                    <TableCell>Nội dung trả lời</TableCell>
                                    <TableCell>Thao tác</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {questions.length > 0 ? (
                                    questions.map((question) => (
                                        <TableRow key={question.id} sx={{
                                            '&:hover': {
                                                backgroundColor: '#f5f5f5',
                                                cursor: 'pointer',
                                            }
                                        }} onClick={() => handleOpen(question)}>
                                            <TableCell>{question.id}</TableCell>
                                            <TableCell>{question.title}</TableCell>
                                            <TableCell>{question.email}</TableCell>
                                            <TableCell>{new Date(question.createdAt).toLocaleString()}</TableCell>
                                            <TableCell>{question.comments.length > 0 ? "Có trả lời" : "Chưa trả lời"}</TableCell>
                                            <TableCell>
                                                <IconButton size="small" color="warning"
                                                            onClick={() => handleOpen(question)}>
                                                    <EditIcon/>
                                                </IconButton>
                                                <IconButton size="small" color="error">
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <IconButton size="small" color="success"
                                                            onClick={() => handleOpen(question)}>
                                                    <ReplyIcon/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No questions available.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>

                        {/* Pagination */}
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3}}>
                            <Typography variant="body2">
                                Total Pages: {totalPages}
                            </Typography>
                            <Pagination
                                count={totalPages}
                                color="primary"
                                page={page + 1}
                                onChange={handlePageChange}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Modal Component */}
            <ChatDetailsModal open={open} onClose={handleClose} selectedQuestion={selectedQuestion}/>
        </>
    );
}

export default ChatsComponent;
