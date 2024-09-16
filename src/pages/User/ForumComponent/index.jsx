import React, {useCallback, useEffect, useState} from 'react';
import {
    Badge,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import SearchBarComponent from "./SearchBarComponent.jsx";
import ForumListComponent from "./ForumListComponent.jsx";
import axios from "axios";

function ForumComponent() {
    const [typePost, setTypePost] = useState(0);
    const [grade, setGrade] = useState(0);
    const [search, setSearch] = useState('');
    const [question, setQuestion] = useState({
        content: "",
        grade: ""
    });
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch data from the API
    const fetchData = useCallback(() => {
        console.log("Grade ", grade)
        axios.get(`http://localhost:8081/api/v1/posts`, {
            params: {
                page: page - 1,
                size: pageSize,
                type: typePost,
                grade: grade,
            }
        })
            .then(response => {
                const {content, totalPages} = response.data; // Extract content and totalPages from API response
                setData(content); // Set content to data state
                setTotalPages(totalPages); // Set total pages
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
                setData([]); // Reset data if there's an error
            });
    }, [page, pageSize, typePost, grade]);

    // Call fetchData whenever the page or page size changes
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleQuestionChange = (event) => {
        setQuestion({...question, content: event.target.value});
    };

    const handleGradeChange = (event) => {
        setQuestion({...question, grade: event.target.value});
    };

    const handleSubmit = () => {
        console.log('Submitted question:', question);
    };

    const handlePageChange = (event, value) => {
        setPage(value - 1);
    };

    return (
        <>
            <SearchBarComponent onSubmit={handleSearch}/>

            {/* Header with Search and Buttons */}
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        placeholder="Nhập câu hỏi của bạn ở đây"
                        variant="outlined"
                        value={question.content}
                        onChange={handleQuestionChange}
                    />
                </Grid>
                <Grid item xs={12} md={2} sx={{mt: 2, mb: 2}}>
                    <Select
                        fullWidth
                        variant="outlined"
                        value={question.grade || "None"}
                        onChange={handleGradeChange}
                        size="small"
                        sx={{
                            height: 'auto',
                            fontSize: '0.875rem',
                        }}
                    >
                        <MenuItem value="None" disabled>
                            Chọn lớp
                        </MenuItem>
                        {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
                            <MenuItem key={grade} value={grade}>
                                Lớp {grade}
                            </MenuItem>
                        ))}
                        <MenuItem value="ĐH - CĐ">ĐH - CĐ</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={2} sx={{mt: 2, mb: 2, pl: 0}}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            height: 'auto',
                            fontSize: '0.875rem',
                            ml: 0,
                        }}
                        onClick={handleSubmit}
                    >
                        Gửi câu hỏi
                    </Button>
                </Grid>
            </Grid>

            {/* Filter Buttons */}
            <Grid container mt={3} justifyContent="center">
                <Grid item>
                    <Box display="flex" gap={1}>
                        {['Tất cả', 'Câu hỏi hay', 'Chưa trả lời', 'Câu hỏi của bạn', 'Câu hỏi đã lưu'].map((text, index) => (
                            <Button key={text} variant="outlined" color="primary" onClick={() => {
                                setTypePost(index);
                            }}>
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={3}>
                {/* Sidebar */}
                <Grid item xs={12} md={2}>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            boxShadow: 3,
                            p: 1,
                        }}
                    >
                        {['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'ĐH - CĐ'].map(
                            (text, index) => (
                                <ListItem
                                    button
                                    key={index}
                                    sx={{
                                        borderRadius: '4px',
                                        mb: 1,
                                        '&:hover': {bgcolor: 'primary.light'},
                                    }}
                                    onClick={() => setGrade(index + 6)}
                                >
                                    <ListItemText
                                        primary={text}
                                        primaryTypographyProps={{fontWeight: 'bold', fontSize: '1rem'}}

                                    />
                                </ListItem>
                            )
                        )}
                    </List>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={7}>
                    <ForumListComponent
                        type={typePost}
                        data={data}
                        setData={setData}
                        page={page}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    />
                </Grid>

                {/* Ranking List */}
                <Grid item xs={12} md={3}>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            boxShadow: 3,
                            p: 2,
                        }}
                    >
                        <ListItem>
                            <Typography variant="h5" gutterBottom>
                                Xếp hạng
                            </Typography>
                        </ListItem>
                        {[...Array(8)].map((_, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    borderRadius: '4px',
                                    mb: 1,
                                    '&:hover': {bgcolor: 'primary.light'},
                                }}
                            >
                                <ListItemText primary="Họ và tên"/>
                                <Badge badgeContent={20} color="primary"/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
}

export default ForumComponent;
