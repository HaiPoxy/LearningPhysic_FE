import React, {useEffect, useState} from 'react';
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
import SidebarForumComponent from "./SidebarForumComponent.jsx";

function ForumComponent() {
    const [typePost, setTypePost] = useState('Tất cả')
    const [grade, setGrade] = useState('')
    const [search, setSearch] = useState('')
    const [question, setQuestion] = useState({
        content: "",
        grade: ""
    })
    const [data, setData] = useState([
        {
            id: 1,
            name: "Nông Văn Điền",
            avatar: "NVĐ",
            timestamp: "22 giờ trước",
            content: "Một vật thể có khối lượng 5 kg được thả rơi tự do từ độ cao 10 mét. Hãy tính vận tốc của vật khi chạm đất. Biết rằng gia tốc trọng trường là 9,8 m/s².",
            grade: 12,
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
    useEffect(() => {
        console.log("typePost " + typePost)
        console.log("grade " + grade)
        console.log("search " + search)

    }, [typePost, grade, search]);

    const handleSerch = (value) => {
        setSearch(value)
    }

    const handleQuestionChange = (event) => {
        setQuestion({...question, content: event.target.value});
    };

    const handleGradeChange = (event) => {
        setQuestion({...question, grade: event.target.value});
    };
    const handleSubmit = () => {
        console.log('Submitted question:', question);
    };
    return (
        <>
            <SearchBarComponent onSubmit={handleSerch}/>

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
                        {['Tất cả', 'Câu hỏi hay', 'Chưa trả lời', 'Câu hỏi của bạn', 'Câu hỏi đã lưu'].map((text) => (
                            <Button key={text} variant="outlined" color="primary" onClick={() => {
                                setTypePost(text)
                            }}>
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={3}>
                {/* Sidebar */}
                <SidebarForumComponent onclick={(v) => setGrade(v)}/>

                {/* Main Content */}
                <Grid item xs={12} md={7}>
                    <ForumListComponent type={typePost} data={data} setData={setData}/>
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
