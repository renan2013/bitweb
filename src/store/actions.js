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

    async acDsoaPHP3({
        commit,
        state
    }, pet) {
        // fetch data from a url web service
        let datos = "W3sNCiAgICAgICAgICAgICJpZCI6IDEsDQogICAgICAgICAgICAidGl0dWxvIjogIkRpdmlzb2Z0IGxhbnphIHN1IG51ZXZhIHBsYXRhZm9ybWEgY29uIHRlY25vbG9naWEgVlVFIHkgTm9kZUpTICIsDQogICAgICAgICAgICAiY2F0ZWdvcmlhIjogIjEiLA0KICAgICAgICAgICAgImZlY2hhIjogIjYvMjQvMjAyMCIsDQogICAgICAgICAgICAiYXV0b3IiOiAiaGlsZGVnYXJkLm9yZyINCiAgICAgICAgfSx7DQogICAgICAgICAgICAiaWQiOiAyLA0KICAgICAgICAgICAgInRpdHVsbyI6ICJU6WNuaWNvIGVuIERpc2XxbyBHcmFmaWNvIERpZ2l0YWwiLA0KICAgICAgICAgICAgImNhdGVnb3JpYSI6ICIyIiwNCiAgICAgICAgICAgICJmZWNoYSI6ICI2LzI0LzIwMjAiLA0KICAgICAgICAgICAgImF1dG9yIjogImhpbGRlZ2FyZC5vcmciDQogICAgICAgIH0sew0KICAgICAgICAgICAgImlkIjogMywNCiAgICAgICAgICAgICJ0aXR1bG8iOiAiU2l2aXNvZnQgbGFuemEgc3UgYXBwIEdvTm93IiwNCiAgICAgICAgICAgICJjYXRlZ29yaWEiOiAiMyIsDQogICAgICAgICAgICAiZmVjaGEiOiAiNi8yNC8yMDIwIiwNCiAgICAgICAgICAgICJhdXRvciI6ICJLYXRlcmluZSINCiAgICAgICAgfSx7DQogICAgICAgICAgICAiaWQiOiA0LA0KICAgICAgICAgICAgInRpdHVsbyI6ICJNaWdyYWNp824gZGUgc2lzdGVtYXMgYSBPcmFjbGUiLA0KICAgICAgICAgICAgImNhdGVnb3JpYSI6ICIxIiwNCiAgICAgICAgICAgICJmZWNoYSI6ICI2LzI0LzIwMjAiLA0KICAgICAgICAgICAgImF1dG9yIjogImhpbGRlZ2FyZC5vcmciDQogICAgICAgIH0sew0KICAgICAgICAgICAgImlkIjogNSwNCiAgICAgICAgICAgICJ0aXR1bG8iOiAiTWlncmFjafNuIGRlIHNpc3RlbWFzIGEgT3JhY2xlIiwNCiAgICAgICAgICAgICJjYXRlZ29yaWEiOiAiMSIsDQogICAgICAgICAgICAiZmVjaGEiOiAiNi8yNC8yMDIwIiwNCiAgICAgICAgICAgICJhdXRvciI6ICJoaWxkZWdhcmQub3JnIg0KICAgICAgICB9XQ=="
        datos = "W3siaWQiOjEsInRpdHVsbyI6InBydWViYTExMTExMTExIiwiY2F0ZWdvcmlhIjoyLCJmZWNoYSI6IjI0LzA2LzIwMjAiLCJhdXRvciI6ImF1dG9yIiwiZGV0YWxsZSI6InBydWViYTI1IiwiY29udGVuaWRvIjoiPHA+cHJ1ZWJhMjU8L3A+IiwiUkVGRVJFTkNJQV9JTUFHRU4iOjAsIlJFRkVSRU5DSUFfUERGIjowLCJSRUZFUkVOQ0lBX1ZJREVPIjowLCJSRUZFUkVOQ0lBX0RPQ1VNRU5UTyI6MH0seyJpZCI6MiwidGl0dWxvIjoicHJ1ZWJhMjUgMjIyMjIyMjIyIiwiY2F0ZWdvcmlhIjo0LCJmZWNoYSI6IjI0LzA2LzIwMjAiLCJhdXRvciI6ImF1dG9yIiwiZGV0YWxsZSI6InBydWViYTI1IiwiY29udGVuaWRvIjoiPHA+cHJ1ZWJhMjU8L3A+IiwiUkVGRVJFTkNJQV9JTUFHRU4iOjAsIlJFRkVSRU5DSUFfUERGIjowLCJSRUZFUkVOQ0lBX1ZJREVPIjowLCJSRUZFUkVOQ0lBX0RPQ1VNRU5UTyI6MH0seyJpZCI6MywidGl0dWxvIjoiQSAxMCBh8W9zIGRlIGxhIGhhemHxYSwgSW5pZXN0YSB5IFJhbW9zIHJlY3VlcmRhbiBlbCB07XR1bG8gZW4gU3Vk4WZyaWNhIDIwMTAiLCJjYXRlZ29yaWEiOjUsImZlY2hhIjoiMjQvMDYvMjAyMCIsImF1dG9yIjoiYXV0b3IiLCJkZXRhbGxlIjoiRWwgMTEgZGUganVsaW8gZGUgMjAxMCByZXByZXNlbnRhIGxhIGZlY2hhIG3hcyBpbXBvcnRhbnRlIHBhcmEgbGEgaGlzdG9yaWEgZGVsIGb6dGJvbCBlc3Bh8W9sLiBFbiBlc2UgZO1hLCBsYSBcIlJvamFcIiBjb25xdWlzdPMgc3UgcHJpbWVyYSBDb3BhIGRlbCBNdW5kbyBkZSBsYSBGSUZBIGFsIHZlbmNlciBlbiBsYSBncmFuIGZpbmFsIGVuIEhvbGFuZGEgZW4gSm9oYW5uZXNidXJnbywgU3Vk4WZyaWNhLiBFbCBnb2wgZGUgSW5pZXN0YSBlbiBsYSBwcvNycm9nYSBkZWZpbmnzIGVzZSBwYXJ0aWRvLCB5IOlsIHkgU2VyZ2lvIFJhbW9zIHJlY29yZGFy4W4gZXNvcyBtb21lbnRvcyBpbm9sdmlkYWJsZXMgZW4gdW4gdmlkZW8gcmVhbGl6YWRvIHBvciBsYSBSZWFsIEZlZGVyYWNp824gRXNwYfFvbGEgZGUgRvp0Ym9sLlxuXG7aTFRJTUFTIE5PVElDSUFTIiwiY29udGVuaWRvIjoiPHA+Jm5ic3A7PC9wPjxmaWd1cmUgY2xhc3M9XCJpbWFnZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jbm5lc3Bhbm9sLmNubi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvMjAwNzExMTYyNzA0LXNlcmdpby1yYW1vcy1hbmRyZXMtaW5pZXN0YS1kZXBvcnRlcy1jbm4tZnVsbC0xNjkuanBnP3F1YWxpdHk9MTAwJmFtcDtzdHJpcD1pbmZvJmFtcDt3PTc4MCZhbXA7aD00MzgmYW1wO2Nyb3A9MVwiIGFsdD1cIkEgMTAgYfFvcyBkZSBsYSBoYXph8WEsIEluaWVzdGEgeSBSYW1vcyByZWN1ZXJkYW4gZWwgdO10dWxvIGVuIFN1ZOFmcmljYSAyMDEwXCIgc3Jjc2V0PVwiaHR0cHM6Ly9jbm5lc3Bhbm9sLmNubi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvMjAwNzExMTYyNzA0LXNlcmdpby1yYW1vcy1hbmRyZXMtaW5pZXN0YS1kZXBvcnRlcy1jbm4tZnVsbC0xNjkuanBnP3F1YWxpdHk9MTAwJmFtcDtzdHJpcD1pbmZvJmFtcDt3PTc4MCZhbXA7aD00MzgmYW1wO2Nyb3A9MSA3ODB3XCIgc2l6ZXM9XCIxMDB2d1wiPjwvZmlndXJlPjxwPjxhIGhyZWY9XCJodHRwczovL2NubmVzcGFub2wuY25uLmNvbS9zZWNjaW9uL2RlcG9ydGVzL1wiPjxzdHJvbmc+REVQT1JURVM8L3N0cm9uZz48L2E+PC9wPjxoMj48YSBocmVmPVwiaHR0cHM6Ly9jbm5lc3Bhbm9sLmNubi5jb20vdmlkZW8vZXNwYW5hLWZ1dGJvbC1zZXJnaW8tcmFtb3MtYW5kcmVzLWluaWVzdGEtc3VkYWZyaWNhLTIwMTAtY29wYS1kZWwtbXVuZG8tZmlmYS1yZWFsLW1hZHJpZC1iYXJjZWxvbmEtc290L1wiPjxzdHJvbmc+QSAxMCBh8W9zIGRlIGxhIGhhemHxYSwgSW5pZXN0YSB5IFJhbW9zIHJlY3VlcmRhbiBlbCB07XR1bG8gZW4gU3Vk4WZyaWNhIDIwMTA8L3N0cm9uZz48L2E+PC9oMj48cD5FbCAxMSBkZSBqdWxpbyBkZSAyMDEwIHJlcHJlc2VudGEgbGEgZmVjaGEgbeFzIGltcG9ydGFudGUgcGFyYSBsYSBoaXN0b3JpYSBkZWwgZvp0Ym9sIGVzcGHxb2wuIEVuIGVzZSBk7WEsIGxhIFwiUm9qYVwiIGNvbnF1aXN08yBzdSBwcmltZXJhIENvcGEgZGVsIE11bmRvIGRlIGxhIEZJRkEgYWwgdmVuY2VyIGVuIGxhIGdyYW4gZmluYWwgZW4gSG9sYW5kYSBlbiBKb2hhbm5lc2J1cmdvLCBTdWThZnJpY2EuIEVsIGdvbCBkZSBJbmllc3RhIGVuIGxhIHBy83Jyb2dhIGRlZmluafMgZXNlIHBhcnRpZG8sIHkg6WwgeSBTZXJnaW8gUmFtb3MgcmVjb3JkYXLhbiBlc29zIG1vbWVudG9zIGlub2x2aWRhYmxlcyBlbiB1biB2aWRlbyByZWFsaXphZG8gcG9yIGxhIFJlYWwgRmVkZXJhY2nzbiBFc3Bh8W9sYSBkZSBG+nRib2w8L3A+IiwiUkVGRVJFTkNJQV9JTUFHRU4iOjAsIlJFRkVSRU5DSUFfUERGIjowLCJSRUZFUkVOQ0lBX1ZJREVPIjowLCJSRUZFUkVOQ0lBX0RPQ1VNRU5UTyI6MH1d";
        commit('MUTSETRESPUESTAGRIDPUBLICA', datos);
    },

    async acDsoaPHP2({
        commit,
        state
    }, pet) {


        const datos = state.peticion;
        const url = state.urlDsoaPHP;

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



            // console.log('acDsoaPHP2 ruta ' + url, JSON.stringify(dsoaModel));
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

    async CMSacDsoaPHP({
        commit,
        state
    }, pet) {

        //console.log("llego a CMSacDsoaPHP ", JSON.stringify(pet));
        if (pet.Credencial == null) {
            if (pet.Credencial == null) var jsonError = {
                codigoError: '90',
                msgError: 'Credencial Nulo CMSacDsoa'
            };

            alert(' fallo axios');
            commit('MUTREGISTRAERROR', jsonError);
        } else {

            const url = state.urlDsoaPHP;
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

                        console.log('LARGO DE RESPUESTA  CMSacDsoaPHP ', JSON.stringify(response.data));
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