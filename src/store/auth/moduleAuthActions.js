/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
==========================================================================================*/
import axios from 'axios'
export default {


    /// llama a Solicitud de Datos 
    async acLoginDsoa({ dispatch, commit, state }, pet) {

        const datos = state.peticion;
        const url = state.urlDsoa;

        state.errorProfile = "0";

        if (datos == null || datos == "")
            alert("Peticion va Nula");



        var dsoaModel = {
            datos: datos,
            manipula: "",
            bd: "",
            dml: pet.dml,
            formato: pet.formatoenvio,
            formatoRequest: pet.formatorecibe,
            credencial: pet.credencial,
            tecnologia: "",
            datosJson: "",
            objectId: pet.ObjectId,
        };

        //console.log('DSOAMODEL2: ' + JSON.stringify(dsoaModel));



        try {
            // fetch data from a url web service
            let res = await axios({
                    method: 'POST',
                    url,
                    headers: { "content-type": "application/json", },
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "sync": false,
                    "crossDomain": true,
                    "data": dsoaModel
                })
                .then((response) => {

                    let tipoLogin = pet.tipoLogin;

                    // console.log("RESPONSE", JSON.stringify(response.data) + "    " + tipoLogin);

                    if (tipoLogin == "L")
                        commit('MUTSETRESPUESTALOGIN', response.data);


                    if (tipoLogin == "U")
                        commit('MUTSETRESPUESTALOGINU', response.data);

                    if (tipoLogin == "R" || tipoLogin == "I") {

                        commit('MUTSETRESPUESTALOGINR', response.data);
                    }

                    if (tipoLogin == "C")
                        commit('MUTSETRESPUESTACAMBIO', response.data);


                    /**
                         LN_WKLOGIN            NUMBER := 1;  -- LOGIN   VAL_OBJ_LOGIN.PC_ACTION = 'L'
                             THEN
                           
                          LN_WKCPASRECUPERA             NUMBER := 2;  -- CAMBIA EL PASSWORD POR RECUPERACON   = 'R'    
                            
                          LN_WKLOGOUT           NUMBER := 3;  -- QUITA EL LOGIN  LIMPIA SESIONES  
                          
                          LN_WKCPAS             NUMBER := 4;  -- CAMBIA EL PASSWORD
                          -- Despues de que pide   recuperar clave
                          LN_WKFLOGIN           NUMBER := 5; --  =F
                          -- verifica si el pass es el del mismo o exite solo para autorizaciones
                          LN_WKVERICACLAVEYUSUARIO           NUMBER := 6;  V
                          
                          LN_RECUPERA_CLAVE NUMBER:=7; -- PARA REUPERAR CLAVE  R
                          
                          LN_WKREGISTRO      NUMBER := 8;  -- REGISTRO   I
                          
                          LN_WKVERIFICASUARIO      NUMBER := 9;  -- VERIFICA SOLO USUARIO   Y DEVUELVE DATOS BASICOS 
                          
                     * / */

                })
                .catch(function(error) {
                    if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("SE PRODUJO ERROR " + error);
                    }
                });

        } catch (error) {
            alert(error); // catches both errors
        }

    },

    /// RECUPERA LA IP PUBLICA
    async acLoginGetip({ commit, state }) {
        let url = "https://api.ipify.org?format=json";
        try {
            // fetch data from a url web service
            let res = await axios({
                    method: 'GET',
                    url,
                    headers: { "content-type": "application/json", }
                })
                .then((response) => {
                    commit('MUTSETPUBLICIP', response.data.ip);
                    //commit('MUTSETRESPUESTALOGIN', response.data);

                })
                .catch(function(error) {
                    alert(" IP ERROR ");
                    if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("SE PRODUJO ERROR " + error);
                    }
                });

        } catch (error) {
            alert(error); // catches both errors
        }

    },

    /// llama a Solicitud de Datos 
    async acLoginEncripta({ dispatch, commit, state }, textoEncriptar) {
        let url = state.urlEncripta;

        {
            // fetch data from a url web service
            let res = await axios({
                    method: 'POST',
                    url,
                    headers: { "content-type": "text/plain", },
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "sync": false,
                    "crossDomain": true,
                    "data": textoEncriptar
                })
                .then((response) => {


                    commit('MUTSETENCRIPTA', response.data);

                })
                .catch(function(error) {
                    if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("SE PRODUJO ERROR " + error);
                    }
                });

        }


    },

}