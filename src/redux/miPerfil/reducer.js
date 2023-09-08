/** @format */

import { SET } from "./actions";

const initialState = {
    timeStamp: null,
    ok: false,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case SET:
            if (action.perfil) {
                newState.timeStamp = new Date().getTime();
                newState.ok = true;
                Object.entries(action.perfil).forEach(([key, value]) => {
                    newState[key] = value;
                });
                newState.sector = action.item;
            } else {
                newState.ok = false;
            }
            break;
    }

    return newState;
};
