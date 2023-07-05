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
import { uuidv4, validaMail } from "../../../libs/funciones";

import { sumarIntegrante as addUsuario, quitarIntegrante as deleteUsuario, getAll as getAllSectores, modificarIntegrante as modificarUsuario } from "../../../redux/sectores/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const SHOW = "entreComponentes.cargaUsuarios_Load01.timeStamp";

const ADD_USUARIO = "sectores.sumarIntegrante.timeStamp";
const ADD_USUARIO_ERROR = "sectores.sumarIntegrante.errorTimeStamp";
const MODIFICAR_USUARIO = "sectores.modificarIntegrante.timeStamp";
const MODIFICAR_USUARIO_ERROR = "sectores.modificarIntegrante.errorTimeStamp";
const DELETE_USUARIO = "sectores.quitarIntegrante.timeStamp";
const DELETE_USUARIO_ERROR = "sectores.quitarIntegrante.errorTimeStamp";

export class cargaUsuarios extends connect(store, MODIFICAR_USUARIO, MODIFICAR_USUARIO_ERROR, ADD_USUARIO, ADD_USUARIO_ERROR, DELETE_USUARIO, DELETE_USUARIO_ERROR, SHOW, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.accion = "";
		this.item = null;
		this.sector = null;
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
				cursor: pointer;
				color: var(--on-formulario);
			}
		`;
	}
	get _apellido() {
		return this.shadowRoot.querySelector("#apellido");
	}
	get _nombre() {
		return this.shadowRoot.querySelector("#nombre");
	}
	get _email() {
		return this.shadowRoot.querySelector("#email");
	}
	get _contacto() {
		return this.shadowRoot.querySelector("#contacto");
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
				<div id="titulo" ?hidden=${this.accion != "add"}>Nuevo Usuario</div>
				<div id="titulo" ?hidden=${this.accion != "view"}>Visualizacion del Usuario</div>
				<div id="titulo" ?hidden=${this.accion != "edit"}>Mofidicacion del Usuario</div>
				<div id="titulo" ?hidden=${this.accion != "delete"}>Eliminar Usuario</div>
				<hr />
				<div id="datos">
					<div class="dmd-input" helper>
						<label>Apellido</label>
						<input type="text" id="apellido" ?disabled=${this.accion == "view"} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el apellido</div>
						<span>Ingrese un texto</span>
						${INFO}
					</div>

					<div class="dmd-input" helper>
						<label>Nombre</label>
						<input type="text" id="nombre" ?disabled=${this.accion == "view"} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el nombre</div>
						<span>Ingrese un texto</span>
						${INFO}
					</div>

					<div class="dmd-input" helper>
						<label>Email</label>
						<input type="text" id="email" ?disabled=${this.accion == "view"} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el email</div>
						<span>Ingrese un texto</span>
						${INFO}
					</div>

					<div class="dmd-input" helper>
						<label>Contacto</label>
						<input type="text" id="contacto" ?disabled=${this.accion == "view"} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el contacto</div>
						<span>Ingrese datos para contactarse</span>
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
			this.item = state.entreComponentes.cargaUsuarios_Load01.item;
			this.sector = state.entreComponentes.cargaUsuarios_Load01.itemSector;
			this.accion = state.entreComponentes.cargaUsuarios_Load01.accion;
			if (this.accion == "add") {
				this._apellido.value = "";
				this._nombre.value = "";
				this._email.value = "";
				this._contacto.value = "";
			} else if (this.accion == "edit" || this.accion == "delete") {
				this._apellido.value = this.item.apellido;
				this._nombre.value = this.item.nombre;
				this._email.value = this.item.email;
				this._contacto.value = this.item.contacto;
			}
			this.hidden = false;
		}
		if ((name == ADD_USUARIO || name == MODIFICAR_USUARIO || name == DELETE_USUARIO) && !this.hidden) {
			store.dispatch(getAllSectores());
			store.dispatch(showWarning("Atencion!", "El sector se actulizo correctamente", "fondoOk", 3000));
			this.hidden = true;
		}
		if ((name == ADD_USUARIO_ERROR || name == MODIFICAR_USUARIO_ERROR || name == DELETE_USUARIO_ERROR) && !this.hidden) {
			store.dispatch(showWarning("Atencion!", "El usuario no fue actulizado, intente nuevamente", "fondoError", 3000));
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

		if (this._apellido.value == "") {
			ok = false;
			this._apellido.setAttribute("error", "");
		}
		if (this._nombre.value == "") {
			ok = false;
			this._nombre.setAttribute("error", "");
		}
		if (this._email.value == "" || !validaMail(this._email.value)) {
			ok = false;
			this._email.setAttribute("error", "");
		}
		if (this._contacto.value == "") {
			ok = false;
			this._contacto.setAttribute("error", "");
		}
		if (ok) {
			let body = {};
			body.apellido = this._apellido.value;
			body.nombre = this._nombre.value;
			body.email = this._email.value;
			body.contacto = this._contacto.value;
			body.identificador = uuidv4();
			body.sectorId = this.sector.id;
			if (this.accion == "add") {
				store.dispatch(addUsuario(body));
			} else if (this.accion == "edit") {
				body.identificador = this.item.identificacion;
				store.dispatch(modificarUsuario(body));
			} else if (this.accion == "delete") {
				body = {};
				body.identificador = this.item.identificacion;
				body.sectorId = this.sector.id;
				store.dispatch(deleteUsuario(body));
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
window.customElements.define("carga-usuarios", cargaUsuarios);
