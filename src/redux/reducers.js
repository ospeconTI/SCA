/** @format */

import { reducer as uiReducer } from "./ui/reducer";
import { reducer as screenReducer } from "./screens/reducer";
import { reducer as routingReducer } from "./routing/reducer";
import { reducer as apiReducer } from "./api/reducer";
import { reducer as autorizacionReducer } from "./autorizacion/reducer";

import { reducer as planesReducer } from "./planes/reducer";
import { reducer as tareasReducer } from "./tareas/reducer";
import { reducer as eventosReducer } from "./eventos/reducer";
import { reducer as popupReducer } from "./popup/reducer";
import { reducer as entreComponentesReducer } from "./entreComponentes/reducer";
import { reducer as sectoresReducer } from "./sectores/reducer";
import { reducer as miPerfilReducer } from "./miPerfil/reducer";
import { reducer as getCombinadosReducer } from "./getCombinados/reducer";
import { reducer as protocolosReducer } from "./protocolos/reducer";

export const rootReducer = (state = {}, action) => {
    const presentacionesEstadosRed = state.presentacionesEstados;
    return {
        autorizacion: autorizacionReducer(state.autorizacion, action),
        api: apiReducer(state.api, action),
        ui: uiReducer(state.ui, action),
        screen: screenReducer(state.screen, action),
        routing: routingReducer(state.routing, action),
        planes: planesReducer(state.planes, action),
        tareas: tareasReducer(state.tareas, action),
        eventos: eventosReducer(state.eventos, action),
        popup: popupReducer(state.popup, action),
        entreComponentes: entreComponentesReducer(state.entreComponentes, action),
        sectores: sectoresReducer(state.sectores, action),
        miPerfil: miPerfilReducer(state.miPerfil, action),
        getCombinados: getCombinadosReducer(state.getCombinados, action),
        protocolos: protocolosReducer(state.protocolos, action),
    };
};
