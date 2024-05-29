/** @format */

import { applyMiddleware, createStore, compose } from "redux";
import { logger } from "redux-logger";
import { rootReducer as reducers } from "./reducers";

import { middleware as ui } from "./ui/middleware";
import { middleware as api } from "./api/middleware";
import { middleware as rest } from "./rest/middleware";
import { middleware as route } from "./routing/middleware";

import { middleware as planes } from "./planes/middleware";
import { middleware as tareas } from "./tareas/middleware";
import { middleware as popup } from "./popup/middleware";
import { middleware as sectores } from "./sectores/middleware";
import { middleware as autorizacion } from "./autorizacion/middleware";
import { middleware as getCombinados } from "./getCombinados/middleware";
import { middleware as protocolos } from "./protocolos/middleware";
import { middleware as notification } from "./notifications/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [api, rest, ...ui, ...route, ...autorizacion, ...planes, ...tareas, ...popup, ...sectores, ...getCombinados, ...protocolos, ...notification];

if (process.env.NODE_ENV !== "production") {
    mdw = [...mdw, logger];
}

const initialData = {};

export const store = createStore(reducers, initialData, composeEnhancers(applyMiddleware(...mdw)));
