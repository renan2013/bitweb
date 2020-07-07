/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
        commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
        commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
        commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
        commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
        commit('UPDATE_USER_INFO', payload)
    },
    updateUserRole({ dispatch }, payload) {
        // Change client side
        payload.aclChangeRole(payload.userRole)

        // Make API call to server for changing role

        // Change userInfo in localStorage and store
        dispatch('updateUserInfo', { userRole: payload.userRole })
    },
    // ////////////////////////////////////////////
    // DIVISOFT
    // ////////////////////////////////////////////

    /// llama a Solicitud de Datos
    async acDsoa({
        commit,
        state
    }, pet) {
        const datos = state.peticion;
        const url = state.urlDsoa;
        //console.log("peticion ", JSON.stringify(pet))

        /*
                // activar solo para web qe prueben sin modificar
                if (pet.dml == "I" || pet.dml == "U" || pet.dml == "D") {

                    return "ERROR";

                }*/

        //limpia mensaje error
        var jsonError = {
            codigoError: '',
            msgError: ''
        };
        commit('MUTREGISTRAERROR', jsonError);

        if (pet.Credencial == null || pet.ObjectId == null) {
            alert('adentro Con Error  credencial' + pet.Credencial + '  objeto ' + pet.ObjectId);

            if (pet.Credencial == null) var jsonError = {
                codigoError: '90',
                msgError: 'Credencial Nulo'
            };

            if (pet.ObjectId == null) var jsonError = {
                codigoError: '91',
                msgError: 'Objeto BD no identificado'
            };

            commit('MUTREGISTRAERROR', jsonError);
        } else {
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



            console.log('LLAMANDO DSOA ' + JSON.stringify(dsoaModel));
            commit('MUTPROCESANDOTRUE');

            try {
                // fetch data from a url web service

                let res = await axios({
                        method: 'POST',
                        url,
                        headers: {
                            'content-type': 'application/json'
                        },
                        processData: false,
                        contentType: false,
                        mimeType: 'multipart/form-data',
                        sync: false,
                        crossDomain: true,
                        data: dsoaModel
                    })
                    .then((response) => {
                        commit('MUTPROCESANDOFALSE');

                        console.log('LARGO DE RESPUESTA  acDsoa', JSON.stringify(response.data).length);
                        //console.log('LARGO DE RESPUESTA  acDsoa', JSON.stringify(response.data));

                        //console.log('INDICADOR', pet.indicador);

                        //evalua el indicador
                        if (pet.indicador == 1) {
                            // llena un grid
                            if (
                                response.data.codigoerror == '2000' // No AUTORIZADO  Enviar  login
                            )
                            //router
                                router.push('/pages/login').catch(() => {});
                            else commit('MUTSETRESPUESTAGRID', response.data); //carga variable con los datos
                        }

                        if (
                            pet.indicador == 2 //llena un registro unico para edicion
                        )
                            commit('MUTSETRESPUESTAFORM', response.data);

                        if (
                            pet.indicador == 3 // respuesta de Base datos para INSERT,DELETE,UPDATE
                        )
                            commit('MUTSETRESPUESTACRUD', response.data);

                        if (
                            pet.indicador == 4 // respuesta de Base datos para EXECUTE
                        )
                            commit('MUTSETRESPUESTACRUD', response.data);

                        console.log('procesando indicador ', pet.indicador);

                        if (
                            pet.indicador == 5 // respuesta de Base datos para EXECUTE
                        )
                            commit('MUTSETRESPUESTAPROMPT', response.data);

                        if (pet.indicador == 7) {
                            // respuesta procedimiento Almacenado
                            // console.log("Enviando a MUTSETRESPUESTAE", JSON.stringify(response.data));
                            commit('MUTSETRESPUESTAE', response.data);
                        }
                        if (pet.indicador == 8) {
                            //  query de respuesta Unica
                            // console.log("Enviando a MUTSETRESPUESTAE", JSON.stringify(response.data));
                            commit('MUTSETRESPUESTAGENERICO', response.data);
                        }
                        if (pet.indicador == 9) {
                            //  DATOS CLOUD
                            // console.log("Enviando a MUTSETRESPUESTAE", JSON.stringify(response.data));
                            commit('MUTSETRESPUESTACLOUD', response.data);
                        }
                        //MUTSETRESPUESTAGENERICO
                    })
                    .catch(function(error) {
                        commit('MUTPROCESANDOFALSE');
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
                commit('MUTPROCESANDOFALSE');
                alert(error); // catches both errors
            }
        }
    },

    ///  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA
    async CMSacDsoa({
        commit,
        state
    }, pet) {
        if (pet.Credencial == null) {
            if (pet.Credencial == null) var jsonError = {
                codigoError: '90',
                msgError: 'Credencial Nulo CMSacDsoa'
            };

            alert(' fallo axios');
            commit('MUTREGISTRAERROR', jsonError);
        } else {
            commit('MUTSETDATOSDEFAULTCMS', divilib.DataCMS[0]);

            const url = state.urlDsoaCMS;
            commit('MUTPROCESANDOTRUE');
            try {
                // fetch data from a url web service

                let CMSres = await axios({
                        method: 'POST',
                        url,
                        headers: {
                            'content-type': 'application/json'
                        },
                        processData: false,
                        contentType: false,
                        mimeType: 'multipart/form-data',
                        sync: false,
                        crossDomain: true,
                        data: pet
                    })
                    .then((response) => {
                        commit('MUTPROCESANDOFALSE');

                        console.log('LARGO DE RESPUESTA  CMSacDsoa  ', JSON.stringify(response.data).length);
                        // console.log("LARGO DE RESPUESTA  CMSacDsoa  ", JSON.stringify(response.data));

                        let data = response.data.datos;
                        // console.log("imagen", data.RutaDestino)
                        if (!divilib.isObject(data)) data = JSON.parse(response.data.datos);

                        console.log('imagen', data.RutaDestino);

                        commit('MUTSETDATA', data);
                    })
                    .catch(function(error) {
                        commit('MUTPROCESANDOFALSE');
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
                commit('MUTPROCESANDOFALSE');
                alert(error); // catches both errors
            }
        }
    },

    async CMSacDsoaLimpia({
        commit,
        state
    }, pet) {
        // console.log("limpiando la Peticion ", pet)
        commit('MUTSETDATOSDEFAULTCMS', pet);
    }

}


export default actions