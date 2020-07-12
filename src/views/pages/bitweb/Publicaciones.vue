<template>
    <div id="avatar-2501">  
        <grid2501 v-show="!activaEdit"></grid2501>  
        <Edit2501 v-show="activaEdit" ></Edit2501> 
    </div>
</template>

<script>
 

import { mapState } from "vuex"; //, mapMutations, mapActions
import grid2501 from "./GridPublica.vue";
import Edit2501 from "./EditPublica.vue"; 
import { eventBus } from "@/event-bus"; // para que se hablen los componentes


export default {

  components: {
    grid2501 ,
   Edit2501
  },
 methods: { 
       incrementaEkey()
       {
          this.editKey++;
       }, 
  },
  
    created()  
    {
 
         eventBus.$on("cargaRegistroPadre", dinamicKey  => {
            //busca el registro para editarlo 
            alert("llegoN PADRE"+dinamicKey.titulo);

          })
 
   }, 
  beforeDestroy: function() {
      //Crea un bus  OYENTE
      // SI HAY PROMPT
        
      eventBus.$off("cargaRegistroPadre"); 
    },
  data() { 
    return {   
        datosEdit:[],
        editKey:1, 
        indicadorDML:"U",
        activaEdit: false, 
   }
 }
}
</script>

<style scoped>

</style> 