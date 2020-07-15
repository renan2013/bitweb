  <!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
 

<template>
  <div id="data-list-list-view" class="vx-col md:w-1/2 w-full mb-base">
    <vs-sidebar
      click-not-close
      position-right
      parent="body"
      default-index="1"
      color="primary"
      class="add-new-data-sidebar items-no-padding"
      spacer
      v-model="isSidebarActiveLocal"
    >
      <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{tituloUpload}}</h4>
        <feather-icon
          icon="XIcon"
          @click.stop="isSidebarActiveLocal = false"
          class="cursor-pointer"
        ></feather-icon>
      </div>
      <br>
      <vx-card title="Mensaje de Base de Datos"  ><span>{{mensajeBd}}</span></vx-card>

      <!-- <vs-divider class="mb-0"></vs-divider> -->
      <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6">
        
        <div class="p-6">
          <!-- Aqui empieza el formulario de los adjuntos de bitweb -->
          <h5>Complete los campos por favor</h5>
          <div class="vx-row">
            
              <div class="vx-col sm:w-2/3 w-full mb-2">
                  <vs-input class="w-full" label-placeholder="Nombre"   v-model="datosdoc.nombreobjeto"/>
              </div>
              <div class="vx-col sm:w-1/3 w-full mb-2">
                  <vs-input class="w-full" label-placeholder="Orden"   v-model="datosdoc.orden"/>
              </div>
               <div class="vx-col sm:w-full w-full mb-2">
                  <vs-input class="w-full" label-placeholder="Detalle" v-model="datosdoc.detalle" />
              </div>
              <div class="vx-col sm:w-full w-full mb-2">
                  <vs-input class="w-full" label-placeholder="Link"  v-model="datosdoc.url_asociado" />
              </div>
              
          </div>

          <br />
          <iframe v-show="imageType==1" :src="textBase64" type="application/pdf"></iframe>
          <div>
            <img
              v-show="imageType==2"
              style="display:block; width:100px;height:100px;"
              id="base64image"
              :src="textBase64"
            />
          </div>

          <file64Reader @EnviaBase64="EnviaBase64"></file64Reader>
<br>
          
          <button type="submit" class="btn btn-success" @click="uploadFile()">Subir a BD</button>
        </div>
      </VuePerfectScrollbar>
    </vs-sidebar>
  </div>
</template> 

<script> 
// lector basico de documentos o imagenes
import { eventBus } from "@/event-bus"; // para que se hablen los componentes
import VuePerfectScrollbar from "vue-perfect-scrollbar";

//componente lee B64
import file64Reader from "./file64Reader";

import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

export default {
  created() {
    //	 cuando se createReadStream

    eventBus.$on("cargaDocUpload", respuestaCMSUP => { 
       
       this.num_publicacion=respuestaCMSUP.num_publicacion;
       this.referencia=respuestaCMSUP.referencia;

      if    (!(this.num_publicacion > "0"))
           this.mensajeBd = "Datos Incorrectos para Cargar IMAGEN";
          
      console.log("Cargando Uploda ", respuestaCMSUP);
    });
  },
  beforeDestroy: function() {
    //Crea un bus  OYENTE
    // SI HAY PROMPT
    eventBus.$off("cargaDocUpload");   
  },

  props: {
    tituloUpload: {
      type: String,
      required: false
    },
    isSidebarActive: {
      type: Boolean,
      required: true
    },

    datosDoc: {
      type: Array,
      required: false
    }

  },

  data() {
    return {

      datosdoc: {
                 // van en formulario
				 titulo: "",
                 nombreobjeto: "",
                 directorio: "",
                 DescripcionDoc:"",

                 ruta_archivo: "",
                 detalle: "",
                 orden: 0,
                 url_asociado: ""
             },
      mensajeBd: "",
      activaalerta: true,
      yasubio: false,
      num_publicacion:0,
      Referencia: "0",

      DocumentoMimeType: "",
      DescripcionDoc: "",

      bdCMS: divilib.BdCMS,
      CMSpeticion: divilib.CMSpeticion,
      ManipulacionCMS: divilib.ManipulacionCMS,
      textBase64: "",
      textMS: "",
      imageType: 0,
      subeArchivo: false,
      editKey: 0
    };
  },
  components: {
    file64Reader,
    VuePerfectScrollbar
  },
  computed: {
    getCodCia() {
      return this.$store.state.CodCia;
    },
    getProfile() {
          return this.$store.state.dsoaLogin.profile[0];
    },

    CMSDataRespuesta() {
      return this.$store.state.DataCMS;
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          //this.initValues();
        }
      }
    }
  },
  methods: {
    //Metodo para recibir  Los datos del componente

    EnviaBase64(archivoBase64, datosRespuesta) {
      this.textBase64 = "";

      this.DocumentoMimeType = datosRespuesta[0].DocumentoMimeType;
      this.DescripcionDoc = datosRespuesta[0].descripcionDoc;
      if (this.DescripcionDoc == "") this.DescripcionDoc = "Documento";

      if (
        datosRespuesta[0].DocumentoMimeType.indexOf("PDF") > 0 ||
        datosRespuesta[0].DocumentoMimeType.indexOf("pdf") > 0
      ) {
        this.imageType = 1;
        this.textBase64 = archivoBase64;
      }

      if (
        datosRespuesta[0].DocumentoMimeType.indexOf("mage") > 0 ||
        datosRespuesta[0].DocumentoMimeType.indexOf("MAGE") > 0
      ) {
        this.imageType = 2;
        this.textBase64 = archivoBase64;
      }
    },
    uploadFile() 
    {

      let extension = "";
      this.yasubio = true;
     //busca la extension
      extension = divilib.getValueExtension(divilib.CMSMimeToExtension,this.DocumentoMimeType);

       //PREPARA EL PEDIDO
      let respuestaCMS = {
        CodCia: this.getCodCia,
        CodigoPeticion: "14",
        Repositorio: "",
        GuardaArchivo: "B",
        RutaOrigen: this.textBase64.substr(","),
        ExtensionFinal: "",
        RutaDestino: "",
        EntidadCodigo: "",
        LlaveExterna: this.LlaveExterna,
        NumNivel: this.NumNivel,
        NumDoc: this.NumDoc,
        ReferenciaPadre: "",
        Referencia: this.Referencia,
        hashDoc: "",
        ReferenciaPersonalizada: "",
        IndicadorAtiendeWs: "",
        FormatoImagen: "",
        DirectorioCrear: "",
        DestinoFisico: "",
        DirectorioSeparatorOrigen: "",
        InsertarBd: "",
        DocumentoMimeType: this.DocumentoMimeType,
        NombreObjeto: this.descripcionDoc,
        Descripcion: this.descripcionDoc,
        Extension: extension,
        NuevoNombre: this.descripcionDoc,
        Thumb: "",
        Lote: "",
        FormatoArchivoDestino: ""
      };
  
      
      //cambia a acDsoaPrueba // acDsoa
      
      if (this.num_publicacion > "0")
        this.$store.dispatch("acDsoaPHP2", this.CMSpeticion[0]); 
      else {
         this.mensajeBd = "No hay datos correctos para Guardar  llave extrerna no presente ";
      }
      
    }
  },

  watch: {
    CMSDataRespuesta: function() {
      console.log("respuesta CMSDataRespuesta ",this.CMSDataRespuesta)

      if (this.yasubio == true) {
           this.Referencia=this.CMSDataRespuesta.Referencia;

        if (this.Referencia > "0")
          this.mensajeBd =
            "Documento Indexado correctamente con  Referencia" +
            this.Referencia;
        else 
           this.mensajeBd = "Problemas para subir Archivo No Obtubo respuesta Correcta";
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 70%;
    max-width: 90vw;
  }
}


</style>



       