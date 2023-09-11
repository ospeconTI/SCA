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
import { aceptarUsuario, autorizacion, getPerfil } from "../../redux/autorizacion/actions";
import { modificarIntegrante, sumarIntegrante } from "../../redux/sectores/actions";
import { parseJwt, uuidv4, validaMail } from "../../libs/funciones";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ADD_USUARIO = "sectores.sumarIntegrante.timeStamp";
const ADD_USUARIO_ERROR = "sectores.sumarIntegrante.errorTimeStamp";
const PERFIL = "autorizacion.perfilTimeStamp";
const UPDATE_USUARIO = "sectores.modificarIntegrante.timeStamp";

export class miPerfil extends connect(store, MEDIA_CHANGE, SCREEN, ADD_USUARIO, ADD_USUARIO_ERROR, PERFIL, UPDATE_USUARIO)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.usuario = { sectores: [] };
        this.sectores = [];
        this.agregando = false;
        this.modificando = false;
        this.validaciones = { mail: true, sector: true };
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
                grid-template-columns: 5rem 5rem 5rem 20rem 15rem 2.5rem;
                align-content: start;
                grid-template-rows: 3rem;
            }
            .lista {
                height: 30vh;
                overflow-y: auto;
                align-content: start;
                grid-template-rows: 3rem;
            }
            .separador {
                border-top: 1px solid var(--on-formulario-disabled);
                margin: 1rem 0 1rem 0;
            }
            button[big] svg {
                height: 1.8rem;
                width: 1.8rem;
            }
            button {
                padding: 0.2rem !important;
            }
            .estado {
                color: var(--cumplido);
            }
            .estado[pendiente] {
                color: var(--alertado);
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
                        <label>Estado</label>
                        <label>Sector</label>
                        <label>Resp.</label>
                        <label>Email</label>
                        <label>Contacto</label>
                        <button flat action big @click="${this.addOrCancel}">${this.agregando || this.modificando ? CANCEL : MAS}</button>
                    </div>

                    <div class="inner-grid column sectores nuevo" ?oculto=${!this.agregando}>
                        <div class="estado" pendiente>pendiente</div>
                        <div class="select" ?error=${!this.validaciones.sector}>
                            <select
                                id="sector"
                                required
                                @change="${(e) => {
                                    this.validaciones.sector = e.currentTarget.value != "";
                                    this.update();
                                }}"
                            >
                                <option value="" disabled selected>Selecciona una opción</option>
                                ${this.sectores.map((sec) => {
                                    return html`<option value="${sec.id}">${sec.descripcion}</option>`;
                                })}
                            </select>
                            <label error>es requerido</label>
                        </div>
                        <div>No</div>
                        <div class="input" ?error="${!this.validaciones.mail}">
                            <input type="email" id="email" @change="${this.validaMailAlta}" />
                            <label error>Debe ingresar un mail válido</label>
                        </div>
                        <div class="input">
                            <input type="text" id="contacto" />
                        </div>

                        <button flat action big @click="${this.guardarNuevo}">${DONE}</button>
                    </div>
                    <div class="inner-grid lista">
                        ${this.usuario.sectores.map((sector) => {
                            return html`<div class="inner-grid column sectores" .sector="${sector}">
                                <div class="estado" ?pendiente="${!sector.token}">${sector.token ? "activo" : "pendiente"}</div>
                                <div>${sector.descripcion}</div>
                                <div>${sector.esResponsable ? "Si" : "No"}</div>
                                <div class="input" ?error="${sector.mailInvalido}">
                                    <input type="email" email .value="${sector.email}" .item="${sector}" @input=${this.editando} @change="${this.validaMailModificacion}" />
                                    <label error>Debe ingresar un mail válido</label>
                                </div>
                                <div class="input">
                                    <input type="text" contacto .value="${sector.contacto}" @input=${this.editando} />
                                </div>

                                <button flat action big .item=${sector} .disabled="${!sector.modificando}" @click="${this.guardarModificado}">${sector.modificando ? DONE : ""}</button>
                            </div>`;
                        })}
                    </div>
                </div>
            </div>
        `;
    }
    validaMailAlta(e) {
        this.validaciones.mail = this.validarMail(e.currentTarget.value);
        this.update();
    }
    validaMailModificacion(e) {
        e.currentTarget.item.mailInvalido = !this.validarMail(e.currentTarget.value);
        this.update();
    }

    validarMail(mail) {
        return mail && validaMail(mail);
    }

    esFormularioValido(accion, item, form) {
        let valido = true;

        if (accion == "alta") {
            if (!item.sectorId) {
                valido = false;
                this.validaciones.sector = valido;
            }

            if (!this.validarMail(item.email)) {
                valido = false;
                this.validaciones.mail = valido;
            }
        }

        if (accion == "modificacion") {
            if (!this.validarMail(item.email)) {
                valido = false;
                form.item.mailInvalido = !valido;
            }
        }

        this.update();

        return valido;
    }
    guardarNuevo(e) {
        const profile = parseJwt(store.getState().autorizacion.tokenAutentication);
        let body = {};
        body.apellido = this.usuario.apellido;
        body.nombre = this.usuario.nombre;
        body.sectorId = this.shadowRoot.querySelector("#sector").value;
        body.email = this.shadowRoot.querySelector("#email").value;
        body.contacto = this.shadowRoot.querySelector("#contacto").value;
        body.roles = [
            {
                nombre: "usuario",
                id: 1,
            },
        ];
        body.identificador = profile.nameid;

        if (!this.esFormularioValido("alta", body)) return;

        store.dispatch(sumarIntegrante(body));
    }

    guardarModificado(e) {
        const profile = parseJwt(store.getState().autorizacion.tokenAutentication);
        const body = {
            apellido: profile.family_name,
            nombre: profile.given_name,
            sectorId: e.currentTarget.item.id,
            email: e.currentTarget.parentElement.querySelector("input[email]").value,
            identificador: profile.nameid,
            contacto: e.currentTarget.parentElement.querySelector("input[contacto]").value,
        };

        if (!this.esFormularioValido("modificacion", body, e.currentTarget)) return;

        store.dispatch(modificarIntegrante(body));
    }
    addOrCancel(e) {
        // cancela
        if (this.agregando || this.modificando) {
            this.modificando = false;
            this.agregando = false;
            this.validaciones.mail = true;
            this.usuario.sectores.forEach((sec) => {
                sec.modificando = false;
                sec.mailInvalido = false;
            });

            //hacer undo a valores originales
            const sectoresDelUsuario = this.usuario.sectores;
            this.usuario.sectores = [];
            this.update();
            this.usuario.sectores = sectoresDelUsuario;
            this.update();
            return;
        }
        //add
        this.shadowRoot.querySelector("#sector").value = "";
        this.shadowRoot.querySelector("#email").value = "";
        this.shadowRoot.querySelector("#contacto").value = "";
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
                this.usuario = state.autorizacion.entities.result;
                this.sectores = state.sectores.all.entities;
                this.update();
            }
        }
        if (name == ADD_USUARIO) {
            store.dispatch(showWarning("Atencion!", "El perfil se actulizo correctamente", "fondoOk", 3000));
            store.dispatch(getPerfil(state.autorizacion.tokenAutentication));
            this.agregando = false;
        }
        if (name == UPDATE_USUARIO) {
            store.dispatch(getPerfil(state.autorizacion.tokenAutentication));
            this.modificando = false;
            this.update();
        }
        if (name == ADD_USUARIO_ERROR) {
            store.dispatch(showWarning("Atencion!", state.sectores.sumarIntegrante.message, "fondoError", 3000));
        }
        if (name == PERFIL) {
            this.usuario = state.autorizacion.entities.result;
            this.update();
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
            validaciones: {
                type: Object,
            },
        };
    }
}
window.customElements.define("mi-perfil", miPerfil);
