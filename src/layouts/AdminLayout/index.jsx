import React from 'react';
import {Outlet} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SideBarComponent from './SideBarComponent';
import {Box} from '@mui/material';

function AdminLayout(props) {
    return (
        <Box sx={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
            <Box
                component="header"
                sx={{width: '100%', height: '64px', bgcolor: 'background.default'}}
            >
                <HeaderComponent/>
            </Box>

            <Box sx={{display: 'flex', flex: 1}}>
                <Box
                    component="aside"
                    sx={{
                        width: '250px',
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        bgcolor: 'background.default',
                        display: {xs: 'none', sm: 'block'},
                    }}
                >
                    <SideBarComponent/>
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        marginLeft: '250px',
                        padding: 4,
                        bgcolor: 'background.default',
                        minHeight: 'calc(100vh - 64px)',
                    }}
                >
                    <Outlet/>
                </Box>
            </Box>

            <Box
                component="footer"
                sx={{
                    width: 'calc(100% - 250px)',
                    marginLeft: '250px',
                    bgcolor: 'background.default',
                    // position: 'fixed',
                    bottom: 0,
                    padding: 3,
                }}
            >
                <FooterComponent/>
            </Box>
        </Box>
    );
}

export default AdminLayout;
