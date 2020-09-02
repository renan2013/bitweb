/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
==========================================================================================*/
import axios from 'axios';
export default {
    async acLoginDsoa2({ dispatch, commit, state }, pet) {
        let data = {
            datos: '<Response><XML_RESPONSE><![CDATA[<Sdt_profile>ewogICAgIlNkdF9wcm9maWxlIjogewoKICAgICAgICAgICAgIk5vbWJyZSI6ICJD\nZWZpIEFkbWluIiwKICAgICAgICAgICAgIkNyZWRlbmNpYWwiOiI0MzMwNjFlNmQ2\nMDE0Mjk2ZTcyMTg4NDdhZTU1MDAwMiIsCiAgICAgICAgICAgICJVc2VybmFtZSI6\nICJDRUZJMjAyMCIsCiAgICAgICAgICAgICJDb2RpZ29fQWdlbmNpYSI6ICIxIiwK\nICAgICAgICAgICAgIk5vbWJyZV9BZ2VuY2lhIjogIkRlcGFydGFtZW50byBSZWN1\ncnNvcyBIdW1hbm9zIiwKICAgICAgICAgICAgIkNlbHVsYXIiOiAiODMzMzUzOTci\nLAogICAgICAgICAgICAiRW1wcmVzYSI6ICIxMDAwMDEiLCAgICAgIAogICAgICAg\nICAgICAiSW5kQ2VsdWxhciI6ICIiLAogICAgICAgICAgICAiSW5kRW1haWwiOiAi\nIiwgICAgIAogICAgICAgICAgICAiRXN0YWRvIjogIiIsICAgICAKICAgICAgICAg\nICAgIkRpYXNDbGF2ZSI6ICItMSIsCiAgICAgICAgICAgICJQbGF0YWZvcm1hIjog\nIkoiLAogICAgICAgICAgICAiUmVmZXJlbmNpYUZpcm1hIjogIiIsCiAgICAgICAg\nICAgICJFbWFpbCI6ICIiLAogICAgICAgICAgICAiVGFyZWFzX3Jlc2FnYWRhcyI6\nICIwIiwKICAgICAgICAgICAgIk5vdGlmaWNhY2lvbmVzIjogIjAiLAogICAgICAgICAgICAiUm9sZXMiOiAiQ09PUEVGWUxf\nVElfQURNSU5JU1RSQURPUiIsCiAgICAgICAgICAgICJGZWNoYV9sb2dpbiI6ICIw\nMi8wOS8yMDIwIDA5OjIzOjA2IiwKICAgICAgICAgICAgIkRpcmVjY2lvbl9pcCI6\nICIyMDEuMTk0LjE5NC44NCIsCiAgICAgICAgICAgICJJZF9qZWZlIjogIiIsCiAg\nICAgICAgICAgICJudW1fdXNlciI6ICIyMjAxIiwKICAgICAgICAgICAgCiAgICAg\nICAgICAgICJBdmF0YXIiOiAiIiwKICAgICAgICAgICAgIkVycm9yIjogIiIsCiAg\nICAgICAgICAgICJQYXJhbWV0cm9zIjpbICAgICAgICAgICAgICAgICAgICAgICB7\nICAgICAgICAgICAgICAgICAgICAgICAgIklkIjogIjEwIiwgICAgICAgICAgICAg\nICAgICAgICAgICAiSWRFbnRpZGFkIjogIjIxIiwgICAgICAgICAgICAgICAgICAg\nICAgICAiTm9tYnJlRW50aWRhZCI6ICJTZXJ2aWNlIERlc2siLCAgICAgICAgICAg\nICAgICAgICAgICAgICJJbWFnZW5BZ3VhIjogIiIsICAgICAgICAgICAgICAgICAg\nICAgICAgIkZvbmRvRnJlbnRlIjogIlUiLCAgICAgICAgICAgICAgICAgICAgICAg\nICJGcmFzZUFndWEiOiAiVVNPIEVYQ0xVU0lWTyBQQVJBIERJVklTT0ZUIDEiLCAgICAgICAgICAgICAgICAgICAgICAgICJY\nSW1hZ2VuQWd1YSI6ICIxMDAiLCAgICAgICAgICAgICAgICAgICAgICAgICJZSW1h\nZ2VuQWd1YSI6ICIxMDAiLCAgICAgICAgICAgICAgICAgICAgICAgICJDb2xvclRl\neHRvIjogIjQiLCAgICAgICAgICAgICAgICAgICAgICAgICJUYW1hbm9MZXRyYSI6\nIjUwIiwgICAgICAgICAgICAgICAgICAgICAgICAiRGlyZWN0b3Jpb09iamV0b3Mi\nOiJRenBjWEdsdFlXZGxjMTlpWVc1clhGdz0iLCAgICAgICAgICAgICAgICAgICAg\nICAgICJPYmpldFBhdGhOZXQiOiAiV3lBZ2V5SmthWEpsWTNSdmNtbHZJam9pWkdK\nd2JWZEZRaUo5TENBZ0lDQWdleUprYVhKbFkzUnZjbWx2SWpvaWRHVnRjQ0o5SUNC\nZCIsICAgICAgICAgICAgICAgICAgICAgICAgIk9qZWN0UGF0aEphdmEiOiJXeUFn\nZXlKa2FYSmxZM1J2Y21sdklqb2laR0p3YlZkRlFpSjlMQ0FnSUNBZ2V5SmthWEps\nWTNSdmNtbHZJam9pZEdWdGNDSjlJQ0JkIiwgICAgICAgICAgICAgICAgICAgICAg\nICAiRGVzdGlub0Zpc2ljbyI6Ild3cDdJbVJwY21WamRHOXlhVzhpT2lKRE9pSjlM\nQXA3SW1ScGNtVmpkRzl5YVc4aU9pSTZJbjBzQ25zaVpHbHlaV04wYjNKcGJ5STZJblJ2YldOaGREY2lmU3dLZXlKa2FYSmxZ\nM1J2Y21sdklqb2lkMlZpWVhCd2N5SjlMQXA3SW1ScGNtVmpkRzl5YVc4aU9pSmtZ\nbkJ0VjBWQ0luMHNJQXA3SW1ScGNtVmpkRzl5YVc4aU9pSjBaVzF3SW4wS1hRPT0i\nLCAgICAgICAgICAgICAgICAgICAgICAgICJUZW1wTWVkaWFEaXJlY3RvcmlvSmF2\nYSI6Ild3cDdJbVJwY21WamRHOXlhVzhpT2lKRE9pSjlMQXA3SW1ScGNtVmpkRzl5\nYVc4aU9pSjBiMjFqWVhRM0luMHNDbnNpWkdseVpXTjBiM0pwYnlJNkluZGxZbUZ3\nY0hNaWZTd0tleUprYVhKbFkzUnZjbWx2SWpvaVpHSndiVmRGUWlKOUxDQUtleUpr\nYVhKbFkzUnZjbWx2SWpvaWRHVnRjQ0o5Q2wwPSIsICAgICAgICAgICAgICAgICAg\nICAgICAgIkRpcmVjdG9yaW9UcmFuc2l0byI6ICJJRnQ3Q2lBZ0lDQWdJbVJwY21W\namRHOXlhVzhpT2lBaVF6b2lDaUI5TENCN0NpQWdJQ0FnSW1ScGNtVmpkRzl5YVc4\naU9pQWlhVzFoWjJWelgySmhibXNpQ2lCOVhRPT0iLCAgICAgICAgICAgICAgICAg\nICAgICAgICJEaXJlY3RvcmlvUHJvZHVjY2lvbiI6Ilczc2laR2x5WldOMGIzSnBi\neUk2SWtNNklpd2laR2x5WldOMGIzSnBieUk2SW1sdFlXZGxjMTlpWVc1ckluMWQiLCAgICAgICAgICAgICAgICAgICAgICAg\nICJSdXRhQmFzZURvY3VtZW50b3MiOiIyMSIsICAgICAgICAgICAgICAgICAgICAg\nICAgIlRpcG9EaXJlY3RvcmlvIjoiUiIsICAgICAgICAgICAgICAgICAgICAgICAg\nIkRpcmVjdG9yaW9TZXBhcmF0b3JPcmlnZW4iOiJCIiwgICAgICAgICAgICAgICAg\nICAgICAgICAiRGlyZWN0b3Jpb1NlcGFyYXRvciI6ICJCIiwgICAgICAgICAgICAg\nICAgICAgICAgICAiVXJsX0luaWNpYWRvciI6ICIiICAgICAgICAgICAgICAgICAg\nICB9XQogICAgICAgICAgIAogICAgICAgICAKICAgIH0KfSA=</Sdt_profile>\n]]></XML_RESPONSE><PV_ERROR>0</PV_ERROR></Response>',
            manipula: '',
            bd: '',
            dml: 'E',
            formato: 'N',
            formatoRequest: 'N',
            deserror: '',
            codigoerror: '0',
            tecnologia: '',
            datosJson: '',
            objectId: '97',
            credencial: '433061e6d6014296e7218847ae550002'
        };
        commit('MUTSETRESPUESTALOGIN', data);
    },

    /// llama a Solicitud de Datos
    async acLoginDsoa({ dispatch, commit, state }, pet) {
        const datos = state.peticion;
        const url = state.urlDsoa;

        state.errorProfile = '0';

        if (datos == null || datos == '') alert('Peticion va Nula');

        var dsoaModel = {
            datos: datos,
            manipula: '',
            bd: '',
            dml: pet.dml,
            formato: pet.formatoenvio,
            formatoRequest: pet.formatorecibe,
            credencial: pet.credencial,
            tecnologia: '',
            datosJson: '',
            objectId: pet.ObjectId
        };

        //console.log('DSOAMODEL2: ' + JSON.stringify(dsoaModel));

        try {
            // fetch data from a url web service
            let res = await axios({
                    method: 'POST',
                    url,
                    headers: { 'content-type': 'application/json' },
                    processData: false,
                    contentType: false,
                    mimeType: 'multipart/form-data',
                    sync: false,
                    crossDomain: true,
                    data: dsoaModel
                })
                .then((response) => {
                    let tipoLogin = pet.tipoLogin;

                    if (tipoLogin == 'L') {
                        commit('MUTSETRESPUESTALOGIN', response.data);
                        console.log('RESPONSE', JSON.stringify(response.data));
                    }

                    if (tipoLogin == 'U') commit('MUTSETRESPUESTALOGINU', response.data);

                    if (tipoLogin == 'R' || tipoLogin == 'I') {
                        commit('MUTSETRESPUESTALOGINR', response.data);
                    }

                    if (tipoLogin == 'C') commit('MUTSETRESPUESTACAMBIO', response.data);

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
                        console.log('SE PRODUJO ERROR ' + error);
                    }
                });
        } catch (error) {
            alert(error); // catches both errors
        }
    },

    /// RECUPERA LA IP PUBLICA
    async acLoginGetip({ commit, state }) {
        let url = 'https://api.ipify.org?format=json';
        try {
            // fetch data from a url web service
            let res = await axios({
                    method: 'GET',
                    url,
                    headers: { 'content-type': 'application/json' }
                })
                .then((response) => {
                    commit('MUTSETPUBLICIP', response.data.ip);
                    //commit('MUTSETRESPUESTALOGIN', response.data);
                })
                .catch(function(error) {
                    alert(' IP ERROR ');
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
                        console.log('SE PRODUJO ERROR ' + error);
                    }
                });
        } catch (error) {
            alert(error); // catches both errors
        }
    },

    /// llama a Solicitud de Datos
    async acLoginEncripta({ dispatch, commit, state }, textoEncriptar) {
        let url = state.urlEncripta;

        return "4724043c4e21ca89d976cf8a374d7857eeb964b6a9b3d1e6e5bfd7487908c811";

        {
            // fetch data from a url web service
            let res = await axios({
                    method: 'POST',
                    url,
                    headers: { 'content-type': 'text/plain' },
                    processData: false,
                    contentType: false,
                    mimeType: 'multipart/form-data',
                    sync: false,
                    crossDomain: true,
                    data: textoEncriptar
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
                        console.log('SE PRODUJO ERROR ' + error);
                    }
                });
        }
    }
};