import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Favourite_Modal from "../../../components/Favourite_Modal/Favourite_Modal";
import Notification_Modal from "../../../components/Notification_Modal/Notification_Modal";
import Navbar from "../../../components/Navbar/Navbar";

function HeaderComponent(props) {

    const [totalItem, setTotalItem] = useState(10);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const favourite_IconRef = useRef();
    const notification_IconRef = useRef();
    const [isOpenFavourite, setIsOpenFavourite] = useState(false);
    const modal_favouriteRef = useRef();
    const modal_NotificationRef = useRef();


    const toggleNotification = () => {
        const currentPath = window.location.pathname;
        if (currentPath !== '/notification-showAll') {
            setIsOpenNotification(!isOpenNotification);
        }
    };

    const handleClickOutsideNotification = (e) => {
        if (
            (notification_IconRef.current && !notification_IconRef.current.contains(e.target)) &&
            (modal_NotificationRef.current && !modal_NotificationRef.current.contains(e.target))
        ) {
            setIsOpenNotification(false);
            setChangeColorNotification(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideNotification);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNotification);
        };
    }, []);

    const toggleFavourite = () => {
        setIsOpenFavourite(!isOpenFavourite);
    };

    const handleOpenAndCloseFavourite = (e) => {
        if (
            (favourite_IconRef.current && !favourite_IconRef.current.contains(e.target)) &&
            (modal_favouriteRef.current && !modal_favouriteRef.current.contains(e.target))
        ) {
            setIsOpenFavourite(false);
            setChangeColorFavourite(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOpenAndCloseFavourite);

        return () => {
            document.removeEventListener("mousedown", handleOpenAndCloseFavourite);
        };
    }, []);



    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp > currentTime) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    console.log("Token has expired");
                }
            } catch (error) {
                console.error("Invalid token", error);
                setIsAuthenticated(false);
            }
        }
    }, []);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        handleCloseUserMenu();
        navigate('/logout');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <>
            <div className="d-flex flex-column sticky-top" style={{ zIndex: "10000", width: "calc(100% + 20%)", marginLeft: "-10%", marginRight: "-10%", backgroundColor: "#384fa1", }}>
                <div className="d-flex justify-content-between align-items-center py-3" style={{ marginLeft: "8%", marginRight: "8%" }}>
                    <Link to='/' className="h3 text-white text-decoration-none" onClick={scrollToTop}>PhysicLearning</Link>
                    <div class="d-flex justify-content-center flex-grow-1">
                        <div class="w-50 ml-auto " style={{ marginRight: "" }}>
                            <SearchBar />
                        </div>
                    </div>
                    <div className="text-white">

                        <div onClick={toggleFavourite} ref={favourite_IconRef} style={{ display: "inline-block", cursor: "pointer", marginRight: "20px" }}>
                            <FaHeart style={{ fontSize: '35px' }} />
                        </div>

                        <Favourite_Modal isOpenFavourite={isOpenFavourite} toggleFavourite={toggleFavourite} modal_favouriteRef={modal_favouriteRef} />

                        <div style={{ cursor: "pointer", display: "inline-block", position: "relative" }} ref={notification_IconRef} onClick={toggleNotification}>
                            <IoNotifications style={{ fontSize: "35px", marginRight: "20px" }} />
                            <span style={{
                                position: "absolute", top: "2px", left: "48%", transform: "translate(-50%, -50%)", borderRadius: "50%", padding: "1px 4px", backgroundColor: "red", color: "#fff",
                                fontSize: "12px"
                            }}>
                                17
                            </span>
                        </div>

                        <Notification_Modal isOpenNotification={isOpenNotification} setIsOpenNotification={setIsOpenNotification} toggleNotification={toggleNotification} modal_NotificationRef={modal_NotificationRef} parentRef={notification_IconRef} />

                        <Box position="relative" display="inline-block" sx={{ marginRight: 3 }}>


                            <ShoppingCartIcon style={{ fontSize: '40px', cursor: "pointer" }} onClick={() => {
                                navigate("/shopping-cart")
                            }} />
                            <Typography
                                variant="body2"
                                sx={{
                                    position: 'absolute',
                                    top: '-15px',
                                    right: '-24px',
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    fontSize: '25px',
                                    borderRadius: '50%',
                                    transform: 'translate(-12px, 0) scale(0.50)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                {totalItem}
                            </Typography>
                        </Box>

                        {isAuthenticated ?
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="User"
                                            src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg" />
                                    </IconButton>
                                </Tooltip>

                                <Menu style={{ zIndex: "10000" }}
                                    sx={{ mt: '45px' }}
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
                                    <MenuItem onClick={() => {
                                        navigate('/thông-tin-ca-nhân/thay-đổi-mật-khẩu');
                                        handleCloseUserMenu();
                                    }}>
                                        Quản lý thông tin
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                                </Menu>
                            </>
                            :
                            <Button variant="contained" color="primary" onClick={() => {
                                navigate("/login")
                            }}> "Đăng nhập"
                            </Button>
                        }

                    </div>
                </div>

                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Về chúng tôi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lộ trình - Bí quyết học</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kiểm tra</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ĐGNL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Thi đấu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bài viết</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sách</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/forum">Hỏi đáp</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>

            <Navbar />
        </>


    );
}

export default HeaderComponent;
