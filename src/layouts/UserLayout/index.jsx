import React from 'react';
import {Outlet} from "react-router-dom";

function UserLayout(props) {
    return (
        <>
            <h1>UserLayour</h1>
            <Outlet/>
        </>
    );
}

export default UserLayout;
