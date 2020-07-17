<template lang="html">
 
    <div>

        <vs-table search :data="getDdatosRow" 
        pagination description   
        description-title="Registros" 
        description-connector="a" 
        description-body="Páginas">
            >
            
           

             <template slot="header"> 
                   <vs-button size="default" color="success" icon="edit" @click="RegistroNuevo()">Crear Publicación</vs-button> 
              
                <br/>
            </template>
            <template slot="thead">
                
                <vs-th sort-key="id">
                    No.
                </vs-th>
                <vs-th sort-key="titulo">
                    Título
                </vs-th>
                <vs-th sort-key="categoría">
                    Categoría
                </vs-th>

                <vs-th sort-key="autor">
                    Autor
                </vs-th>

                <vs-th>
                    Adjuntar
                </vs-th>

                <vs-th>
                    Editar
                </vs-th>

                <vs-th>
                    Eliminar
                </vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="tr.id">
                        {{tr.id}}
                    </vs-td>

                    <vs-td :data="tr.titulo">
                        {{tr.titulo}}
                    </vs-td>

                    <vs-td :data="tr.categoria">
                        {{tr.categoria}}
                    </vs-td>

                    <vs-td :data="tr.autor">
                        {{tr.autor}}
                    </vs-td>

                    <vs-td>
                        <vs-button size="default" icon="note_add"></vs-button>
                    </vs-td>

                    <vs-td>
                        <vs-button size="default" color="success" icon="edit" @click="EditaRegistro(tr)"></vs-button>
                    </vs-td>

                    <vs-td>
                        <vs-button size="default" color="danger" icon="remove_circle"></vs-button>
                    </vs-td>
                </vs-tr>
            </template>

        </vs-table>
    </div>
 
</template>

<script>
// importa librerias que necesita
 import { mapState } from "vuex"; //, mapMutations, mapActions 
import { eventBus } from "@/event-bus"; // para que se hablen los componentes
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

export default {


  
    mounted() {
       
              this.buscarDatos();
    },

    data() {
        return {
            //APP
           
            activaEdit: false,
            locallastheader: "", //guarda el ultimo header de este objeto
            locallaststrParametros: "", //guarda el ultimo  parametros de este objeto
            locallaststrFilas: "", //guarda el ultimo filas de este objeto 
            paramtxt: "",
            filastxt: "",
            header: "",
            isNinja: true,
            staticKey: [],
            // rowsForm:[],
            dinamicKey: [], 
            origenUrl: "J",
            dml: "I",

            //BUSCAR
            searchQuery: "",
            activaFiltro: false,
            //DATA GRID
            gridOptions: {},
            maxPageNumbers: 100,
            gridApi: null,
            exp: null,
            columnDefs: null,

            publicacion:{
                  id:0,
                  titulo:"",
                  categoria:"1",
                  fecha:"",
                  autor:"",
                  detalle:"",
                  contenido:""
                  },
            /////////////////////////
        };
    },
    computed: {

        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },

        getDdatosRow() {
            return this.$store.state.datosPublicacion; //llena la tabla con los datos obtenidos
        },
         
        getDdatosPages: {
            get() {
                return 0;
            }
        },
        lastDbmsg() {
            return this.$store.state.lastBdmsage;
        },
        lastBdmsgcode() {
            return this.$store.state.lastBdmsgcode;
        }
    },

    methods: {
        //PARA EDITAR
        EditaRegistro(dinamicKey) {
            //LIMPIA TABLEKEY  
            
            eventBus.$emit("cargaRegistro", dinamicKey); 

           // this.$emit("incrementaEkey");
            this.$parent.activaEdit = true;
            this.dml = "U";
        },
        RegistroNuevo() {
            //LIMPIA TABLEKEY   
             
             eventBus.$emit("cargaRegistroN", this.publicacion);

             this.$emit("incrementaEkey");
             this.$parent.activaEdit = true;
            
        },
 

        // addFilas Gen_CAMPOS_GRID(1)
        addFilas: function () {
            var filas = [];
            filas.push({
                NOMBRE: "NUM_PUBLICACION",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
             

            this.filastxt = divilib.filaArraytoStrintg(filas, "N");
        },

         
        //TRAE DATOS PARA QUE EL FORMULARIO EDIT LO CARGUE Y MODIFIQUE

        //TRAE DATOS PARA MOSTRAR en el Grid
        buscarDatos: function () {
            var origenUrl = "O";
            var header = {
                MODO: "JU",
                OBJECTID: "8107",
                CREDENCIAL: this.getProfile.Credencial,
                USERNAME: this.getProfile.Username,
                REGISTROSXPAGINA: "200",
                PAGINA: "1",
                ORDERBY: ""
            };
            this.headertxt = divilib.GetHeaderString(header);
            // arma la encabezado peticion
            // agrego las filas
            this.addFilas();

            // RegistroNuevo Gen_CAMPOS_GRID(3)
            var parametros = [];
            //  FIN DE LLAVE FIJA

            //entrega arreglo de parametros recibe texto de parametros
            this.paramtxt = divilib.paramArraytoStrintg(parametros);
            // cargo la peticion texto
            var petTxt = {
                header: this.headertxt,
                parametros: this.paramtxt,
                filas: this.filastxt
            };

            this.$store.commit("MUTSETURL", "O");
            this.$store.commit("MUTSETPETICIONTXT", petTxt);

            var pedido = {
                dml: "JU",
                Credencial: this.getProfile.Credencial,
                ObjectId: "8107",
                formatoenvio: "N",
                formatorecibe: "N",
                indicador: "9", //select
                origenUrl: origenUrl
            };

            //cambia a acDsoaPrueba // acDsoa
            this.$store.dispatch("acDsoaPHP2", pedido);

            //carga la ultima peticion  header parametros y addFilas
            this.locallastheader = this.headertxt;
            this.locallaststrParametros = this.paramtxt;
            this.locallaststrFilas = this.filastxt;
        }
    }
    // busq el  Registro a cargar
}; // fin de Metodos
</script>
