import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {Button, Card, TextField, Typography} from "@mui/material";
import './ResetPassword.scss';
import API from "../../store/api.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ResetPasswordComponent() {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password: " + password + " Re-Password: " + rePassword);

        const queryParams = new URLSearchParams(window.location.search);
        const path = API.RESETPASSWORD + '?token=' + queryParams.get('token');

        console.log("Current Path: " + path);

        axios.post(path, {
            "newPassword": password
        }).then(
            (res) => {
                console.log("Đổi mật khẩu thành công!");
                navigate("./login");
            }
        ).catch(
            (error) => {
                console.error("Error during password reset:", error);
            }
        );
    };

    return (
        <div className="body-wrapper">
            <Card className="card-container">
                <Typography variant="h6" component="div" gutterBottom>
                    Nhập mật khẩu mới của bạn
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="New Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{marginTop: '20px'}}
                    >
                        Đổi mật khẩu
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default ResetPasswordComponent;
