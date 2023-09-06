/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { input } from "@brunomon/template-lit/src/views/css/input";
import { select } from "@brunomon/template-lit/src/views/css/select";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { ADD, CANCEL, MAS, DONE } from "../../../assets/icons/svgs";
import { IMAGES } from "../../../assets/images/images";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class miPerfil extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.usuario = { sectores: [] };
        this.sectores = [];
        this.agregando = false;
        this.modificando = false;
    }
    static get styles() {
        return css`
            ${gridLayout}
            ${input}
			${button}
			${select}
            :host {
                display: grid;
                background-color: var(--aplicacion);
                place-content: center;
            }
            :host([hidden]) {
                display: none;
            }
            *[hidden] {
                display: none;
            }
            *[oculto] {
                opacity: 0 !important;
                height: 0px !important;
                z-index: -1 !important;
            }
            .nuevo {
                height: 3rem;
                opacity: 1;
                z-index: 0;
                transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }
            .card {
                background-color: var(--formulario);
                color: var(--on-formulario);
                gap: 1rem;
                padding: 2rem;
                width: 80vw;
            }
            .card label {
                color: var(--on-formulario-bajada);
                font-size: var(--font-header-h1-menos-size);
            }
            .sectores {
                justify-content: center;
                grid-template-columns: 5rem 5rem 20rem 15rem 2.5rem;
            }
            .lista {
                height: 30vh;
                overflow-y: auto;
                align-content: start;
            }
            .separador {
                border-top: 1px solid var(--on-formulario-disabled);
                margin: 1rem 0 1rem 0;
            }
            button[big] svg {
                height: 2rem;
                width: 2rem;
            }
            button {
                padding: 0.2rem !important;
            }
        `;
    }
    render() {
        return html`
            <div class="grid card">
                <h2>Mi Perfil</h2>
                <div class="inner-grid column">
                    <div class="inner-grid">
                        <label>Usuario</label>
                        <div>${this.usuario.usuario}</div>
                    </div>
                    <div class="inner-grid">
                        <label>Apellido</label>
                        <div>${this.usuario.apellido}</div>
                    </div>
                    <div class="inner-grid">
                        <label>Nombre</label>
                        <div>${this.usuario.nombre}</div>
                    </div>
                </div>

                <div class="separador"></div>

                <div class="inner-grid">
                    <div class="inner-grid column sectores">
                        <label>Sector</label>
                        <label>Resp.</label>
                        <label>Email</label>
                        <label>Contacto</label>
                        <button flat action big @click="${this.addOrCancel}">${this.agregando || this.modificando ? CANCEL : MAS}</button>
                    </div>

                    <div class="inner-grid column sectores nuevo" ?oculto=${!this.agregando}>
                        <div class="select">
                            <select id="sector" required>
                                <option value="" disabled selected>Selecciona una opción</option>
                                ${this.sectores.map((sec) => {
                                    return html`<option value="${sec.id}">${sec.descripcion}</option>`;
                                })}
                            </select>
                        </div>
                        <div class="select">
                            <select id="responsable" required>
                                <option value="S">Si</option>
                                <option value="N">No</option>
                            </select>
                        </div>

                        <div class="input">
                            <input type="email" id="email" />
                        </div>
                        <div class="input">
                            <input type="text" id="contacto" />
                        </div>

                        <button flat action big @click="${this.guardarNuevo}">${DONE}</button>
                    </div>
                    <div class="inner-grid lista">
                        ${this.usuario.sectores.map((sector) => {
                            return html`<div class="inner-grid column sectores" .sector="${sector}">
                                <div>${sector.descripcion}</div>
                                <div>${sector.esResponsable ? "Si" : "No"}</div>
                                <div class="input">
                                    <input type="email" email .value="${sector.email}" @input=${this.editando} />
                                </div>
                                <div class="input">
                                    <input type="text" contacto .value="${sector.contacto}" @input=${this.editando} />
                                </div>

                                <button flat action big .item=${sector} .disabled="${!sector.modificando}" @click="${this.guardarModificado}">${DONE}</button>
                            </div>`;
                        })}
                    </div>
                </div>
            </div>
        `;
    }
    guardarNuevo(e) {
        const sector = this.shadowRoot.querySelector("#sector").value;
        const responsable = this.shadowRoot.querySelector("#responsable").value;
        const email = this.shadowRoot.querySelector("#email").value;
        const contacto = this.shadowRoot.querySelector("#contacto").value;
        console.log(sector + " " + responsable + " " + email + " " + contacto);
        this.agregando = false;
    }
    guardarModificado(e) {
        const item = e.currentTarget.item;
        item.email = e.currentTarget.parentElement.querySelector("input[email]").value;
        item.contacto = e.currentTarget.parentElement.querySelector("input[contacto]").value;
        console.log(item);
        item.modificando = false;
        this.modificando = false;
    }
    addOrCancel(e) {
        // cancela
        if (this.agregando || this.modificando) {
            this.modificando = false;
            this.agregando = false;
            this.usuario.sectores.forEach((sec) => (sec.modificando = false));

            //hacer undo a valores originales
            const sectoresDelUsuario = this.usuario.sectores;
            this.usuario.sectores = [];
            this.update();
            this.usuario.sectores = sectoresDelUsuario;
            this.update();
            return;
        }
        //add
        this.agregando = true;
        return;
    }
    editando(e) {
        let padre = e.currentTarget.parentElement;
        while (padre) {
            if (padre.sector) {
                padre.sector.modificando = true;
                break;
            } else {
                padre = padre.parentElement;
            }
        }

        e.currentTarget.parentElement.parentElement.sector.modificando = true;
        this.modificando = true;
        this.update();
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-miPerfil-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                this.usuario = store.getState().autorizacion.entities.result;
                this.sectores = store.getState().sectores.all.entities;
                this.update();
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
            usuario: {
                type: Object,
            },
            sectores: {
                type: Array,
            },
            agregando: {
                type: Boolean,
            },
            modificando: {
                type: Boolean,
            },
        };
    }
}
window.customElements.define("mi-perfil", miPerfil);
