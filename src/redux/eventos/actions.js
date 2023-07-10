export const MOSTRAR_HIJOS = "[eventos] MOSTRAR_HIJOS";
export const MOSTRAR_POPUP_TAREAS = "[eventos] MOSTRAR_POPUP_TAREAS";
export const MOSTRAR_POPUP_PLANES = "[eventos] MOSTRAR_POPUP_PLANES";
export const EJECUTAR_TAREA_DAR_CUMPLIMIENTO = "[eventos] EJECUTAR_TAREA_DAR_CUMPLIMIENTO";
export const EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO = "[eventos] EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO";

export const mostrarHijos = (registro, nombreComponente) => ({
	type: MOSTRAR_HIJOS,
	registro: registro,
	nombreComponente: nombreComponente,
});

export const mostrarPopupPlanes = (registro, nombreComponente, x, y) => ({
	type: MOSTRAR_POPUP_PLANES,
	registro: registro,
	nombreComponente: nombreComponente,
	x: x,
	y: y,
});

export const mostrarPopupTareas = (registro, nombreComponente, x, y) => ({
	type: MOSTRAR_POPUP_TAREAS,
	registro: registro,
	nombreComponente: nombreComponente,
	x: x,
	y: y,
});

export const ejecutarTareaDarCumplimiento = (idTarea, item, param) => ({
	type: EJECUTAR_TAREA_DAR_CUMPLIMIENTO,
	idTarea: idTarea,
	item: item,
	param: param,
});

export const ejecutarTareaQuitarCumplimiento = (idTarea, item, param) => ({
	type: EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO,
	idTarea: idTarea,
	item: item,
	param: param,
});
