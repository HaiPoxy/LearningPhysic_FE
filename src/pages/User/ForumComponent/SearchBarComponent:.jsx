import React, {useState} from 'react';
import {Button, Grid, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBarComponent({onSubmit}) {
    const [search, setSearch] = useState(''); // Khai báo state để lưu trữ giá trị tìm kiếm

    return (
        <Grid container spacing={2} mt={5}>
            <Grid item xs={12} md={11}>
                <TextField
                    fullWidth
                    placeholder="Tìm câu hỏi"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={1}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon/>}
                    fullWidth
                    sx={{height: '100%'}}
                    onClick={() => {
                        onSubmit(search);
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default SearchBarComponent;
