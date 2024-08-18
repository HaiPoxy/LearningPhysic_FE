import React from 'react';
import AnonymousLayout from "../layouts/AnonymousLayout/index.jsx";
import UserLayout from "../layouts/UserLayout/index.jsx";
import AdminLayout from "../layouts/AdminLayout/index.jsx";
import {HomePage, LoginComponent} from '../pages' ;
export const routeItems = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: LoginComponent,
                path: '/login',
                isPublic: true,
            }
        ]
    },
    {
        layout: UserLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: HomePage,
                path: '/home'
            },
        ]
    },
    {
        layout: AdminLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: HomePage,
                path: '/admin'
            },
        ]
    },

];
