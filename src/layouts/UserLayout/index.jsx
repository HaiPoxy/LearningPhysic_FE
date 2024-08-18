import React from 'react';
import {Outlet} from "react-router-dom";

function UserLayout(props) {
    return (
        <>
                <Outlet />
        </>
    );
}

export default UserLayout;
