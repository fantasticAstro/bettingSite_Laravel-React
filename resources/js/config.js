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
        {name: 'TRIPPLE PATTI', url:'/tripple_patti', icon:'triple_patti',is_left: true},
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
                        url: '/dashboard/default',
                        icon: 'feather icon-home',
                    }
                ]
            },
            {
                id: 'ui-element',
                title: 'UI ELEMENT',
                type: 'group',
                icon: 'icon-ui',
                children: [
                    {
                        id: 'basic',
                        title: 'Component',
                        type: 'collapse',
                        icon: 'feather icon-box',
                        children: [
                            {
                                id: 'button',
                                title: 'Button',
                                type: 'item',
                                url: '/basic/button'
                            },
                            {
                                id: 'badges',
                                title: 'Badges',
                                type: 'item',
                                url: '/basic/badges'
                            },
                            {
                                id: 'breadcrumb-pagination',
                                title: 'Breadcrumb & Pagination',
                                type: 'item',
                                url: '/basic/breadcrumb-paging'
                            },
                            {
                                id: 'collapse',
                                title: 'Collapse',
                                type: 'item',
                                url: '/basic/collapse'
                            },
                            {
                                id: 'tabs-pills',
                                title: 'Tabs & Pills',
                                type: 'item',
                                url: '/basic/tabs-pills'
                            },
                            {
                                id: 'typography',
                                title: 'Typography',
                                type: 'item',
                                url: '/basic/typography'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ui-forms',
                title: 'Forms & Tables',
                type: 'group',
                icon: 'icon-group',
                children: [
                    {
                        id: 'form-basic',
                        title: 'Form Elements',
                        type: 'item',
                        url: '/forms/form-basic',
                        icon: 'feather icon-file-text'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Table',
                        type: 'item',
                        icon: 'feather icon-server',
                        url: '/tables/bootstrap'
                    }
                ]
            },
            {
                id: 'chart-maps',
                title: 'Chart & Maps',
                type: 'group',
                icon: 'icon-charts',
                children: [
                    {
                        id: 'charts',
                        title: 'Charts',
                        type: 'item',
                        icon: 'feather icon-pie-chart',
                        url: '/charts/nvd3'
                    },
                    {
                        id: 'maps',
                        title: 'Map',
                        type: 'item',
                        icon: 'feather icon-map',
                        url: '/maps/google-map'
                    }
                ]
            },
            {
                id: 'pages',
                title: 'Pages',
                type: 'group',
                icon: 'icon-pages',
                children: [
                    {
                        id: 'auth',
                        title: 'Authentication',
                        type: 'collapse',
                        icon: 'feather icon-lock',
                        badge: {
                            title: 'New',
                            type: 'label-danger'
                        },
                        children: [
                            {
                                id: 'signup-1',
                                title: 'Sign up',
                                type: 'item',
                                url: '/auth/signup-1',
                                target: true,
                                breadcrumbs: false
                            },
                            {
                                id: 'signin-1',
                                title: 'Sign in',
                                type: 'item',
                                url: '/auth/signin-1',
                                target: true,
                                breadcrumbs: false
                            }
                        ]
                    },
    
                    {
                        id: 'sample-page',
                        title: 'Sample Page',
                        type: 'item',
                        url: '/sample-page',
                        classes: 'nav-item',
                        icon: 'feather icon-sidebar'
                    },
                    {
                        id: 'docs',
                        title: 'Documentation',
                        type: 'item',
                        url: '/docs',
                        classes: 'nav-item',
                        icon: 'feather icon-help-circle'
                    },
                    {
                        id: 'menu-level',
                        title: 'Menu Levels',
                        type: 'collapse',
                        icon: 'feather icon-menu',
                        children: [
                            {
                                id: 'menu-level-1.1',
                                title: 'Menu Level 1.1',
                                type: 'item',
                                url: '#!',
                            },
                            {
                                id: 'menu-level-1.2',
                                title: 'Menu Level 2.2',
                                type: 'collapse',
                                children: [
                                    {
                                        id: 'menu-level-2.1',
                                        title: 'Menu Level 2.1',
                                        type: 'item',
                                        url: '#',
                                    },
                                    {
                                        id: 'menu-level-2.2',
                                        title: 'Menu Level 2.2',
                                        type: 'collapse',
                                        children: [
                                            {
                                                id: 'menu-level-3.1',
                                                title: 'Menu Level 3.1',
                                                type: 'item',
                                                url: '#',
                                            },
                                            {
                                                id: 'menu-level-3.2',
                                                title: 'Menu Level 3.2',
                                                type: 'item',
                                                url: '#',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'disabled-menu',
                        title: 'Disabled Menu',
                        type: 'item',
                        url: '#',
                        classes: 'nav-item disabled',
                        icon: 'feather icon-power'
                    },
                    /*{
                        id: 'buy-now',
                        title: 'Buy Now',
                        type: 'item',
                        icon: 'feather icon-user',
                        classes: 'nav-item',
                        url: 'https://codedthemes.com',
                        target: true,
                        external: true,
                        badge: {
                            title: 'v1.0',
                            type: 'label-primary'
                        }
                    }*/
                ]
            }
        ],
};
