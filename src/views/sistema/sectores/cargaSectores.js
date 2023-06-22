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

import { add as addSector, update as updateSector, getAll as getAllSectores } from "../../../redux/sectores/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const SHOW = "entreComponentes.cargaSectores_Load01.timeStamp";
const ADD_SECTOR = "sectores.addTimeStamp";
const ADD_SECTOR_ERROR = "sectores.commandErrorTimeStamp";

const PATCH_SECTOR = "sectores.updateTimeStamp";
const PATCH_SECTOR_ERROR = "sectores.commandErrorTimeStamp";

export class cargaSectores extends connect(store, PATCH_SECTOR, PATCH_SECTOR_ERROR, ADD_SECTOR, ADD_SECTOR_ERROR, SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.accion = "";
		this.item = {};
	}
	static get styles() {
		return css`
			${dmdButton}
			${dmdInput}
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
			}
			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
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
				color: var(--negro);
				cursor: pointer;
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
				<div id="titulo" ?hidden=${this.accion != "edit"}>Mofidicacion del Sector</div>
				<hr />
				<div id="datos">
					<div class="dmd-input" helper>
						<label>Nombre del sector</label>
						<input type="text" id="descripcion" autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el nombre del sector</div>
						<span>Ingrese un texto</span>
						${INFO}
					</div>

					<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Aceptar</button>
					<div style="height:2rem"></div>
				</div>
			</div>
		`;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.current = state.screen.name;
		}
		if (name == SHOW) {
			this.item = state.entreComponentes.cargaSectores_Load01.item;
			this.accion = state.entreComponentes.cargaSectores_Load01.accion;
			if (this.accion == "add") {
				this._descripcion.value = "";
			} else if (this.accion == "edit") {
				this._descripcion.value = this.item.descripcion;
			}
			this.hidden = false;
		}
		if ((name == ADD_SECTOR || name == PATCH_SECTOR) && !this.hidden) {
			store.dispatch(getAllSectores());
			store.dispatch(showWarning("Atencion!", "El sector se actulizo correctamente", "fondoOk", 3000));
			this.hidden = true;
		}
		if ((name == ADD_SECTOR_ERROR || name == PATCH_SECTOR_ERROR) && !this.hidden) {
			store.dispatch(showWarning("Atencion!", "El sector no fue actulizado, intente nuevamente", "fondoError", 3000));
		}
	}
	volver() {
		this.hidden = true;
	}
	grabar(e) {
		let boton = e.currentTarget;
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		var ok = true;

		if (this._descripcion.value == "") {
			ok = false;
			this._descripcion.setAttribute("error", "");
		}
		if (ok) {
			let body = {};
			body.descripcion = this._descripcion.value;
			if (this.accion == "add") {
				store.dispatch(addSector(body));
			} else if (this.accion == "edit") {
				body.id = this.item.id;
				store.dispatch(updateSector(null, body));
			}
		} else {
			boton.disabled = false;
			store.dispatch(showWarning("Atencion!", "Falta cargar campos.", "fondoError", 3000));
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
window.customElements.define("carga-sectores", cargaSectores);
