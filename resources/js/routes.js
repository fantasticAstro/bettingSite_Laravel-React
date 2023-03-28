import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
/*USER */
const userDashBoard = React.lazy(() => import('./src/Page/User/DashBoard'));
const singleBet = React.lazy(() => import('./src/Page/User/SingleBet'));

/*ADMIN */
const adminDashBoard = React.lazy(() => import('./src/Page/Admin/DashBoard'));

const routes = {
    user:[
        { path: '/', exact: true, name: 'Default', component: userDashBoard },
    ],
    admin:[
        { path: '/admin', exact: true, name: 'adminDashBoard', component: adminDashBoard },
        { path: '/single', exact: true, name: 'singleBet', component: singleBet },
    ]
};

export default routes;