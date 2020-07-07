<template>
  <div class="contenedor" id="tletra"> 
    {{publicacion}}
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Título de la Publicación" v-model="publicacion.TITULO" />
    </div>
    
    
    <div class="vx-col sm:w-1/2 w-full mb-2" id="selector">
      <vs-select class="selectExample" 
                 autocomplete 
                 v-model="publicacion.ID_CATEGORIA"  
                 label="Seleccione la Categoría" >
      
        <vs-select-item :key="index" 
                        :value="item.ID_CATEGORIA"  
                        :text="item.DESCRIPCION"
                         v-for="(item,index) in categorias" 
                        />
      </vs-select>

    </div>


  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-full mb-2">
        <vs-textarea label="Síntesis de la Publicación - Breve" v-model="publicacion.DESCRIPCION" />
    </div >

    <div class="vx-col sm:w-full mb-2" >
        <ckeditor :editor="editor" v-model="publicacion.DETALLE" :config="editorConfig" ></ckeditor>
    </div>
   
  </div>
    
    
  <div class="vx-row" id="botones">
    <div class="vx-col w-full">
      <vs-button class="mr-3 mb-2">Enviar</vs-button>
      <vs-button color="warning" type="border" class="mb-2" >Reset</vs-button>
    </div>
  </div>
  </div>
</template>

<script>



import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default {
   data() {
            return {
                editor: ClassicEditor,
                editorData: '',
                editorConfig: {
                    language: 'es'
                },
                publicacion:{
                  TTTULO:'',
                  ID_CATEGORIA:'',
                  DESCRIPCION:'',
                  DETALLE:'',
                  AUTOR:'',
                  REFERENCIA_IMAGEN:0,
                  REFERENCIA_PDF:0,
                  REFERENCIA_VIDEO:0,
                  REFERENCIA_DOCUMENTO:0,


                },


                 titulo:'Categorias', 
                 categorias:[
               
                  {
                  ID_CATEGORIA:1,
                  DESCRIPCION:'Galería de Imágenes'
                  },
                  {
                  ID_CATEGORIA:2,
                  DESCRIPCION:'Videos'
                  },
                  {
                  ID_CATEGORIA:3,
                  DESCRIPCION:'Boletines'
                  },
                  {
                  ID_CATEGORIA:4,
                  DESCRIPCION:'Capacitación'
                  },
                  {
                  ID_CATEGORIA:5,
                  DESCRIPCION:'Noticias'
                  },
                  {
                  ID_CATEGORIA:6,
                  DESCRIPCION:'Catalogo de Productos'
                  },
                  {
                  ID_CATEGORIA:7,
                  DESCRIPCION:'Publicaciones fijas'
                  }
                
          ],
                
               categorias2:[
              {
                title:'Seleccione la Categoría',
                 group:[
                  {
                  ID_CATEGORIA:1,
                  DESCRIPCION:'Galería de Imágenes'
                  },
                  {
                  ID_CATEGORIA:2,
                  DESCRIPCION:'Videos'
                  },
                  {
                  ID_CATEGORIA:3,
                  DESCRIPCION:'Boletines'
                  },
                  {
                  ID_CATEGORIA:4,
                  DESCRIPCION:'Capacitación'
                  },
                  {
                  ID_CATEGORIA:5,
                  DESCRIPCION:'Noticias'
                  },
                  {
                  ID_CATEGORIA:6,
                  DESCRIPCION:'Catalogo de Productos'
                  },
                  {
                  ID_CATEGORIA:7,
                  DESCRIPCION:'Publicaciones fijas'
                  }
                
          ],
        
          
        }   
      ],
            };
        },
  methods:{
  
  },
   components: {
    
  }
}
</script>

<style>
#tletra{
  font-size: 14px;
}

#selector{
  margin-top: -5px;
}



#botones{
  padding-top: 20px;
}

.quill-editor{
  height: 500px;
  padding-bottom: 50px;
}

#selects{
    
    margin-top: -15px;
}
.vs-textarea{
    width: 100%;
    
 
}

.selectExample {
    width: 100%
  
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vs-select {
  width: 100%
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%
  }
}

</style>
        