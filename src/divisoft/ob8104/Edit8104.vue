
<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->

<template>

  <vx-card :title="getAction" code-toggler>
    <div><h1>Mantenimiento de Registros</h1></div>
    <!-- TITULO DEL ENCABEZADO -->
    <div class="mt-6 flex items-center justify-between px-6">
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div> 
    <vs-divider class="mb-0"></vs-divider> 
    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6"> 
        <vx-input-group class="mb-base">
            <div class="vx-row"> 
                     
            </div> 
            <button type="submit" class="btn btn-success" @click="GuardaRegistro()">
            Salvar Datos 
            </button>
        </vx-input-group>
    </VuePerfectScrollbar>
  </vx-card>
</template> 

 
<script>  


  import { mapState } from "vuex"; //, mapMutations, mapActions 
import { eventBus } from "@/main"; // para que se hablen los componentes  

     import VuePerfectScrollbar from 'vue-perfect-scrollbar'; 


// mensajes de error personalizados
import { Validator } from "vee-validate";
import * as datos8104 from "./js/divi8104.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js"; 
 
// NO USAR SI NO HAY FECHAS
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";
// FIN IMPORT POR FECHAS  
 
 
 
const dict = datos8104.mensajesValidacion;
// registra los mensajes personalizados
Validator.localize("en", dict); 

export default {
    
  name: "Autocomplete",
   components: {
   
         VuePerfectScrollbar,
     
    flatPickr,
   
    Prism 
  },
  props: {
    datosEdit: {
      type: Array,
      required: true
    },
    modollamado: {
      type: String,
      required: true
    },
  },

  beforeMount() {
    //DEFINE COLUMNAS DE LA TABLA
    this.defaultdatos = datos8104.datosDefault;
    this.$store.commit("MUTSETDATOSDEFAULT", this.defaultdatos);
  },
 
  created() {
  
    // DESTRUYE EL CARADOR DE  DOCUMENTOS
            eventBus.$off("cargaDoc");  
            
       // SI HAY PROMPT
          
       
      //AQUI VA EL BUS PARA PROCEDIMIENTOS ALMACENADOS 
    
    eventBus.$on("cargaRegistro", dinamicKey => {
      //busca el registro para editarlo 
        this.indicadorDML="U";
      if (dinamicKey[0].valor == "0")
           {  
                   this.indicadorDML="I";
                   this.buscarRegistro(this.defaultdatos[0]);
                 } 
      else 
          this.buscarRegistro(dinamicKey);
    });
  },
  beforeDestroy: function() {
    //Crea un bus  OYENTE
    // SI HAY PROMPT
      
    eventBus.$off("datosprompt");
    
    eventBus.$off("cargaRegistro");
  },

   data() {
    return {
    
       activaAlmacenado:true, 
        messageError: "Sin Errores",
        respuestaProc: [],
         ultimoObjeto:0,
         indicadorDML:"I",
         
        
      // CMS CMS CMS CMS          DatOS cms Para manejo de EXPEDIENTE DIGITAL  MULTIMEDIA Debe venir en una funcion de Datos con la consulta
        // CMSDATA8104: datos8104.CMSDATA8104,  PROPSDataCMS: divilib.DataCMS,  tituloAvatar: "Para Cambiar Avatar",  verDocumento1: false,
       
      ///////////////// FECHAS FECHAS
      configdateTimePicker: {
        locale: Spanish
      },
      configFechaHoraPicker2:divilib.FechaHoraformat,
      configHoraPicker2:divilib.Horaformat,
      valorAutocomplete: "",
      // CAMPOS DE LISTA  SI LOS HAHAY
       
      //////////////// CAMPOS DEL MANTENIMIENTO  LLAMAR A UN DEFAULT
      
            ID_CONNECTION:0,
     CURRENT_SESSION:0,
     MAX_AUTH_FAILS:0,
     TIEMPO_INACTIVIDAD:0,
     IP_CONTROL:"0",
     LENGUAJE:"0",
     TEMP_MEDIA_DIRECTORY:"0",
     DIRECTORIOOBJETOS:"0",
     OBJECTOSXLOTE:0,
     NUM_EMPRESA:0,
    //Datos  Iniciales  
      actualizo: false,
      iniciado: false,
      defaultdatos: [],
        // SI No hay lista de Valores puede quitarse
      indicadorPrompt: 0, 
      rowselectionprompt: [],
      datosPrompt: [{ titulo: "" }],
      
      //Formulario 
      counterDanger: false,
      origenUrl: "J",  
      activaPrompt: false, 
      //scrollbar
      settings: {
        maxScrollbarLength: 60
      },
      
      parametros: [],
      locallastheader: "", //guarda el ultimo header de este objeto
      locallaststrParametros: "", //guarda el ultimo  parametros de este objeto
      locallaststrFilas: "", //guarda el ultimo filas de este objeto
      paramtxt: "",
      filastxt: "",
      header: ""
    };
  },

  watch: { 
    // SI HAY PROMPT
          ///XXXXXXXXX 
    
   lastBdmsgcode:function(){
    if(this.lastBdmsgcode!=0){
      this.$vs.notify({
                title: "Servicio Restfull",
                time: 6000,
                text: this.lastDbmsg,
                color: "warning"
            });
    }
  },
  
    "rowsForm": function() {
      if (this.rowsForm[0].NUM_EMPRESA > "0")
        this.cargaRegistroActual(this.rowsForm[0]);
    }, 
  
  },
  
 
  computed: {
    ...mapState([
           "dsoaModel" ,
           "DataCMS" ,
            "rowsForm",
           "DataCMS" , 
           "tableKey" , 
           "urlOrigen",
          // "indicadorDML",
           "lastBdmsage",
           "estadoProcesando",
           "selectQuery",

           ]),
    getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },
      
    getAction: {
      get() {
        return this.indicadorDML == "U"
          ? "Editando Registro 2"
          : "Insertando Registro";
      }
    },
   
  },

  methods: {
  
    // PARA LLAMAR UNA RUTA EXTERNA CON UN FORMULARIO
    llamaRutaVue(routename) {
              this.$router.push(routename) 
           // this.$parent.activaEditSimple = false;
        },
         
    // METODO QUE CARGA LOS DATOS DEL FILTRO PARA LOS PROMPT
    // SI HAY PROMPT
      
      
    // FIN DE PROMPT  xxxxxxxxx

    // FIN DE  METODO QUE CARGA LOS DATOS DEL FILTRO PARA LOS PROMPT

    regresa() {
      this.$parent.activaEdit = false;
    },
     
    //FORMULARIO
    
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },

 validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    }, 
    // FIN DE VALIDA PASOS ESTO SI ES UN FORMULARIO DE PASOS 
    
     addFilas: function() {
            var filas = [];
 
                                  filas.push({
                                    NOMBRE: "ID_CONNECTION",
                                    VALOR1: this.ID_CONNECTION,
                                    VALOR2: "9999999999999999999",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "CURRENT_SESSION",
                                    VALOR1: this.CURRENT_SESSION,
                                    VALOR2: "9999999999999999999",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "MAX_AUTH_FAILS",
                                    VALOR1: this.MAX_AUTH_FAILS,
                                    VALOR2: "9999999999999999999",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TIEMPO_INACTIVIDAD",
                                    VALOR1: this.TIEMPO_INACTIVIDAD,
                                    VALOR2: "9999999999999999999",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "IP_CONTROL",
                                    VALOR1: this.IP_CONTROL,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "LENGUAJE",
                                    VALOR1: this.LENGUAJE,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TEMP_MEDIA_DIRECTORY",
                                    VALOR1: this.TEMP_MEDIA_DIRECTORY,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "DIRECTORIOOBJETOS",
                                    VALOR1: this.DIRECTORIOOBJETOS,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "OBJECTOSXLOTE",
                                    VALOR1: this.OBJECTOSXLOTE,
                                    VALOR2: "9999999999999999999",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "NUM_EMPRESA",
                                    VALOR1: this.NUM_EMPRESA,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
      this.filastxt = divilib.filaArraytoStrintg(filas, "S");
    },


    //TRAE DATOS PARA MOSTRAR EN FORMULARIO
    
    formSubmitted: function() {
      this.GuardaRegistro();
      },
   /////////// GUARDA DATOS GUARDA DATOS  GUARDA DATOS  GUARDA DATOS   ////////////      
    GuardaRegistro: function() {
    if (this.indicadorDML=="I"|| this.indicadorDML=="U"   ||this.indicadorDML=="D")
                { 
      //HEADER
      var header = {
        MODO: this.indicadorDML,
        OBJECTID: "8104",
        CREDENCIAL: this.getProfile.Credencial,
        USERNAME: this.getProfile.Username,
        REGISTROSXPAGINA: "1",
        PAGINA: "1" 
      };
      this.headertxt = divilib.GetHeaderString(header);

      // agrego las filas
      this.addFilas();
      this.paramtxt = " <Param><ParamItem/></Param>";
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
         ObjectId:"8104",
        formatoenvio: "N",
        formatorecibe: "N",
        indicador: "3", // CRUD
        origenUrl: this.origenUrl
      };

      //cambia a acDsoaPrueba // acDsoa
      this.$store.dispatch("acDsoa", pedido);

      this.$parent.activaEdit = false;
      }
      else 
           alert(" Crud No presente")
    }, // fin de  metodo

    // CARGA DE una variable Bd a DOM
     cargaRegistroActual: function(datosRow) { 
          this.ID_CONNECTION = datosRow.ID_CONNECTION;
          this.CURRENT_SESSION = datosRow.CURRENT_SESSION;
          this.MAX_AUTH_FAILS = datosRow.MAX_AUTH_FAILS;
          this.TIEMPO_INACTIVIDAD = datosRow.TIEMPO_INACTIVIDAD;
          this.IP_CONTROL = datosRow.IP_CONTROL;
          this.LENGUAJE = datosRow.LENGUAJE;
          this.TEMP_MEDIA_DIRECTORY = datosRow.TEMP_MEDIA_DIRECTORY;
          this.DIRECTORIOOBJETOS = datosRow.DIRECTORIOOBJETOS;
          this.OBJECTOSXLOTE = datosRow.OBJECTOSXLOTE;
          this.NUM_EMPRESA = datosRow.NUM_EMPRESA;

        
               
    },
   //cargaRegistroActual funcion completa   
      
    /// busca dato para el edit
    buscarRegistro: function(dinamicKey) {
    
      var header = {
        MODO: "JJ",
        OBJECTID: "8104",
        CREDENCIAL: this.getProfile.Credencial,
        USERNAME: this.getProfile.Username,
        REGISTROSXPAGINA: "200",
        PAGINA: "1",
        ORDERBY: ""
      };
      this.headertxt = divilib.GetHeaderString(header);

      var origenUrl = "O";
       // agrego las filas
         var filas = datos8104.getMisFilas();
         this.filastxt = divilib.filaArraytoStrintg(filas, "N");
    
      
      var parametros = [];
      var parametro1 = {
        NOMBRE: "",
        OPERADOR: "=",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
      };

      dinamicKey.forEach(function callback(item) {
        if (item.valor.length > 0) {
          parametro1 = {
            NOMBRE: item.nombre,
            OPERADOR: "=",
            VALOR1: item.valor,
            VALOR2: "",
            CDATA: "0"
          };
          parametros.push(parametro1);
        }
      });

      //entrega arreglo de parametros recibe texto de parametros
      this.paramtxt = divilib.paramArraytoStrintg(parametros);

      // cargo la peticion texto
      //bien
      var petTxt = {
        header: this.headertxt,
        parametros: this.paramtxt,
        filas: this.filastxt
      };
      this.$store.commit("MUTSETURL", "O");
      this.$store.commit("MUTSETPETICIONTXT", petTxt);
      var pedido = {
        dml: "JJ", //SJ
        Credencial: this.getProfile.Credencial,
         ObjectId:"8104",
        formatoenvio: "N",
        formatorecibe: "N",
        indicador: "2", //select
        origenUrl: origenUrl
      };

      //cambia a acDsoaPrueba // acDsoa

      this.$store.dispatch("acDsoa", pedido);

      this.datosJson = {
        indicadorDML: "U",
        locallaststrParametros: this.locallaststrParametros
      };
      this.$parent.indicadorDML = "U";
      this.$parent.activaEdit = true; // enciende los datos de Edicion
    },
    
    ///////////////////////// CODIGO GENERICO PARA BUSQUEDAS RAPIDAS  ///////////////////////////    
      buscarGenerico: function (objectID,dinamicKey,nombreFila,FormatoFila) {
        // METODO GENERICO  PARA PROMPTS Y OTROS 
            var pedido = {
                    dml: "JJ", //SJ
                    Credencial: this.getProfile.Credencial,
                    ObjectId: objectID,
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "8", //select
                    origenUrl: this.origenUrl,
                    FilaRecupera:nombreFila, 
                    FormatoFila:FormatoFila,
                    parametros:dinamicKey
                }  
              this.$store.dispatch("acQueryGenerico", pedido) 
         },

 
    //// METODOS DE CMS SOLO SI LLEVA DOCUMENTOS EL MANTENIMIENTO 
   // SI HAY UN DOCUMENTO MULTIMEDIA EN LA LISTA  
      
    
     
    
  } // fin de  methods
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 80%;
    max-width: 90vw;
  }
}
</style>
