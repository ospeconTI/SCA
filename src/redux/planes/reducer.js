import { GET_SUCCESS, GET_ERROR, GET_ALL_SUCCESS, GET_ALL_ERROR, PATCH_SUCCESS, PATCH_ERROR, UPDATE_SUCCESS, UPDATE_ERROR, ADD_SUCCESS, ADD_ERROR, REMOVE_SUCCESS, REMOVE_ERROR, EDIT, GET_BY_ID, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, ADD_SIMPLE_SUCCESS, ADD_SIMPLE_ERROR, ADD_LAPSO_SUCCESS, ADD_LAPSO_ERROR, ADD_FECHA_SUCCESS, ADD_FECHA_ERROR } from "./actions";

const initialState = {
	entities: null,
	timeStamp: null,
	removeTimeStamp: null,
	updateTimeStamp: null,
	addTimeStamp: null,
	addSimpleTimeStamp: null,
	addLapsoTimeStamp: null,
	addFechaTimeStamp: null,
	errorTimeStamp: null,
	commandErrorTimeStamp: null,
	editTimeStamp: null,
	byId: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
	all: {
		entities: null,
		count: 0,
		timeStamp: null,
	},
	table: {
		entities: null,
		count: 0,
		timeStamp: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_SUCCESS:
			newState.entities = action.payload.receive;
			newState.timeStamp = new Date().getTime();
			break;
		case GET_BY_ID_SUCCESS:
			newState.byId.entities = action.payload.receive;
			newState.byId.timeStamp = new Date().getTime();
			break;
		case GET_ALL_SUCCESS:
			let ar = [];
			action.payload.receive.map((item, index) => {
				let js = {};
				js.id = item.id;
				js.urlReferencia = item.urlReferencia;
				js.descripcion = item.descripcion;
				js.estado = item.estado;
				js.conTareas = item.conTareas;
				js.padre = "0";
				js.padreClase = "";
				js.clase = "plan";
				js.planId = item.id;
				js.hijo = item.conTareas;
				js.tipo = "";
				ar.push(js);
			});
			newState.all.entities = ar;
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
		case ADD_SIMPLE_SUCCESS:
			newState.addSimpleTimeStamp = new Date().getTime();
			break;
		case ADD_LAPSO_SUCCESS:
			newState.addLapsoTimeStamp = new Date().getTime();
			break;
		case ADD_FECHA_SUCCESS:
			newState.addFechaTimeStamp = new Date().getTime();
			break;

		case GET_ERROR:
			newState.errorTimeStamp = new Date().getTime();
			break;
		case GET_BY_ID_ERROR:
			newState.byId.errorTimeStamp = new Date().getTime();
			break;
		case GET_ALL_ERROR:
			newState.all.entities = null;
			newState.all.errorTimeStamp = new Date().getTime();
			break;
		case UPDATE_ERROR:
		case REMOVE_ERROR:
		case PATCH_ERROR:
		case ADD_ERROR:
		case ADD_SIMPLE_ERROR:
		case ADD_LAPSO_ERROR:
		case ADD_FECHA_ERROR:
			newState.commandErrorTimeStamp = new Date().getTime();
			break;
	}
	return newState;
};
