
<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->
<template>
<vx-card>
  <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
       
      <tab-content
            title="FORMULARIO GRUPO"
            class="mb-5"
            icon="feather icon-user"
            :before-change="validateStep1"
          >
           <form data-vv-scope="step-1">
          <!-- tab 1 content -->
          <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="NOMBRE_USUARIO"
                    counter="150"
                    name="direccion"
                    label="Nombre Usuario"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="TELMOVIL"
                    counter="150"
                    name="direccion"
                    label="Telmovil"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="TELOFI"
                    counter="150"
                    name="direccion"
                    label="Telofi"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="TELCASA"
                    counter="150"
                    name="direccion"
                    label="Telcasa"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="FECHA_NAC"
                    counter="150"
                    name="direccion"
                    label="Fecha Nac"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             
              </div>
          </div>
           </form>
      </tab-content>

      <!-- tab 2 content -->
       
      <tab-content
            title="FORMULARIO GRUPO2 "
            class="mb-5"
            icon="feather icon-user"
            :before-change="validateStep2"
          >
       <form data-vv-scope="step-2">
          <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full">  
                                                     <vs-switch color="success"  v-model="ESTADO"><span slot="1">Activo</span><span slot="2">Inactivo</span>
                                                    </vs-switch> 
                                                  </div>     <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="CORREO_ELECTRONICO"
                    counter="150"
                    name="direccion"
                    label="Correo Electronico"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="CODIGO_PAIS"
                    counter="150"
                    name="direccion"
                    label="Codigo Pais"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="CORREO_ELECTRONICO2"
                    counter="150"
                    name="direccion"
                    label="Correo Electronico2"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="TIPO_USUARIO"
                    counter="150"
                    name="direccion"
                    label="Tipo Usuario"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="TIPO_IDENTIFICACION"
                    counter="150"
                    name="direccion"
                    label="Tipo Identificacion"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea 
                    v-model="IDENTIFICACION"
                    counter="150"
                    name="direccion"
                    label="Identificacion"
                    :counter-danger.sync="counterDanger"
                    class="md:mt-10 mt-6 mb-0"
                    rows="3"
                    placeholder="Ingrese Alguna Observacion"
                  />
                   
                </div>     
                             
                                 <div class="vx-col md:w-1/2 w-full">
                                 <p>Num Empresa</p>
                                <vs-input size="large" name="NUM_EMPRESA" v-model="NUM_EMPRESA" class="mt-5 w-full" />
                                <span class="text-danger">{{errors.first("step-2.NUM_EMPRESA")}}</span>
                              </div> 
          </div>
           </form>
      </tab-content>
 
  </form-wizard>
  </vx-card>
</template>

 
<script>  


  import { mapState } from "vuex"; //, mapMutations, mapActions 
import { eventBus } from "@/main"; // para que se hablen los componentes  

 
  // SI ES POR PASOS  
  
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
 


// mensajes de error personalizados
import { Validator } from "vee-validate";
import * as datos8102 from "./js/divi8102.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js"; 
 
// NO USAR SI NO HAY FECHAS
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";
// FIN IMPORT POR FECHAS  
 
 
 
const dict = datos8102.mensajesValidacion;
// registra los mensajes personalizados
Validator.localize("en", dict); 

export default {
    
  name: "Autocomplete",
   components: {
   
      FormWizard,
    TabContent,
     
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
    this.defaultdatos = datos8102.datosDefault;
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
        // CMSDATA8102: datos8102.CMSDATA8102,  PROPSDataCMS: divilib.DataCMS,  tituloAvatar: "Para Cambiar Avatar",  verDocumento1: false,
       
      ///////////////// FECHAS FECHAS
      configdateTimePicker: {
        locale: Spanish
      },
      configFechaHoraPicker2:divilib.FechaHoraformat,
      configHoraPicker2:divilib.Horaformat,
      valorAutocomplete: "",
      // CAMPOS DE LISTA  SI LOS HAHAY
       
      //////////////// CAMPOS DEL MANTENIMIENTO  LLAMAR A UN DEFAULT
      
            ID_USUARIO:"0",
     ESTADO:"0",
     NOMBRE_USUARIO:"0",
     TELMOVIL:"0",
     TELOFI:"0",
     TELCASA:"0",
     FECHA_NAC:"0",
     CORREO_ELECTRONICO:"0",
     CODIGO_PAIS:"0",
     CORREO_ELECTRONICO2:"0",
     TIPO_USUARIO:"0",
     TIPO_IDENTIFICACION:"0",
     IDENTIFICACION:"0",
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
                                    NOMBRE: "ID_USUARIO",
                                    VALOR1: this.ID_USUARIO,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "ESTADO",
                                    VALOR1: this.ESTADO,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "NOMBRE_USUARIO",
                                    VALOR1: this.NOMBRE_USUARIO,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TELMOVIL",
                                    VALOR1: this.TELMOVIL,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TELOFI",
                                    VALOR1: this.TELOFI,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TELCASA",
                                    VALOR1: this.TELCASA,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "FECHA_NAC",
                                    VALOR1: this.FECHA_NAC,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "CORREO_ELECTRONICO",
                                    VALOR1: this.CORREO_ELECTRONICO,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "CODIGO_PAIS",
                                    VALOR1: this.CODIGO_PAIS,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "CORREO_ELECTRONICO2",
                                    VALOR1: this.CORREO_ELECTRONICO2,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TIPO_USUARIO",
                                    VALOR1: this.TIPO_USUARIO,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "TIPO_IDENTIFICACION",
                                    VALOR1: this.TIPO_IDENTIFICACION,
                                    VALOR2: "",
                                    CDATA: "0"
                                  }); 
                                  filas.push({
                                    NOMBRE: "IDENTIFICACION",
                                    VALOR1: this.IDENTIFICACION,
                                    VALOR2: "",
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
        OBJECTID: "8102",
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
         ObjectId:"8102",
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
          this.ID_USUARIO = datosRow.ID_USUARIO;
          this.ESTADO = datosRow.ESTADO;
          this.NOMBRE_USUARIO = datosRow.NOMBRE_USUARIO;
          this.TELMOVIL = datosRow.TELMOVIL;
          this.TELOFI = datosRow.TELOFI;
          this.TELCASA = datosRow.TELCASA;
          this.FECHA_NAC = datosRow.FECHA_NAC;
          this.CORREO_ELECTRONICO = datosRow.CORREO_ELECTRONICO;
          this.CODIGO_PAIS = datosRow.CODIGO_PAIS;
          this.CORREO_ELECTRONICO2 = datosRow.CORREO_ELECTRONICO2;
          this.TIPO_USUARIO = datosRow.TIPO_USUARIO;
          this.TIPO_IDENTIFICACION = datosRow.TIPO_IDENTIFICACION;
          this.IDENTIFICACION = datosRow.IDENTIFICACION;
          this.NUM_EMPRESA = datosRow.NUM_EMPRESA;

        
               
    },
   //cargaRegistroActual funcion completa   
      
    /// busca dato para el edit
    buscarRegistro: function(dinamicKey) {
    
      var header = {
        MODO: "JJ",
        OBJECTID: "8102",
        CREDENCIAL: this.getProfile.Credencial,
        USERNAME: this.getProfile.Username,
        REGISTROSXPAGINA: "200",
        PAGINA: "1",
        ORDERBY: ""
      };
      this.headertxt = divilib.GetHeaderString(header);

      var origenUrl = "O";
       // agrego las filas
         var filas = datos8102.getMisFilas();
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
         ObjectId:"8102",
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
