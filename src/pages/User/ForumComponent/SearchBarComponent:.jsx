import React from 'react';
import {Button, Grid, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBarComponent() {
    return (
        <Grid container spacing={2} mt={5}>
            <Grid item xs={12} md={11}>
                <TextField
                    fullWidth
                    placeholder="Tìm câu hỏi"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} md={1}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon/>}
                    fullWidth
                    sx={{height: '100%'}}
                />
            </Grid>
        </Grid>
    );
}

export default SearchBarComponent;
