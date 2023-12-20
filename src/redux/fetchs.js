/** @format */

import { ODataEntity, ODataFetchFactory } from "@brunomon/odata-fetch-factory";
import { fetchFactory } from "../libs/fetchFactory";

let webApiExpedientes = SERVICE_URL;
let webApi = SERVICE_URL + "/api/v1";

const expedienteOdataFactory = ODataFetchFactory({
    fetch: fetch,
    domain: webApiExpedientes,
});
export const autorizacionFetch = fetchFactory(webApi, "Autorizacion");
export const autorizacionAceptarUsuarioFetch = fetchFactory(webApi, "Autorizacion/AceptarUsuario");
export const acceptFetch = fetchFactory(webApi, "Autorizacion/Accept");
export const loginFetch = fetchFactory(webApi, "LoginOS");
export const logonFetch = ODataEntity(expedienteOdataFactory, "Logon");
export const recuperoFetch = ODataEntity(expedienteOdataFactory, "PedirRecupero");
export const cambiarPasswordFetch = ODataEntity(expedienteOdataFactory, "CambiarPassword");

export const planesByIdFetch = fetchFactory(webApi, "Plan");
export const planesGetAllFetch = fetchFactory(webApi, "Plan/GetAll");
export const planesGetMyPlanFetch = fetchFactory(webApi, "Plan/GetMyPlans");
export const planesAddFetch = fetchFactory(webApi, "Plan/NuevoPlan");
export const planesModificarFetch = fetchFactory(webApi, "Plan/Modificar");
export const planesAddSimpleFetch = fetchFactory(webApi, "Plan/AgregarTareas");
export const planesAddLapsoFetch = fetchFactory(webApi, "Plan/AgregarMultiplesTareasPorLapso");
export const planesAddFechaFetch = fetchFactory(webApi, "Plan/AgregarMultiplesTareasEnFecha");
export const planesQuitarFetch = fetchFactory(webApi, "Plan/Quitar");

export const tareaByIdFetch = fetchFactory(webApi, "Tarea");
export const tareaByPlanIdFetch = fetchFactory(webApi, "Tarea/GetByPlanId");
export const tareaDarCumplimientoFetch = fetchFactory(webApi, "Tarea/DarCumplimiento");
export const tareaQuitarCumplimientoFetch = fetchFactory(webApi, "Tarea/QuitarCumplimiento");
export const tareaAddSimpleFetch = fetchFactory(webApi, "Tarea/SumarCondicion");
export const tareaAddLapsoFetch = fetchFactory(webApi, "Tarea/AgregarMultiplesCondicionesPorLapso");
export const tareaAddFechaFetch = fetchFactory(webApi, "Tarea/AgregarMultiplesCondicionesEnFecha");
export const tareaQuitarFetch = fetchFactory(webApi, "Tarea/QuitarTarea");
export const tareaModificarDescripcionFetch = fetchFactory(webApi, "Tarea/ModificarDescripcion");
export const tareaGetMiSectorFetch = fetchFactory(webApi, "Tarea/GetMiSector");

export const sectoresGetByIdFetch = fetchFactory(webApi, "Sector");
export const sectoresGetAllFetch = fetchFactory(webApi, "Sector/all");
export const sectoresGetByDescripcioniFetch = fetchFactory(webApi, "Sector/getByDescripcion");
export const sectoresAddFetch = fetchFactory(webApi, "Sector/add");
export const sectoresUpdateFetch = fetchFactory(webApi, "Sector/update");
export const sectoresSumarIntegranteFetch = fetchFactory(webApi, "Sector/SumarIntegrante");
export const sectoresQuitarIntegranteFetch = fetchFactory(webApi, "Sector/QuitarIntegrante");
export const sectoresModificarIntegranteFetch = fetchFactory(webApi, "Sector/ModificarIntegrante");
export const sectoresUsuarioHacerResponsableFetch = fetchFactory(webApi, "Sector/HacerResponsable");
export const sectoresGetAllUsuariosFetch = fetchFactory(webApi, "Sector/allUsuarios");
export const sectoresQuitarRolIntegranteFetch = fetchFactory(webApi, "Sector/QuitarRolIntegrante");
export const sectoresAsignarRolIntegranteFetch = fetchFactory(webApi, "Sector/AsignarRolIntegrante");
export const sectoresActivarIntegranteFetch = fetchFactory(webApi, "Sector/ActivarIntegrante");

export const protocoloNuevoFetch = fetchFactory(webApi, "Protocolo/Nuevo");
export const protocoloGetAllFetch = fetchFactory(webApi, "Protocolo/all");
export const protocoloAgregarFetch = fetchFactory(webApi, "Plan/AgregarProtocolo");
