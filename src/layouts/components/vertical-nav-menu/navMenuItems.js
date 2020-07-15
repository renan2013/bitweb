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
                         url: '/crearcategoria',
                         name: 'Crear Categoría',
                         slug: 'crearCategoria',

                     }

                 ]
             },

             {
                 url: null,
                 name: 'Soporte',
                 icon: 'BoxIcon',

                 submenu: [{
                         url: '/recursos',
                         name: 'Recursos',
                         slug: 'recursos',

                     },
                     {
                        url: '/soporte',
                        name: 'Asistencia',
                        slug: 'soporte',

                    },


                 ]
             }
            

             // aqui termina el menu de bitweb

          
         ]
     }

  
   
 ]