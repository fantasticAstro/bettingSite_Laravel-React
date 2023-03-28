import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
/*USER */
const userDashBoard = React.lazy(() => import('./src/Page/User/DashBoard'));
const singleBet = React.lazy(() => import('./src/Page/User/SingleBet'));
const jodiBet = React.lazy(() => import('./src/Page/User/JodiBet'));
const singlePattiBet = React.lazy(() => import('./src/Page/User/SinglePattiBet'));
const doublePattiBet = React.lazy(() => import('./src/Page/User/DoublePattiBet'));
const halfSangamBet = React.lazy(() => import('./src/Page/User/HalfSangamBet'));
const tullSangamBet = React.lazy(() => import('./src/Page/User/FullSangamBet'));
const tripplePattiBet = React.lazy(() => import('./src/Page/User/TripplePattiBet'));


/*ADMIN */
const adminDashBoard = React.lazy(() => import('./src/Page/Admin/DashBoard'));

const routes = {
    user:[
        { path: '/', exact: true, name: 'Default', component: userDashBoard },
        { path: '/single', exact: true, name: 'singleBet', component: singleBet },
        { path: '/jodi', exact: true, name: 'jodiBet', component: jodiBet },
        { path: '/single_patti', exact: true, name: 'jodiBet', component: singlePattiBet },
        { path: '/double_patti', exact: true, name: 'jodiBet', component: doublePattiBet },
        { path: '/half_sangam', exact: true, name: 'jodiBet', component: halfSangamBet },
        { path: '/full_sangam', exact: true, name: 'jodiBet', component: tullSangamBet },
        { path: '/tripple_sangam', exact: true, name: 'jodiBet', component: tripplePattiBet },

    ],
    admin:[
        { path: '/admin', exact: true, name: 'adminDashBoard', component: adminDashBoard },
    ]
};

export default routes;