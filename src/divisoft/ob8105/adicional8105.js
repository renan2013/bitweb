
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/WRP_OBJECT_INDEXA',
                    name: 'WRP_OBJECT_INDEXA',
                    component: () => import('./divisoft/ob8105/wr8105.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'WRP_OBJECT_INDEXA' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/WRP_OBJECT_INDEXA" ,
                slug: "WRP_OBJECT_INDEXA",
                name: "WRP_OBJECT_INDEXA",
                icon: "UserIcon",
                i18n: "obj8105",
              },  
               