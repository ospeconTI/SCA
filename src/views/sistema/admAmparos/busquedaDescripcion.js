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
import { dmdSelect } from "../../css/dmdSelect";

import { amparos_Filter01, amparos_Filter02 } from "../../../redux/entreComponentes/actions";

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
				color: var(--on-formulario);
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
	get _sector() {
		return this.shadowRoot.querySelector("#sector");
	}
	get _botonAceptar() {
		return this.shadowRoot.getElementById("btnAceptar");
	}

	firstUpdated() {
		super.firstUpdated();
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("hidden")) {
			if (!this.hidden) {
				if (this._sector) this._sector.value = "-1";
			}
		}
	}

	render() {
		if (this.item) {
			return html`
				<div id="cuerpo">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo">${this.item.titulo}</div>
					<hr />
					<div id="datos">
						${this.item.campo != "creador" && this.item.campo != "ejecutor"
							? html` <div class="dmd-input" helper>
									<label>${this.item.caption}</label>
									<input type="text" id="descripcion" autocomplete="off" autocomplete="off" placeholder="" value="" />
									<div>Debe ingresar el dato a buscar</div>
									<span>Ingrese el dato a buscars</span>
									${INFO}
							  </div>`
							: html` <div class="dmd-select" helper }>
									<label>${this.item.caption}</label>
									<select id="sector">
										<!-- <option value="TODOS" selected>Todos los sectores</option> -->
										<option value="-1" disabled selected hidden>Seleccione opcion</option>
										${store.getState().sectores.all.entities
											? store.getState().sectores.all.entities.map((item, index) => {
													return html`<option value=${item.descripcion}>${item.descripcion}</option> `;
											  })
											: ""}
									</select>
									<div>Debe cargar una opcion</div>
									<span>Seleccione un sector</span>
									${INFO}
							  </div>`}
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
			this.item = state.entreComponentes.busqueDescripcion_Load01.descripciones;
			this.accion = state.entreComponentes.busqueDescripcion_Load01.accion;

			[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
				element.removeAttribute("error");
			});
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
		var ok = true;
		let valor = "";
		if (this.item.campo != "creador" && this.item.campo != "ejecutor") {
			if (this._descripcion.value == "") {
				ok = false;
				this._descripcion.setAttribute("error", "");
			}
			valor = this._descripcion.value;
		} else {
			if (this._sector.value == "-1") {
				ok = false;
				this._sector.setAttribute("error", "");
			} else {
				valor = this._sector.value;
			}
		}
		boton.disabled = false;
		if (ok) {
			if (this.item.campo != "creador" && this.item.campo != "ejecutor") {
				store.dispatch(amparos_Filter01(this.item.campo, valor));
			} else {
				store.dispatch(amparos_Filter02(this.item.campo, valor));
			}
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
