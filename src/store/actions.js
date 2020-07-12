/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from 'axios';
import router from '@/router';
import * as divilib from '@/divisoftlibs/utilDivisoftJS.js';

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
    async acQueryGenerico({ dispatch, commit }, pet) {
        // geder generico
        //  console.log('LLAMANDO GENERICO ', JSON.stringify(pet));
        let header = {
            MODO: pet.dml,
            OBJECTID: pet.ObjectId,
            CREDENCIAL: pet.Credencial,
            USERNAME: pet.Username,
            REGISTROSXPAGINA: '1',
            PAGINA: '1'
        };
        // header en texto

        let origenUrl = 'O';
        // agrego las filas
        let filas = [];
        filas.push({
            NOMBRE: pet.FilaRecupera,
            VALOR1: null,
            VALOR2: pet.FormatoFila,
            CDATA: '0'
        });
        // filas en texto

        var parametros = [];
        pet.parametros.forEach(function callback(item) {
            if (item.valor.length > 0) {
                var parametro1 = {
                    NOMBRE: item.nombre,
                    OPERADOR: '=',
                    VALOR1: item.valor,
                    VALOR2: '',
                    CDATA: '0'
                };
                parametros.push(parametro1);
            }
        });

        //entrega arreglo de parametros recibe texto de parametros
        let headertxt = divilib.GetHeaderString(header);
        let filastxt = divilib.filaArraytoStrintg(filas, 'N');
        let paramtxt = divilib.paramArraytoStrintg(parametros);

        let petTxt = {
            header: headertxt,
            parametros: paramtxt,
            filas: filastxt
        };
        commit('MUTSETURL', 'O');
        commit('MUTSETPETICIONTXT', petTxt);

        // pedito generico
        var pedido = {
            dml: pet.dml,
            Credencial: pet.Credencial,
            ObjectId: pet.ObjectId,
            formatoenvio: pet.formatoenvio,
            formatorecibe: pet.formatorecibe,
            indicador: pet.indicador, // funcion de respueta unica  un solo valor
            origenUrl: pet.origenUrl
        };
        console.log('LLAMANDO GENERICO pedido FIN  ', JSON.stringify(pedido));

        dispatch('acDsoaPHP2', pedido);


    },

    /// llama a Solicitud de Datos
    async acDsoa({
        commit,
        state
    }, pet) {
        const datos = state.peticion;
        const url = state.urlDsoa;

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



            // console.log('LLAMANDO DSOA ' + JSON.stringify(dsoaModel));
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


    // fetch data from a url web service
    //  let datos = "W3sNCiAgICAgICAgICAgICJpZCI6IDEsDQogICAgICAgICAgICAidGl0dWxvIjogIkRpdmlzb2Z0IGxhbnphIHN1IG51ZXZhIHBsYXRhZm9ybWEgY29uIHRlY25vbG9naWEgVlVFIHkgTm9kZUpTICIsDQogICAgICAgICAgICAiY2F0ZWdvcmlhIjogIjEiLA0KICAgICAgICAgICAgImZlY2hhIjogIjYvMjQvMjAyMCIsDQogICAgICAgICAgICAiYXV0b3IiOiAiaGlsZGVnYXJkLm9yZyINCiAgICAgICAgfSx7DQogICAgICAgICAgICAiaWQiOiAyLA0KICAgICAgICAgICAgInRpdHVsbyI6ICJU6WNuaWNvIGVuIERpc2XxbyBHcmFmaWNvIERpZ2l0YWwiLA0KICAgICAgICAgICAgImNhdGVnb3JpYSI6ICIyIiwNCiAgICAgICAgICAgICJmZWNoYSI6ICI2LzI0LzIwMjAiLA0KICAgICAgICAgICAgImF1dG9yIjogImhpbGRlZ2FyZC5vcmciDQogICAgICAgIH0sew0KICAgICAgICAgICAgImlkIjogMywNCiAgICAgICAgICAgICJ0aXR1bG8iOiAiU2l2aXNvZnQgbGFuemEgc3UgYXBwIEdvTm93IiwNCiAgICAgICAgICAgICJjYXRlZ29yaWEiOiAiMyIsDQogICAgICAgICAgICAiZmVjaGEiOiAiNi8yNC8yMDIwIiwNCiAgICAgICAgICAgICJhdXRvciI6ICJLYXRlcmluZSINCiAgICAgICAgfSx7DQogICAgICAgICAgICAiaWQiOiA0LA0KICAgICAgICAgICAgInRpdHVsbyI6ICJNaWdyYWNp824gZGUgc2lzdGVtYXMgYSBPcmFjbGUiLA0KICAgICAgICAgICAgImNhdGVnb3JpYSI6ICIxIiwNCiAgICAgICAgICAgICJmZWNoYSI6ICI2LzI0LzIwMjAiLA0KICAgICAgICAgICAgImF1dG9yIjogImhpbGRlZ2FyZC5vcmciDQogICAgICAgIH0sew0KICAgICAgICAgICAgImlkIjogNSwNCiAgICAgICAgICAgICJ0aXR1bG8iOiAiTWlncmFjafNuIGRlIHNpc3RlbWFzIGEgT3JhY2xlIiwNCiAgICAgICAgICAgICJjYXRlZ29yaWEiOiAiMSIsDQogICAgICAgICAgICAiZmVjaGEiOiAiNi8yNC8yMDIwIiwNCiAgICAgICAgICAgICJhdXRvciI6ICJoaWxkZWdhcmQub3JnIg0KICAgICAgICB9XQ=="
    //commit('MUTSETRESPUESTAGRIDPUBLICA', datos);


    async acDsoaPHP2({
        commit,
        state
    }, pet) {
        const datos = state.peticion;
        const url = state.urlDsoaPHP

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


            console.log('LLAMANDO DSOAPHP DML ' + pet.dml);
            console.log('LLAMANDO DSOAPHP222 ' + JSON.stringify(dsoaModel));
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
                        console.log('PHPPHPPHPLARGO DE RESPUESTA  acDsoa', JSON.stringify(response.data));
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
                            commit('MUTSETRESPUESTAGRIDPUBLICA', response.data);
                        }
                        //MUTSETRESPUESTAGENERICO
                    })
                    .catch(function(error) {
                        console.log("PHPPHPPHPPHP");
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
                console.log("PHPPHPPHPPHP ERROR ");
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