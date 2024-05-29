/** @format */
import { SUBSCRIBE, SUBSCRIBE_ERROR, SUBSCRIBE_OK } from "./actions";

export const subscribe =
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
        next(action);
        if (action.type === SUBSCRIBE) {
            var body = {
                subscription: action.subscription,
                topico: action.topic,
            };
            try {
                const response = await fetch(WEBPUSH_URL + "/save-subscription", {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body),
                });
                dispatch({ type: SUBSCRIBE_OK, message: await response.json() });
            } catch (error) {
                dispatch({ type: SUBSCRIBE_ERROR, message: "Error en la suscripcion" });
            }
        }
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SUBSCRIBE_ERROR) {
        }
    };

export const subscribeSuccess =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === SUBSCRIBE_OK) {
        }
    };

export const middleware = [subscribe, subscribeSuccess, processError];
