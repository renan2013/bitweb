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
                            NOMBRE: "IDADM_TAGS",
                            VALOR1:"",
                            VALOR2: "9999999999",
                            CDATA: "0"
                          }); 
                          filas.push({
                            NOMBRE: "NOMBRE",
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
                "NOMBRE_CAMPO":"Idadm Tags",
                "NOMBRE_INTERNO":"IDADM_TAGS",
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
     IDADM_TAGS:0,
     NOMBRE:"0",
     DESCRIPCION:"0",
     NUM_EMPRESA:0,
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 IDADM_TAGS : {
            required: "El Idadm Tags es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Idadm Tags",
                                  field: "IDADM_TAGS",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Nombre",
                                  field: "NOMBRE",
                                  filter: true,
                                  lockPosition: true,
                                  width: 500
                                }, 
                              {
                                  headerName: "Descripcion",
                                  field: "DESCRIPCION",
                                  filter: true,
                                  lockPosition: true,
                                  width: 1275
                                }, 
                              ];   // De defincion de  Columnas

  
 
/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA8108 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


