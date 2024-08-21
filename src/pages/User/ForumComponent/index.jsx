import React from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Pagination,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {FavoriteBorder} from "@mui/icons-material";

function ForumComponent(props) {
    return (
        <>
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
                    >

                    </Button>
                </Grid>
            </Grid>
            {/* Header with Search and Buttons */}
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        placeholder="Nhập câu hỏi của bạn ở đây"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={2} style={{marginTop: '16px', marginBottom: '16px'}}>
                    <Select
                        fullWidth
                        variant="outlined"
                        defaultValue="0"
                        size="small"
                        sx={{
                            height: 'auto',
                            fontSize: '0.875rem' // Giảm kích thước chữ để phù hợp với chiều cao nhỏ
                        }}
                    >
                        <MenuItem value="0" disabled>
                            Chọn lớp
                        </MenuItem>
                        <MenuItem value={6}>Lớp 6</MenuItem>
                        <MenuItem value={7}>Lớp 7</MenuItem>
                        <MenuItem value={8}>Lớp 8</MenuItem>
                        <MenuItem value={9}>Lớp 9</MenuItem>
                        <MenuItem value={10}>Lớp 10</MenuItem>
                        <MenuItem value={11}>Lớp 11</MenuItem>
                        <MenuItem value={12}>Lớp 12</MenuItem>
                        <MenuItem value="ĐH - CĐ">ĐH - CĐ</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={2} style={{marginTop: '16px', marginBottom: '16px', paddingLeft: '0',}}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            height: 'auto',
                            fontSize: '0.875rem',
                            marginLeft: '0',
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
                        <Button variant="outlined" color="primary">Tất cả</Button>
                        <Button variant="outlined" color="primary">Câu hỏi hay</Button>
                        <Button variant="outlined" color="primary">Chưa trả lời</Button>
                        <Button variant="outlined" color="primary">Câu hỏi VIP</Button>
                        <Button variant="outlined" color="primary">Câu hỏi yêu thích</Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Sidebar and Main Content */}
            <Grid container spacing={2} mt={3}>
                {/* Sidebar */}
                <Grid item xs={12} md={2}
                      sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <List
                        sx={{
                            width: '100%',
                            height: 'auto',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            boxShadow: 3,
                            padding: '8px',
                        }}
                    >
                        {['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 12', 'ĐH - CĐ'].map((text, index) => (
                            <ListItem button key={index}
                                      sx={{borderRadius: '4px', mb: 1, '&:hover': {bgcolor: 'primary.light'}}}>
                                <ListItemText primary={text}
                                              primaryTypographyProps={{fontWeight: 'bold', fontSize: '1rem'}}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>


                {/* Main Content */}
                <Grid item xs={12} md={7}>
                    {[...Array(5)].map((_, index) => (
                        <Card key={index}
                              sx={{
                                  mb: 3,
                                  position: 'relative',
                                  justifyContent: 'center',
                                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                  '&:hover': {
                                      transform: 'scale(1.02)',
                                      boxShadow: 6,
                                  }
                              }}>
                            <CardContent sx={{textAlign: 'left'}}>
                                <Box display="flex" alignItems="center">
                                    <Avatar sx={{bgcolor: 'red', mr: 2}}>NVĐ</Avatar>
                                    <Box>
                                        <Typography variant="h6">
                                            Nông Văn Điền
                                            <Typography variant="caption" color="text.secondary" display="block">
                                                22 giờ trước
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    <IconButton sx={{position: 'absolute', top: 10, right: 10, color: 'red'}}>
                                        <FavoriteBorder fontSize="normal"/>
                                    </IconButton>
                                </Box>
                                <Typography sx={{mt: 1.5}}>
                                    Một vật thể có khối lượng 5 kg được thả rơi tự do từ độ cao 10 mét. Hãy tính vận tốc
                                    của vật khi chạm đất. Biết rằng gia tốc trọng trường là 9,8 m/s².
                                </Typography>
                                <Divider sx={{my: 2, borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.8)'}}/>
                                <Box sx={{mb: 3}}>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Nguyễn Văn A:</strong> Vận tốc khi chạm đất khoảng 14 m/s.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Trần Thị B:</strong> Có thể tính bằng công thức v = √(2 * g * h).
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Lê Văn C:</strong> Câu hỏi này rất hay!
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <TextField
                                        fullWidth
                                        placeholder="Nhập câu trả lời của bạn ở đây"
                                        variant="outlined"
                                        sx={{mr: 2}}
                                    />
                                    <Button variant="contained">
                                        Trả lời nhanh
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Pagination */}
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Pagination count={5} color="primary"/>
                    </Box>
                </Grid>


                {/* Ranking Sidebar */}
                <Grid item xs={12} md={3} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            boxShadow: 3,
                            padding: '16px',
                        }}
                    >
                        <ListItem>
                            <Typography variant="h5" gutterBottom>
                                Xếp hạng
                            </Typography>
                        </ListItem>
                        {[...Array(8)].map((_, index) => (
                            <ListItem key={index}
                                      sx={{borderRadius: '4px', mb: 1, '&:hover': {bgcolor: 'primary.light'}}}>
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
