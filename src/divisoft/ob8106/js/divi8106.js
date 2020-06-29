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
                            NOMBRE: "ID_ROL",
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
                "NOMBRE_CAMPO":"Id Usuario",
                "NOMBRE_INTERNO":"ID_USUARIO",
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
  ,{ 
                              "TIPO":"LIKE",
                              "LABEL":"texto"
                          },
     ]
                      },     { 
                "NOMBRE_CAMPO":"Id Rol",
                "NOMBRE_INTERNO":"ID_ROL",
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
  ,{ 
                              "TIPO":"LIKE",
                              "LABEL":"texto"
                          },
     ]
                      },  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
     ID_USUARIO:"0",
     ID_ROL:"0",
     NUM_EMPRESA:0,
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 ID_USUARIO : {
            required: "El Id Usuario es obligatorio" 
        },ID_ROL : {
            required: "El Id Rol es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Id Usuario",
                                  field: "ID_USUARIO",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Id Rol",
                                  field: "ID_ROL",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
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
export const CMSDATA8106 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


