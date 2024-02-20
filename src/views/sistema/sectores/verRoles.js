/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../../redux/routing/actions";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { showWarning } from "../../../redux/ui/actions";
import { INFO } from "../../../../assets/icons/svgs";
import { dmdButton } from "../../css/dmdButton";
import { dmdInput } from "../../css/dmdInput";
import { dmdCheckbox } from "../../css/dmdCheckbox";

import { verUsuarios_Load01 } from "../../../redux/entreComponentes/actions";
import { verRoles__Load01 } from "../../../redux/entreComponentes/actions";

import { quitarRolIntegrante as quitarRol, asignarRolIntegrante as asignarRol } from "../../../redux/sectores/actions";
import { getAll as getAllSectores } from "../../../redux/sectores/actions";
import { getAllUsuarios } from "../../../redux/sectores/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const SHOW = "entreComponentes.verRoles__Load01.timeStamp";
const ADD_ROL = "sectores.asignarRolIntegrante.timeStamp";
const ADD_ROL_ERROR = "sectores.asignarRolIntegrante.errorTimeStamp";

const REMOVE_ROL = "sectores.quitarRolIntegrante.timeStamp";
const REMOVE_ROL_ERROR = "sectores.quitarRolIntegrante.errorTimeStamp";

const SECTORES_ALL = "sectores.all.timeStamp";
const SECTORES_ALL_ERROR = "sectores.all.errorTimeStamp";

export class verRoles extends connect(store, SECTORES_ALL, SECTORES_ALL_ERROR, REMOVE_ROL, REMOVE_ROL_ERROR, ADD_ROL, ADD_ROL_ERROR, SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.accion = "";
        this.item = {};
        this.sector = null;
        this.roles = [
            { rol: "administrador", esta: false },
            { rol: "supervisor", esta: false },
            { rol: "usuario", esta: false },
            { rol: "sin_permisos", esta: false },
        ];
    }
    static get styles() {
        return css`
            ${dmdButton}
            ${dmdInput}
			${dmdCheckbox}
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
                width: 60%;
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
                border-top: 1px solid var(--on-formulario-bajada);
                width: 100%;
            }
            #datos {
                display: grid;
                position: relative;
                height: 100%;
                grid-auto-flow: column;
                grid-gap: 1rem;
                overflow-y: auto;
                overflow-x: hidden;
                justify-self: center;
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
                cursor: pointer;
                color: var(--on-formulario);
            }
        `;
    }
    get _descripcion() {
        return this.shadowRoot.querySelector("#descripcion");
    }
    get _botonAceptar() {
        return this.shadowRoot.getElementById("btnAceptar");
    }

    firstUpdated() {
        super.firstUpdated();
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("")) {
        }
    }

    render() {
        return html`
            <div id="cuerpo">
                <div class="x" @click="${this.volver}">X</div>
                <div id="titulo" ?hidden=${this.accion != "add"}>Nuevo Sector</div>
                <div id="titulo" ?hidden=${this.accion != "view"}>Visualizacion del Sector</div>
                <div id="titulo" ?hidden=${this.accion != "edit"}>Roles de usuario: ${this.item?.nombre + " " + this.item?.apellido}</div>
                <hr />
                <div style="height:2rem"></div>
                <div id="datos">
                    ${this.roles.map((rol, index) => {
                        return html` <div class="dmd-checkbox" id="check" horizontal>
							<label class="dmd-checkbox-titulo"></label>
							<div class="dmd-checkbox-checkbox" tabindex="0">
								<label class="dmd-checkbox-label">${rol.rol}</label>
								<input type="checkbox" ?checked=${rol.esta} class="dmd-checkbox-check" .item=${rol} @change=${this.cambio} ></input>
							</div>
							<label class="dmd-checkbox-error"></label>
							<label class="dmd-checkbox-help"></label>
							${INFO}
						</div>`;
                    })}
                </div>
                <div style="height:4rem"></div>
            </div>
        `;
    }
    cambio(e) {
        let body = {};
        body.identificador = this.item.identificacion;
        body.sectorId = this.sector.id;
        body.rol = e.currentTarget.item.rol;
        if (e.currentTarget.checked) {
            store.dispatch(asignarRol(body));
        } else {
            store.dispatch(quitarRol(body));
        }
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.current = state.screen.name;
        }
        if (name == SHOW) {
            let ch = this.shadowRoot.querySelectorAll(".dmd-checkbox-check");
            ch.forEach((element) => (element.checked = false));
            this.item = state.entreComponentes.verRoles__Load01.item;
            this.sector = state.entreComponentes.verRoles__Load01.itemSector;
            this.accion = state.entreComponentes.verRoles__Load01.accion;
            this.roles.forEach((rol, index) => {
                this.item.roles.forEach((miRol) => {
                    if (rol.rol == miRol.nombre) {
                        ch[index].checked = true;
                        rol.esta = true;
                    }
                });
            });
            if (this.accion == "add") {
                //this._descripcion.value = "";
            } else if (this.accion == "edit") {
                //this._descripcion.value = this.item.descripcion;
            }
            this.hidden = false;
            this.update();
        }
        if ((name == ADD_ROL || name == REMOVE_ROL) && !this.hidden) {
            store.dispatch(showWarning("Atencion!", "El ROL se actulizo correctamente", "fondoOk", 1000));
            if (state.screen.name == "verSectores") {
                store.dispatch(getAllSectores());
            }
            if (state.screen.name == "abmUsuarios") {
                store.dispatch(getAllUsuarios());
            }
        }
        if ((name == ADD_ROL_ERROR || name == REMOVE_ROL_ERROR) && !this.hidden) {
            store.dispatch(showWarning("Atencion!", "El ROL no fue actulizado, intente nuevamente", "fondoError", 3000));
        }
        if (name == SECTORES_ALL && !this.hidden) {
            let nuevo = null;
            state.sectores.all.entities.forEach((item, index) => {
                if (item.id == this.sector) {
                    nuevo = item;
                }
            });
            if (nuevo) {
                store.dispatch(verUsuarios_Load01(nuevo.usuarios, nuevo, "abm"));
                store.dispatch(verRoles__Load01(nuevo.usuarios.roles, this.sector, "edit"));
            }
        }
        if (name == SECTORES_ALL_ERROR && !this.hidden) {
        }
    }
    volver() {
        this.hidden = true;
    }

    static get properties() {
        return {
            roles: {
                type: Object,
                reflect: true,
            },
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
window.customElements.define("ver-roles", verRoles);
