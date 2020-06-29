
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/ADM_PARAMETROS',
                    name: 'ADM_PARAMETROS',
                    component: () => import('./divisoft/ob8104/wr8104.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'ADM_PARAMETROS' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/ADM_PARAMETROS" ,
                slug: "ADM_PARAMETROS",
                name: "ADM_PARAMETROS",
                icon: "UserIcon",
                i18n: "obj8104",
              },  
               