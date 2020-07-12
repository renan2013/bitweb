 export default [

     {
         header: 'Apps',
         icon: 'PackageIcon',
         i18n: 'Apps',
         items: [

             //Aqui empieza el menu de bitweb
             {
                 url: null,
                 name: 'Mantenimiento',
                 icon: 'UserIcon',

                 submenu: [{
                         url: '/publicaciones',
                         name: 'Publicaciones',
                         slug: 'publicaciones',

                     },
                     {
                         url: '/crearPublicacion',
                         name: 'Crear Publicación',
                         slug: 'crearPublicacion',

                     }

                 ]
             },

             {
                 url: null,
                 name: 'Administración',
                 icon: 'BoxIcon',

                 submenu: [{
                         url: '/publicaciones',
                         name: 'Usuarios',
                         slug: 'publicaciones',

                     },


                 ]
             },
             {
                 url: '',
                 name: 'Soporte',
                 slug: 'publicaciones',

             },

             // aqui termina el menu de bitweb

             {
                 url: null,
                 name: 'User',
                 icon: 'UserIcon',
                 i18n: 'User',
                 submenu: [{
                         url: '/apps/user/user-list',
                         name: 'List',
                         slug: 'app-user-list',
                         i18n: 'List'
                     },
                     {
                         url: '/apps/user/user-view/268',
                         name: 'View',
                         slug: 'app-user-view',
                         i18n: 'View'
                     },
                     {
                         url: '/apps/user/user-edit/268',
                         name: 'Edit',
                         slug: 'app-user-edit',
                         i18n: 'Edit'
                     }
                 ]
             }
         ]
     },

     {
         header: 'Pages',
         icon: 'FileIcon',
         i18n: 'Pages',
         items: [{
                 url: '/pages/profile',
                 slug: 'page-profile',
                 name: 'Profile',
                 icon: 'UserIcon',
                 i18n: 'Profile'
             },
             {
                 url: '/pages/user-settings',
                 slug: 'page-user-settings',
                 name: 'User Settings',
                 icon: 'SettingsIcon',
                 i18n: 'UserSettings'
             },
             {
                 url: '/pages/faq',
                 slug: 'page-faq',
                 name: 'FAQ',
                 icon: 'HelpCircleIcon',
                 i18n: 'FAQ'
             },
             {
                 url: '/pages/knowledge-base',
                 slug: 'page-knowledge-base',
                 name: 'Knowledge Base',
                 icon: 'InfoIcon',
                 i18n: 'KnowledgeBase'
             },
             {
                 url: '/pages/search',
                 slug: 'page-search',
                 name: 'Search',
                 icon: 'SearchIcon',
                 i18n: 'Search'
             },
             {
                 url: '/pages/invoice',
                 slug: 'page-invoice',
                 name: 'Invoice',
                 icon: 'InfoIcon',
                 i18n: 'Invoice'
             },
             {
                 url: null,
                 name: 'Authentication',
                 icon: 'PieChartIcon',
                 i18n: 'Authentication',
                 submenu: [{
                         url: '/pages/login',
                         name: 'Login',
                         slug: 'pages-login',
                         i18n: 'Login',
                         target: '_blank'
                     },
                     {
                         url: '/pages/register',
                         name: 'Register',
                         slug: 'pages-register',
                         i18n: 'Register',
                         target: '_blank'
                     },
                     {
                         url: '/pages/forgot-password',
                         name: 'Forgot Password',
                         slug: 'pages-forgot-password',
                         i18n: 'ForgotPassword',
                         target: '_blank'
                     },
                     {
                         url: '/pages/reset-password',
                         name: 'Reset Password',
                         slug: 'pages-reset-password',
                         i18n: 'ResetPassword',
                         target: '_blank'
                     },
                     {
                         url: '/pages/lock-screen',
                         name: 'Lock Screen',
                         slug: 'pages-lock-screen',
                         i18n: 'LockScreen',
                         target: '_blank'
                     }
                 ]
             },
             {
                 url: null,
                 name: 'Miscellaneous',
                 icon: 'CoffeeIcon',
                 i18n: 'Miscellaneous',
                 submenu: [{
                         url: '/pages/not-authorized',
                         name: 'Not Authorized',
                         slug: 'page-not-authorized',
                         icon: 'XCircleIcon',
                         i18n: 'NotAuthorized',
                         target: '_blank'
                     },
                     {
                         url: '/pages/maintenance',
                         name: 'Maintenance',
                         slug: 'page-maintenance',
                         icon: 'AnchorIcon',
                         i18n: 'Maintenance',
                         target: '_blank'
                     },
                     {
                         url: '/pages/comingsoon',
                         slug: 'page-coming-soon',
                         name: 'Coming Soon',
                         icon: 'ClockIcon',
                         i18n: 'ComingSoon',
                         target: '_blank'
                     },
                     {
                         url: '/pages/error-404',
                         name: '404',
                         slug: 'page-error-404',
                         i18n: '404',
                         target: '_blank'
                     },
                     {
                         url: '/pages/error-500',
                         name: '500',
                         slug: 'page-error-500',
                         i18n: '500',
                         target: '_blank'
                     }
                 ]
             }
         ]
     },
     {
         header: 'Charts & Maps',
         icon: 'PieChartIcon',
         i18n: 'ChartsAndMaps',
         items: [{
                 url: null,
                 name: 'Charts',
                 icon: 'PieChartIcon',
                 tag: '3',
                 tagColor: 'success',
                 i18n: 'Charts',
                 submenu: [{
                         url: '/charts-and-maps/charts/apex-charts',
                         name: 'Apex Charts',
                         slug: 'extra-component-charts-apex-charts',
                         i18n: 'ApexCharts'
                     },
                     {
                         url: '/charts-and-maps/charts/chartjs',
                         name: 'chartjs',
                         slug: 'extra-component-charts-chartjs',
                         i18n: 'chartjs'
                     },
                     {
                         url: '/charts-and-maps/charts/echarts',
                         name: 'echarts',
                         slug: 'extra-component-charts-echarts',
                         i18n: 'echarts'
                     }
                 ]
             },
             {
                 url: '/charts-and-maps/maps/google-map',
                 name: 'Google Map',
                 icon: 'MapIcon',
                 slug: 'extra-component-maps-google-map',
                 i18n: 'GoogleMap'
             }
         ]
     },
     {
         header: 'Others',
         icon: 'MoreHorizontalIcon',
         i18n: 'Others',
         items: [{
                 url: null,
                 name: 'Menu Levels',
                 icon: 'MenuIcon',
                 i18n: 'MenuLevels',
                 submenu: [{
                         url: null,
                         name: 'Menu Level 2.1',
                         i18n: 'MenuLevel2p1'
                     },
                     {
                         url: null,
                         name: 'Menu Level 2.2',
                         i18n: 'MenuLevel2p2',
                         submenu: [{
                                 url: null,
                                 name: 'Menu Level 3.1',
                                 i18n: 'MenuLevel3p1'
                             },
                             {
                                 url: null,
                                 name: 'Menu Level 3.2',
                                 i18n: 'MenuLevel3p2'
                             }
                         ]
                     }
                 ]
             },
             {
                 url: null,
                 name: 'Disabled Menu',
                 icon: 'EyeOffIcon',
                 i18n: 'DisabledMenu',
                 isDisabled: true
             },
             {
                 url: null,
                 name: 'Support',
                 icon: 'SmileIcon',
                 i18n: 'Support',
                 submenu: [{
                         url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
                         name: 'Documentation',
                         icon: 'BookOpenIcon',
                         slug: 'external',
                         i18n: 'Documentation',
                         target: '_blank'
                     },
                     {
                         url: 'https://pixinvent.ticksy.com/',
                         name: 'Raise Support',
                         icon: 'LifeBuoyIcon',
                         slug: 'external',
                         i18n: 'RaiseSupport',
                         target: '_blank'
                     }
                 ]
             }
         ]
     }
 ]