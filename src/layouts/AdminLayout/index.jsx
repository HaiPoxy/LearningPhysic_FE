import React from 'react';
import {Outlet} from "react-router-dom";

function AdminLayout(props) {
    return (
        <>
            <Outlet />
        </>
    );
}

export default AdminLayout;
