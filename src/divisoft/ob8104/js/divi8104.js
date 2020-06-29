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
                            NOMBRE: "ID_CONNECTION",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CURRENT_SESSION",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "MAX_AUTH_FAILS",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TIEMPO_INACTIVIDAD",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "IP_CONTROL",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "LENGUAJE",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TEMP_MEDIA_DIRECTORY",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "DIRECTORIOOBJETOS",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "OBJECTOSXLOTE",
                            VALOR1:"",
                            VALOR2: "9999999999999999999",
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
  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
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
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 NUM_EMPRESA : {
            required: "El Num Empresa es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Num Empresa",
                                  field: "NUM_EMPRESA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              ];   // De defincion de  Columnas

  
 
/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA8104 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


