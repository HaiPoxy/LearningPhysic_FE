import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./HeaderComponent/index.jsx";
import FooterComponent from "./FooterComponent/index.jsx";
import {Container} from "react-bootstrap";

function UserLayout(props) {
    return (
        <>
            <Container className="d-flex flex-column min-vh-100">
                <HeaderComponent/>
                <main className="flex-grow-1">
                    <Outlet/>
                </main>
                <FooterComponent/>
            </Container>

        </>
    );
}

export default UserLayout;
