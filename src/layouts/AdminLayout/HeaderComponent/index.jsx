import React from 'react';
import {Avatar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HeaderComponent() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box
            position="static"
            color='default'
            sx={{p: 2, borderBottom: '1px solid', borderColor: 'divider'}}
        >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    HOME
                </Typography>

                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="User"
                                src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg"/>
                    </IconButton>
                </Tooltip>

                <Menu
                    sx={{mt: '45px'}}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Quản lý thông tin</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Đăng xuất</MenuItem>
                </Menu>
            </Toolbar>
            <Divider/>
        </Box>
    );
}

export default HeaderComponent;
