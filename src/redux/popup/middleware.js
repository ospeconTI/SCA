import { GET_ALL, GET_ALL_SUCCESS, GET_ALL_ERROR } from "./actions";

export const getAll =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ALL) {
			let tareas = require("../../../json/popup.json");
			dispatch({
				type: GET_ALL_SUCCESS,
				payload: {
					send: 1,
					receive: tareas,
				},
			});
		}
	};

export const processGet =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ALL_SUCCESS) {
		}
	};

export const processError =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ALL_ERROR) {
		}
	};

export const middleware = [getAll];
