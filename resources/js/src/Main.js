import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/scss/font-awesome.scss';

import '../../css/app.css' ;

import UserLoader from './Page/User/Layout/Loader' ;
import AdminLoader from './Page/Admin/Layout/Loader' ;
import ToastNotification from './Component/ToastNotification';

const UserLayout = Loadable({
    loader: () => import('./Page/User/Layout'),
    loading: UserLoader
});

const AdminLayout = Loadable({
    loader: () => import('./Page/Admin/Layout'),
    loading: AdminLoader
});

function Main(props) {
    return (
        <>
            {
                window.location.pathname.indexOf("admin") > -1  ?
                <AdminLayout />:<UserLayout />   
            }
            <ToastNotification />
        </>
    );
    
}

export default Main;
