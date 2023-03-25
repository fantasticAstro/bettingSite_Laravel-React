import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const userDashBoard = React.lazy(() => import('./src/Page/User/DashBoard'));

const routes = [
    { path: '/', exact: true, name: 'Default', component: userDashBoard },
];

export default routes;