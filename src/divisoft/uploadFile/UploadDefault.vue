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
        <span>{{ tituloUpload }}</span>
        <p>Obtenido de Base datos:</p>
        <div class="mensaje">{{ mensajeBd }}</div>
        <feather-icon
          icon="XIcon"
          @click.stop="isSidebarActiveLocal = false"
          class="cursor-pointer"
        ></feather-icon>
      </div>

      <!-- <vs-divider class="mb-0"></vs-divider> -->
      <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6">
        <div class="p-6">
          <!-- Aqui empieza el formulario de los adjuntos de bitweb -->
          <p>Campos para <strong>adjuntos</strong> (opcionales)</p>

          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Titulo"
                v-model="datosdoc.titulo"
              />
            </div>

            <div class="vx-col sm:w-1/3 w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Orden"
                v-model="datosdoc.orden"
              />
            </div>
            <div class="vx-col sm:w-full w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Detalle"
                v-model="datosdoc.detalle"
              />
            </div>
            <div class="vx-col sm:w-full w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Link"
                v-model="datosdoc.url_asociado"
              />
            </div>
          </div>
        </div>
      </VuePerfectScrollbar>

      <div class="vx-row" id="miniaturas">
        <div class="vx-col sm:w-1/3 w-full mb-2">
          <iframe
            v-show="imageType == 1"
            :src="textBase64"
            type="application/pdf"
            width="130px"
            height="140"
          ></iframe>
          <img
            v-show="imageType == 2"
            style="display:block; width:130px;height:140px;"
            id="base64image"
            :src="textBase64"
          />
          <br />

          <file64Reader @EnviaBase64="EnviaBase64"></file64Reader>
          <br />
          <button type="submit" class="boton_adjuntar" @click="uploadFile()">
            Adjuntar a Publicación
          </button>
        </div>

        <div class="vx-col sm:w-2/3 w-full mb-2">
          <BrowseMultiple />
        </div>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
// lector basico de documentos o imagenes
import { eventBus } from "@/event-bus"; // para que se hablen los componentes

import VuePerfectScrollbar from "vue-perfect-scrollbar";

//componente lee B64
import file64Reader from "./file64Reader";
import BrowseMultiple from "./BrowseMultiple.vue";

import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

export default {
  components: {
    file64Reader,
    VuePerfectScrollbar,
    BrowseMultiple
  },
  created() {
   

    eventBus.$on("cargaDocUpload", respuestaCMSUP => {

     //cos(" cargando Archivo"+JSON.stringify(respuestaCMSUP) );

      if (respuestaCMSUP[0].num_publicacion > 0) {
        this.num_publicacion = respuestaCMSUP[0].num_publicacion;
        this.datosdoc.num_publicacion = respuestaCMSUP[0].num_publicacion;
        this.datosEdit = {
          publicacion: this.datosdoc.num_publicacion
        };
      } else {

            alert("error al ingresar Documentos");

      }

      if (respuestaCMSUP[0].referencia > 0)
        this.datosdoc.referencia = respuestaCMSUP[0].referencia;

      if (!(this.datosdoc.num_publicacion > "0"))
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
      datosEdit: {},
      mensajeBd: "",
      activaalerta: true,
      yasubio: false,
      imageType: 1,
      campoJson: "",
      num_publicacion: 0,

      //noticia:{"id":3,"titulo":"A 10 aos de la hazaa, Iniesta y Ramos recuerdan el ttulo en Sudfrica 2010","categoria":5,"fecha":"24/06/2020","autor":"autor","detalle":"El 11 de julio de 2010 representa la fecha ms importante para la historia del ftbol espaol. En ese da, la \"Roja\" conquist su primera Copa del Mundo de la FIFA al vencer en la gran final en Holanda en Johannesburgo, Sudfrica. El gol de Iniesta en la prrroga defini ese partido, y l y Sergio Ramos recordarn esos momentos inolvidables en un video realizado por la Real Federacin Espaola de Ftbol.\n\nLTIMAS NOTICIAS","contenido":"<p>&nbsp;</p><figure class=\"image\"><img src=\"https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200711162704-sergio-ramos-andres-iniesta-deportes-cnn-full-169.jpg?quality=100&amp;strip=info&amp;w=780&amp;h=438&amp;crop=1\" alt=\"A 10 aos de la hazaa, Iniesta y Ramos recuerdan el ttulo en Sudfrica 2010\" srcset=\"https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200711162704-sergio-ramos-andres-iniesta-deportes-cnn-full-169.jpg?quality=100&amp;strip=info&amp;w=780&amp;h=438&amp;crop=1 780w\" sizes=\"100vw\"></figure><p><a href=\"https://cnnespanol.cnn.com/seccion/deportes/\"><strong>DEPORTES</strong></a></p><h2><a href=\"https://cnnespanol.cnn.com/video/espana-futbol-sergio-ramos-andres-iniesta-sudafrica-2010-copa-del-mundo-fifa-real-madrid-barcelona-sot/\"><strong>A 10 aos de la hazaa, Iniesta y Ramos recuerdan el ttulo en Sudfrica 2010</strong></a></h2><p>El 11 de julio de 2010 representa la fecha ms importante para la historia del ftbol espaol. En ese da, la \"Roja\" conquist su primera Copa del Mundo de la FIFA al vencer en la gran final en Holanda en Johannesburgo, Sudfrica. El gol de Iniesta en la prrroga defini ese partido, y l y Sergio Ramos recordarn esos momentos inolvidables en un video realizado por la Real Federacin Espaola de Ftbol</p>","REFERENCIA_IMAGEN":0,"REFERENCIA_PDF":0,"REFERENCIA_VIDEO":0,"REFERENCIA_DOCUMENTO":0},

      datosdoc: {
        referencia: "REPLACEREFERENCIA",
        extension: "",
        clase_url: "",
        DocumentoMimeType: "",
        referencia_relacionada: "",
        embebed_code: "",
        descripcion: "",
        descripcion_fr: "",
        descripcion_es: "",
        patronbusqueda: "",
        // van en formulario
        nombreobjeto: "",
        directorio: "",
        DescripcionDoc: "",
        titulo: "",
        ruta_archivo: "",
        detalle: "",
        orden: "",
        url_asociado: ""
      },
      //peticion base
      CMSpeticion: divilib.CMSpeticion,
      textBase64: "",
      textMS: "",
      subeArchivo: false,
      editKey: 0
    };
  },

  watch: {
    CMSDataRespuesta: function() {
      console.log("respuesta CMSDataRespuesta ", this.CMSDataRespuesta);

      if (this.yasubio == true) {
        if (
          this.CMSDataRespuesta.codigoerror == 0 ||
          this.CMSDataRespuesta.codigoerror == "0"
        )
          this.mensajeBd = "Documento Indexado correctamente con  Referencia";
        else
          this.mensajeBd =
            "Problemas para subir Archivo No Obtubo respuesta Correcta";

        //limpiamos datos
        this.yasubio = false;
        this.datosdoc.referencia = "REPLACEREFERENCIA";
        this.datosdoc.extension = "";
        this.datosdoc.DocumentoMimeType = "";

        this.textBase64 = "";
      }
    }
  },
  updated: function() {
    this.datosEdit = {
      publicacion: this.datosdoc.num_publicacion
    };

    eventBus.$emit("cargaDocumentosBrowse", this.datosEdit);
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
      this.datosdoc.DocumentoMimeType = this.DocumentoMimeType;

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

    addFilas: function() {
      var filas = {
        referencia: "REPLACEREFERENCIA",
        num_publicaicon: this.datosdoc.num_publicacion,
        extension: this.datosdoc.extension,
        clase_url: this.datosdoc.clase_url,
        DocumentoMimeType: this.datosdoc.DocumentoMimeType,
        referencia_relacionada: this.datosdoc.referencia_relacionada,
        embebed_code: this.datosdoc.embebed_code,
        descripcion: this.datosdoc.descripcion,
        descripcion_fr: this.datosdoc.descripcion_fr,
        descripcion_es: this.datosdoc.descripcion_es,
        patronbusqueda: this.datosdoc.patronbusqueda,
        nombreobjeto: this.datosdoc.nombreobjeto,
        directorio: this.datosdoc.directorio,
        DescripcionDoc: this.datosdoc.DescripcionDoc,
        titulo: this.datosdoc.titulo,
        ruta_archivo: this.datosdoc.ruta_archivo,
        detalle: this.datosdoc.detalle,
        orden: this.datosdoc.orden,
        url_asociado: this.datosdoc.url_asociado
      };

      this.campoJson = JSON.stringify(filas);
      console.log("json data", this.campoJson);
      // console.log("VA enviar ",publicacion)
      this.campoJson = btoa(this.campoJson);
      console.log("json base 64 ", this.campoJson);
    },

    uploadFile() {
      // SUBE EL ARCHIVO A BASE DATOS

      this.datosdoc.extension = "";
      this.yasubio = true;

      //busca la extension
      this.datosdoc.extension = divilib.getValueExtension(
        divilib.CMSMimeToExtension,
        this.DocumentoMimeType
      );

      let datosDoc = JSON.stringify(this.datosdoc);
      //  console.log("publicacaion",datosDoc);
      let publicacion = btoa(datosDoc);
      // preparo las columnas

      //prepara los datos
      let datosCrud = this.filastxt;

      this.addFilas();
      //console.log("fILAS",this.filastxt);

      //PREPARA EL PEDIDO
      let respuestaCMS = divilib.CMSpeticion[0];
      console.log("respuestaCMS base ", respuestaCMS);

      respuestaCMS.datos = this.textBase64;

      if (this.datosdoc.num_publicacion > 0)
        respuestaCMS.num_publicacion = this.datosdoc.num_publicacion;
      else {
        this.datosdoc.num_publicacion = this.num_publicacion;
        respuestaCMS.num_publicacion = this.num_publicacion;
      }

      respuestaCMS.insertarBd = this.campoJson;
      if (this.datosdoc.referencia == "REPLACEREFERENCIA")
        respuestaCMS.referencia = "REPLACEREFERENCIA";
      //AUI DEBE CONSEGUIRLA ANTES O UN AUTOINCREMENT
      else respuestaCMS.referencia = this.datosdoc.referencia;

      respuestaCMS.ruta = "imagebank"; //ruta donde esta la imagen  o va quedar
      respuestaCMS.documenttype = this.DocumentoMimeType;
      respuestaCMS.lote = "2"; // lote donde va quedar la imagen
      respuestaCMS.extension = this.datosdoc.extension;

      // llama guardar la imagen

      if (this.datosdoc.num_publicacion > "0") {

        console.log("Peticion ENVIANDO IMAGEN ", JSON.stringify(respuestaCMS));
        this.$store.dispatch("CMSacDsoaPHP", respuestaCMS);
        
      } else {
        console.log(
          "No hay datos correctos para Guardar  llave extrerna no presente "
        );

        this.mensajeBd ="No hay datos correctos para Guardar  llave extrerna no presente ";
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

.mensaje {
  background-color: #84f556;
  color: black;
  padding: 4px;
  border-radius: 6px;
}

.boton_adjuntar {
  text-decoration: none;
  padding: 10px;

  font-size: 16px;
  color: #ffffff;
  background-color: #7367ef;
  border-radius: 6px;
  // border: 2px solid #0016b0;
}

.boton_adjuntar :hover {
  color: #7367ef;
  background-color: #ffffff;
}

.adjuntar {
  border: solid 1px red;
}

#miniaturas {
  //   border: solid 1px red;
  padding: 20px;
  margin-top: -40px;
}
</style>
