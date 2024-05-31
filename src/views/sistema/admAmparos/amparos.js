/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../../redux/routing/actions";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { showWarning } from "../../../redux/ui/actions";
import { dmdButton } from "../../css/dmdButton";
import { FILTRO, FILTROSACAR, REFRESH, MAS, HOME, SEARCH } from "../../../../assets/icons/svgs";

import { popupControl } from "../../../views/componentes/popup";

import { armoTareas, recursiveSearch, hiddenOpcion } from "../../../libs/funciones";

import { UPDATE, getAll as getPlanesAll, getMyPlan as getMisPlanes } from "../../../redux/planes/actions";
import { getByPlanId as getTareasByPlanId, darCumplimiento as tareaDarCumplimiento, quitarCumplimiento as tareaQuitarCumplimiento } from "../../../redux/tareas/actions";
import { show as showPopup, hidden as hiddenPopup } from "../../../redux/popup/actions";
import { planCarga_Load01 } from "../../../redux/entreComponentes/actions";

//http://localhost:4000/api/v1/Tarea/GetByPlanId/cb094b3a-da0e-4b54-ba7f-3183cf5bd59f&ejecutorCreador=creador&sectorDescripcion=Afiliaciones
//http://localhost:4000/api/v1/Tarea/GetByPlanId/cb094b3a-da0e-4b54-ba7f-3183cf5bd59f?ejecutorCreador=creador&sectorDescripcion=Afiliaciones

import { planComponente } from "./planComponente";
import { tareaComponente } from "./tareaComponente";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const PLANES_OK = "planes.all.timeStamp";
const PLANES_ERROR = "planes.all.errorTimeStamp";

const EVENTO_MOSTRAR_HIJOS = "eventos.mostrarHijos.timeStamp";
const EVENTO_MOSTRAR_POPUP_PLANES = "eventos.mostrarPopupPlanes.timeStamp";
const EVENTO_MOSTRAR_POPUP_TAREAS = "eventos.mostrarPopupTareas.timeStamp";

const FILTRO_AMPAROS = "entreComponentes.amparos_Filter01.timeStamp";
const SACAR_FILTRO01_AMPAROS = "entreComponentes.amparos_SacarFilter01.timeStamp";
const SACAR_FILTRO02_AMPAROS = "entreComponentes.amparos_SacarFilter02.timeStamp";

const FILTRO_AMPAROS_POR_SECTOR_SIN_DESCRIPCION = "entreComponentes.amparos_Filter02.timeStamp";
const FILTRO_AMPAROS_MY_PLANES = "entreComponentes.amparos_my_planes_Filter01.timeStamp";

const TAREAS_BY_PLAN_ID_OK = "tareas.byPlanId.timeStamp";
const TAREAS_BY_PLAN_ID_ERROR = "tareas.byPlanId.errorTimeStamp";

const TAREA_DAR_CUMPLIMIENTO_OK = "tareas.darCumplimientoTimeStamp";
const TAREA_DAR_CUMPLIMIENTO_ERROR = "tareas.errorDarCumplimientoTimeStamp";
const EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO = "eventos.ejecutarTareaDarCumplimiento.timeStamp";

const TAREA_QUITAR_CUMPLIMIENTO_OK = "tareas.quitarCumplimientoTimeStamp";
const TAREA_QUITAR_CUMPLIMIENTO_ERROR = "tareas.errorQuitarCumplimientoTimeStamp";
const EVENTO_EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO = "eventos.ejecutarTareaQuitarCumplimiento.timeStamp";

const PLAN_ADD = "planes.addTimeStamp";
const PLAN_UPDATE = "planes.updateTimeStamp";

const TAREA_CARGA_A_AMPARO__RETORNO = "entreComponentes.tareaCargaAAmparo_Retorno01.timeStamp";
const PERFIL_ACTUAL = "miPerfil.timeStamp";

export class amparosScreen extends connect(
    store,
    FILTRO_AMPAROS_POR_SECTOR_SIN_DESCRIPCION,
    FILTRO_AMPAROS_MY_PLANES,
    TAREA_QUITAR_CUMPLIMIENTO_OK,
    TAREA_QUITAR_CUMPLIMIENTO_ERROR,
    EVENTO_EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO,
    TAREA_CARGA_A_AMPARO__RETORNO,
    EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO,
    TAREA_DAR_CUMPLIMIENTO_OK,
    TAREA_DAR_CUMPLIMIENTO_ERROR,
    FILTRO_AMPAROS,
    PLAN_ADD,
    SACAR_FILTRO01_AMPAROS,
    SACAR_FILTRO02_AMPAROS,
    EVENTO_MOSTRAR_POPUP_PLANES,
    EVENTO_MOSTRAR_POPUP_TAREAS,
    EVENTO_MOSTRAR_HIJOS,
    PLANES_OK,
    PLANES_ERROR,
    PLAN_UPDATE,
    TAREAS_BY_PLAN_ID_OK,
    TAREAS_BY_PLAN_ID_ERROR,
    MEDIA_CHANGE,
    SCREEN,
    PERFIL_ACTUAL
)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.arbol = null;
        this.rama = -1;
        this.itemsSeleccionados = [];
        this.filtro = false;
        this.cargaArbolDe0 = true;
        this.sectorEjecutorFiltro = { ejecutorCreador: "", sectorDescripcion: "" };
    }
    static get styles() {
        return css`
            ${dmdButton}
            :host {
                display: grid;
                grid-template-rows: 6vh auto;
                background-color: var(--aplicacion);
                overflow: auto;
            }
            :host([hidden]) {
                display: none;
            }
            :host::-webkit-scrollbar {
                display: none;
            }
            #div-titulo {
                display: grid;
                position: relative;
                grid-auto-flow: column;
                justify-content: left;
                align-items: center;
                width: 100vw;
                background-color: var(--secundario);
                font-family: var(font-header-h1-family);
                font-size: 1.5rem;
                color: var(--on-secundario);
                gap: 1rem;
                padding-left: 0.6rem;
            }
            #div-sectores {
                display: grid;
                grid-auto-flow: column;
                gap: 0.1rem;
            }
            #div-sectores-Descri {
                font-family: var(font-header-h2-family);
                font-size: 0.8rem;
                align-self: center;
                padding-right: 0.3rem;
            }
            #div-titulo-leyenda {
                display: grid;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .titulo-boton {
                border: 1px solid rgba(256, 256, 256, 0.6);
                height: 2rem;
                cursor: pointer;
                border-radius: 0.4rem;
                background-color: rgba(0, 0, 0, 0.1);
                display: grid;
                grid-auto-flow: column;
            }
            #div-buscar {
                display: grid;
                position: relative;
                width: 100vw;
                font-family: var(font-header-h1-family);
                font-size: 0.8rem;
                background-color: rgba(255, 255, 255, 0.1);
                color: grey;
                text-align: left;
                grid-auto-flow: column;
                justify-content: flex-start;
                grid-gap: 0.2rem;
            }
            .div-arbol {
                display: grid;
                width: 100vw;
                grid-auto-flow: column;
                grid-gap: 0.5rem;
                overflow-x: auto;
                white-space: nowrap;
                justify-content: flex-start;
            }
            .div-arbol::-webkit-scrollbar {
                display: none;
            }
            .div-rama {
                display: grid;
                width: max-content;
                grid-auto-flow: row;
                grid-gap: 1rem;
                overflow-y: auto;
                white-space: nowrap;
                align-content: flex-start;
                padding: 0.5rem;
            }
            .div-rama::-webkit-scrollbar {
                display: none;
            }
            svg {
                width: 2rem;
                height: 2rem;
                fill: var(--on-secundario);
            }
            *[hidden] {
                display: none !important;
            }
        `;
    }
    render() {
        if (this.arbol) {
            return html` <div id="div-titulo">
                    <div id="div-alta-amparo" class="titulo-boton" @click="${this.altaAmparo}" title="Alta de nuevo Caso">${MAS}</div>
                    <div id="div-refresh" class="titulo-boton" @click="${this.refresh}" title="Refrescar la lista de Casos">${REFRESH}</div>
                    <div id="div-menu" class="titulo-boton" @click="${this.filtroMenu}" title="filtro de Casos">
                        <div>${SEARCH}</div>
                        <div id="div-sectores-Descri">POR ESTADO</div>
                    </div>

                    <div id="div-sacar-filtro" class="titulo-boton" @click="${this.filtroSacar}" ?hidden=${!this.filtro} title="Sacar filtros">${FILTROSACAR}</div>
                    <div id="div-sectores" class="titulo-boton" ?hidden=${hiddenOpcion("planes-filtrar-sectores")} @click="${this.filtroPorSector}" title="Filtro por sector">
                        <div>${SEARCH}</div>
                        <div id="div-sectores-Descri" ?hidden=${this.sectorEjecutorFiltro.ejecutorCreador != ""}>POR SECTOR</div>
                        <div id="div-sectores-Descri" ?hidden=${this.sectorEjecutorFiltro.ejecutorCreador == ""}>${this.sectorEjecutorFiltro.ejecutorCreador.toUpperCase() + ": " + this.sectorEjecutorFiltro.sectorDescripcion}</div>
                    </div>
                    <div id="div-sectores" class="titulo-boton" ?hidden=${!hiddenOpcion("planes-filtrar-sectores")} @click="${this.filtroPorSectorSinDescripicion}" title="Filtro por sector">
                        <div>${SEARCH}</div>
                        <div id="div-sectores-Descri" ?hidden=${this.sectorEjecutorFiltro.ejecutorCreador != ""}>POR SECTOR</div>
                        <div id="div-sectores-Descri" ?hidden=${this.sectorEjecutorFiltro.ejecutorCreador == ""}>${this.sectorEjecutorFiltro.ejecutorCreador.toUpperCase() + ": " + this.sectorEjecutorFiltro.sectorDescripcion}</div>
                    </div>
                </div>
                <div class="div-arbol">
                    ${this.arbol
                        .filter((item, index) => {
                            return index <= this.rama + 1;
                        })
                        .map((rama, indexRama) => {
                            return html`<div class="div-rama">
                                ${rama
                                    .filter((item, index) => {
                                        return indexRama == 0 || (indexRama > 0 && item.padre == this.itemsSeleccionados[indexRama - 1].id);
                                    })
                                    .map((tarea, indexTarea) => {
                                        if (indexRama == 0) {
                                            // return html`<plan-componente class="nodotarea" .registro=${tarea} .rama=${indexRama} .registroseleccionado=${this.itemsSeleccionados[indexRama]} @click=${tarea.hijo ? this.clickNodo : null}></plan-componente>`;
                                            return html`<plan-componente id=${"p" + indexRama + "-" + indexTarea} class="nodotarea" .registro=${tarea} .rama=${indexRama} .registroseleccionado=${this.itemsSeleccionados[indexRama]}></plan-componente>`;
                                        } else {
                                            return html`<tarea-componente id=${"t" + indexRama + "-" + indexTarea} .registro=${tarea} .rama=${indexRama} .registroseleccionado=${this.itemsSeleccionados[indexRama]}></tarea-componente>`;
                                        }
                                    })}
                            </div>`;
                        })}
                    <poopup-control id="popup"></poopup-control>
                </div>`;
        }
    }
    inicializarArbol() {
        if (this.cargaArbolDe0) {
            this.itemsSeleccionados = [];
            this.rama = -1;
            this.filtro = false;
        }
    }
    filtroMenu(e) {
        store.dispatch(showPopup("0.0", null, e.clientX, e.clientY));
    }
    filtroPorSector(e) {
        store.dispatch(showPopup("1.0", null, e.clientX, e.clientY));
    }
    filtroPorSectorSinDescripicion(e) {
        store.dispatch(showPopup("1.1", null, e.clientX, e.clientY));
    }
    altaAmparo() {
        store.dispatch(planCarga_Load01(null, "add"));
    }
    filtrar(campo, valor) {
        if (this.arbol.length > 0) {
            this.inicializarArbol();
            this.filtro = true;
            this.arbol.splice(1);
            let f = store.getState().entreComponentes.amparos_Filter01.campo;
            if (f == "creador" || f == "ejecutor") {
                this.filtro = false;
            } else {
                this.arbol[0] = this.arbol[0].filter((it) => {
                    if (campo == "estado") return it[campo] == valor;
                    if (campo == "descripcion") return it[campo].toLowerCase().includes(valor.toLowerCase());
                    if (campo == "urlReferencia") return it[campo].toLowerCase().includes(valor.toLowerCase());
                });
            }
            this.update();
        }
    }
    filtroSacar() {
        this.filtro = false;
        if (this.sectorEjecutorFiltro.ejecutorCreador == "") {
            store.dispatch(getPlanesAll());
        } else if (this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
            store.dispatch(getMisPlanes("?sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
        } else {
            store.dispatch(getPlanesAll("?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
        }
    }
    clickNodo(e) {
        let componente = this.shadowRoot.querySelector("#" + e);
        let item = componente.registro;
        this.rama = componente.rama;
        if (componente.hasAttribute("expandido")) {
            this.itemsSeleccionados.splice(this.rama);
            this.arbol.splice(this.rama + 1);
            this.update();
        } else {
            if (this.itemsSeleccionados.length == 0 || this.itemsSeleccionados.length < this.rama + 1) {
                this.itemsSeleccionados.push(item);
                if (this.sectorEjecutorFiltro.ejecutorCreador == "" || this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
                    store.dispatch(getTareasByPlanId(item.planId));
                } else {
                    store.dispatch(getTareasByPlanId(item.planId + "?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
                }
            } else {
                this.itemsSeleccionados[this.rama] = item;
                this.itemsSeleccionados.splice(this.rama + 1);
                if (this.rama == 0) {
                    this.arbol.splice(1);
                    if (this.sectorEjecutorFiltro.ejecutorCreador == "" || this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
                        store.dispatch(getTareasByPlanId(item.planId));
                    } else {
                        store.dispatch(getTareasByPlanId(item.planId + "?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
                    }
                } else {
                    //this.arbol.splice(this.rama + 2);
                    //this.update();
                    this.arbol.splice(this.rama + 1);
                    if (this.sectorEjecutorFiltro.ejecutorCreador == "" || this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
                        store.dispatch(getTareasByPlanId(item.planId));
                    } else {
                        store.dispatch(getTareasByPlanId(item.planId + "?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
                    }
                }
            }
        }
    }
    refresh() {
        this.cargaArbolDe0 = true;
        this.inicializarArbol();
        this.filtroSacar();
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;

            let hiddenAnterior = this.hidden;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-amparos-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                if (hiddenAnterior) {
                    if (hiddenOpcion("planes-filtrar-sectores")) {
                        this.sectorEjecutorFiltro.ejecutorCreador = "con mi sector";
                        this.sectorEjecutorFiltro.sectorDescripcion = state.miPerfil.sector.descripcion;
                    }
                    this.filtroSacar();
                }
                this.hidden = false;
            }
        }
        if (name == PERFIL_ACTUAL) {
            if (state.miPerfil.sector.roles && state.miPerfil.sector.roles.find((r) => r.nombre != "usuario")) {
                this.sectorEjecutorFiltro.ejecutorCreador = "";
                this.sectorEjecutorFiltro.sectorDescripcion = "";
            } else {
                this.sectorEjecutorFiltro.ejecutorCreador = "ejecutor";
                this.sectorEjecutorFiltro.sectorDescripcion = state.miPerfil.sector.descripcion;
            }
            this.refresh();
        }
        if (name == PLANES_OK) {
            this.inicializarArbol();
            this.arbol = [state.planes.all.entities];
            if (this.cargaArbolDe0) {
                this.update();
            } else {
                if (this.sectorEjecutorFiltro.ejecutorCreador == "" || this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
                    store.dispatch(getTareasByPlanId(this.itemsSeleccionados[0].planId));
                } else {
                    store.dispatch(getTareasByPlanId(this.itemsSeleccionados[0].planId + "?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
                }
            }
        }
        if (name == PLANES_ERROR) {
            this.inicializarArbol();
            store.dispatch(showWarning("Error!", "No se pudo recuperar los amparos, intente nuevamente", "fondoError", 3000));
            this.update();
        }
        if (name == TAREAS_BY_PLAN_ID_OK) {
            if (this.cargaArbolDe0) {
                let newRama = [];
                if (this.rama == 0) {
                    newRama = armoTareas("0", state.tareas.byPlanId.entities);
                } else {
                    newRama = armoTareas(this.itemsSeleccionados[this.rama].id, state.tareas.byPlanId.entities);
                }
                this.arbol.push(newRama);
            } else {
                this.cargaArbolDe0 = true;
                if (this.itemsSeleccionados.length > 0) {
                    this.arbol.splice(1);
                    let index = -1;
                    for (const item of this.itemsSeleccionados) {
                        index++;
                        let newRama = [];
                        if (index == 0) {
                            newRama = armoTareas("0", state.tareas.byPlanId.entities);
                        } else {
                            newRama = armoTareas(this.itemsSeleccionados[index].id, state.tareas.byPlanId.entities);
                        }
                        if (newRama.length > 0) {
                            this.arbol.push(newRama);
                        } else {
                            if (index == 0) {
                                this.itemsSeleccionados = [];
                                this.rama = -1;
                            } else {
                                this.rama = this.arbol.length - 2;
                            }
                            break;
                        }
                    }
                }
            }
            this.update();
        }
        if (name == TAREAS_BY_PLAN_ID_ERROR) {
            this.cargaArbolDe0 = true;
            store.dispatch(showWarning("Error!", "No se pudo recuperar las tareas, intente nuevamente", "fondoError", 3000));
        }
        if (name == EVENTO_MOSTRAR_HIJOS) {
            this.clickNodo(state.eventos.mostrarHijos.nombreComponente);
        }
        if (name == EVENTO_MOSTRAR_POPUP_PLANES) {
            if (state.eventos.mostrarPopupPlanes.registro?.conTareas) {
                store.dispatch(showPopup("2.1", state.eventos.mostrarPopupPlanes.registro, state.eventos.mostrarPopupPlanes.x + "px", state.eventos.mostrarPopupPlanes.y + "px"));
            } else {
                store.dispatch(showPopup("2.0", state.eventos.mostrarPopupPlanes.registro, state.eventos.mostrarPopupPlanes.x + "px", state.eventos.mostrarPopupPlanes.y + "px"));
            }
        }
        if (name == EVENTO_MOSTRAR_POPUP_TAREAS) {
            let tareaSectorEjecutor = state.eventos.mostrarPopupTareas.registro?.ejecutor.id;
            let tareaSectorCreador = state.eventos.mostrarPopupTareas.registro?.creador.id;
            let tareaPorLapso = state.eventos.mostrarPopupTareas.registro?.esPorLapso;
            let tareaEstado = state.eventos.mostrarPopupTareas.registro?.estado;
            let tareaConHijos = state.eventos.mostrarPopupTareas.registro?.conTareas;
            let usuarioSector = state.miPerfil.sector.id;

            let soySoloCreador = tareaSectorCreador == usuarioSector && tareaSectorEjecutor != usuarioSector;
            let soySoloEjecutor = tareaSectorCreador != usuarioSector && tareaSectorEjecutor == usuarioSector;
            let soyAmbos = tareaSectorCreador == usuarioSector && tareaSectorEjecutor == usuarioSector;
            let noSoyNinguno = tareaSectorCreador != usuarioSector && tareaSectorEjecutor != usuarioSector;
            //3.0 nueva tarea simple, lapso, fecha, cumplimiento, mod, eliminar, ver
            //3.1 nueva tarea simple, lapso, fecha, ver
            //3.2 ver
            //3.3 cumplimiento, mod, eliminar, ver
            //3.4 nueva tarea simple, lapso, fecha, mod, eliminar, ver
            //3.5 mod, eliminar, ver
            //3.6 nueva tarea simple, lapso, fecha, cumplimiento, ver
            //3.7 cumplimiento, ver
            //3.8 nueva tarea simple, lapso, fecha, quitarCumplimiento, mod, eliminar, ver
            //3.9 quitarCumplimiento, mod, eliminar, ver
            //3.10 nueva tarea simple, lapso, fecha, quitarCumplimiento, ver
            //3.11 quitarCumplimiento, ver

            if (noSoyNinguno) {
                store.dispatch(showPopup("3.2", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soyAmbos && !tareaPorLapso && !tareaConHijos) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.0", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.8", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soyAmbos && !tareaPorLapso && tareaConHijos) {
                store.dispatch(showPopup("3.1", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soyAmbos && tareaPorLapso) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.3", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.9", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloCreador && !tareaPorLapso && !tareaConHijos) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.5", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.2", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloCreador && !tareaPorLapso && tareaConHijos) {
                store.dispatch(showPopup("3.2", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloCreador && tareaPorLapso) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.5", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.2", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloEjecutor && !tareaPorLapso && !tareaConHijos) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.6", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.10", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloEjecutor && !tareaPorLapso && tareaConHijos) {
                store.dispatch(showPopup("3.1", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else if (soySoloEjecutor && tareaPorLapso) {
                if (tareaEstado != "cumplida") store.dispatch(showPopup("3.7", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                if (tareaEstado == "cumplida") store.dispatch(showPopup("3.11", state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            }
        }
        if (name == FILTRO_AMPAROS) {
            let f = state.entreComponentes.amparos_Filter01.campo;
            if (f == "creador") {
                this.sectorEjecutorFiltro.ejecutorCreador = "creador";
                this.sectorEjecutorFiltro.sectorDescripcion = state.entreComponentes.amparos_Filter01.valor;
            } else if (f == "ejecutor") {
                this.sectorEjecutorFiltro.ejecutorCreador = "ejecutor";
                this.sectorEjecutorFiltro.sectorDescripcion = state.entreComponentes.amparos_Filter01.valor;
            }
            this.filtrar(f, state.entreComponentes.amparos_Filter01.valor);
        }
        if (name == SACAR_FILTRO01_AMPAROS || name == PLAN_ADD || name == PLAN_UPDATE) {
            this.filtroSacar();
        }
        if (name == SACAR_FILTRO02_AMPAROS) {
            this.sectorEjecutorFiltro.ejecutorCreador = "";
            this.sectorEjecutorFiltro.sectorDescripcion = "";
            store.dispatch(getPlanesAll());
        }
        if (name == FILTRO_AMPAROS_POR_SECTOR_SIN_DESCRIPCION) {
            let f = state.entreComponentes.amparos_Filter02.campo;
            if (f == "creador" || f == "ejecutor") {
                this.sectorEjecutorFiltro.ejecutorCreador = f;
                if (state.entreComponentes.amparos_Filter02.valor) {
                    this.sectorEjecutorFiltro.sectorDescripcion = state.entreComponentes.amparos_Filter02.valor;
                } else {
                    this.sectorEjecutorFiltro.sectorDescripcion = state.miPerfil.sector.descripcion;
                }
            } else {
                this.sectorEjecutorFiltro.ejecutorCreador = "";
                this.sectorEjecutorFiltro.sectorDescripcion = "";
            }
            if (this.sectorEjecutorFiltro.ejecutorCreador == "") {
                store.dispatch(getPlanesAll());
            } else {
                store.dispatch(getPlanesAll("?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
            }
        }
        if (name == FILTRO_AMPAROS_MY_PLANES) {
            //this.sectorEjecutorFiltro.ejecutorCreador = "ejecutor";
            //this.sectorEjecutorFiltro.sectorDescripcion = state.miPerfil.sector.descripcion;
            this.sectorEjecutorFiltro.ejecutorCreador = "con mi sector";
            this.sectorEjecutorFiltro.sectorDescripcion = state.miPerfil.sector.descripcion;
            store.dispatch(getMisPlanes("?sectorDescripcion=" + state.miPerfil.sector.descripcion));
        }
        if (name == TAREA_DAR_CUMPLIMIENTO_OK || name == TAREA_QUITAR_CUMPLIMIENTO_OK) {
            store.dispatch(showWarning("Atencion", "Se dio como cumplido o descumplido la tarea", "fondoOk", 3000));
            this.cargaArbolDe0 = false;
            if (this.sectorEjecutorFiltro.ejecutorCreador == "") {
                store.dispatch(getPlanesAll());
            } else {
                store.dispatch(getPlanesAll("?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
            }
        }
        if (name == TAREA_DAR_CUMPLIMIENTO_ERROR || name == TAREA_QUITAR_CUMPLIMIENTO_ERROR) {
            store.dispatch(showWarning("Error!", "No se pudo marcar como cumplido o descumplimiento, intente nuevamente", "fondoError", 3000));
        }
        if (name == EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO) {
            let body = {};
            body.tareaId = state.eventos.ejecutarTareaDarCumplimiento.idTarea;
            store.dispatch(tareaDarCumplimiento(body));
        }
        if (name == EVENTO_EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO) {
            let body = {};
            body.tareaId = state.eventos.ejecutarTareaQuitarCumplimiento.idTarea;
            store.dispatch(tareaQuitarCumplimiento(body));
        }
        if (name == TAREA_CARGA_A_AMPARO__RETORNO) {
            this.cargaArbolDe0 = false;
            let registroPadre = null;
            if ("-delete-edit-".indexOf("-" + state.entreComponentes.tareaCargaAAmparo_Retorno01.accion + "-") != -1) {
                this.arbol.map((item1) => {
                    item1.map((item) => {
                        if (item.id == state.entreComponentes.tareaCargaAAmparo_Retorno01.item.padre) {
                            registroPadre = item;
                        }
                    });
                });
            } else {
                registroPadre = state.entreComponentes.tareaCargaAAmparo_Retorno01.itemPadre;
            }
            if (registroPadre.clase == "plan") {
                this.arbol[0].map((item) => {
                    if (item.planId == registroPadre.planId) {
                        this.itemsSeleccionados[0] = item;
                        this.itemsSeleccionados.splice(1);
                        this.rama = 0;
                    }
                });
            } else {
                this.arbol.map((item1, index1) => {
                    item1.map((item2, index2) => {
                        if (index1 > 0 && item2.id == registroPadre.id) {
                            this.itemsSeleccionados[index1] = registroPadre;
                            this.itemsSeleccionados.splice(index1 + 1);
                            this.rama = index1;
                        }
                    });
                });
            }
            /* if (this.sectorEjecutorFiltro.ejecutorCreador == "") {
                store.dispatch(getPlanesAll());
            } else {
                store.dispatch(getPlanesAll("?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
            } */

            if (this.sectorEjecutorFiltro.ejecutorCreador == "") {
                store.dispatch(getPlanesAll());
            } else if (this.sectorEjecutorFiltro.ejecutorCreador == "con mi sector") {
                store.dispatch(getMisPlanes("?sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
            } else {
                store.dispatch(getPlanesAll("?ejecutorCreador=" + this.sectorEjecutorFiltro.ejecutorCreador + "&sectorDescripcion=" + this.sectorEjecutorFiltro.sectorDescripcion));
            }
        }
    }
    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size",
            },
            layout: {
                type: String,
                reflect: true,
            },
            hidden: {
                type: Boolean,
                reflect: true,
            },
            area: {
                type: String,
            },
            current: {
                type: String,
                reflect: true,
            },
        };
    }
}
window.customElements.define("amparos-screen", amparosScreen);
