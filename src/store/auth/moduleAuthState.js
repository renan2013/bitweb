/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    isUserLoggedIn: () => {
        let isAuthenticated = false

        return localStorage.getItem('userInfo') && isAuthenticated
    },


    /// DIVISOFT
    myPublicIP: "127.0.0.1",
    respuestaEncriptado: "",
    claveCambioClave: "",

    errorProfile: "0",

    //urlEncripta: process.env.VUE_API_ENCRIPTA,
    // profile  de conexion del usuario
    urlEncripta: "http://201.194.194.84:8998/DsoaService2/dsoa/encryptCenter", //process.env.VUE_API_ENCRIPTA,

    profile: [{
        Empresa: "506",
        nombre: "",
        Credencial: "0",
        Username: "admin",
    }],

}