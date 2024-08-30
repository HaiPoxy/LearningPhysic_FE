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
            "id": 4,
            "title": "Understanding JSON in Java",
            "content": "This post explains how to work with JSON in Java.",
            "numberLike": 100,
            "grade": 0,
            "status": "ACTIVE",
            "accountId": 1,
            "email": "nam@gmail.com",
            "fullName": "nam",
            "avatarLink": "https://img.tripi.vn/cdn-cgi/image/width=700",
            "createdAt": "2024-08-30T05:44:20.429262",
            "updatedAt": "2024-08-30T05:44:20.429292",
            "comments": [
                {
                    "id": 33,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T17:24:23.804314",
                    "updatedAt": "2024-08-30T17:24:23.804332",
                    "status": "active"
                },
                {
                    "id": 34,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 6,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T17:24:25.259292",
                    "updatedAt": "2024-08-30T17:24:25.259307",
                    "status": "active"
                },
                {
                    "id": 35,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 7,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T17:24:25.903494",
                    "updatedAt": "2024-08-30T17:24:25.903507",
                    "status": "active"
                },
                {
                    "id": 36,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [
                        {
                            "id": 48,
                            "content": "This is a sample comment.",
                            "postId": null,
                            "accountId": 4,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T17:26:08.521945",
                            "updatedAt": "2024-08-30T17:26:08.521958",
                            "status": "active"
                        },
                        {
                            "id": 49,
                            "content": "This is a sample comment.",
                            "postId": null,
                            "accountId": 6,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T17:44:31.364124",
                            "updatedAt": "2024-08-30T17:44:31.364206",
                            "status": "active"
                        },
                        {
                            "id": 50,
                            "content": "This is a sample comment.",
                            "postId": null,
                            "accountId": 7,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T17:44:31.452336",
                            "updatedAt": "2024-08-30T17:44:31.452361",
                            "status": "active"
                        },
                        {
                            "id": 57,
                            "content": "This is a sample comment.",
                            "postId": null,
                            "accountId": 4,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T23:57:15.370242",
                            "updatedAt": "2024-08-30T23:57:15.370331",
                            "status": "active"
                        },
                        {
                            "id": 58,
                            "content": "This is a sample comment.",
                            "postId": null,
                            "accountId": 4,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T23:57:15.462185",
                            "updatedAt": "2024-08-30T23:57:15.462206",
                            "status": "active"
                        },
                        {
                            "id": 59,
                            "content": "Hê lô hô.",
                            "postId": null,
                            "accountId": 4,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T23:58:32.562893",
                            "updatedAt": "2024-08-30T23:58:32.562911",
                            "status": "active"
                        },
                        {
                            "id": 60,
                            "content": "Hê lô hô.",
                            "postId": null,
                            "accountId": 4,
                            "fullName": "nam",
                            "parentCommentId": 4,
                            "childComments": [],
                            "createdAt": "2024-08-30T23:58:32.57146",
                            "updatedAt": "2024-08-30T23:58:32.571479",
                            "status": "active"
                        }
                    ],
                    "createdAt": "2024-08-30T17:24:26.567544",
                    "updatedAt": "2024-08-30T17:24:26.567555",
                    "status": "active"
                },
                {
                    "id": 48,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T17:26:08.521945",
                    "updatedAt": "2024-08-30T17:26:08.521958",
                    "status": "active"
                },
                {
                    "id": 50,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 7,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T17:44:31.452336",
                    "updatedAt": "2024-08-30T17:44:31.452361",
                    "status": "active"
                },
                {
                    "id": 58,
                    "content": "This is a sample comment.",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T23:57:15.462185",
                    "updatedAt": "2024-08-30T23:57:15.462206",
                    "status": "active"
                },
                {
                    "id": 60,
                    "content": "Hê lô hô.",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-30T23:58:32.57146",
                    "updatedAt": "2024-08-30T23:58:32.571479",
                    "status": "active"
                },
                {
                    "id": 64,
                    "content": "h",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-31T02:32:21.989617",
                    "updatedAt": "2024-08-31T02:32:21.989777",
                    "status": "active"
                },
                {
                    "id": 65,
                    "content": "he",
                    "postId": 4,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-31T02:32:27.650745",
                    "updatedAt": "2024-08-31T02:32:27.650765",
                    "status": "active"
                }
            ]
        },
        {
            "id": 1,
            "title": "Understanding JSON in Java",
            "content": "This post explains how to work with JSON in Java.",
            "numberLike": 100,
            "grade": 0,
            "status": "ACTIVE",
            "accountId": 1,
            "email": "nam@gmail.com",
            "fullName": "nam",
            "avatarLink": "https://img.tripi.vn/cdn-cgi/image/width=700",
            "createdAt": "2024-08-30T05:43:59.832052",
            "updatedAt": "2024-08-30T05:43:59.834096",
            "comments": []
        },
        {
            "id": 3,
            "title": "Understanding JSON in Java",
            "content": "This post explains how to work with JSON in Java.",
            "numberLike": 100,
            "grade": 0,
            "status": "ACTIVE",
            "accountId": 1,
            "email": "nam@gmail.com",
            "fullName": "nam",
            "avatarLink": "https://img.tripi.vn/cdn-cgi/image/width=700",
            "createdAt": "2024-08-30T05:20:08.820115",
            "updatedAt": "2024-08-30T05:20:08.820171",
            "comments": []
        },
        {
            "id": 2,
            "title": "Understanding JSON in Java",
            "content": "This post explains how to work with JSON in Java.",
            "numberLike": 100,
            "grade": 0,
            "status": "ACTIVE",
            "accountId": 1,
            "email": "nam@gmail.com",
            "fullName": "nam",
            "avatarLink": "https://img.tripi.vn/cdn-cgi/image/width=700",
            "createdAt": "2024-08-30T05:18:56.195692",
            "updatedAt": "2024-08-30T05:18:56.195748",
            "comments": [
                {
                    "id": 62,
                    "content": "helo",
                    "postId": 2,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-31T00:01:41.213385",
                    "updatedAt": "2024-08-31T00:01:41.214193",
                    "status": "active"
                },
                {
                    "id": 63,
                    "content": "nhô",
                    "postId": 2,
                    "accountId": 4,
                    "fullName": "nam",
                    "parentCommentId": null,
                    "childComments": [],
                    "createdAt": "2024-08-31T00:12:21.800002",
                    "updatedAt": "2024-08-31T00:12:21.800572",
                    "status": "active"
                }
            ]
        }
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
