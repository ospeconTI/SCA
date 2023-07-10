import { MOSTRAR_HIJOS, MOSTRAR_POPUP_PLANES, MOSTRAR_POPUP_TAREAS, EJECUTAR_TAREA_DAR_CUMPLIMIENTO, EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO } from "./actions";

const initialState = {
	mostrarHijos: {
		timeStamp: null,
		registro: null,
		nombreComponente: null,
	},
	mostrarPopupPlanes: {
		timeStamp: null,
		registro: null,
		nombreComponente: null,
		x: 0,
		y: 0,
	},
	mostrarPopupTareas: {
		timeStamp: null,
		registro: null,
		nombreComponente: null,
		x: 0,
		y: 0,
	},
	ejecutarTareaDarCumplimiento: {
		timeStamp: null,
		idTarea: null,
	},
	ejecutarTareaQuitarCumplimiento: {
		timeStamp: null,
		idTarea: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case MOSTRAR_HIJOS:
			newState.mostrarHijos.timeStamp = new Date().getTime();
			newState.mostrarHijos.registro = action.registro;
			newState.mostrarHijos.nombreComponente = action.nombreComponente;
			break;
		case MOSTRAR_POPUP_PLANES:
			newState.mostrarPopupPlanes.timeStamp = new Date().getTime();
			newState.mostrarPopupPlanes.registro = action.registro;
			newState.mostrarPopupPlanes.nombreComponente = action.nombreComponente;
			newState.mostrarPopupPlanes.x = action.x;
			newState.mostrarPopupPlanes.y = action.y;
			break;
		case MOSTRAR_POPUP_TAREAS:
			newState.mostrarPopupTareas.timeStamp = new Date().getTime();
			newState.mostrarPopupTareas.registro = action.registro;
			newState.mostrarPopupTareas.nombreComponente = action.nombreComponente;
			newState.mostrarPopupTareas.x = action.x;
			newState.mostrarPopupTareas.y = action.y;
			break;
		case EJECUTAR_TAREA_DAR_CUMPLIMIENTO:
			newState.ejecutarTareaDarCumplimiento.idTarea = action.idTarea || action.param?.item?.id;
			newState.ejecutarTareaDarCumplimiento.item = action.item || action.param?.item;
			newState.ejecutarTareaDarCumplimiento.param = action.param;
			newState.ejecutarTareaDarCumplimiento.timeStamp = new Date().getTime();
			break;
		case EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO:
			newState.ejecutarTareaQuitarCumplimiento.idTarea = action.idTarea || action.param?.item?.id;
			newState.ejecutarTareaQuitarCumplimiento.item = action.item || action.param?.item;
			newState.ejecutarTareaQuitarCumplimiento.param = action.param;
			newState.ejecutarTareaQuitarCumplimiento.timeStamp = new Date().getTime();
			break;
	}
	return newState;
};
