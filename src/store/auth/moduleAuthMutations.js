/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
==========================================================================================*/
import CryptoJS from 'crypto-js'
import router from '@/router'

export default {

    MUTSETRESPUESTALOGIN(state, response) {
        //extrae el error
        var parser = new DOMParser();
        var error = parser.parseFromString(response.datos, "text/xml").getElementsByTagName("PV_ERROR")[0].childNodes[0].nodeValue;


        if (error == 0) {
            //extrae datos XMLRESPONSE
            var strData64 = response.datos.replace("<Response><XML_RESPONSE><![CDATA[<Sdt_profile>", "");
            var posicion = strData64.indexOf("</Sdt_profile>");
            strData64 = strData64.substring(0, posicion);


            var strData = JSON.parse(atob(strData64));
            try {

                state.profile[0] = strData.Sdt_profile;

                if (state.profile[0].Credencial == "" || state.profile[0].Credencial == null) {

                    state.profile[0].Credendial = response.credencial;
                }
                let credencialFinal = (state.profile[0].Credencial > "") ? state.profile[0].Credencial : response.credencial;


                let profileLocal = state.profile[0];
                let credencial = state.profile[0].Credencial;
                profileLocal.Credencial = null;

                strData64 = btoa(JSON.stringify(profileLocal));
                localStorage.setItem('profile', strData64);

                //se encripta strData
                //strData64 = aesEncrypt(strData64);

                const key = '82f2ceed4c503896c8a291e560bd4325' // change to your key
                const iv = 'sinasinasisinaaa' // change to your iv

                const cipher = CryptoJS.AES.encrypt(credencial, CryptoJS.enc.Utf8.parse(key), {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CBC
                })

                strData64 = cipher.toString();

                localStorage.setItem('paseKey', strData64);

                state.profile[0].Credencial = credencialFinal;

                //pantalla principal
                router.push(router.currentRoute.query.to || '/')

            } catch (e) {
                console.log("error", e);
            }
        } else
            state.errorProfile = error;

    },

    MUTSETRESPUESTACAMBIO(state, response) {
        //extrae el error
        var parser = new DOMParser();
        var error = parser.parseFromString(response.datos, "text/xml").getElementsByTagName("PV_ERROR")[0].childNodes[0].nodeValue;


        if (error == 0) {

            //extrae datos XMLRESPONSE
            var strData64 = response.datos.replace("<Response><XML_RESPONSE><![CDATA[<Sdt_profile>", "");
            var posicion = strData64.indexOf("</Sdt_profile>");
            strData64 = strData64.substring(0, posicion);
            var strData = JSON.parse(atob(strData64));

            try {
                state.profile[0] = strData.Sdt_profile;

                state.errorProfile = "0"

                router.push("/pages/procesoExitoso")




            } catch (e) {
                console.log("error", e);
            }
        } else {
            state.errorProfile = error;

        }


    },

    MUTSETRESPUESTALOGINU(state, response) {
        //extrae el error

        var parser = new DOMParser();
        var error = parser.parseFromString(response.datos, "text/xml").getElementsByTagName("PV_ERROR")[0].childNodes[0].nodeValue;

        if (error == 0) {

            //extrae datos XMLRESPONSE
            var strData64 = response.datos.replace("<Response><XML_RESPONSE><![CDATA[<Sdt_profile>", "");
            var posicion = strData64.indexOf("</Sdt_profile>");
            strData64 = strData64.substring(0, posicion);

            var strData = JSON.parse(atob(strData64));

            try {

                state.profile = strData.Sdt_profile;

            } catch (e) {
                console.log("error", e);
            }
        } else
            state.errorProfile = error;

    },
    MUTSETRESPUESTALOGINR(state, response) {
        //extrae el error
        //console.log('EN MUTACION MUTSETRESPUESTALOGINR', response)



        var parser = new DOMParser();
        var error = parser.parseFromString(response.datos, "text/xml").getElementsByTagName("PV_ERROR")[0].childNodes[0].nodeValue;

        if (error == 0) {

            //extrae datos XMLRESPONSE
            var strData64 = response.datos.replace("<Response><XML_RESPONSE><![CDATA[<Sdt_profile>", "");
            var posicion = strData64.indexOf("</Sdt_profile>");
            strData64 = strData64.substring(0, posicion);



            var strData = JSON.parse(atob(strData64));

            console.log('EN MUTACION MUTSETRESPUESTALOGINR', strData)

            try {

                state.profile = strData.Sdt_profile;



            } catch (e) {
                console.log("error", e);
            }
        } else
            state.errorProfile = error;

    },

    // para cambio de clvae

    MUTSETCLAVECONTROL(state, claveControl) {
        state.claveCambioClave = claveControl;
    },
    MUTSETPUBLICIP(state, myPublicIP) {
        state.myPublicIP = myPublicIP;
    },
    MUTSETENCRIPTA(state, texto) {
        state.respuestaEncriptado = texto;
    },

    MUTSETPROFILE(state, profile) {
        state.profile[0] = profile;

    },

    MUTSETURL(state, indicadorUrl) {
        //ASIGNA EL URL 
        if (indicadorUrl == "O")
            state.urlDsoa = "http://201.194.194.84:8998/DsoaService2/dsoa/request";

        if (indicadorUrl == "P")
            state.urlDsoa = "https://bitweb.ceficr.com/dsoaPHP/dsoaPHP/dsoa/";
    },

    MUTSETPETICIONTXT(state, pettxt) {

        // empaquete la peticion 
        state.peticion = "<SOA_Xml>";
        state.peticion += pettxt.header;
        state.peticion += pettxt.parametros;
        state.peticion += pettxt.filas;
        state.peticion += "</SOA_Xml>";
    },

}