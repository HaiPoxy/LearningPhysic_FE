import React from 'react';
import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';

function FooterComponent(props) {
    return (
        <Box component="footer" sx={{backgroundColor: 'default', py: 4}}>
            <Divider className="mb-5"/>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Thông tin liên hệ
                        </Typography>
                        <Typography>Số điện thoại hỗ trợ: 024 3854 4244</Typography>
                        <Typography>Địa chỉ: số 141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội</Typography>
                        <Typography>Email: support@atech.edu.vn</Typography>
                        <Box sx={{mt: 2}}>
                            <Button variant="outlined" color="secondary" sx={{mr: 2}}>
                                Tải ứng dụng
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Kết nối với chúng tôi
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Thông tin tư vấn
                        </Typography>
                        <form>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="name"
                                    label="Họ và tên *"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="phone"
                                    label="Số điện thoại *"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="class-label">Chọn lớp</InputLabel>
                                <Select
                                    labelId="class-label"
                                    id="class"
                                    variant="outlined"
                                    label="Chọn lớp"
                                >
                                    <MenuItem value={6}>Lớp 6</MenuItem>
                                    <MenuItem value={7}>Lớp 7</MenuItem>
                                    <MenuItem value={8}>Lớp 8</MenuItem>
                                    {/* Add other options as needed */}
                                </Select>
                            </FormControl>
                            <Button variant="contained" color="primary" type="submit">
                                Gửi yêu cầu
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default FooterComponent;
