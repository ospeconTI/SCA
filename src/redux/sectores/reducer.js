import { GET_SUCCESS, GET_ERROR, GET_ALL_SUCCESS, GET_ALL_ERROR, PATCH_SUCCESS, PATCH_ERROR, UPDATE_SUCCESS, UPDATE_ERROR, ADD_SUCCESS, ADD_ERROR, REMOVE_SUCCESS, REMOVE_ERROR, EDIT, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, GET_BY_DESCRIPCION_SUCCESS, GET_BY_DESCRIPCION_ERROR, SUMAR_INTEGRANTE_SUCCESS, SUMAR_INTEGRANTE_ERROR, QUITAR_INTEGRANTE_SUCCESS, QUITAR_INTEGRANTE_ERROR } from "./actions";

const initialState = {
	entities: null,
	timeStamp: null,
	removeTimeStamp: null,
	updateTimeStamp: null,
	addTimeStamp: null,
	errorTimeStamp: null,
	commandErrorTimeStamp: null,
	editTimeStamp: null,
	byId: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
	byDescripcion: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
	all: {
		entities: null,
		count: 0,
		timeStamp: null,
		errorTimeStamp: null,
	},
	sumarIntegrante: {
		timeStamp: null,
		errorTimeStamp: null,
	},
	quitarIntegrante: {
		timeStamp: null,
		errorTimeStamp: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_BY_ID_SUCCESS:
			newState.byId.entities = action.payload.receive;
			newState.byId.timeStamp = new Date().getTime();
			break;
		case GET_BY_DESCRIPCION_SUCCESS:
			newState.byDescripcion.entities = action.payload.receive;
			newState.byDescripcion.timeStamp = new Date().getTime();
			break;
		case GET_ALL_SUCCESS:
			newState.all.entities = action.payload.receive;
			newState.all.timeStamp = new Date().getTime();
			break;
		case EDIT:
			newState.editTimeStamp = new Date().getTime();
			newState.entities.currentItem = action.item;
			newState.modo = action.modo;
			break;
		case UPDATE_SUCCESS:
			newState.updateTimeStamp = new Date().getTime();
			break;
		case PATCH_SUCCESS:
			newState.updateTimeStamp = new Date().getTime();
			break;
		case REMOVE_SUCCESS:
			newState.removeTimeStamp = new Date().getTime();
			break;
		case ADD_SUCCESS:
			newState.addTimeStamp = new Date().getTime();
			break;
		case SUMAR_INTEGRANTE_SUCCESS:
			newState.sumarIntegrante.addTimeStamp = new Date().getTime();
			break;
		case QUITAR_INTEGRANTE_SUCCESS:
			newState.quitarIntegrante.addTimeStamp = new Date().getTime();
			break;
		case GET_BY_ID_ERROR:
			newState.byId.errorTimeStamp = new Date().getTime();
			break;
		case GET_BY_DESCRIPCION_ERROR:
			newState.byDescripcion.errorTimeStamp = new Date().getTime();
			break;
		case GET_ALL_ERROR:
			newState.all.entities = null;
			newState.all.errorTimeStamp = new Date().getTime();
			break;
		case SUMAR_INTEGRANTE_ERROR:
			newState.sumarIntegrante.errorTimeStamp = new Date().getTime();
			break;
		case QUITAR_INTEGRANTE_ERROR:
			newState.quitarIntegrante.errorTimeStamp = new Date().getTime();
			break;
		case UPDATE_ERROR:
		case REMOVE_ERROR:
		case PATCH_ERROR:
		case ADD_ERROR:
			newState.commandErrorTimeStamp = new Date().getTime();
			break;
	}
	return newState;
};
