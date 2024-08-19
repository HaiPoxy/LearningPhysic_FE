import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./HeaderComponent/index.jsx";
import FooterComponent from "./FooterComponent/index.jsx";
import SideBarComponent from "./SideBarComponent/index.jsx";
import {Container} from "react-bootstrap";

function AdminLayout(props) {
    return (
        <Container fluid style={{minHeight: '100vh', minWidth: '100%'}} className="p-0">
            <header className="bg-dark text-white p-3" style={{width: '100%'}}>
                <HeaderComponent/>
            </header>
            <div className="d-flex flex-grow-1">
                <aside className="bg-secondary p-3" style={{width: '250px', minHeight: '100vh'}}>
                    <SideBarComponent/>
                </aside>
                <main className="flex-grow-1 p-4 bg-light">
                    <Outlet/>
                </main>
            </div>
            <footer className="bg-dark text-white p-3">
                <FooterComponent/>
            </footer>
        </Container>
    );
}

export default AdminLayout;
