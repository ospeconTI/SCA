import { GET_SUCCESS, GET_ERROR, GET_BY_PLAN_ID_SUCCESS, GET_BY_PLAN_ID_ERROR, PATCH_SUCCESS, PATCH_ERROR, UPDATE_SUCCESS, UPDATE_ERROR, ADD_SUCCESS, ADD_ERROR, REMOVE_SUCCESS, REMOVE_ERROR, EDIT, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR, DAR_CUMPLIMIENTO_SUCCESS, DAR_CUMPLIMIENTO_ERROR, ADD_SIMPLE_SUCCESS, ADD_SIMPLE_ERROR, ADD_LAPSO_SUCCESS, ADD_LAPSO_ERROR, ADD_FECHA_SUCCESS, ADD_FECHA_ERROR } from "./actions";

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
	darCumplimientoTimeStamp: null,
	errorDarCumplimientoTimeStamp: null,
	byId: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
	byPlanId: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
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
		case GET_BY_PLAN_ID_SUCCESS:
			newState.byPlanId.entities = action.payload.receive;
			newState.byPlanId.timeStamp = new Date().getTime();
			break;
		case DAR_CUMPLIMIENTO_SUCCESS:
			newState.darCumplimientoTimeStamp = new Date().getTime();
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
		case GET_BY_PLAN_ID_ERROR:
			newState.byPlanId.errorTimeStamp = new Date().getTime();
			break;
		case DAR_CUMPLIMIENTO_ERROR:
			newState.errorDarCumplimientoTimeStamp = new Date().getTime();
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
