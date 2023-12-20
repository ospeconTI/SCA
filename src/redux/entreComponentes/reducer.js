/** @format */

import { BUSQUEDA_DESCRIPCION__LOAD01, TAREA_CARGA__LOAD01, TAREA_CARGA__LOAD02, TAREA_CARGA__LOAD03, PLAN_CARGA__LOAD01, AMPAROS__FILTER01, AMPAROS__FILTER02, AMPAROS__SACAR_FILTER01, AMPAROS__SACAR_FILTER02, CARGA_SECTORES__LOAD01, VER_USUARIOS__LOAD01, CARGA_USUARIOS__LOAD01, TAREA_CARGA_A_AMPARO__RETORNO, VER_ROLES__LOAD01, AMPAROS_MY_PLANES__FILTER01, PROTOCOLO_NUEVO, PROTOCOLO_AGREGAR } from "./actions";

const initialState = {
    busqueDescripcion_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    planCarga_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    tareaCarga_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    tareaCarga_Load02: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    tareaCarga_Load03: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    amparos_Filter01: {
        timeStamp: null,
        campo: null,
        valor: null,
    },
    amparos_Filter02: {
        timeStamp: null,
        campo: null,
        valor: null,
    },
    amparos_my_planes_Filter01: {
        timeStamp: null,
        campo: null,
        valor: null,
    },
    amparos_SacarFilter01: {
        timeStamp: null,
    },
    amparos_SacarFilter02: {
        timeStamp: null,
    },
    cargaSectores_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    verUsuarios_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
        sectorItem: null,
    },
    cargaUsuarios_Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    tareaCargaAAmparo_Retorno01: {
        timeStamp: null,
        item: null,
        itemPadre: null,
        accion: null,
    },
    verRoles__Load01: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    protocolo_nuevo: {
        timeStamp: null,
        item: null,
        accion: null,
    },
    protocolo_agregar: {
        timeStamp: null,
        item: null,
        accion: null,
    },
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case BUSQUEDA_DESCRIPCION__LOAD01:
            newState.busqueDescripcion_Load01.timeStamp = new Date().getTime();
            newState.busqueDescripcion_Load01.descripciones = action.descripciones || action.param?.descripciones;
            newState.busqueDescripcion_Load01.accion = action.accion || action.param?.accion;
            break;
        case PLAN_CARGA__LOAD01:
            newState.planCarga_Load01.timeStamp = new Date().getTime();
            newState.planCarga_Load01.item = action.item || action.param?.item;
            newState.planCarga_Load01.accion = action.accion || action.param.accion;
            break;
        case TAREA_CARGA__LOAD01:
            newState.tareaCarga_Load01.timeStamp = new Date().getTime();
            newState.tareaCarga_Load01.item = action.item || action.param?.item;
            newState.tareaCarga_Load01.accion = action.accion || action.param.accion;
            break;
        case TAREA_CARGA__LOAD02:
            newState.tareaCarga_Load02.timeStamp = new Date().getTime();
            newState.tareaCarga_Load02.item = action.item || action.param?.item;
            newState.tareaCarga_Load02.accion = action.accion || action.param.accion;
            break;
        case TAREA_CARGA__LOAD03:
            newState.tareaCarga_Load03.timeStamp = new Date().getTime();
            newState.tareaCarga_Load03.item = action.item || action.param?.item;
            newState.tareaCarga_Load03.accion = action.accion || action.param.accion;
            break;
        case AMPAROS__FILTER01:
            newState.amparos_Filter01.timeStamp = new Date().getTime();
            newState.amparos_Filter01.campo = action.campo || action.param.campo;
            newState.amparos_Filter01.valor = action.valor || action.param.valor;
            newState.amparos_Filter01.valor = newState.amparos_Filter01.valor == "TODOS" ? "" : newState.amparos_Filter01.valor;
            break;
        case AMPAROS__FILTER02:
            newState.amparos_Filter02.timeStamp = new Date().getTime();
            newState.amparos_Filter02.campo = action.campo || action.param.campo;
            newState.amparos_Filter02.valor = action.valor || action.param.valor;
            break;
        case AMPAROS_MY_PLANES__FILTER01:
            newState.amparos_my_planes_Filter01.timeStamp = new Date().getTime();
            newState.amparos_my_planes_Filter01.campo = action.campo || action.param.campo;
            newState.amparos_my_planes_Filter01.valor = action.valor || action.param.valor;
            break;
        case AMPAROS__SACAR_FILTER01:
            newState.amparos_SacarFilter01.timeStamp = new Date().getTime();
            break;
        case AMPAROS__SACAR_FILTER02:
            newState.amparos_SacarFilter02.timeStamp = new Date().getTime();
            break;
        case CARGA_SECTORES__LOAD01:
            newState.cargaSectores_Load01.timeStamp = new Date().getTime();
            newState.cargaSectores_Load01.item = action.item || action.param?.item;
            newState.cargaSectores_Load01.accion = action.accion || action.param.accion;
            break;
        case VER_USUARIOS__LOAD01:
            newState.verUsuarios_Load01.timeStamp = new Date().getTime();
            newState.verUsuarios_Load01.usuariosItems = action.usuariosItems || action.param?.usuariosItems;
            newState.verUsuarios_Load01.sectorItem = action.sectorItem || action.param.sectorItem;
            newState.verUsuarios_Load01.accion = action.accion || action.param.accion;
            break;
        case CARGA_USUARIOS__LOAD01:
            newState.cargaUsuarios_Load01.timeStamp = new Date().getTime();
            newState.cargaUsuarios_Load01.item = action.item || action.param?.item;
            newState.cargaUsuarios_Load01.itemSector = action.itemSector || action.param?.itemSector;
            newState.cargaUsuarios_Load01.accion = action.accion || action.param.accion;
            break;
        case TAREA_CARGA_A_AMPARO__RETORNO:
            newState.tareaCargaAAmparo_Retorno01.timeStamp = new Date().getTime();
            newState.tareaCargaAAmparo_Retorno01.item = action.item || action.param?.item;
            newState.tareaCargaAAmparo_Retorno01.itemPadre = action.itemPadre || action.param?.itemPadre;
            newState.tareaCargaAAmparo_Retorno01.accion = action.accion || action.param.accion;
            break;
        case VER_ROLES__LOAD01:
            newState.verRoles__Load01.timeStamp = new Date().getTime();
            newState.verRoles__Load01.item = action.item || action.param?.item;
            newState.verRoles__Load01.itemSector = action.itemSector || action.param?.itemSector;
            newState.verRoles__Load01.accion = action.accion || action.param.accion;
            break;
        case PROTOCOLO_NUEVO:
            newState.protocolo_nuevo.timeStamp = new Date().getTime();
            newState.protocolo_nuevo.item = action.item || action.param?.item;
            newState.protocolo_nuevo.accion = action.accion || action.param.accion;
            break;
        case PROTOCOLO_AGREGAR:
            newState.protocolo_agregar.timeStamp = new Date().getTime();
            newState.protocolo_agregar.item = action.item || action.param?.item;
            newState.protocolo_agregar.accion = action.accion || action.param.accion;
            break;
    }
    return newState;
};
