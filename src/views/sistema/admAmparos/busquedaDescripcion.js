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

import { amparos_Filter01 } from "../../../redux/entreComponentes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const I_SHOW = "entreComponentes.busqueDescripcion_Load01.timeStamp";

export class busquedaDescripcionScreen extends connect(store, I_SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				width: 40%;
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
				color: var(--on-formulario);
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
		if (changedProperties.has("mostrar")) {
		}
	}

	render() {
		if (true) {
			return html`
				<div id="cuerpo">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo">Busqueda por descripcion</div>
					<hr />
					<div id="datos">
						<div class="dmd-input" helper>
							<label>Descripcion a buscar</label>
							<input type="text" id="descripcion" autocomplete="off" autocomplete="off" placeholder="" value="" />
							<div>Debe la descripcion a buscar</div>
							<span>Ingrese un texto</span>
							${INFO}
						</div>

						<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Aceptar</button>
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
		if (name == I_SHOW) {
			this.item = state.entreComponentes.busqueDescripcion_Load01.item;
			this.accion = state.entreComponentes.busqueDescripcion_Load01.accion;
			[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
				element.removeAttribute("error");
			});
			if (this.item) {
				this._descripcion.value = this.item.descripcion;
			} else {
				this._descripcion.value = "";
			}
			this.hidden = false;
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
		let descripcion = this._descripcion;
		var ok = true;

		if (descripcion.value == "") {
			ok = false;
			descripcion.setAttribute("error", "");
		}
		boton.disabled = false;
		if (ok) {
			store.dispatch(amparos_Filter01("descripcion", this._descripcion.value));
			this.hidden = true;
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
window.customElements.define("busqueda-descripcion-screen", busquedaDescripcionScreen);
