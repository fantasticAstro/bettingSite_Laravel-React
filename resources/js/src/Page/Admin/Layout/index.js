import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../../../../../../node_modules/font-awesome/scss/font-awesome.scss';
import Loader from '../Layout/Loader' ;
import Aux from '../../../../hoc/_Aux' ;
import routes from "../../../../routes";
import Fullscreen from "react-full-screen";
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import '../../../../../css/admin/app.scss';
import adminDefaultPath from '../DashBoard' ;
import {useSelector, useDispatch} from 'react-redux' ;
import Login from '../Login' ;

const menu = routes.admin.map((route, index) => {
    return (route.component) ? (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => (
                <route.component {...props} />
            )} />
    ) : (null); 
});

function  AdminLayout(props) {
    const redux_user_auth = useSelector(state => state.user_auth) ;

    if(!redux_user_auth) {
        return (<Login />) ;
    } else
    return (
        <Aux>
            <Fullscreen >
                <Navigation />
                <NavBar />
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <Breadcrumb />
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <Suspense fallback={<Loader/>}>
                                            <Switch>
                                                {menu}
                                                <Redirect from="/admin" to={adminDefaultPath} />
                                            </Switch>
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fullscreen>
        </Aux>
    );
}

export default AdminLayout ;
