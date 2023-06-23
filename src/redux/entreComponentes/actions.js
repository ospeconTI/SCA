export const BUSQUEDA_DESCRIPCION__LOAD01 = "[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01";
export const TAREA_CARGA__LOAD01 = "[entreComponentes] TAREA_CARGA__LOAD01"; //Simple
export const TAREA_CARGA__LOAD02 = "[entreComponentes] TAREA_CARGA__LOAD02"; //Por Lapso
export const TAREA_CARGA__LOAD03 = "[entreComponentes] TAREA_CARGA__LOAD03"; //Por Fecha
export const PLAN_CARGA__LOAD01 = "[entreComponentes] PLAN_CARGA__LOAD01";
export const AMPAROS__FILTER01 = "[entreComponentes] AMPAROS__FILTER01";
export const AMPAROS__SACAR_FILTER01 = "[entreComponentes] AMPAROS__SACAR_FILTER01";
export const CARGA_SECTORES__LOAD01 = "[entreComponentes] CARGA_SECTORES__LOAD01";
export const VER_USUARIOS__LOAD01 = "[entreComponentes] VER_USUARIOS__LOAD01";
export const CARGA_USUARIOS__LOAD01 = "[entreComponentes] CARGA_USUARIOS__LOAD01";

export const busqueDescripcion_Load01 = (item, accion) => ({
	type: BUSQUEDA_DESCRIPCION__LOAD01,
	item: item,
	accion: accion,
});
//simple
export const tareaCarga_Load01 = (item, accion) => ({
	type: TAREA_CARGA__LOAD01,
	item: item,
	accion: accion,
});
//lapso
export const tareaCarga_Load02 = (item, accion) => ({
	type: TAREA_CARGA__LOAD02,
	item: item,
	accion: accion,
});
//fecha
export const tareaCarga_Load03 = (item, accion) => ({
	type: TAREA_CARGA__LOAD03,
	item: item,
	accion: accion,
});

export const planCarga_Load01 = (item, accion) => ({
	type: PLAN_CARGA__LOAD01,
	item: item,
	accion: accion,
});

export const amparos_Filter01 = (campo, valor) => ({
	type: AMPAROS__FILTER01,
	campo: campo,
	valor: valor,
});

export const amparos_SacarFilter01 = () => ({
	type: AMPAROS__SACAR_FILTER01,
});

export const cargaSectores_Load01 = (item, accion) => ({
	type: CARGA_SECTORES__LOAD01,
	item: item,
	accion: accion,
});

export const verUsuarios_Load01 = (usuariosItems, sectorItem) => ({
	type: VER_USUARIOS__LOAD01,
	usuariosItems: usuariosItems,
	sectorItem: sectorItem,
});

export const cargaUsuarios_Load01 = (item, itemSector, accion) => ({
	type: CARGA_USUARIOS__LOAD01,
	item: item,
	itemSector: itemSector,
	accion: accion,
});
