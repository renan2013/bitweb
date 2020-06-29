
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/BIT_EMPRESAS',
                    name: 'BIT_EMPRESAS',
                    component: () => import('./divisoft/ob8100/wr8100.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'BIT_EMPRESAS' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/BIT_EMPRESAS" ,
                slug: "BIT_EMPRESAS",
                name: "BIT_EMPRESAS",
                icon: "UserIcon",
                i18n: "obj8100",
              },  
               