/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../../redux/routing/actions";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { showWarning } from "../../../redux/ui/actions";
import { INFO } from "../../../../assets/icons/svgs";
import { dateReturnForComponente } from "../../../libs/funciones";
import { dmdButton } from "../../css/dmdButton";
import { dmdInput } from "../../css/dmdInput";
import { dmdSelect } from "../../css/dmdSelect";

import { getAll as planGetAll, getById as planGetById, add as planAdd, update, remove as deletePlan } from "../../../redux/planes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PLAN_BY_ID = "planes.byId.timeStamp";
const PLAN_BY_ID_ERROR = "planes.byId.errorTimeStamp";
const PLAN_ADD = "planes.addTimeStamp";
const PLAN_UPDATE = "planes.updateTimeStamp";
const PLAN_ADD_ERROR = "planes.commandErrorTimeStamp";
const PLAN_DELETE = "planes.removeTimeStamp";

const I_SHOW = "entreComponentes.planCarga_Load01.timeStamp";

export class planCargaScreen extends connect(store, PLAN_DELETE, PLAN_ADD, PLAN_ADD_ERROR, PLAN_BY_ID, PLAN_BY_ID_ERROR, PLAN_UPDATE, I_SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.accion = "";
        this.item = {};
        this.plan_tarea = {};
        this.plan = {};
    }
    static get styles() {
        return css`
            ${dmdButton}
            ${dmdInput}
			${dmdSelect}
			:host {
                display: grid;
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 990;
            }
            :host([hidden]) {
                display: none;
            }
            #cuerpo {
                display: grid;
                position: relative;
                height: max-content;
                width: 100%;
                background-color: var(--formulario);
                grid-template-columns: 80%;
                grid-gap: 0rem;
                justify-content: center;
                align-content: flex-start;
                overflow-y: auto;
            }
            :host([media-size="large"]) #cuerpo {
                width: 40%;
                place-self: center;
                border-radius: 2rem;
            }
            #titulo {
                font-size: 1.2rem;
                padding-top: 2rem;
                height: 2rem;
                justify-self: center;
                color: var(--on-formulario);
            }
            hr {
                border-top: 1px solid var(--on-formulario-separador);
                width: 100%;
            }
            #datos {
                display: grid;
                position: relative;
                width: 90%;
                height: 100%;
                grid-auto-flow: row;
                grid-gap: 1rem;
                justify-self: center;
                overflow-y: auto;
            }
            #datos::-webkit-scrollbar {
                display: none;
            }
            .dmd-button {
                justify-self: center;
            }
            .x {
                display: grid;
                position: absolute;
                top: 1rem;
                right: 1rem;
                font-size: 1.2rem;
                color: var(--on-formulario);
                cursor: pointer;
            }
            *[hidden] {
                display: none;
            }
            svg {
                fill: var(--on-formulario);
            }
        `;
    }
    get _descripcion() {
        return this.shadowRoot.querySelector("#descripcion");
    }
    get _urlReferencia() {
        return this.shadowRoot.querySelector("#urlReferencia");
    }
    get _botonAceptar() {
        return this.shadowRoot.getElementById("btnAceptar");
    }
    firstUpdated() {
        super.firstUpdated();
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("mostrar")) {
        }
    }

    render() {
        if (true) {
            return html`
                <div id="cuerpo">
                    <div class="x" @click="${this.volver}">X</div>
                    <div id="titulo" ?hidden=${this.accion != "add"}>Nuevo Caso</div>
                    <div id="titulo" ?hidden=${this.accion != "view"}>Visualizacion del Caso</div>
                    <div id="titulo" ?hidden=${this.accion != "edit"}>Modificacion del Caso</div>
                    <div id="titulo" ?hidden=${this.accion != "delete"}>Eliminar del Caso</div>
                    <hr />
                    <div id="datos">
                        <div class="dmd-input" helper>
                            <label>Descripcion</label>
                            <textarea id="descripcion" placeholder="" value="" rows="5" ?disabled=${this.accion == "view" || this.accion == "delete"}></textarea>
                            <div>Debe ingresar una descripcion</div>
                            <span>Ingrese un texto</span>
                            ${INFO}
                        </div>

                        <div class="dmd-input" helper>
                            <label>Identificador del Caso</label>
                            <input type="text" id="urlReferencia" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${this.accion == "view" || this.accion == "delete"} />
                            <div>Debe ingresar el identificador</div>
                            <span>Ingrese un texto</span>
                            ${INFO}
                        </div>

                        <button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}" ?hidden=${this.accion == "view"}>Aceptar</button>
                        <div style="height:2rem"></div>
                    </div>
                </div>
            `;
        }
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.current = state.screen.name;
        }
        if (name == PLAN_BY_ID && state.screen.name == "amparos") {
            this.plan = state.planes.byId.entities;
            this._descripcion.value = this.plan.descripcion;
            this._urlReferencia.value = this.plan.urlReferencia;
            this.hidden = false;
            this.update();
        }
        if (name == PLAN_BY_ID_ERROR && state.screen.name == "amparos") {
            store.dispatch(showWarning("Atencion!", "No se puede mostrar el amparo, intente nuevamente", "fondoError", 3000));
        }
        if (name == PLAN_ADD && state.screen.name == "amparos") {
            this.hidden = true;
            store.dispatch(showWarning("Atencion!", "El amparo se actualizo", "fondoOk", 3000));
        }
        if (name == PLAN_UPDATE && state.screen.name == "amparos") {
            this.hidden = true;
            store.dispatch(showWarning("Atencion!", "El amparo se actualizo", "fondoOk", 3000));
        }
        if (name == PLAN_DELETE && state.screen.name == "amparos") {
            this.hidden = true;
            store.dispatch(planGetAll());
            store.dispatch(showWarning("Atencion!", "El amparo se actualizo", "fondoOk", 3000));
        }
        if (name == PLAN_ADD_ERROR && state.screen.name == "amparos") {
            store.dispatch(showWarning("Atencion!", "No se actualizo el amparo, intente nuevamente", "fondoError", 3000));
        }
        if (name == I_SHOW) {
            //this.plan_tarea = state.popup.show.item;
            this.plan_tarea = state.entreComponentes.planCarga_Load01.item;
            this.item = state.entreComponentes.planCarga_Load01.item;
            this.accion = state.entreComponentes.planCarga_Load01.accion;
            [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
                element.removeAttribute("error");
            });
            if (this.accion == "add") {
                this._descripcion.value = "";
                this._urlReferencia.value = "";
                this.plan = null;
                this.hidden = false;
            } else if (this.accion == "view") {
                store.dispatch(planGetById(this.plan_tarea.planId));
            } else if (this.accion == "edit") {
                store.dispatch(planGetById(this.plan_tarea.planId));
            } else if (this.accion == "delete") {
                store.dispatch(planGetById(this.plan_tarea.planId));
            }
        }
    }
    volver() {
        this.hidden = true;
    }
    grabar(e) {
        let mensageError = "";
        let boton = e.currentTarget;
        boton.disabled = true;
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
            element.removeAttribute("error");
        });
        var ok = true;

        if (this._descripcion.value == "") {
            ok = false;
            this._descripcion.setAttribute("error", "");
        }
        if (this._urlReferencia.value == "") {
            ok = false;
            this._urlReferencia.setAttribute("error", "");
        }
        boton.disabled = false;
        if (ok) {
            let body = {};
            body.urlReferencia = this._urlReferencia.value;
            body.descripcion = this._descripcion.value;
            if (this.accion == "edit") {
                body.id = this.plan_tarea.planId;
                store.dispatch(update(body));
            } else if (this.accion == "add") {
                store.dispatch(planAdd(body));
            } else if (this.accion == "delete") {
                body = {};
                body.planId = this.plan_tarea.planId;
                store.dispatch(deletePlan(body));
            }
        } else {
            if (mensageError == "") {
                mensageError = "Falta cargar campos.";
            }
            store.dispatch(showWarning("Atencion!", mensageError, "fondoError", 3000));
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
window.customElements.define("plan-carga-screen", planCargaScreen);
