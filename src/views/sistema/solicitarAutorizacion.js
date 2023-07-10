/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { INFO } from "../../../assets/icons/svgs";
import { dmdButton } from "../css/dmdButton";
import { dmdInput } from "../css/dmdInput";
import { dmdSelect } from "../css/dmdSelect";
import { validaMail } from "../../libs/funciones";

import { aceptarUsuario } from "../../redux/autorizacion/actions";

const ACEPTAR_USUARIO = "autorizacion.aceptarUsuario.timeStamp";
const ACEPTAR_USUARIO_ERROR = "autorizacion.aceptarUsuario.errorTimeStamp";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class solicitarAutorizacion extends connect(store, ACEPTAR_USUARIO, ACEPTAR_USUARIO_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				position: relative;
				height: 100%;
				width: 100vw;
				background-color: var(--formulario);
				align-content: flex-start;
				grid-auto-flow: row;
				gap: 0;
			}
			:host([hidden]) {
				display: none;
			}
			#titulo {
				padding-top: 0.5rem;
				justify-self: center;
				color: var(--on-formulario);
				font-size: var(--font-header-h1-size);
				font-weight: var(--font-header-h1-weight);
			}
			#sub-titulo {
				padding-top: 0.5rem;
				justify-self: center;
				color: var(--on-formulario);
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
			#cuerpo {
				display: grid;
				position: relative;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 60%;
				grid-auto-flow: row;
				justify-content: center;
				overflow-y: auto;
				grid-gap: 0.5rem;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60%;
				place-self: center;
				border-radius: 2rem;
			}

			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			.dmd-button {
				justify-self: center;
			}
		`;
	}
	get _usuario() {
		return this.shadowRoot.querySelector("#usuario");
	}
	get _apellido() {
		return this.shadowRoot.querySelector("#apellido");
	}
	get _nombre() {
		return this.shadowRoot.querySelector("#nombre");
	}
	get _sector() {
		return this.shadowRoot.querySelector("#sector");
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
			<div id="titulo">Autorizacion de Usuario</div>
			<div id="sub-titulo">Ingrese los datos faltantes, al administrador del sistema le enviará un mail autorizando su ingreso</div>
			<hr />
			<div id="cuerpo">
				<div class="dmd-input" helper>
					<label>Usuario</label>
					<input type="text" id="usuario" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el apellido</div>
					<span>Ingrese un texto</span>
					${INFO}
				</div>

				<div class="dmd-input" helper>
					<label>Apellido</label>
					<input type="text" id="apellido" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el apellido</div>
					<span>Ingrese un texto</span>
					${INFO}
				</div>

				<div class="dmd-input" helper>
					<label>Nombre</label>
					<input type="text" id="nombre" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el nombre</div>
					<span>Ingrese un texto</span>
					${INFO}
				</div>

				<div class="dmd-select" helper ?hidden=${this.accion == "edit"}>
					<label>Sector</label>
					<select id="sector">
						<option value="-1" disabled selected hidden>Seleccione opcion</option>
						${store.getState().sectores.all.entities
							? store.getState().sectores.all.entities.map((item, index) => {
									return html`<option value=${item.id}>${item.descripcion}</option> `;
							  })
							: ""}
					</select>
					<div>Debe cargar una opcion</div>
					<span>Seleccione un sector</span>
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
		`;
	}

	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-solicitarAutorizacion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				this._usuario.value = state.miPerfil.usuario;
				this._apellido.value = state.miPerfil.apellido;
				this._nombre.value = state.miPerfil.nombre;
				this.update();
			}
		}
		if (name == ACEPTAR_USUARIO) {
			store.dispatch(showWarning("Atencion!", "El Usuario fue actualizado correctamente", "fondoOk", 3000));
			store.dispatch(goTo("esperarAutorizacion"));
		}
		if (name == ACEPTAR_USUARIO_ERROR) {
			store.dispatch(showWarning("Error!", "No se pudo actualiza el usuario. Intente nuevamente", "fondoError", 3000));
		}
	}
	grabar(e) {
		let boton = e.currentTarget;
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		var ok = true;
		if (this._usuario.value == "") {
			ok = false;
			this._usuario.setAttribute("error", "");
		}
		if (this._apellido.value == "") {
			ok = false;
			this._apellido.setAttribute("error", "");
		}
		if (this._nombre.value == "") {
			ok = false;
			this._nombre.setAttribute("error", "");
		}
		if (this._sector.value == "-1") {
			ok = false;
			this._sector.setAttribute("error", "");
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
			body.rol = "usuario";
			body.sectorId = this._sector.value;
			//body.email = this._email.value;
			body.contacto = this._contacto.value;
			body.token = store.getState().autorizacion.tokenAutentication;
			store.dispatch(aceptarUsuario(body));
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
window.customElements.define("solicitar-autorizacion", solicitarAutorizacion);
