import React, {useEffect, useState} from 'react';
import {
    Box,
    Divider,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from '@mui/material';
import {
    AccountCircle,
    Article,
    Book,
    Chat,
    Dashboard,
    FileCopy,
    QuestionAnswer,
    School,
    Search
} from '@mui/icons-material';
import {useTheme} from '@mui/material/styles';
import {useLocation, useNavigate} from 'react-router-dom';

function SideBarComponent() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        // Update the active item based on the current route
        const currentPath = location.pathname;
        const active = menuItems.find(item => item.path === currentPath)?.id;
        if (active) {
            setActiveItem(active);
        }
    }, [location.pathname]);

    const handleItemClick = (id, path) => {
        setActiveItem(id);
        navigate(path);
    };

    const menuItems = [
        {id: 'dashboard', icon: <Dashboard/>, text: 'Dashboard', path: '/admin/dashboard'},
        {
            id: 'questions',
            icon: <QuestionAnswer/>,
            text: 'Quản lý Câu hỏi - Đáp án (Bài tập)',
            path: '/admin/questions'
        },
        {id: 'exams', icon: <FileCopy/>, text: 'Quản lý Đề thi - Đáp án', path: '/admin/exams'},
        {id: 'accounts', icon: <AccountCircle/>, text: 'Quản lý tài khoản', path: '/admin/accounts'},
        {id: 'articles', icon: <Article/>, text: 'Quản lý bài viết', path: '/admin/articles'},
        {id: 'chats', icon: <Chat/>, text: 'Quản lý phần hỏi đáp', path: '/admin/chats'},
        {id: 'ebooks', icon: <Book/>, text: 'Quản lý ebook', path: '/admin/ebooks'},
        {id: 'lectures', icon: <School/>, text: 'Quản lý bài giảng', path: '/admin/lectures'},
        {id: 'courses', icon: <School/>, text: 'Quản lý khóa học', path: '/admin/courses'},
    ];

    return (
        <Box sx={{
            width: 250,
            borderRight: '1px solid',
            borderColor: 'divider',
            height: '100vh'
        }}>
            <Box sx={{p: 2, borderBottom: '1px solid', borderColor: 'divider'}}>
                <Typography variant="h5" noWrap>
                    Admin Dashboard
                </Typography>
            </Box>

            <Box sx={{p: 2}}>
                <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    placeholder="Search..."
                    sx={{
                        mb: 2,
                        borderRadius: 5,
                        backgroundColor: theme.palette.background.paper,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 5,
                        },
                        '& .MuiInputAdornment-root': {
                            color: theme.palette.text.secondary,
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Divider/>

            <List>
                {menuItems.map(({id, icon, text, path}) => (
                    <ListItem
                        button
                        key={id}
                        selected={activeItem === id}
                        onClick={() => handleItemClick(id, path)}
                        sx={{
                            borderRadius: '0px 45px 45px 0px',
                            boxShadow: 'none',
                            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                            '&.Mui-selected': {
                                backgroundColor: '#512da8',
                                color: theme.palette.primary.contrastText,
                                '& .MuiListItemIcon-root': {
                                    color: theme.palette.primary.contrastText,
                                },
                                '& .MuiListItemText-primary': {
                                    color: theme.palette.primary.contrastText,
                                },
                            },
                            '&:hover': {
                                backgroundColor: '#512da8',
                                color: theme.palette.primary.contrastText,
                                '& .MuiListItemIcon-root': {
                                    color: theme.palette.primary.contrastText,
                                },
                                '& .MuiListItemText-primary': {
                                    color: theme.palette.primary.contrastText,
                                },
                            },
                        }}
                    >
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} primaryTypographyProps={{variant: 'body2'}}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SideBarComponent;
