/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbar/navbarSearchAndPinList';
import themeConfig, { colors } from '@/../themeConfig.js';

const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {};

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getUserInfo = () => {
    const userInfo = {};

    // Update property in user
    Object.keys(userDefaults).forEach((key) => {
        // If property is defined in localStorage => Use that
        userInfo[key] = userInfoLocalStorage[key] ? userInfoLocalStorage[key] : userDefaults[key];
    });

    // Include properties from localStorage
    Object.keys(userInfoLocalStorage).forEach((key) => {
        if (userInfo[key] === undefined && userInfoLocalStorage[key] !== null)
            userInfo[key] = userInfoLocalStorage[key];
    });

    return userInfo;
};

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = function(query) {
        return window.matchMedia(query).matches;
    };

    if ('ontouchstart' in window || window.DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
};

// /////////////////////////////////////////////

// *From Auth - Data will be received from auth provider
const userDefaults = {
    uid: 0, // From Auth
    displayName: 'John Doe', // From Auth
    about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    photoURL: require('@/assets/images/portrait/small/avatar-s-11.jpg'), // From Auth
    status: 'online',
    userRole: 'admin'
};

const state = {


    AppActiveUser: getUserInfo(),
    bodyOverlay: false,
    isVerticalNavMenuActive: true,
    is_touch_device: is_touch_device(),
    mainLayoutType: themeConfig.mainLayoutType || 'vertical',
    navbarSearchAndPinList,
    reduceButton: themeConfig.sidebarCollapsed,
    verticalNavMenuWidth: 'default',
    verticalNavMenuItemsMin: false,
    scrollY: 0,
    starredPages: navbarSearchAndPinList['pages'].data.filter((page) => page.is_bookmarked),
    theme: themeConfig.theme || 'light',
    themePrimaryColor: colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,

    // /////////////////////////////////////////////inicio bitweb
    // DATOS DE PETICION DE REST
    selectedRow: [], // la Fila que se desea
    selectedRows: [],
    datosPublicacion: [],
    selectQuery: null, // tipo de indicador 9
    estadoProcesando: 0,
    urlDsoa: 'http://201.194.194.84:8998/DsoaService2/dsoa/request',
    urlDsoaCMS: 'http://201.194.194.84:8998/DsoaService2/dsoa/CMSrequest',

    urlDsoaPHP: process.env.VUE_APP_URLPHP,
    urlDsoaPHP2: process.env.VUE_APP_URLPHP2,
    urlDsoaPHP3: process.env.VUE_APP_URLPHP,

    urlDsoa: process.env.VUE_APP_DSOA,
    urlDsoaCMS: process.env.VUE_APP_CMS,

    indicadorDML: 'XX',
    laststrheader: '', // ultimo encabezado
    laststrParametros: '', //ultimo parametros
    laststrFilas: '', //ultimo pedido de filas

    lastBdmsage: 'Proceso Exitoso',
    lastBdmsgcode: 0,
    respuesta: [],
    peticion: '',

    dsoaModel: {
        datos: '',
        dml: '',
        ObjectId: '',
        formato: '',
        Credencial: '',
        formatoRequest: '',
        codigoerror: '9999',
        deserror: ''
    },

    //// DIVISOFT MULTIMEDIA  MULTIMEDIA MULTIMEDIA MULTIMEDIA MULTIMEDIA MULTIMEDIA MULTIMEDIA
    // datos  PRINCIPALES
    DataCMS: {},
    // PARA MANIPULAR LA IMAGEN
    ManipulacionCMS: [],
    /// INDICACIONES DE BASE DATOS
    BdCMS: [],
    //guarda rows de lo que viene pero con jsonData en JSON VALIDO
    DatosDocumentos: [],

    //ARRAY GLOBAL
    tableKey: [],
    urlOrigen: 'J', //J=Java, P= PHP, M= Microsoft
    datosJ: {
        page: '0',
        total: '0',
        registros: '0',
        rows: []
    },
    datosV: '',
    datosGrid: {
        page: '0',
        total: '0',
        registros: '0',
        rows: []
    },

    datosPrompt: {
        page: '0',
        total: '0',
        registros: '0',
        rows: []
    },

    rows: [],
    datosForm: {
        page: '0',
        total: '0',
        registros: '0',
        rows: []
    },
    rowsForm: [],

    datosGridPhp: {
        page: '0',
        registros: '0',
        rows: [],
        total: '0'
    },
    rowsGridPhp: [],
    datosMsj: [],
    llaveRec: [], // datos de un registro uno solo
    //DATOS BPM
    numHilo: 0,
    numHiloActivo: 0,
    etapaBPM: '',
    //DATOS PROFILE USUSARIO Y DE APLICACION  /////////////////////////////////////////////
    userProfile: [],
    appProfile: [],
    //para efectos de PROCEDIMIENTOS ALMACENADOS
    procRESPUESTAXML: '',
    respuestaProc: [],

    /// BIT WEB BIT WEB BIT WE
    publicaciones: []
};

export default state;