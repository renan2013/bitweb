
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/ADM_CATEGORIA',
                    name: 'ADM_CATEGORIA',
                    component: () => import('./divisoft/ob8101/wr8101.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'ADM_CATEGORIA' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/ADM_CATEGORIA" ,
                slug: "ADM_CATEGORIA",
                name: "ADM_CATEGORIA",
                icon: "UserIcon",
                i18n: "obj8101",
              },  
               