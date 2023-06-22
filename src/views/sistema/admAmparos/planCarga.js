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

import { getById as planGetById, add as planAdd } from "../../../redux/planes/actions";

import { amparos_Filter01 } from "../../../redux/entreComponentes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PLAN_BY_ID = "planes.byId.timeStamp";
const PLAN_BY_ID_ERROR = "planes.byId.errorTimeStamp";
const PLAN_ADD = "planes.addTimeStamp";
const PLAN_ADD_ERROR = "planes.commandErrorTimeStamp";

const I_SHOW = "entreComponentes.planCarga_Load01.timeStamp";

export class planCargaScreen extends connect(store, PLAN_ADD, PLAN_ADD_ERROR, PLAN_BY_ID, PLAN_BY_ID_ERROR, I_SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				height: 90vh;
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
		`;
	}
	get _descripcion() {
		return this.shadowRoot.querySelector("#descripcion");
	}
	get _urlReferencia() {
		return this.shadowRoot.querySelector("#urlReferencia");
	}
	get _planControl() {
		return this.shadowRoot.getElementById("planControl");
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
					<div id="titulo" ?hidden=${this.accion != "add"}>Nuevo Plan</div>
					<div id="titulo" ?hidden=${this.accion != "view"}>Visualizacion del Plan</div>
					<div id="titulo" ?hidden=${this.accion != "edit"}>Mofidicacion del Plan</div>
					<hr />
					<div id="datos">
						<div class="dmd-input" helper ?hidden=${this.accion != "view"}>
							<label>Plan</label>
							<input type="text" id="planControl" autocomplete="off" autocomplete="off" placeholder="" value="" disabled />
							<div></div>
							<span></span>
							${INFO}
						</div>
						<div class="dmd-input" helper>
							<label>Descripcion</label>
							<textarea id="descripcion" placeholder="" value="" rows="5" ?disabled=${this.accion == "view"}></textarea>
							<div>Debe ingresar una descripcion</div>
							<span>Ingrese un texto</span>
							${INFO}
						</div>

						<div class="dmd-input" helper>
							<label>Link de acceso al amparo</label>
							<input type="text" id="urlReferencia" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${this.accion == "view"} />
							<div>Debe ingresar una URL</div>
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
			this._planControl.value = this.plan.id;
			this.hidden = false;
			this.update();
		}
		if (name == PLAN_BY_ID_ERROR && state.screen.name == "amparos") {
			store.dispatch(showWarning("Atencion!", "No se puede mostrar el amparo, intente nuevamente", "fondoError", 3000));
		}

		if (name == PLAN_ADD && state.screen.name == "amparos") {
			this.hidden = true;
			store.dispatch(showWarning("Atencion!", "El ampara de actualizo", "fondoOk", 3000));
		}
		if (name == PLAN_ADD_ERROR && state.screen.name == "amparos") {
			store.dispatch(showWarning("Atencion!", "No se actualizo el amparo el amparo, intente nuevamente", "fondoError", 3000));
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
				this._planControl.value = "";
				this.plan = null;
				this.hidden = false;
			} else if (this.accion == "view") {
				store.dispatch(planGetById(this.plan_tarea.planId));
			} else if (this.accion == "edit") {
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
			store.dispatch(planAdd(body));
			//store.dispatch(showWarning("Atencion!", "Se modifico el amparo", "fondoOk", 3000));
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
