<template>
  <div class="contenedor"> 
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Título de la Publicación" v-model="input25" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
       <vs-select
        autocomplete
        class="selectExample"
        label="Seleccione la Categoría"
        v-model="select3"
        >
        <div :key="index" v-for="item,index in options3">
          <vs-select-group :title="item.title" v-if="item.group">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vs-select-group>
        </div>
    </vs-select>
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-full mb-2">
        <vs-textarea label="Síntesis de la Publicación" v-model="textarea" />
    </div>

     <div class="vx-col sm:w-full mb-2" >
        <quill-editor v-model="content"></quill-editor>
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

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'


export default {
  data(){
    return {

      content: `...`,
      select3:['red'],
      options3:[
        {
          title:'Categorías',
          group:[
            {text: 'Categoría 1', value: 4},
            {text: 'Categoría 2', value: 5},
            {text: 'Categoría 3', value: 6},
            {text: 'Categoría 4', value: 7},
          ]
        }   
      ],
    }
  },
  methods:{
    prueba(){
      console.log("prueba de focsu");
    }
  },
   components: {
    quillEditor,
  }
}
</script>

<style>

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
        