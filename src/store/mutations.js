/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const mutations = {
    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu

    TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
        state.isVerticalNavMenuActive = value;
    },
    TOGGLE_REDUCE_BUTTON(state, val) {
        state.reduceButton = val;
    },
    UPDATE_MAIN_LAYOUT_TYPE(state, val) {
        state.mainLayoutType = val;
    },
    UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
        state.verticalNavMenuItemsMin = val;
    },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
        state.verticalNavMenuWidth = width;
    },

    // VxAutoSuggest

    UPDATE_STARRED_PAGE(state, payload) {
        // find item index in search list state
        const index = state.navbarSearchAndPinList['pages'].data.findIndex((item) => item.url === payload.url);

        // update the main list
        state.navbarSearchAndPinList['pages'].data[index].is_bookmarked = payload.val;

        // if val is true add it to starred else remove
        if (payload.val) {
            state.starredPages.push(state.navbarSearchAndPinList['pages'].data[index]);
        } else {
            // find item index from starred pages
            const index = state.starredPages.findIndex((item) => item.url === payload.url);

            // remove item using index
            state.starredPages.splice(index, 1);
        }
    },

    // Navbar-Vertical

    ARRANGE_STARRED_PAGES_LIMITED(state, list) {
        const starredPagesMore = state.starredPages.slice(10);
        state.starredPages = list.concat(starredPagesMore);
    },
    ARRANGE_STARRED_PAGES_MORE(state, list) {
        let downToUp = false;
        const lastItemInStarredLimited = state.starredPages[10];
        const starredPagesLimited = state.starredPages.slice(0, 10);
        state.starredPages = starredPagesLimited.concat(list);

        state.starredPages.slice(0, 10).map((i) => {
            if (list.indexOf(i) > -1) downToUp = true;
        });

        if (!downToUp) {
            state.starredPages.splice(10, 0, lastItemInStarredLimited);
        }
    },

    // ////////////////////////////////////////////
    // UI
    // ////////////////////////////////////////////

    TOGGLE_CONTENT_OVERLAY(state, val) {
        state.bodyOverlay = val;
    },
    UPDATE_PRIMARY_COLOR(state, val) {
        state.themePrimaryColor = val;
    },
    UPDATE_THEME(state, val) {
        state.theme = val;
    },
    UPDATE_WINDOW_WIDTH(state, width) {
        state.windowWidth = width;
    },
    UPDATE_WINDOW_SCROLL_Y(state, val) {
        state.scrollY = val;
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    // Updates user info in state and localstorage
    UPDATE_USER_INFO(state, payload) {
        // Get Data localStorage
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || state.AppActiveUser;

        for (const property of Object.keys(payload)) {
            if (payload[property] !== null) {
                // If some of user property is null - user default property defined in state.AppActiveUser
                state.AppActiveUser[property] = payload[property];

                // Update key in localStorage
                userInfo[property] = payload[property];
            }
        }
        // Store data in localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },

    //////////////////////////////////////////////////
    /// DIVISOFT DIVISOFT DIVISOFT DIVISOFT DIVISOFT //
    //////////////////////////////////////////////////

    //// MUT
    MUTSETSELECTED(state, FilaSelected) {
        //  console.log('Mut - fila seleccionada ', FilaSelected)
        state.selectedRow = [];
        state.selectedRow.push(FilaSelected);
    },
    //// MUT
    MUTSETDESELECTED(state) {
        state.selectedRow = [];
    },
    //// MUT
    MUTSETTABLEKEY(state, tableKey) {
        state.tableKey.push(tableKey);
    },

    /// DIVISOFT  DIVISOFT  DIVISOFT  DIVISOFT DIVISOFT  DIVISOFT DIVISOFT  DIVISOFT DIVISOFT  DIVISOFT
    //// MUT
    MUTSETURL(state, indicadorUrl) {
        //ASIGNA EL URL
        if (indicadorUrl == 'O') state.urlDsoa = 'http://201.194.194.84:8998/DsoaService2/dsoa/request';

        if (indicadorUrl == 'P') state.urlDsoa = 'http://192.168.0.28:8989/dsoaPHP/dsoaPHP/dsoa/';
    },
    //// MUT
    MUTCLEARTABLEKEY(state) {
        state.tableKey = [];
    },
    MUTPROCESANDOTRUE(state) {
        state.estadoProcesando = 1;
    },

    MUTPROCESANDOFALSE(state) {
        state.estadoProcesando = 0;
    },

    ////  carga la peticion a partir de texto xml ya preparado
    MUTSETPETICIONTXT(state, pettxt) {
        // CARGO Last query
        // empaquete la peticion
        state.peticion = '<SOA_Xml>';
        state.peticion += pettxt.header;
        state.peticion += pettxt.parametros;
        state.peticion += pettxt.filas;
        state.peticion += '</SOA_Xml>';

        //console.log(" MUTSETPETICIONTXT  petiion FINAL FINAL FINAL",state.peticion)
    },

    MUTSETPETICIONTXTCLEAR(state) {
        // CARGO Last query
        // empaquete la peticion
        state.peticion = '';
    },

    //// MUT
    MUTSETINDICADORDML(state, indicadorDML) {
        state.indicadorDML = indicadorDML;
        // console.log("indicadorDML", state.indicadorDML)
    },

    //// MUT
    MUTSETDATOSDEFAULT(state, datosDefault) {
        state.rowsForm = datosDefault;
        // console.log("datosDefault", state.datosDefault)
    },

    //// MUT
    MUTSETRESPUESTAFORM(state, response) {
        // console.log('MUTSETRESPUESTAFORM', JSON.stringify(response));

        state.dsoaModel = response;

        try {
            state.datosForm = JSON.parse(response.datos);
            //console.log("oracle");
        } catch (e) {
            state.datosForm = response.datos;
            //console.log("php", state.datosForm.rows);
        }

        state.rowsForm = state.datosForm.rows;
        //console.log("ROWSFORM 1", state.rowsForm);
    },

    /// MUT
    /// MUT
    // tipo Nueve  GRID ESPECIAL 
    MUTSETRESPUESTAGRIDPUBLICA(state, response) {


        state.datosPublicacion = [];
        console.log("datos que VienenMUTSETRESPUESTAGRIDPUBLICA ", response);

        if (response.lengt < 50) {
            state.lastBdmsage = "No se encontraron registros";
            state.lastBdmsgcode = "0";
        } else {
            console.log("se obtuvo ", atob(response));
            state.datosPublicacion = JSON.parse(atob(response));
        }
        //console.log("datos que VienenMUTSETRESPUESTAGRIDPUBLICA ", state.datosPublicacion);

    },

    MUTSETRESPUESTADOCUMENTOS(state, response) {

        console.log("resolviendo MUTSETRESPUESTADOCUMENTOS")
        state.DatosDocumentos = [];

        if (response.lengt < 50) {
            state.lastBdmsage = 'No se encontraron registros';
            state.lastBdmsgcode = '0';
        } else {


            if (response.datos.registros > 0)
                response.datos.rows.forEach(function callback(item) {

                    console.log("JSON ", item.jsonData)

                    item.jsonData = atob(item.jsonData);
                    item.jsonData = JSON.parse(item.jsonData)

                    item.ruta = atob(item.ruta) + item.referencia + item.jsonData.extension;
                    state.DatosDocumentos.push(item);
                });

            console.log("LOG Documentos recuperados", state.DatosDocumentos)

        }

    },
    MUTSETRESPUESTAGRID(state, response) {
        state.dsoaModel = response;

        try {
            state.datosGrid = JSON.parse(response.datos);
            console.log('oracle');
        } catch (e) {
            state.datosGrid = response.datos;
        }
        state.rows = state.datosGrid.rows;

        if (state.datosGrid.total == 0) {
            state.lastBdmsage = 'No se encontraron registros';
            state.lastBdmsgcode = '0';
        }
    },

    /// MUT
    MUTSETRESPUESTAPROMPT(state, response) {
        state.dsoaModel = response;

        try {
            state.datosPrompt = JSON.parse(response.datos);
            // console.log("oracle",state.datosPrompt.rows);
        } catch (e) {
            state.datosPrompt = response.datos;
            console.log('php');
        }
        state.rows = state.datosPrompt.rows;
    },

    /// MUT
    MUTSETPROMPTDEFAULT(state, response) {
        try {
            state.datosPrompt = response;
        } catch (e) {
            state.datosPrompt = response;
        }
    },

    //// MUT
    MUTSETRESPUESTACRUD(state, response) {
        //se debe obtener el mensaje de respuesta de la peticion
        state.dsoaModel = response;
        state.datosMsj = [];

        state.datosMsj.push({
            codigoerror: response.codigoerror,
            deserror: response.deserror,
            data: response.datos
        });

        if (state.datosMsj[0].codigoerror == '0') {
            state.lastBdmsage = 'Proceso Exitoso !! ';
            state.lastBdmsgcode = 0;

            this.$vs.notify({
                title: 'Actualizacion, Borrado o Insercion de Datos',
                time: 6000,
                text: 'Proceso Exitoso',
                color: 'success'
            });
        } else {
            state.lastBdmsage = 'Proceso Con Errores ' + state.datosMsj[0].deserror;
            state.lastBdmsgcode = state.datosMsj[0].codigoerror;

            this.$vs.notify({
                title: 'Actualizacion, Borrado o Insercion de Datos',
                time: 6000,
                text: state.lastBdmsage,
                color: 'warning'
            });
        }
    },

    //// MUT
    MUTSETRESPUESTAGENERICO(state, response) {
        try {
            state.selectQuery = JSON.parse(response)[0];

            //console.log("oracle");
        } catch (e) {
            state.selectQuery = response[0];
        }

        state.datosMsj = [];
    },

    MUTSETRESPUESTAGENERICONULL() {
        state.selectQuery = '';
    },

    MUTSETDOCUMENTOS(state, response) {
        state.DatosDocumentos = response;
    },

    MUTREGISTRAERROR(state, jsonError) {
        state.lastBdmsage = jsonError.msgError;
        state.lastBdmsgcode = jsonError.codigoError;
    },
    //// MUT
    MUTSETLLLAVE(state, varLlave) {
        // llena los campos que contiene la entidad para ser buscada puede ser rowid si es oracle
        state.llaveRec.push(varLlave);
    },

    ///  MUTACIONES MUTACIONES  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA  MULTIMEDIA MULTIMEDIA

    //// MUT
    MUTSETDATA(state, data) {
        // llena los campos que contiene la entidad para ser buscada puede ser rowid si es oracle
        //console.log( "respuesta de DATA JSON ",data);
        state.DataCMS = data;
    },
    //// MUT
    MUTSETBD(state, bd) {
        // llena los campos que contiene la entidad para ser buscada puede ser rowid si es oracle
        state.Bd = bd;
    },
    //// MUT
    MUTSETMANIPULACION(state, manipulacion) {
        // llena los campos que contiene la entidad para ser buscada puede ser rowid si es oracle
        state.Manipulacion = manipulacion;
    },
    //// MUT
    MUTSETDATOSDEFAULTCMS(state, data) {
        state.DataCMS = data;
        // console.log("datosDefault", state.datosDefault)
    }, //procedimiento almacendo

    MUTSETOBJETOJSONPROC(state, respuestaProc) {
        state.respuestaProc = respuestaProc;
    },
    MUTSETDINAMICKEYOB(state, dinamicKeyOb) {
        state.dinamicKeyOb = dinamicKeyOb;
    },

    //procedimiento almacendoD
    // RESPUESTA EN  XML
    MUTSETRESPUESTAProc(state, respuestaXML) {
        state.procRESPUESTAXML = respuestaXML;
        state.respuestaProc = [];
    },

    /// MUT PARA Asignar las respuestas de un procedimiento almacenado.
    MUTSETRESPUESTAE(state, response) {
        state.datosMsj = [];

        state.datosMsj.push({
            codigoerror: response.codigoerror,
            deserror: response.deserror,
            data: response.datos
        });

        if (state.datosMsj[0].codigoerror == '0') {
            state.lastBdmsage = 'Proceso Exitoso Ejecutado Correctamente  ';
            state.lastBdmsgcode = 0;
            //console.log("cargand1 state.procRESPUESTAXML ", state.datosMsj[0].data);
            state.procRESPUESTAXML = state.datosMsj[0].data;
        } else {
            state.procRESPUESTAXML = 'ERROR';
            state.lastBdmsage = 'Proceso Con Errores ' + state.datosMsj[0].deserror;
            state.lastBdmsgcode = state.datosMsj[0].codigoerror;
        }
    }
};

export default mutations;