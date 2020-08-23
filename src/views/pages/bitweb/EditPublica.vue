<template>
<div class="contenedor" id="tletra">
   Version 1.0
    <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input class="w-full" label-placeholder="Publicacion Numero" v-model="publicacion.id" v-bind:readonly="true" />
    </div>

     


    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label-placeholder="Título de la Publicación" v-model="publicacion.titulo"  
            v-on:change="buscaPublicacionID"  />
        </div>

        <div class="vx-col sm:w-1/2 w-full mb-2" id="selector">
            <vs-select class="selectExample" autocomplete v-model="publicacion.categoria" label="Seleccione la Categoría">
                <vs-select-item :key="index" :value="item.ID_CATEGORIA" :text="item.DESCRIPCION" v-for="(item, index) in categorias" />
            </vs-select>
        </div>
    </div>

     <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input class="w-full" label-placeholder="link Asociado" v-model="publicacion.link"   />
    </div>

        <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input class="w-full" label-placeholder="link Asociado2 " v-model="publicacion.link2"   />
    </div>
    </div>
    <div class="vx-row">
        <div class="vx-col sm:w-full mb-2">
            <vs-textarea label="Síntesis de la Publicación - Breve" v-model="publicacion.detalle"
              
            v-on:change="buscaPublicacionID" 
             />
        </div>

        <div class="vx-col sm:w-full mb-2">
            <ckeditor :editor="editor" v-model="publicacion.contenido" :config="editorConfig"></ckeditor>
        </div>
    </div>

   

    <div class="vx-row">
        <div class="vx-col md:w-1/4 w-full mt-2" v-show="indicadorDML == 'U' || indicadorDML == 'I' || true">
            <span class="titulo_carga">Doc. Adjuntos - Opcional</span>
            <upload-default v-show="activaUpload" :isSidebarActive="activaUpload" :tituloUpload="tituloAvatar" @closeSidebar="activaUpload = false" />

            <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="uploadAvatar">
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
            </div>
        </div>
    </div>
    <div class="vx-row" id="botones">
        <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="GuardaRegistro()" v-show="this.publicacion.id > 0">Enviar</vs-button>

            <vs-button color="warning" type="border" class="mb-2" @click="buscaPublicacionID()">Reset</vs-button>
        </div>
    </div>
    <div class="vx-row">
        <div class="vx-col w-full">
            Procesando Publicacion numero:{{ publicacion.id }}
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex"; //, mapMutations, mapActions

import {eventBus} from "@/event-bus"; // para que se hablen los componentes


import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import UploadDefault from "@/divisoft/uploadFile/UploadDefault.vue";
import UploadEmbebed from "@/divisoft/uploadFile/UploadEmbebed.vue";

import downloadDefault from "@/divisoft/downloadFile/dowloadImage.vue";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

import * as datosjs from "./js/bitWeb.js";

export default {
    created() {
        this.$store.commit("MUTSETRESPUESTAGENERICONULL"); //indUrl

        eventBus.$on("cargaRegistroN", dinamicKey => {
            //busca el registro para editarlo
             
            this.indicadorDML = "I";
            this.publicacion.id = 0;
            this.publicacion.titulo = dinamicKey.titulo;
            this.publicacion.categoria = dinamicKey.categoria;
            this.publicacion.fecha = dinamicKey.fecha;
            this.publicacion.autor = dinamicKey.autor;
            this.publicacion.detalle = dinamicKey.detalle;
            this.publicacion.contenido = dinamicKey.contenido;
            try {
                this.publicacion.link = dinamicKey.link;
                this.publicacion.link2 = dinamicKey.link2;
            } catch (error) {
                
            }
            

        });

        eventBus.$on("cargaRegistro", dinamicKey => {
            this.indicadorDML = "U";

            this.mensajeAccion = "Modificando Publicacion " + dinamicKey.id;

            this.publicacion.id = dinamicKey.id;
            this.publicacion.titulo = dinamicKey.titulo;
            this.publicacion.categoria = dinamicKey.categoria;
            this.publicacion.fecha = dinamicKey.fecha;
            this.publicacion.autor = dinamicKey.autor;
            this.publicacion.detalle = dinamicKey.detalle;
            this.publicacion.contenido = dinamicKey.contenido;
            try {
                this.publicacion.link = dinamicKey.link;
                this.publicacion.link2 = dinamicKey.link2;
            } catch (error) {
                
            }

            console.log("llego a edit con ", JSON.stringify(dinamicKey));
        });
    },

    components: {
        //subir una imagen
        UploadDefault,
        downloadDefault,
        UploadEmbebed,
        ClassicEditor
    },
    watch: {
      /// cuando se solicita una nueva publicacion
        getPublicacion: function () {
            let publicacion = 0;

            //alert(this.getPublicacion)


            if (this.getPublicacion) {
                try {
                    publicacion = this.getPublicacion.valor;
                } catch (error) {
                    publicacion = JSON.parse(this.getPublicacion).valor;
                }
                this.publicacion.id = publicacion;
                this.publicacion.id++;
            }  
        }
    },

    beforeDestroy: function () {
        //Crea un bus  OYENTE
        // SI HAY PROMPT 
        eventBus.$off("cargaRegistroN");
        eventBus.$off("cargaRegistro");
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>",

            editorConfig: {
                language: "es"
            },
            mensajeAccion: "Insertando Publicacion",
            indicadorDML: "",
            // IMAGENES
            IMG_AVATAR: 0,
            CMSDATAJS: datosjs.CMSDATA,
            activaUpload: false,
            UploadPrincipal: false,
            publicacion: {
                id: 0,
                titulo: "",
                categoria: "1",
                fecha: "",
                autor: "",
                detalle: "",
                contenido: "",
                link: "",
                link2: "",
               
                REFERENCIA_IMAGEN: 0,
                REFERENCIA_PDF: 0,
                REFERENCIA_VIDEO: 0,
                REFERENCIA_DOCUMENTO: 0
            },

            tituloAvatar: "Agregar contenidos a la Publicación",
            titulo: "Publicaciones",
            categorias: divilib.categorias
        };
    },

    computed: {
        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },
        getPublicacion() {
            return this.$store.state.selectQuery;
        }
    },
    methods: {
        regresa() {
            this.$parent.activaEdit = true;
        },

        addFilas: function (publicacion) {
            var filas = [];

            filas.push({
                NOMBRE: "num_publicacion",
                VALOR1: this.publicacion.id,
                VALOR2: "",
                CDATA: "0"
            });

            filas.push({
                NOMBRE: "publicacion_padre",
                VALOR1: 0,
                VALOR2: "",
                CDATA: "0"
            });

            filas.push({
                NOMBRE: "id_categoria",
                VALOR1: this.publicacion.categoria,
                VALOR2: "",
                CDATA: "0"
            });

            filas.push({
                NOMBRE: "Contenido",
                VALOR1: publicacion,
                VALOR2: "",
                CDATA: "0"
            });
            this.filastxt = divilib.filaArraytoStrintg(filas, "S");
        },

        buscarGenerico: function (objectID, dinamicKey, nombreFila, FormatoFila) {
            // METODO GENERICO  PARA PROMPTS Y OTROS
            var pedido = {
                dml: "SJ", //SJ
                Credencial: this.getProfile.Credencial,
                ObjectId: objectID,
                formatoenvio: "N",
                formatorecibe: "N",
                indicador: "8", //select  generico
                origenUrl: this.origenUrl,
                FilaRecupera: nombreFila,
                FormatoFila: FormatoFila,
                parametros: dinamicKey
            };
            this.$store.dispatch("acQueryGenerico", pedido);
        },

        ///
        buscaPublicacionID: function () {
         
         if (this.publicacion.id == 0 && this.indicadorDML == "I")
          {  
            let filtros = [{

                nombre: "num_empresa",
                valor: this.getProfile.Empresa
            }];

            this.buscarGenerico(
                "8107I",
                filtros,
                "max(num_publicacion) as valor",
                ""
            );
           }
        },
        GuardaRegistro: function () { 

            let usuario = this.getProfile.Username;
            if (!usuario) 
            usuario = this.getProfile[0].Username;

            let credencial = this.getProfile.Credencial;
            if (!credencial) credencial = this.getProfile[0].Credencial;

            if (
                this.indicadorDML == "I" ||
                this.indicadorDML == "U" ||
                this.indicadorDML == "D"
            ) {
                //HEADER

                if (this.indicadorDML == "U" || this.indicadorDML == "D") {
                    if (this.publicacion.id == 0) {
                        alert("datos incorrectos");
                        return;
                    }
                } else {
                    if (this.publicacion.id == 0) {
                        this.publicacion.id = 1;
                    }
                    if (
                        this.publicacion.id == 0 ||
                        this.publicacion.id == null ||
                        this.publicacion.id == ""
                    )
                        throw "error En Crecion de Publicacion.";
                }
               
                //alert("Tratando publicacion"+this.publicacion.id)

                var header = {
                    MODO: this.indicadorDML,
                    OBJECTID: "8107I",
                    CREDENCIAL: credencial,
                    USERNAME: usuario,
                    REGISTROSXPAGINA: "1",
                    PAGINA: "1"
                };
                this.headertxt = divilib.GetHeaderString(header);
                // agrego las filas

                let publicacion = JSON.stringify(this.publicacion);
               console.log("VA enviar ",publicacion)

                publicacion = btoa(unescape(encodeURIComponent(publicacion)));

                this.addFilas(publicacion);
                let parametros = [];
                if (this.indicadorDML == "U" || this.indicadorDML == "D") {
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
                        VALOR1: this.publicacion.id,
                        VALOR2: "",
                        CDATA: "0"
                    };
                    parametros.push(parametro1);
                    this.paramtxt = divilib.paramArraytoStrintg(parametros);
                } else this.paramtxt = "<Param><ParamItem/></Param>";

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
                    ObjectId: "8107I",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3", // CRUD
                    origenUrl: this.origenUrl
                };

                //cambia a acDsoaPrueba // acDsoa
                 if (this.publicacion.id>0)
                 { 
                    this.$store.dispatch("acDsoaPHP2", pedido);
 

                    
                    this.$parent.activaEdit = false;
                    this.indicadorDML = "U";
                    
                    eventBus.$emit('refreshGrid');
                    
                }
            } else alert(" Crud No presente");
        }, // fin de  metodo

         
        uploadAvatar() {
          
            this.activaUpload = true;

            let respuestaCMS = [{
                num_publicacion: this.publicacion.id,
                Referencia: 0
            }];
 
            eventBus.$emit("cargaDocUpload",respuestaCMS);
        }
    }
    /*  COMO ENVIAR DOCUMENTOS A WEB
 {
     "datos": "/9j/4cYhRXwBz .....AO30pE5zS/wAbfSkTq1ADSSGWtE9Ae9ZzffWtH+EUwKLjOSeuT  qQf0qM9PxqQf0oGA/9P/2Q==",
     insertarBd:"datosbd"
 	"dml": "FILE",
 	"formato": "N",
 	"formatoRequest": "N",
 	"referencia": "100000037631",   //AUI DEBE CONSEGUIRLA ANTES O UN AUTOINCREMENT  
 	"ruta": "imagebank",
 	"documenttype": "image/jpeg",
 	"lote": "2",
     "extension": ".JPG",
    jSON DE DATOS PARA INSERTAR EN LA TABLA RELACIONADA DATOS PARA INSERTAR 
 }
    */
};
</script>

<style>
.titulo_carga {
    font-size: 12px;
}

#tletra {
    font-size: 14px;
}

#selector {
    margin-top: -5px;
}

#botones {
    padding-top: 20px;
}

.quill-editor {
    height: 500px;
    padding-bottom: 50px;
}

#selects {
    margin-top: -15px;
}

.vs-textarea {
    width: 100%;
}

.selectExample {
    width: 100%;
}

.con-select-example {
    display: flex;
    align-items: center;
    justify-content: center;
}

.con-select .vs-select {
    width: 100%;
}

.ckeditor {
    border: solid 1px red;
    height: 200px;
}

@media (max-width: 550px) {
    .con-select {
        flex-direction: column;
    }

    .con-select .vs-select {
        width: 100%;
    }
}
</style>
