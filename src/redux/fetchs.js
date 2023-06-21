/** @format */

import { ODataEntity, ODataFetchFactory } from "@brunomon/odata-fetch-factory";
import { fetchFactory } from "../libs/fetchFactory";

let webApiExpedientes = SERVICE_URL;
let webApi = SERVICE_URL + "/api/v1";
let webApiNomenclador = NOMENCLADOR_URL + "/api";

const expedienteOdataFactory = ODataFetchFactory({
	fetch: fetch,
	domain: webApiExpedientes,
});

export const loginFetch = fetchFactory(webApi, "LoginOS");
export const logonFetch = ODataEntity(expedienteOdataFactory, "Logon");
export const recuperoFetch = ODataEntity(expedienteOdataFactory, "PedirRecupero");
export const cambiarPasswordFetch = ODataEntity(expedienteOdataFactory, "CambiarPassword");

export const nomencladorGetAllFetch = fetchFactory(webApiNomenclador, "Nomenclador");
export const prestacionGetAllFetch = fetchFactory(webApiNomenclador, "PrestacionLugar");
export const prestacionPorPrestadorGetAllFetch = fetchFactory(webApiNomenclador, "PrestacionLugar/PrestacionesxPrestador");

export const planesByIdFetch = fetchFactory(webApi, "Plan");
export const planesGetAllFetch = fetchFactory(webApi, "Plan/GetAll");
export const planesAddFetch = fetchFactory(webApi, "Plan/NuevoPlan");
export const planesAddSimpleFetch = fetchFactory(webApi, "Plan/AgregarTareas");
export const planesAddLapsoFetch = fetchFactory(webApi, "Plan/AgregarMultiplesTareasPorLapso");
export const planesAddFechaFetch = fetchFactory(webApi, "Plan/AgregarMultiplesTareasEnFecha");

export const tareaByIdFetch = fetchFactory(webApi, "Tarea");
export const tareaByPlanIdFetch = fetchFactory(webApi, "Tarea/GetByPlanId");
export const tareaDarCumplimientoFetch = fetchFactory(webApi, "Tarea/DarCumplimiento");
export const tareaAddSimpleFetch = fetchFactory(webApi, "Tarea/SumarCondicion");

export const sectoresGetAllFetch = fetchFactory(webApi, "Sector/all");
