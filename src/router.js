 import Vue from 'vue'
 import Router from 'vue-router'
 import auth from '@/auth/authService'



 Vue.use(Router)

 const router = new Router({
     mode: 'history',
     base: process.env.BASE_URL,
     scrollBehavior() {
         return { x: 0, y: 0 }
     },
     routes: [

         {
             // =============================================================================
             // MAIN LAYOUT ROUTES
             // =============================================================================
             path: '',
             component: () =>
                 import ('./layouts/main/Main.vue'),
             children: [
                 // =============================================================================
                 // Theme Routes
                 // =============================================================================
                 {
                     path: '/',
                     redirect: '/dashboard/analytics'
                 },
                 {
                     path: '/dashboard/analytics',
                     name: 'dashboard-analytics',
                     component: () =>
                         import ('./views/DashboardAnalytics.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },

                 {
                     path: '/apps/calendar/vue-simple-calendar',
                     name: 'calendar-simple-calendar',
                     component: () =>
                         import ('./views/apps/calendar/SimpleCalendar.vue'),
                     meta: {
                         rule: 'editor',
                         no_scroll: true
                     }
                 },

                 //aqui comienza el menu de bitweb
                 {
                     path: '/publicaciones',
                     name: 'publicaciones',
                     component: () =>
                         import ('@/views/pages/bitweb/Publicaciones.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Crear Publicación', url: { name: 'crearPublicacion' } },
                             { title: 'Lista de Publicaciones', active: true },
                         ],
                         pageTitle: 'Publicaciones',
                         rule: 'editor'
                     }
                 },

                 {
                     path: '/crearPublicacion',
                     name: 'crearPublicacion',
                     component: () =>
                         import ('@/views/pages/paginasBitWeb/P2.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Lista de Publicaciones', url: { name: 'publicaciones' } },
                             { title: 'Crear Publicación', active: true },
                         ],
                         pageTitle: 'Crear Publicación',
                         rule: 'editor'
                     }
                 },


                 {
                     path: '/apps/user/user-list',
                     name: 'app-user-list',
                     component: () =>
                         import ('@/views/apps/user/user-list/UserList.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'User' },
                             { title: 'List', active: true }
                         ],
                         pageTitle: 'User List',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/apps/user/user-view/:userId',
                     name: 'app-user-view',
                     component: () =>
                         import ('@/views/apps/user/UserView.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'User' },
                             { title: 'View', active: true }
                         ],
                         pageTitle: 'User View',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/apps/user/user-edit/:userId',
                     name: 'app-user-edit',
                     component: () =>
                         import ('@/views/apps/user/user-edit/UserEdit.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'User' },
                             { title: 'Edit', active: true }
                         ],
                         pageTitle: 'User Edit',
                         rule: 'editor'
                     }
                 },
                 // =============================================================================
                 // UI ELEMENTS
                 // =============================================================================
                 {
                     path: '/ui-elements/data-list/list-view',
                     name: 'data-list-list-view',
                     component: () =>
                         import ('@/views/ui-elements/data-list/list-view/DataListListView.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Data List' },
                             { title: 'List View', active: true }
                         ],
                         pageTitle: 'List View',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/data-list/thumb-view',
                     name: 'data-list-thumb-view',
                     component: () =>
                         import ('@/views/ui-elements/data-list/thumb-view/DataListThumbView.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Data List' },
                             { title: 'Thumb View', active: true }
                         ],
                         pageTitle: 'Thumb View',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/grid/vuesax',
                     name: 'grid-vuesax',
                     component: () =>
                         import ('@/views/ui-elements/grid/vuesax/GridVuesax.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Grid' },
                             { title: 'Vuesax', active: true }
                         ],
                         pageTitle: 'Grid',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/grid/tailwind',
                     name: 'grid-tailwind',
                     component: () =>
                         import ('@/views/ui-elements/grid/tailwind/GridTailwind.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Grid' },
                             { title: 'Tailwind', active: true }
                         ],
                         pageTitle: 'Tailwind Grid',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/colors',
                     name: 'colors',
                     component: () =>
                         import ('./views/ui-elements/colors/Colors.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Colors', active: true }
                         ],
                         pageTitle: 'Colors',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/card/basic',
                     name: 'basic-cards',
                     component: () =>
                         import ('./views/ui-elements/card/CardBasic.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Card' },
                             { title: 'Basic Cards', active: true }
                         ],
                         pageTitle: 'Basic Cards',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/card/statistics',
                     name: 'statistics-cards',
                     component: () =>
                         import ('./views/ui-elements/card/CardStatistics.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Card' },
                             { title: 'Statistics Cards', active: true }
                         ],
                         pageTitle: 'Statistics Card',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/card/analytics',
                     name: 'analytics-cards',
                     component: () =>
                         import ('./views/ui-elements/card/CardAnalytics.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Card' },
                             { title: 'Analytics Card', active: true }
                         ],
                         pageTitle: 'Analytics Card',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/card/card-actions',
                     name: 'card-actions',
                     component: () =>
                         import ('./views/ui-elements/card/CardActions.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Card' },
                             { title: 'Card Actions', active: true }
                         ],
                         pageTitle: 'Card Actions',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/card/card-colors',
                     name: 'card-colors',
                     component: () =>
                         import ('./views/ui-elements/card/CardColors.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Card' },
                             { title: 'Card Colors', active: true }
                         ],
                         pageTitle: 'Card Colors',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/table',
                     name: 'table',
                     component: () =>
                         import ('./views/ui-elements/table/Table.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Table', active: true }
                         ],
                         pageTitle: 'Table',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/ui-elements/ag-grid-table',
                     name: 'ag-grid-table',
                     component: () =>
                         import ('./views/ui-elements/ag-grid-table/AgGridTable.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'agGrid Table', active: true }
                         ],
                         pageTitle: 'agGrid Table',
                         rule: 'editor'
                     }
                 },


                 // =============================================================================
                 // Pages Routes
                 // =============================================================================
                 {
                     path: '/pages/profile',
                     name: 'page-profile',
                     component: () =>
                         import ('@/views/pages/Profile.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'Profile', active: true }
                         ],
                         pageTitle: 'Profile',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/user-settings',
                     name: 'page-user-settings',
                     component: () =>
                         import ('@/views/pages/user-settings/UserSettings.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'User Settings', active: true }
                         ],
                         pageTitle: 'Settings',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/faq',
                     name: 'page-faq',
                     component: () =>
                         import ('@/views/pages/Faq.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'FAQ', active: true }
                         ],
                         pageTitle: 'FAQ',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/knowledge-base',
                     name: 'page-knowledge-base',
                     component: () =>
                         import ('@/views/pages/KnowledgeBase.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'KnowledgeBase', active: true }
                         ],
                         pageTitle: 'KnowledgeBase',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/knowledge-base/category',
                     name: 'page-knowledge-base-category',
                     component: () =>
                         import ('@/views/pages/KnowledgeBaseCategory.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                             { title: 'Category', active: true }
                         ],
                         parent: 'page-knowledge-base',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/knowledge-base/category/question',
                     name: 'page-knowledge-base-category-question',
                     component: () =>
                         import ('@/views/pages/KnowledgeBaseCategoryQuestion.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                             { title: 'Category', url: '/pages/knowledge-base/category' },
                             { title: 'Question', active: true }
                         ],
                         parent: 'page-knowledge-base',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/search',
                     name: 'page-search',
                     component: () =>
                         import ('@/views/pages/Search.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'Search', active: true }
                         ],
                         pageTitle: 'Search',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/invoice',
                     name: 'page-invoice',
                     component: () =>
                         import ('@/views/pages/Invoice.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Pages' },
                             { title: 'Invoice', active: true }
                         ],
                         pageTitle: 'Invoice',
                         rule: 'editor'
                     }
                 },

                 // =============================================================================
                 // CHARTS & MAPS
                 // =============================================================================
                 {
                     path: '/charts-and-maps/charts/apex-charts',
                     name: 'extra-component-charts-apex-charts',
                     component: () =>
                         import ('@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Charts & Maps' },
                             { title: 'Apex Charts', active: true }
                         ],
                         pageTitle: 'Apex Charts',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/charts-and-maps/charts/chartjs',
                     name: 'extra-component-charts-chartjs',
                     component: () =>
                         import ('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Charts & Maps' },
                             { title: 'chartjs', active: true }
                         ],
                         pageTitle: 'chartjs',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/charts-and-maps/charts/echarts',
                     name: 'extra-component-charts-echarts',
                     component: () =>
                         import ('@/views/charts-and-maps/charts/echarts/Echarts.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Charts & Maps' },
                             { title: 'echarts', active: true }
                         ],
                         pageTitle: 'echarts',
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/charts-and-maps/maps/google-map',
                     name: 'extra-component-maps-google-map',
                     component: () =>
                         import ('@/views/charts-and-maps/maps/google-map/GoogleMap.vue'),
                     meta: {
                         breadcrumb: [
                             { title: 'Home', url: '/' },
                             { title: 'Charts & Maps' },
                             { title: 'Google Map', active: true }
                         ],
                         pageTitle: 'Google Map',
                         rule: 'editor'
                     }
                 },


                 // =============================================================================
                 // EXTENSIONS
                 // =============================================================================


             ]
         },
         // =============================================================================
         // FULL PAGE LAYOUTS
         // =============================================================================
         {
             path: '',
             component: () =>
                 import ('@/layouts/full-page/FullPage.vue'),
             children: [
                 // =============================================================================
                 // PAGES
                 // =============================================================================
                 {
                     path: '/callback',
                     name: 'auth-callback',
                     component: () =>
                         import ('@/views/Callback.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/login',
                     name: 'page-login',
                     component: () =>
                         import ('@/views/pages/login/Login.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/register',
                     name: 'page-register',
                     component: () =>
                         import ('@/views/pages/register/Register.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/forgot-password',
                     name: 'page-forgot-password',
                     component: () =>
                         import ('@/views/pages/ForgotPassword.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/reset-password',
                     name: 'page-reset-password',
                     component: () =>
                         import ('@/views/pages/ResetPassword.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/lock-screen',
                     name: 'page-lock-screen',
                     component: () =>
                         import ('@/views/pages/LockScreen.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/comingsoon',
                     name: 'page-coming-soon',
                     component: () =>
                         import ('@/views/pages/ComingSoon.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/error-404',
                     name: 'page-error-404',
                     component: () =>
                         import ('@/views/pages/Error404.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/error-500',
                     name: 'page-error-500',
                     component: () =>
                         import ('@/views/pages/Error500.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/not-authorized',
                     name: 'page-not-authorized',
                     component: () =>
                         import ('@/views/pages/NotAuthorized.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 },
                 {
                     path: '/pages/maintenance',
                     name: 'page-maintenance',
                     component: () =>
                         import ('@/views/pages/Maintenance.vue'),
                     meta: {
                         rule: 'editor'
                     }
                 }
             ]
         },
         // Redirect to 404 page, if no match found
         {
             path: '*',
             redirect: '/pages/error-404'
         }
     ]
 })

 router.afterEach(() => {
     // Remove initial loading
     const appLoading = document.getElementById('loading-bg')
     if (appLoading) {
         appLoading.style.display = 'none'
     }
 })

 export default router