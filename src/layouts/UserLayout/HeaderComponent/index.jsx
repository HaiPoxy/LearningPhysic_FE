import {Box, Button, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function HeaderComponent(props) {
    const [totalItem, setTotalItem] = useState(10);
    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h1 className="h3">Learning System</h1>
                    <div>
                        <Box position="relative" display="inline-block" sx={{marginRight: 5}}>
                            <ShoppingCartIcon style={{fontSize: '40px'}} onClick={() => {
                                navigate("/shopping-cart")
                            }}/>
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
                        <Button variant="contained" color="primary">
                            Đăng nhập
                        </Button>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                </nav>
            </div>
        </>
    );
}

export default HeaderComponent;
