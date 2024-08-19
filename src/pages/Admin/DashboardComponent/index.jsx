import React from 'react';
import {Box, Breadcrumbs, Card, CardContent, Link, Typography} from '@mui/material';

function DashboardComponent(props) {
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
                        Dashboard
                    </Typography>
                </Breadcrumbs>
                <Typography variant="h4" component="h1" sx={{mt: 2}}>
                    Dashboard
                </Typography>
            </Box>

            <Card sx={{
                width: '80vw',
                height: '60vh',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 3
            }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is some content inside the card. You can put more details here.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default DashboardComponent;
