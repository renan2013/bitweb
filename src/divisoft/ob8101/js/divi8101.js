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
                            NOMBRE: "ID_CATEGORIA",
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
                            NOMBRE: "ALTO_THUM_P",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ANCHO_THUM_P",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ALTO_THUM_M",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ANCHO_THUM_M",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DESCRIPCION_EN",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DESCRIPCION_FR",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NOMBRE",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ANCHO_NORMAL",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ALTO_NORMAL",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ESTRICTO",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "PORCENTAJE_TOLERANCIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CATEGORIA_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TITULO_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "AUTOR_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "FECHA_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CONTENIDO_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DETALLE_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NIVEL_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TAGS_CATEGORIA",
                            VALOR1:"",
                            VALOR2: "9999999999",
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
                "NOMBRE_CAMPO":"Id Categoria",
                "NOMBRE_INTERNO":"ID_CATEGORIA",
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
     ID_CATEGORIA:0,
     DESCRIPCION:"0",
     ALTO_THUM_P:0,
     ANCHO_THUM_P:0,
     ALTO_THUM_M:0,
     ANCHO_THUM_M:0,
     DESCRIPCION_EN:"0",
     DESCRIPCION_FR:"0",
     NOMBRE:"0",
     ANCHO_NORMAL:0,
     ALTO_NORMAL:"0",
     ESTRICTO:0,
     PORCENTAJE_TOLERANCIA:0,
     CATEGORIA_CATEGORIA:0,
     TITULO_CATEGORIA:0,
     AUTOR_CATEGORIA:0,
     FECHA_CATEGORIA:0,
     CONTENIDO_CATEGORIA:0,
     DETALLE_CATEGORIA:0,
     NIVEL_CATEGORIA:0,
     TAGS_CATEGORIA:0,
     NUM_EMPRESA:0,
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 ID_CATEGORIA : {
            required: "El Id Categoria es obligatorio" 
        },NUM_EMPRESA : {
            required: "El Num Empresa es obligatorio" 
        },   }
};    

 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Id Categoria",
                                  field: "ID_CATEGORIA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Nombre",
                                  field: "DESCRIPCION                                                                                                                                                                                      ",
                                  filter: true,
                                  lockPosition: true,
                                  width: 300
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
export const CMSDATA8101 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


