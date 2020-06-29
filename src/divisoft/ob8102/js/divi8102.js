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
                            NOMBRE: "ID_USUARIO",
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
                            NOMBRE: "NOMBRE_USUARIO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TELMOVIL",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TELOFI",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TELCASA",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "FECHA_NAC",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CORREO_ELECTRONICO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CODIGO_PAIS",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "CORREO_ELECTRONICO2",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TIPO_USUARIO",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "TIPO_IDENTIFICACION",
                            VALOR1:"",
                            VALOR2: "",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "IDENTIFICACION",
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
  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
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
                                  headerName: "Nombre Usuario",
                                  field: "NOMBRE_USUARIO",
                                  filter: true,
                                  lockPosition: true,
                                  width: 20000
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
export const CMSDATA8102 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


