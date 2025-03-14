import React, {useEffect, useState} from 'react';
import {Box, Button, Divider, Grid, IconButton, Paper, TextField, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const primaryColor = '#1976d2';

function ShoppingCartComponent() {
    const [cartItems, setCartItems] = useState([]);
    const data = [
        {
            "id": 1,
            "title": "React cho Người Mới Bắt Đầu",
            "instructor": "Lê Hoài Nam",
            "duration": "10 giờ",
            "price": 490009.9,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
            "type": "course",
            "level": "Sơ cấp",
            "language": "Tiếng Hindu",
            "releaseDate": "2022-01-15"
        },
        {
            "id": 2,
            "title": "Thành Thạo Node.js",
            "instructor": "Lê Hoài Nam",
            "duration": "15 giờ",
            "price": 7900099,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMTafBeJ-VJ9hVJbIxAjprXT7wvwGbIVQpA&s",
            "type": "course",
            "level": "Nâng cao",
            "language": "Tiếng Trung",
            "releaseDate": "2021-08-10"
        },
        {
            "id": 3,
            "title": "Các Mẫu React Nâng Cao",
            "instructor": "Lê Hoài Nam",
            "duration": "12 giờ",
            "price": 850009.9,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
            "type": "course",
            "level": "Trung cấp",
            "language": "Tiếng Lào",
            "releaseDate": "2023-03-05"
        },
        {
            "id": 4,
            "title": "Học Thiết Kế Mẫu JavaScript",
            "instructor": "Lê Hoài Nam",
            "price": 350000,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
            "type": "ebook",
            "format": "PDF",
            "publisher": "Nhà Xuất Bản Tech Books",
            "pages": 250,
            "language": "Tiếng Pháp",
            "releaseDate": "2020-11-22"
        }
    ];

    useEffect(() => {
        setCartItems(data);
    }, []);

    const handleDelete = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Grid container spacing={4} p={3} mt={3} mb={10}>
            <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: primaryColor}}>
                    Giỏ hàng của bạn
                </Typography>
                <Divider/>
            </Grid>
            {/* Shopping Cart Section */}
            <Grid item xs={12} md={8}>
                <Box>
                    {data.map((item) => (
                        <Paper elevation={3} sx={{p: 2, mb: 3, backgroundColor: '#ECF0F1'}} key={item.id}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={6} sx={{textAlign: 'left'}}>
                                    <Typography variant="h6" sx={{fontWeight: 'bold', color: primaryColor}}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.type === 'ebook' ? 'Tác giả' : 'Giảng viên'}: {item.instructor}
                                    </Typography>
                                    {item.type === 'course' && (
                                        <>
                                            <Typography variant="body2" color="textSecondary">
                                                Thời lượng: {item.duration}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Trình độ: {item.level}
                                            </Typography>
                                        </>
                                    )}
                                    <Typography variant="body2" color="textSecondary">
                                        Ngôn ngữ: {item.language}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Ngày phát hành: {new Date(item.releaseDate).toLocaleDateString()}
                                    </Typography>
                                    {item.type === 'ebook' && (
                                        <>
                                            <Typography variant="body2" color="textSecondary">
                                                Định dạng: {item.format}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Nhà xuất bản: {item.publisher}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Số trang: {item.pages}
                                            </Typography>
                                        </>
                                    )}
                                </Grid>

                                <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                                    <Typography sx={{fontWeight: 'bold', fontSize: 25, color: primaryColor}}>
                                        {new Intl.NumberFormat().format(item.price)}
                                    </Typography>
                                </Grid>

                                <Grid item xs={1} sx={{display: 'flex', alignItems: 'center'}}>
                                    <IconButton color="error" onClick={() => handleDelete(item.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Box>

                <Divider/>

                <Box my={3} textAlign="right">
                    <Typography variant="h4" sx={{fontWeight: 'bold', color: primaryColor}}>
                        <Typography component="span" sx={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}> {/* Kích thước nhỏ hơn cho "Tổng số tiền:" */}
                            Tổng số tiền:
                        </Typography>
                        {' '}
                        <Typography component="span"
                                    sx={{color: 'red', fontSize: 30, fontWeight: 'bold'}}> {/* Màu đỏ cho số tiền */}
                            {new Intl.NumberFormat().format(1200000)} VND
                        </Typography>
                    </Typography>
                </Box>


                <Box my={10}>
                    <Button variant="contained" startIcon={<ShoppingCartIcon/>}
                            sx={{backgroundColor: primaryColor, color: '#FFFFFF'}}>
                        Tiếp tục mua sắm
                    </Button>
                </Box>
            </Grid>

            {/* Payment Info Section */}
            <Grid item xs={12} md={4}>
                <Box p={4} sx={{backgroundColor: primaryColor, borderRadius: '12px', color: 'white'}}>
                    <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>Thông tin thanh toán</Typography>
                    <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.5)'}}/>

                    <Box my={3}>
                        <Typography variant="body2" sx={{color: 'white'}}>Phương thức thanh toán:</Typography>
                        <Box display="flex" mt={1}>
                            <Button
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    color: 'white',
                                    width: 120, // Đặt chiều rộng cố định cho các nút
                                    height: 48, // Đặt chiều cao cố định cho các nút
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundImage: 'url("https://thumb.ac-illust.com/d3/d36b69e25936e0208a07e2653fce0342_t.jpeg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    color: 'white',
                                    width: 120, // Đặt chiều rộng cố định cho các nút
                                    height: 48, // Đặt chiều cao cố định cho các nút
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundImage: 'url("https://static.ybox.vn/2021/9/4/1631756121713-1631085786958-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20-%202021-09-08T002253.248.png")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    color: 'white',
                                    width: 120, // Đặt chiều rộng cố định cho các nút
                                    height: 48, // Đặt chiều cao cố định cho các nút
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6SEQ293X0nfFojf6nsCWKA8dNGOrqn21jg&s")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </Button>

                        </Box>
                    </Box>

                    <Box my={3}>
                        <Typography variant="body2" sx={{color: 'white'}}>Tên trên thẻ:</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value="Le Hoai Nam"
                            sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px'}}
                            InputProps={{
                                style: {color: 'white'}
                            }}
                        />
                    </Box>

                    <Box my={3}>
                        <Typography variant="body2" sx={{color: 'white'}}>Số thẻ:</Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value="•••• •••• •••• 1829"
                            sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px'}}
                            InputProps={{
                                style: {color: 'white'}
                            }}
                        />
                    </Box>

                    <Grid container spacing={2} my={3}>
                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{color: 'white'}}>Ngày hết hạn:</Typography>
                            <Box display="flex" justifyContent="space-between">
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="MM"
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '4px',
                                        color: 'white',
                                        mr: 1
                                    }}
                                    InputProps={{
                                        style: {color: 'white'}
                                    }}
                                />
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="YYYY"
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '4px',
                                        color: 'white'
                                    }}
                                    InputProps={{
                                        style: {color: 'white'}
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{color: 'white'}}>CCV:</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value="XXX"
                                sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', color: 'white'}}
                                InputProps={{
                                    style: {color: 'white'}
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box mt={4}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#1ABC9C',
                                color: 'white',
                                py: 1.5,
                                borderRadius: '8px',
                                fontWeight: 'bold'
                            }}
                        >
                            Thanh toán
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ShoppingCartComponent;
