
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/ADM_USUARIOSADM',
                    name: 'ADM_USUARIOSADM',
                    component: () => import('./divisoft/ob8102/wr8102.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'ADM_USUARIOSADM' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/ADM_USUARIOSADM" ,
                slug: "ADM_USUARIOSADM",
                name: "ADM_USUARIOSADM",
                icon: "UserIcon",
                i18n: "obj8102",
              },  
               