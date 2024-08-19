import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./HeaderComponent/index.jsx";
import FooterComponent from "./FooterComponent/index.jsx";

function AdminLayout(props) {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    );
}

export default AdminLayout;
