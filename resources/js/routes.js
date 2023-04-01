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
const gameList = React.lazy(() => import('./src/Page/Admin/GameManage/GameList.js'));
const gameRates = React.lazy(() => import('./src/Page/Admin/GameManage/GameRates.js'));
const userManage = React.lazy(() => import('./src/Page/Admin/userManage'));
const userDetail = React.lazy(() => import('./src/Page/Admin/userManage/UserDetail'));
const transaction = React.lazy(() => import('./src/Page/Admin/Transaction'));
const declareResult = React.lazy(() => import('./src/Page/Admin/DeclareResult'));

const routes = {
    user:[
        { path: '/', exact: true, name: 'Default', component: userDashBoard },
        { path: '/single', exact: true, name: 'singleBet', component: singleBet },
        { path: '/jodi', exact: true, name: 'jodiBet', component: jodiBet },
        { path: '/single_patti', exact: true, name: 'jodiBet', component: singlePattiBet },
        { path: '/triple_patti', exact: true, name: 'jodiBet', component: tripplePattiBet },
        { path: '/double_patti', exact: true, name: 'jodiBet', component: doublePattiBet },
        { path: '/half_sangam', exact: true, name: 'jodiBet', component: halfSangamBet },
        { path: '/full_sangam', exact: true, name: 'jodiBet', component: tullSangamBet },
    ],
    admin:[
        { path: '/admin', exact: true, name: 'adminDashBoard', component: adminDashBoard },
        { path: '/admin/login', exact: true, name: 'adminDashBoard', component: adminDashBoard },
        { path: '/admin/user_manage', exact: true, name: 'USER MANAGEMENT', component: userManage },
        { path: '/admin/game_list', exact: true, name: 'GAME LIST', component: gameList },
        { path: '/admin/game_rates', exact: true, name: 'GAME LIST', component: gameRates },
        { path: '/admin/transaction', exact: true, name: 'GAME LIST', component: transaction },
        { path: '/admin/user_profile/:id', exact: true, name: 'User Detail', component: userDetail },
        { path: '/admin/declare_result', exact: true, name: 'User Detail', component: declareResult },

    ]
};

export default routes;