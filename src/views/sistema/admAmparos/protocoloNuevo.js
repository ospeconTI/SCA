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
import { nuevo } from "../../../redux/protocolos/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PROTOCOLO_NUEVO = "protocolos.nuevoTimeStamp";
const I_SHOW = "entreComponentes.protocolo_nuevo.timeStamp";

export class protocoloNuevoScreen extends connect(store, PROTOCOLO_NUEVO, I_SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.accion = "";
        this.item = {};
        this.nombre = "";
    }
    static get styles() {
        return css`
            ${dmdButton}
            ${dmdInput}
			${dmdSelect}
			:host {
                display: grid;
            }
            :host([hidden]) {
                display: none;
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
            #cuerpo {
                display: grid;
                background-color: var(--formulario);
                justify-content: center;
                align-content: flex-start;
                border: none;
            }
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("mostrar")) {
        }
    }

    render() {
        return html`
            <dialog id="cuerpo">
                <div class="x" @click="${this.volver}">X</div>
                <div id="titulo">Nuevo Protocolo</div>
                <hr />
                <div id="datos">
                    <div class="dmd-input" helper>
                        <label>Nombre</label>
                        <input type="text" id="nombre" autocomplete="off" autocomplete="off" placeholder="" .value="${this.nombre}" @change="${(e) => (this.nombre = e.currentTarget.value)}" />
                        <div>Debe ingresar el nombre</div>
                        <span>debe ser único</span>
                    </div>

                    <button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Crear</button>
                </div>
            </dialog>
        `;
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.current = state.screen.name;
        }

        if (name == I_SHOW) {
            this.hidden = false;
            this.item = state.entreComponentes.protocolo_nuevo.item;
            this.accion = state.entreComponentes.protocolo_nuevo.accion;
            this.nombre = "";
            this.shadowRoot.querySelector("#nombre").focus();
            this.shadowRoot.querySelector("#cuerpo").showModal();
        }
        if (name == PROTOCOLO_NUEVO) {
            this.volver();
        }
    }
    volver() {
        this.hidden = true;
        this.shadowRoot.querySelector("#cuerpo").close();
    }
    grabar(e) {
        let item = store.getState().entreComponentes.protocolo_nuevo.item;
        if (item.clase == "plan") {
            store.dispatch(nuevo(this.nombre, null, item.id));
        } else {
            store.dispatch(nuevo(this.nombre, item.planId, item.id));
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
            nombre: {
                type: String,
                reflect: true,
            },
        };
    }
}
window.customElements.define("protocolo-nuevo-screen", protocoloNuevoScreen);
