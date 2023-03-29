export default {
    userDefaultPath: '/',
    adminDefaultPath: '/admin/',
    adminBasename: '/', // only at build time to set, like /datta-able
    layout: 'vertical', // vertical, horizontal (not available in lite version)
    preLayout: null, // (not available in lite version)
    collapseMenu: false, // mini-menu
    layoutType: 'menu-light', // menu-dark, (menu-light, dark are not available in lite version)
    navIconColor: false,
    headerBackColor: 'header-default', // header-default, (header-blue, header-red, header-purple, header-lightblue, header-dark are not available in lite version)
    navBackColor: 'navbar-default', // navbar-default, (navbar-blue, navbar-red, navbar-purple, navbar-lightblue, navbar-dark are not available in lite version)
    navBrandColor: 'brand-default', // brand-default, (brand-blue, brand-red, brand-purple, brand-lightblue, brand-dark are not available in lite version)
    navBackImage: false, // not available in lite version
    rtlLayout: false, // not available in lite version
    navFixedLayout: true,
    headerFixedLayout: false, // not available in lite version
    boxLayout: false,
    navDropdownIcon: 'style1', // style1, (style2, style3 are not available in lite version)
    navListIcon: 'style1', // style1, (style2, style3, style4, style5, style6 are not available in lite version)
    navActiveListColor: 'active-default', // active-default, (active-blue, active-red, active-purple, active-lightblue, active-dark are not available in lite version)
    navListTitleColor: 'title-default', // title-default, (title-blue, title-red, title-purple, title-lightblue, title-dark are not available in lite version)
    navListTitleHide: false, // not available in lite version
    configBlock: false, // not available in lite version
    layout6Background : 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)', // used only for pre-layout = layout-6
    layout6BackSize : '', // used only for pre-layout = layout-6
    blockingType: 'ball-triangle-path',
    blockingColor: '#02a17c',
    userMenuList:[
        {name: 'SINGLE', url:'/single',icon:'single', is_left: true},
        {name: 'JODI', url:'/jodi',icon:'jodi',is_left: true},
        {name: 'SINGLE PATTI', url:'/single_patti', icon:'single_patti',is_left: true},
        {name: 'DOUBLE PATTI', url:'double_patti',icon:'double_patti',is_left: true},
        {name: 'TRIPLE PATTI', url:'/triple_patti', icon:'triple_patti',is_left: true},
        {name: 'HALF SANGAM', url:'half_sangam', icon:'half_sangam',is_left: true},
        {name: 'FULL SANGAM', url:'full_sangam', icon: 'full_sangam',is_left: true},
    ],
    adminMenuList: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/admin',
                    icon: 'fa fa-home',
                }
            ]
        },
        {
            id: 'user',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'user_manage',
                    title: 'User Management',
                    type: 'item',
                    url: '/admin/user_manage',
                    icon: 'fa fa-user',
                }
            ]
        },
        {
            id: 'user',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'transaction',
                    title: 'Transaction',
                    type: 'item',
                    url: '/admin/transaction',
                    icon: 'fa fa-circle',
                }
            ]
        },
        {
            id: 'user',
            title: 'Game Management',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'get_list',
                    title: 'Game List',
                    type: 'item',
                    url: '/admin/game_list',
                    icon: 'fa fa-circle',
                },  
                {
                    id: 'game_rates',
                    title: 'Game Rates',
                    type: 'item',
                    url: '/admin/game_rates',
                    icon: 'fa fa-circle',
                }
            ]

        },
        {
            id: 'user',
            title: 'Declare Result',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dec',
                    title: 'Declare Result',
                    type: 'item',
                    url: '/admin/declare_result',
                    icon: 'fa fa-circle',
                }
            ]

        },
    ],
};
