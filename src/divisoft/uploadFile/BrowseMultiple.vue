<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-list-view" class="vx-col md:full w-full mb-base">
    <!-- <vs-divider class="mb-0"></vs-divider> -->
    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6">
      <div class="">
        <!-- Aqui empieza el formulario de los adjuntos de bitweb -->
        <p>Campos para <strong>adjuntos</strong> (opcionales)</p>

        <div class="vx-row">
          <div class="vx-col sm:full w-full mb-2">
            <vs-list>

              <vs-list-header
                icon-pack="feather"
                icon="icon-check"
                title="Archivos adjuntos"
              ></vs-list-header>

              <vs-list-item
                icon-pack="feather"
                :key="indextr"
                v-for="(item, indextr) in CMSDataRespuesta"
                icon="icon-check"
                :subtitle="item.referencia"
              >
             
              <vs-button size="default" color="danger" icon="remove_circle"   @click="BorraRegistro(item)" ></vs-button>
                


                <img
                  style="display:block; width:100px;height:100px;"
                  :src="item.ruta"
                />

              </vs-list-item>
            </vs-list>
          </div>
        </div>
      </div>
    </VuePerfectScrollbar>
  </div>
</template>
<script>
// lector basico de documentos o imagenes
import { eventBus } from "@/event-bus"; // para que se hablen los componentes

import VuePerfectScrollbar from "vue-perfect-scrollbar";
//componente lee B64
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
export default {
  created() {
    //	 cuando se createReadStream
    // alert("creandose MULTIPLE")
    eventBus.$on("cargaDocumentosBrowse", datosEdit => {
      this.datosEdit = datosEdit;
      //  alert("cargaDocumentosBrowse"+datosEdit.publicacion);
      this.cargaDocumentos(datosEdit.publicacion);
    });
  },

  data() {
    return {
      mensajeBd: "",
      activaalerta: true,
      yasubio: false,
      imageType: 1,
      campoJson: "",
      indicadorDML: "JJ",
      //peticion base
      // CMSpeticion: divilib.CMSpeticion,
      textMS: ""
       
    };
  },
  components: {
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
      return this.$store.state.DatosDocumentos;
    }
  },
  methods: {
   
    cargaDocumentos(idPublicacion) {
      let usuario = this.getProfile.Username;
      if (!usuario) usuario = this.getProfile[0].Username;

      let credencial = this.getProfile.Credencial;
      if (!credencial) credencial = this.getProfile[0].Credencial;

      this.indicadorDML == "JJ";
      //HEADER

      var header = {
        MODO: this.indicadorDML,
        OBJECTID: "8105C",
        CREDENCIAL: credencial,
        USERNAME: usuario,
        REGISTROSXPAGINA: "1",
        PAGINA: "1"
      };
      this.headertxt = divilib.GetHeaderString(header);
      // agrego las filas
      let publicacion = JSON.stringify(this.publicacion);
      // console.log("VA enviar ",publicacion)

      publicacion = btoa(unescape(encodeURIComponent(publicacion)));

      this.filastxt = "<filas/>";
      let parametros = [];

      let parametro1 = {
        NOMBRE: "",
        OPERADOR: "=",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
      };

      parametro1 = {
        NOMBRE: "num_publicacion",
        OPERADOR: "=",
        VALOR1: idPublicacion, //this.datosEdit.num_publicacion,
        VALOR2: "",
        CDATA: "0"
      };
      parametros.push(parametro1);
      this.paramtxt = divilib.paramArraytoStrintg(parametros);

      // cargo la peticion texto
      var petTxt = {
        header: this.headertxt,
        parametros: this.paramtxt,
        filas: this.filastxt
      };

      this.$store.commit("MUTSETURL", "O"); //indUrl
      this.$store.commit("MUTSETPETICIONTXT", petTxt);

      var pedido = {
        dml: this.indicadorDML,
        Credencial: this.getProfile.Credencial,
        ObjectId: "8105C",
        formatoenvio: "N",
        formatorecibe: "N",
        indicador: 10, // CRUD
        origenUrl: this.origenUrl
      };

      //cambia a acDsoaPrueba // acDsoa
      this.$store.dispatch("acDsoaPHP2", pedido);
      this.$parent.activaEdit = false;
      this.indicadorDML = "JJ";
    },
    
    BorraRegistro: function(dinamicKey) {

            let usuario = this.getProfile.Username;
            if (!usuario) 
               usuario = this.getProfile[0].Username;

            let credencial = this.getProfile.Credencial;
            if (!credencial) credencial = this.getProfile[0].Credencial;
 
                //HEADER
             if (dinamicKey.referencia == 0) {
                     alert("datos incorrectos");
                    return;
             }
                  

                var header = {
                    MODO: "D",
                    OBJECTID: "8105",
                    CREDENCIAL: credencial,
                    USERNAME: usuario,
                    REGISTROSXPAGINA: "1",
                    PAGINA: "1"
                };
                this.headertxt = divilib.GetHeaderString(header);
                // agrego las filas 
                let parametros = [];
                 
                    let parametro1 = {
                        NOMBRE: "",
                        OPERADOR: "=",
                        VALOR1: "",
                        VALOR2: "",
                        CDATA: "0"
                    };

 
                    parametro1 = {
                        NOMBRE: "num_publicacion",
                        OPERADOR: "=",
                        VALOR1: dinamicKey.num_publicacion,
                        VALOR2: "",
                        CDATA: "0"
                    };
                    parametros.push(parametro1);

                     parametro1 = {
                        NOMBRE: "referencia",
                        OPERADOR: "=",
                        VALOR1: dinamicKey.referencia,
                        VALOR2: "",
                        CDATA: "0"
                    };
                    parametros.push(parametro1);


                    this.paramtxt = divilib.paramArraytoStrintg(parametros);
                     this.filastxt="";
                // cargo la peticion texto

                var petTxt = {
                    header: this.headertxt,
                    parametros: this.paramtxt,
                    filas: this.filastxt
                };

                this.$store.commit("MUTSETURL", "O"); //indUrl
                this.$store.commit("MUTSETPETICIONTXT", petTxt);

                var pedido = {
                    dml: "D",
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "8105",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3", // CRUD
                    origenUrl: this.origenUrl
                };
 
                //cambia a acDsoaPrueba // acDsoa
                 if (dinamicKey.referencia>0)
                 { 
                    this.$store.commit("MUT_BORRA_IMAGEN", dinamicKey);
                    this.$store.dispatch("acDsoaPHP2", pedido); 
                    
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
</style>
