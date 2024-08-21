import React from 'react';
import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Ensure correct import
import AdminLayout from "../layouts/AdminLayout/index.jsx";
import UserLayout from "../layouts/UserLayout/index.jsx";

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('authToken');

    let isAuthenticated = false;
    let userRole = null;

    if (token) {
        try {
            const decodedToken = jwtDecode(token);

            userRole = decodedToken.role;
            console.log("User Role:", userRole);

            const currentTime = Date.now() / 1000;
            isAuthenticated = decodedToken.exp > currentTime;
        } catch (error) {
            console.error("Invalid token", error);
        }
    }

    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    // Ngăn chặn role USER truy cập vào trang ADMIN
    if (userRole === 'USER' && window.location.pathname.startsWith('/admin')) {
        return <Navigate to="/homepage"/>;
    }

    if (userRole === 'ADMIN') {
        return <AdminLayout>{children}</AdminLayout>;
    } else if (userRole === 'USER') {
        return <UserLayout>{children}</UserLayout>;
    } else {
        return <Navigate to="/login"/>;
    }
};

export default PrivateRoute;
