import React from 'react';
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
import SearchBarComponent from "./SearchBarComponent:.jsx";
import ForumListComponent from "./ForumListComponent.jsx";
import SidebarForumComponent from "./SidebarForumComponent.jsx";

function ForumComponent() {
    return (
        <>
            <SearchBarComponent/>

            {/* Header with Search and Buttons */}
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12}>
                    <TextField fullWidth placeholder="Nhập câu hỏi của bạn ở đây" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={2} sx={{mt: 2, mb: 2}}>
                    <Select
                        fullWidth
                        variant="outlined"
                        defaultValue="0"
                        size="small"
                        sx={{
                            height: 'auto',
                            fontSize: '0.875rem',
                        }}
                    >
                        <MenuItem value="0" disabled>
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
                    >
                        Gửi câu hỏi
                    </Button>
                </Grid>
            </Grid>

            {/* Filter Buttons */}
            <Grid container mt={3} justifyContent="center">
                <Grid item>
                    <Box display="flex" gap={1}>
                        {['Tất cả', 'Câu hỏi hay', 'Chưa trả lời', 'Câu hỏi VIP', 'Câu hỏi yêu thích'].map((text) => (
                            <Button key={text} variant="outlined" color="primary">
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={3}>
                {/* Sidebar */}
                <SidebarForumComponent/>

                {/* Main Content */}
                <Grid item xs={12} md={7}>
                    <ForumListComponent/>
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
