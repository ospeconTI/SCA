/** @format */
import { AUTORIZACION, AUTORIZACION_SUCCESS, AUTORIZACION_ERROR, ACCEPT, ACCEPT_SUCCESS, ACCEPT_ERROR, ACEPTAR_USUARIO, ACEPTAR_USUARIO_SUCCESS, ACEPTAR_USUARIO_ERROR, GET_PERFIL, GET_PERFIL_SUCCESS, GET_PERFIL_ERROR } from "./actions";

import { RESTAdd, RESTRequest, RESTUpdate } from "../rest/actions";
import { goTo } from "../routing/actions";
import { apiRequest, apiAction, apiFunction } from "../../redux/api/actions";
import { autorizacionFetch, acceptFetch, autorizacionAceptarUsuarioFetch } from "../fetchs";
import { autorizacion as autorizar } from "./actions";
import { subscribe } from "../notifications/actions";

export const processLogin =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        /*if (action.type === LOGIN_SUCCESS || action.type === LOGIN_SUCCESS_AUTO) {
           
        }*/
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        /*if (action.type === LOGIN_ERROR || action.type === RENOVACION_ERROR || action.type === RECUPERO_ERROR || action.type == LOGON_ERROR || action.type == UPDATE_PROFILE_ERROR) {
        }*/
    };

export const autorizacion =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === AUTORIZACION) {
            dispatch(RESTRequest(autorizacionFetch, "?token=" + action.token, AUTORIZACION_SUCCESS, AUTORIZACION_ERROR, ""));
        }
    };
export const getPerfil =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_PERFIL) {
            dispatch(RESTRequest(autorizacionFetch, "?token=" + action.token, GET_PERFIL_SUCCESS, GET_PERFIL_ERROR, ""));
        }
    };

export const aceptarUsuario =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACEPTAR_USUARIO) {
            dispatch(RESTAdd(autorizacionAceptarUsuarioFetch, action.body, ACEPTAR_USUARIO_SUCCESS, ACEPTAR_USUARIO_ERROR, ""));
        }
    };

export const autorizacionSuccess =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === AUTORIZACION_SUCCESS) {
            if (getState().notifications.suscribir) {
                action.payload.receive.result.sectores.forEach((element) => {
                    dispatch(subscribe(localStorage.subscription, element.descripcion));
                });
            }
        }
    };

export const accept =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACCEPT) {
            dispatch(RESTAdd(acceptFetch, { AfiliadoId: action.id }, ACCEPT_SUCCESS, ACCEPT_ERROR, getState().autorizacion.entities.token));
        }
    };

export const acceptSuccess =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ACCEPT_SUCCESS) {
            dispatch(autorizar(getState().autorizacion.tokenAutentication));
        }
    };

export const middleware = [autorizacion, aceptarUsuario, accept, acceptSuccess, autorizacionSuccess, processLogin, processError, getPerfil];
