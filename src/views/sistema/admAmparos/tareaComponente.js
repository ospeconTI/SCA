/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { TRESPUNTOS, PERSON_OUTLINED, PERSON_ADD, PERSON_LIST } from "../../../../assets/icons/svgs";

import { dateToFrench } from "../../../libs/funciones";

import { mostrarHijos, mostrarPopupTareas } from "../../../redux/eventos/actions";
import { tareaCarga_Load01 as mostrarTareaCarga, verUsuarios_Load01 as verUsuarios } from "../../../redux/entreComponentes/actions";
import { getById as sectorGetById } from "../../../redux/sectores/actions";
import { animaciones } from "../../css/animaciones";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const SECTOR_BY_ID = "sectores.byId.timeStamp";
const SECTOR_BY_ID_ERROR = "sectores.byId.errorTimeStamp";

export class tareaComponente extends connect(store, SECTOR_BY_ID, SECTOR_BY_ID_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.expandido = false;
	}
	static get styles() {
		return css`
			${animaciones}
			:host {
				display: grid;
				position: relative;
				background-color: var(--formulario);
				animation: fadeIn 1s;
			}
			:host::-webkit-scrollbar {
				display: none;
			}
			.div-etiqueta {
				display: grid;
				height: 9rem;
				width: 22rem;
				grid-template-columns: 0.8rem 1fr;
				grid-gap: 0;
				border: solid var(--on-formulario-bajada) 1px;
				align-content: center;
				padding: 0;
				border-radius: 4px;
				border: solid 1px var(--formulario);
			}
			.div-etiqueta[cursorpointer] {
				/* cursor: pointer; */
			}
			.div-etiqueta[seleccionado] {
				background-color: var(--aplicacion);
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
				border: solid 1px var(--terciario);
			}
			svg {
				cursor: pointer;
			}
			.estado {
				height: inherit;
				width: 0.5rem;
				align-self: center;
				border-radius: 3px 0 0 3px;
			}
			.estado[cumplido] {
				background-color: var(--cumplido);
			}
			.estado[alertado] {
				background-color: var(--alertado);
			}
			.estado[vencida] {
				background-color: var(--vencido);
			}
			.estado[pendiente] {
				background-color: var(--pendiente);
			}
			.estado[vigente] {
				background-color: var(--vigente);
			}
			.estado[anulada] {
				background-color: var(--anulado);
			}
			.estado[pausada] {
				background-color: var(--pausado);
			}
			.div-cuerpo {
				display: grid;
				grid-template-rows: 1fr 1fr 1fr 3.5fr 2fr;
			}
			.lineas {
				display: grid;
				grid-template-columns: 1fr auto;
				font-family: var(--font-header-h2-family);
				font-size: var(--font-header-h2-size);
				font-weight: 300;
				color: var(--on-formulario);
				align-self: center;
				border-bottom: solid 0.5px var(--on-formulario-bajada);
			}
			.div-linea-dos {
				padding-right: 0.5rem;
			}
			#textarea-titulo {
				font-family: var(font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
				background-color: transparent;
				color: var(--on-formulario);
				border: 0;
				box-shadow: none;
				padding: 0.2rem 0.1rem;
				cursor: default;
				resize: none;
			}
			#textarea-titulo::-webkit-scrollbar {
				display: none;
			}
			#textarea-titulo:focus {
				outline: none !important;
				border: none;
			}
			#div-botonera {
				display: grid;
				grid-template-columns: auto 1fr 1.2rem 1.4rem 1rem;
				align-items: center;
				gap: 0.6rem;
				padding-left: 0.4rem;
			}
			.btn {
				font-family: var(font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
				border-radius: 0.5rem;
				width: max-content;
				justify-self: start;
				background-color: var(--formulario);
				color: var(--on-formulario);
				border: solid var(--on-formulario) 1px;
				height: fit-content;
				cursor: pointer;
			}
			#div-menu {
				display: grid;
				justify-content: right;
			}
			.div-imagen {
				display: grid;
				align-content: center;
			}
			*[invisible] {
				visibility: hidden;
			}
			svg {
				fill: var(--on-formulario);
			}
		`;
	}
	firstUpdated() {
		super.firstUpdated();
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("registro")) {
			this.expandido = false;
			if (this.registro?.hijo && this.registroseleccionado?.id == this.registro?.id) {
				this.expandido = true;
			}
		}
		if (changedProperties.has("registroseleccionado")) {
			this.expandido = false;
			if (this.registro?.hijo && this.registroseleccionado?.id == this.registro?.id) {
				this.expandido = true;
			}
		}
	}
	render() {
		if (this.registro) {
			return html`
				<div class="div-etiqueta" ?cursorpointer=${this.registro.hijo} ?seleccionado=${this.registroseleccionado && this.registroseleccionado.id == this.registro.id}>
					<div class="estado" ?cumplido=${this.registro.estado == "cumplida"} ?alertado=${this.registro.estado == "alerta"} ?vencida=${this.registro.estado == "vencida"} ?pendiente=${this.registro.estado == "pendiente"} ?vigente=${this.registro.estado == "vigente"} ?pausada=${this.registro.estado == "pausada"} ?anulada=${this.registro.estado == "anualada"}></div>
					<div class="div-cuerpo">
						<div class="lineas">
							<div id="div-dequien">${"De:" + dateToFrench(this.registro.vigenteDesde) + " " + this.registro.creador.descripcion}</div>
							<div class="div-linea-dos">${this.registro.esPorLapso ? "POR LAPSO" : this.registro.tipo.toUpperCase()}</div>
						</div>
						<div class="lineas">
							<div id="div-aquien">${"A: " + this.registro.ejecutor.descripcion}</div>
							<div class="div-linea-dos">${(this.registro.conTareas ? "Vencia: " : "Vence: ") + dateToFrench(this.registro.vencimiento)}</div>
						</div>
						<div class="lineas">
							<div id="div-avisar">${(this.registro.conTareas ? "Avisaba: " : "Avisar: ") + dateToFrench(this.registro.alerta)}</div>
							<div class="div-linea-dos">${this.registro.cumplidaEl ? "Cumplida: " + dateToFrench(this.registro.cumplidaEl) : ""}</div>
						</div>
						<textarea id="textarea-titulo" readonly>${this.registro.descripcion}</textarea>
						<div id="div-botonera">
							<button class="btn" @click="${this.verTarea}" title="Ver el detlle de la tarea">TAREA</button>
							<button class="btn" @click="${this.mostrarTareas}" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id != this.registro.id ? "MOSTRAR" : "OCULTAR"} TAREAS</button>
							<div id="div-menu" @click="${this.verUsuariosCreador}" title="Usuario que genero la tarea">${PERSON_ADD}</div>
							<div id="div-menu" @click="${this.verUsuariosEjecutor}" title="Usuarios asignados para la tarea">${PERSON_LIST}</div>
							<div id="div-menu" @click="${this.popup}" title="Menu de opciones">${TRESPUNTOS}</div>
						</div>
					</div>
				</div>
			`;
		}
	}
	popup(e) {
		// this.id: El nombre del componente (propiedad id)
		store.dispatch(mostrarPopupTareas(this.registro, this.id, e.clientX, e.clientY));
	}
	verTarea(e) {
		store.dispatch(mostrarTareaCarga(this.registro, "view"));
	}
	verUsuariosCreador(e) {
		store.dispatch(sectorGetById(this.registro.creador.id));
	}
	verUsuariosEjecutor(e) {
		store.dispatch(sectorGetById(this.registro.ejecutor.id));
	}
	mostrarTareas(e) {
		e.preventDefault();
		e.stopPropagation();
		// this.id: El nombre del componente (propiedad id)
		store.dispatch(mostrarHijos(this.registro, this.id));
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.update();
		}
		if (name == SECTOR_BY_ID) {
			store.dispatch(verUsuarios(state.sectores.byId.entities.usuarios, state.sectores.byId.entities, "view"));
		}
		if (name == SECTOR_BY_ID_ERROR) {
			store.dispatch(showWarning("Error!", "No se pudo recuperar los usuarios, intente nuevamente", "fondoError", 3000));
		}
	}

	static get properties() {
		return {
			registro: {
				type: Object,
				reflect: true,
				attribute: "registro",
			},
			expandido: {
				type: Boolean,
				reflect: true,
				attribute: "expandido",
			},
			registroseleccionado: {
				type: Object,
				reflect: true,
				attribute: "registroseleccionado",
			},
		};
	}
}
window.customElements.define("tarea-componente", tareaComponente);
