
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/ADM_ROLES',
                    name: 'ADM_ROLES',
                    component: () => import('./divisoft/ob8103/wr8103.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'ADM_ROLES' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/ADM_ROLES" ,
                slug: "ADM_ROLES",
                name: "ADM_ROLES",
                icon: "UserIcon",
                i18n: "obj8103",
              },  
               