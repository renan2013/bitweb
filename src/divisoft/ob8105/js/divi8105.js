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
                            NOMBRE: "REFERENCIA",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LLAVEADMINISTRA",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LOTE",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ESTADO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NOMBREOBJETO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DIRECTORIO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "EXTENSION",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DESCRIPCION",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "OBJETO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CATEGORIA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "PATRONBUSQUEDA",
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
                            NOMBRE: "RUTA_ARCHIVO",
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
                            NOMBRE: "ORDEN",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "ORDEN_DESPLIEGUE",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "URL_ASOCIADO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CLASE_URL",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "MIME_TYPES",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "REFERENCIA_RELACIONADA",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "EMBEBED_CODE",
                            VALOR1:"",
                            VALOR2: "",
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
                            NOMBRE: "DESCRIPCION_ES",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          });  return filas; 
    }; 
   //addFilasDet funcion completa 
   
   
  // RegistroNuevo Gen_CAMPOS_GRID(4)
  export const filtros= [ 
  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
     REFERENCIA:0,
     LLAVEADMINISTRA:0,
     LOTE:0,
     ESTADO:"0",
     NOMBREOBJETO:"0",
     DIRECTORIO:"0",
     EXTENSION:"0",
     DESCRIPCION:"0",
     OBJETO:"0",
     CATEGORIA:"0",
     PATRONBUSQUEDA:"0",
     TITULO:"0",
     RUTA_ARCHIVO:"0",
     DETALLE:"0",
     ORDEN:0,
     ORDEN_DESPLIEGUE:0,
     URL_ASOCIADO:"0",
     CLASE_URL:"0",
     MIME_TYPES:"0",
     REFERENCIA_RELACIONADA:0,
     EMBEBED_CODE:"0",
     DESCRIPCION_EN:"0",
     DESCRIPCION_FR:"0",
     DESCRIPCION_ES:"0",
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 REFERENCIA : {
            required: "El Referencia es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Referencia",
                                  field: "REFERENCIA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Nombreobjeto",
                                  field: "NOMBREOBJETO",
                                  filter: true,
                                  lockPosition: true,
                                  width: 20000
                                }, 
                              {
                                  headerName: "Descripcion",
                                  field: "DESCRIPCION",
                                  filter: true,
                                  lockPosition: true,
                                  width: 20000
                                }, 
                              ];   // De defincion de  Columnas

  
 
/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA8105 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


