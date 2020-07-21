<template>
<div>
  
  <input type="file" class="btn btn-outline-secondary" @change="loadTextFromFile">

</div>
</template>

<script> 
// se encarga de Leer el documento  y dejarlo en el lector listo para que sea  indexado
import * as divilib from '@/divisoftlibs/utilDivisoftJS.js';

export default {

  data() {
    return {  
      textBase64: "",
      respuestaCMS:divilib.CMSRespuestaIN,
      
   };
  },
  methods: {

    loadTextFromFile(ev) {
      const file = ev.target.files[0]; 

      this.respuestaCMS[0].referencia=0;
      this.respuestaCMS[0].hashDoc='';
      this.respuestaCMS[0].DocumentoMimeType=file.type;
      this.respuestaCMS[0].size=file.size; 
      this.respuestaCMS[0].descripcionDoc=file.name;  

      const reader = new FileReader();  
      reader.readAsDataURL(file); 
      reader.onload = e => this.$emit("EnviaBase64", e.target.result,this.respuestaCMS);
  
    }, 
 }// de Methodos

 } //final 
</script>

<style>

</style>
