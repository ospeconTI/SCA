/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../../redux/routing/actions";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { showWarning } from "../../../redux/ui/actions";
import { dmdButton } from "../../css/dmdButton";
import { FILTRO, FILTROSACAR, MAS } from "../../../../assets/icons/svgs";

import { popupControl } from "../../../views/componentes/popup";

import { armoTareas } from "../../../libs/funciones";

import { UPDATE, getAll as getPlanesAll } from "../../../redux/planes/actions";
import { getByPlanId as getTareasByPlanId, darCumplimiento as tareaDarCumplimiento } from "../../../redux/tareas/actions";
import { show as showPopup, hidden as hiddenPopup } from "../../../redux/popup/actions";
import { planCarga_Load01 } from "../../../redux/entreComponentes/actions";

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
const SACAR_FILTRO_AMPAROS = "entreComponentes.amparos_SacarFilter01.timeStamp";

const TAREAS_BY_PLAN_ID_OK = "tareas.byPlanId.timeStamp";
const TAREAS_BY_PLAN_ID_ERROR = "tareas.byPlanId.errorTimeStamp";

const TAREA_DAR_CUMPLIMIENTO_OK = "tareas.darCumplimientoTimeStamp";
const TAREA_DAR_CUMPLIMIENTO_ERROR = "tareas.errorDarCumplimientoTimeStamp";
const EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO = "eventos.ejecutarTareaDarCumplimiento.timeStamp";

const PLAN_ADD = "planes.addTimeStamp";
const PLAN_UPDATE = "planes.updateTimeStamp";

export class amparosScreen extends connect(store, EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO, TAREA_DAR_CUMPLIMIENTO_OK, TAREA_DAR_CUMPLIMIENTO_ERROR, FILTRO_AMPAROS, PLAN_ADD, SACAR_FILTRO_AMPAROS, EVENTO_MOSTRAR_POPUP_PLANES, EVENTO_MOSTRAR_POPUP_TAREAS, EVENTO_MOSTRAR_HIJOS, PLANES_OK, PLANES_ERROR, PLAN_UPDATE, TAREAS_BY_PLAN_ID_OK, TAREAS_BY_PLAN_ID_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.arbol = null;
        this.rama = -1;
        this.itemsSeleccionados = [];
        this.filtro = false;
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
                width: 100vw;
                background-color: var(--secundario);
                font-family: var(font-header-h1-family);
                font-size: 1.5rem;
                color: var(--on-secundario);
                align-content: center;
                text-align: center;
            }
            #div-menu {
                position: absolute;
                left: 4rem;
                top: 0.2rem;
            }
            #div-sacar-filtro {
                position: absolute;
                left: 7rem;
                top: 0.2rem;
            }
            #div-alta-amparo {
                position: absolute;
                left: 1rem;
                top: 0.2rem;
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
            @keyframes fadeOutUp {
                from {
                    opacity: 1;
                    transform: translate3d(0, 0px, 0);
                }

                to {
                    opacity: 0;
                    transform: translate3d(0, -2000px, 0);
                }
            }
        `;
    }
    render() {
        if (this.arbol) {
            return html` <div id="div-titulo">
                    <div id="div-menu" @click="${this.filtroMenu}" title="filtro de amparos">${FILTRO}</div>
                    <div id="div-sacar-filtro" @click="${this.filtroSacar}" ?hidden=${!this.filtro} title="Sacar filtros">${FILTROSACAR}</div>
                    <div id="div-alta-amparo" @click="${this.altaAmparo}" title="Alta de nuevo plan">${MAS}</div>
                    <div>Administracion de amparos</div>
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
    filtroMenu(e) {
        store.dispatch(showPopup(0, null, e.clientX, e.clientY));
    }
    altaAmparo() {
        store.dispatch(planCarga_Load01(null, "add"));
    }
    filtrar(campo, valor) {
        if (this.arbol.length > 0) {
            this.itemsSeleccionados = [];
            this.rama = -1;
            this.arbol.splice(1);
            this.arbol[0] = this.arbol[0].filter((it) => {
                if (campo == "estado") return it[campo] == valor;
                if (campo == "descripcion") return it[campo].toLowerCase().includes(valor.toLowerCase());
            });

            [].forEach.call(this.shadowRoot.querySelectorAll(".div-rama"), (element) => {
                element.style.animation = "fadeOutUp 2s";
            });
            setTimeout(this.update(), 1000);
        }
    }
    filtroSacar() {
        this.itemsSeleccionados = [];
        this.rama = -1;
        this.filtro = false;
        store.dispatch(getPlanesAll());
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
                store.dispatch(getTareasByPlanId(item.planId));
            } else {
                this.itemsSeleccionados[this.rama] = item;
                this.itemsSeleccionados.splice(this.rama + 1);
                if (this.rama == 0) {
                    this.arbol.splice(1);
                    store.dispatch(getTareasByPlanId(item.planId));
                } else {
                    this.arbol.splice(this.rama + 2);
                    this.update();
                }
            }
        }
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
                    this.itemsSeleccionados = [];
                    this.rama = -1;
                    this.filtro = false;
                    if (this.shadowRoot.getElementById("bus")) this.shadowRoot.getElementById("bus").value = "";
                    store.dispatch(getPlanesAll());
                }
                this.hidden = false;
            }
        }
        if (name == PLANES_OK) {
            this.itemsSeleccionados = [];
            this.rama = -1;
            this.filtro = false;
            this.arbol = [state.planes.all.entities];
            this.update();
        }
        if (name == PLANES_ERROR) {
            store.dispatch(showWarning("Error!", "No se pudo recuperar los amparos, intente nuevamente", "fondoError", 3000));
        }
        if (name == TAREAS_BY_PLAN_ID_OK) {
            let newRama = [];
            if (this.rama == 0) {
                newRama = armoTareas("0", state.tareas.byPlanId.entities);
            } else {
                newRama = armoTareas(this.itemsSeleccionados[this.rama].id, state.tareas.byPlanId.entities);
            }
            this.arbol.push(newRama);
            this.update();
        }
        if (name == TAREAS_BY_PLAN_ID_ERROR) {
            store.dispatch(showWarning("Error!", "No se pudo recuperar las tareas, intente nuevamente", "fondoError", 3000));
        }
        if (name == EVENTO_MOSTRAR_HIJOS) {
            this.clickNodo(state.eventos.mostrarHijos.nombreComponente);
            //store.dispatch(getTareasByPlanId(state.eventos.mostrarHijos.plan.id));
        }
        if (name == EVENTO_MOSTRAR_POPUP_PLANES) {
            store.dispatch(showPopup(1, state.eventos.mostrarPopupPlanes.registro, state.eventos.mostrarPopupPlanes.x + "px", state.eventos.mostrarPopupPlanes.y + "px"));
        }
        if (name == EVENTO_MOSTRAR_POPUP_TAREAS) {
            if (state.eventos.mostrarPopupTareas.registro?.tipo == "simple") {
                store.dispatch(showPopup(2, state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            } else {
                //store.dispatch(showPopup(3, state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
                store.dispatch(showPopup(2, state.eventos.mostrarPopupTareas.registro, state.eventos.mostrarPopupTareas.x + "px", state.eventos.mostrarPopupTareas.y + "px"));
            }
        }
        if (name == FILTRO_AMPAROS) {
            this.filtro = true;
            this.filtrar(state.entreComponentes.amparos_Filter01.campo, state.entreComponentes.amparos_Filter01.valor);
        }
        if (name == SACAR_FILTRO_AMPAROS || name == PLAN_ADD || name == PLAN_UPDATE) {
            this.itemsSeleccionados = [];
            this.rama = -1;
            this.filtro = false;
            store.dispatch(getPlanesAll());
        }
        if (name == TAREA_DAR_CUMPLIMIENTO_OK) {
            store.dispatch(showWarning("Atencion", "Se dio como cumplido la tarea", "fondoOk", 3000));
            store.dispatch(getPlanesAll());
        }
        if (name == TAREA_DAR_CUMPLIMIENTO_ERROR) {
            store.dispatch(showWarning("Error!", "No se pudo marcar como cumplido, intente nuevamente", "fondoError", 3000));
        }
        if (name == EVENTO_EJECUTAR_TAREA_DAR_CUMPLIMIENTO) {
            let body = {};
            body.tareaId = state.eventos.ejecutarTareaDarCumplimiento.idTarea;
            store.dispatch(
                tareaDarCumplimiento({
                    tareaId: "bc1ac6b7-a3e4-4aa9-b5ec-1cd86d45fd37",
                })
            );
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
