import React from 'react';
import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/index.jsx";

import { Container } from "react-bootstrap";

import Footer from './Footer/Footer.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';



function UserLayout(props) {
    return (
        <>
            <Container className="d-flex flex-column min-vh-100">
                <HeaderComponent />
                {/* <Navbar /> */}
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer />

            </Container>

        </>
    );
}

export default UserLayout;
