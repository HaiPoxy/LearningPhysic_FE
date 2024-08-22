import React from 'react';
import {Grid, List, ListItem, ListItemText} from '@mui/material';

function SidebarForumComponent({onclick}) {
    return (
        <>
            {/* Category List */}
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
                                onClick={() => onclick(text)}
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

        </>
    );
}

export default SidebarForumComponent;
