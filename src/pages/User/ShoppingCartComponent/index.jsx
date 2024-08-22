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
            "title": "React for Beginners",
            "instructor": "John Doe",
            "duration": "10 hours",
            "price": 49.99,
            "image": "https://via.placeholder.com/100"
        },
        {
            "id": 2,
            "title": "Mastering Node.js",
            "instructor": "Jane Smith",
            "duration": "15 hours",
            "price": 79.99,
            "image": "https://via.placeholder.com/100"
        }
    ];

    useEffect(() => {
        setCartItems(data);
    }, []);

    const handleDelete = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Grid container spacing={4} p={3} mt={5} mb={10}>
            {/* Shopping Cart Section */}
            <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: primaryColor}}>
                    Giỏ hàng của bạn
                </Typography>
                <Divider/>

                <Box my={3}>
                    {cartItems.map((item) => (
                        <Paper elevation={3} sx={{p: 2, mb: 3, backgroundColor: '#ECF0F1'}} key={item.id}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={2}>
                                    <img src={item.image} alt={item.title}
                                         style={{width: '100%', borderRadius: '8px'}}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="h6"
                                                sx={{fontWeight: 'bold', color: primaryColor}}>{item.title}</Typography>
                                    <Typography variant="body2"
                                                color="textSecondary">Instructor: {item.instructor}</Typography>
                                    <Typography variant="body2"
                                                color="textSecondary">Duration: {item.duration}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{fontWeight: 'bold', color: primaryColor}}>${item.price}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton color="error" onClick={() => handleDelete(item.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Box>

                <Box my={3}>
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
