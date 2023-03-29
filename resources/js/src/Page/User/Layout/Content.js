import LeftPart from './LeftPart';
import RightPart from './RightPart';
import {Route, Switch, Redirect} from 'react-router-dom';
import routes from "../../../../routes";
import Loader from "../Layout/Loader";
import React, { Component, Suspense } from 'react';

function Content(props) {
    const menu = routes.user.map((route, index) => {
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

    return (
        <div className='page-content page-container'>
            <LeftPart />
            <div className='main-content'>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        {menu}
                        <Redirect from="/" to="/"/>
                    </Switch>
                </Suspense>
            </div>
            <RightPart />

        </div>
    );
}
export default Content;