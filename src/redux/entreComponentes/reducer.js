import { BUSQUEDA_DESCRIPCION__LOAD01, TAREA_CARGA__LOAD01, TAREA_CARGA__LOAD02, TAREA_CARGA__LOAD03, PLAN_CARGA__LOAD01, AMPAROS__FILTER01, AMPAROS__SACAR_FILTER01 } from "./actions";

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
	amparos_SacarFilter01: {
		timeStamp: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case BUSQUEDA_DESCRIPCION__LOAD01:
			newState.busqueDescripcion_Load01.timeStamp = new Date().getTime();
			newState.busqueDescripcion_Load01.item = action.item;
			newState.busqueDescripcion_Load01.accion = action.accion;
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
			break;
		case AMPAROS__SACAR_FILTER01:
			newState.amparos_SacarFilter01.timeStamp = new Date().getTime();
			break;
	}
	return newState;
};
