 /*=========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT DSOA 2020
    COMPONENTE JS   
    LIBRERIA ESPECIFICA PARA EL OBJETO 
========================================================================================== */ 


 // carga las filas a Editar
    export function getMisFilas() {
      var filas = [];
 
                          filas.push({
                            NOMBRE: "NUM_PUBLICACION",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LLAVE",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DESCRIPCION",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DETALLE",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LONGITUD",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LATITUD",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "FAMILIA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NIVEL",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "PRECIO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TITULO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CONTENIDO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "AUTOR",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ESTADO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "FECHA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TAGS",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LECTURAS",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ACTCOM",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "PORTADA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "COMENTARIOS",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "RUTA_CREAR_ARCHIVO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NOMBRE_ARCHIVO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LANGUAGE_CODE",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TEMPLATE_EXTRA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NUM_EMPRESA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          });  return filas; 
    }; 
   //addFilasDet funcion completa 
   
   
  // RegistroNuevo Gen_CAMPOS_GRID(4)
  export const filtros= [ 
     { 
                "NOMBRE_CAMPO":"Num Publicacion",
                "NOMBRE_INTERNO":"NUM_PUBLICACION",
                "VALOR":"",
                "TIPO_FILTRO":[ 
                   { 
                      "TIPO":"IGUAL",
                      "LABEL":"="
                  },
                  { 
                      "TIPO":"MAYOR",
                      "LABEL":">"
                  },
                  { 
                      "TIPO":"MENOR",
                      "LABEL":"<"
                  },
                  { 
                      "TIPO":"MAYORIGUAL",
                      "LABEL":"= >"
                  },
                  { 
                      "TIPO":"MENORIGUAL",
                      "LABEL":"< ="
                  },
                  { 
                      "TIPO":"IN",
                      "LABEL":"In"
                  },
                  { 
                      "TIPO":"NOTIN",
                      "LABEL":"Not In"
                  } 
     ]
                      },  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
     NUM_PUBLICACION:0,
     LLAVE:0,
     DESCRIPCION:"0",
     DETALLE:"0",
     LONGITUD:0,
     LATITUD:0,
     FAMILIA:"0",
     NIVEL:0,
     PRECIO:"0",
     TITULO:"0",
     CONTENIDO:"0",
     AUTOR:"0",
     ESTADO:"0",
     FECHA:"0",
     TAGS:"0",
     LECTURAS:0,
     ACTCOM:"0",
     PORTADA:"0",
     COMENTARIOS:0,
     RUTA_CREAR_ARCHIVO:"0",
     NOMBRE_ARCHIVO:"0",
     LANGUAGE_CODE:"0",
     TEMPLATE_EXTRA:"0",
     NUM_EMPRESA:0,
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 NUM_PUBLICACION : {
            required: "El Num Publicacion es obligatorio" 
        },LLAVE : {
            required: "El Llave es obligatorio" 
        },DESCRIPCION : {
            required: "El Descripcion es obligatorio" 
        },FECHA : {
            required: "El Fecha es obligatorio" 
        },LECTURAS : {
            required: "El Lecturas es obligatorio" 
        },PORTADA : {
            required: "El Portada es obligatorio" 
        },COMENTARIOS : {
            required: "El Comentarios es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Num Publicacion",
                                  field: "NUM_PUBLICACION",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Descripcion",
                                  field: "DESCRIPCION",
                                  filter: true,
                                  lockPosition: true,
                                  width: 1000
                                }, 
                              {
                                  headerName: "Num Empresa",
                                  field: "NUM_EMPRESA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              ];   // De defincion de  Columnas

  
 
/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA8107 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


