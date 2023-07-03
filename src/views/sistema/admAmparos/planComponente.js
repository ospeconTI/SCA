/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { showWarning } from "../../../redux/ui/actions";
import { POSTERIOR, ABAJO, TRESPUNTOS } from "../../../../assets/icons/svgs";

import { mostrarHijos, mostrarPopupPlanes } from "../../../redux/eventos/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class planComponente extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.expandido = false;
	}
	static get styles() {
		return css`
			:host {
				display: grid;
				position: relative;
				background-color: var(--aplicacion);
				animation: fadeInDown 1s;
			}
			:host::-webkit-scrollbar {
				display: none;
			}
			#div-trajeta {
				display: grid;
				background-color: var(--formulario);
				grid-template-columns: 0.4rem 18rem;
				align-content: center;
				padding: 0rem;
				border-radius: 4px;
				gap: 0m;
				border: solid 1px var(--formulario);
			}
			#div-trajeta[cursorpointer] {
				/* cursor: pointer; */
			}
			#div-trajeta[seleccionado] {
				background-color: var(--aplicacion);
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
				border: solid 1px var(--terciario);
			}
			#div-estado {
				height: inherit;
				width: auto;
				border-radius: 3px 0 0 3px;
			}
			#div-estado[cumplido] {
				background-color: var(--cumplido);
			}
			#div-estado[alertado] {
				background-color: var(--alertado);
			}
			#div-estado[vencida] {
				background-color: var(--vencido);
			}
			#div-estado[pendiente] {
				background-color: var(--pendiente);
			}
			#div-estado[vigente] {
				background-color: var(--vigente);
			}
			#div-estado[anulada] {
				background-color: var(--anulado);
			}
			#div-estado[pausada] {
				background-color: var(--pausado);
			}

			#div-cuerpo {
				display: grid;
				grid-template-rows: 3.4rem 2.2rem;
				gap: 0;
			}
			#textarea-titulo {
				font-family: var(font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
				background-color: transparent;
				color: var(--on-formulario);
				border: 0;
				box-shadow: none;
				padding: 0.2rem 0.4rem;
				cursor: default;
				resize: none;
				/* pointer-events: none; */
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
				grid-template-columns: auto 1fr auto;
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
			}
			#div-menu {
				display: grid;
				justify-content: right;
			}
			*[invisible] {
				visibility: hidden;
			}
			svg {
				fill: var(--on-formulario);
				width: auto;
				height: 1.4rem;
			}
			@keyframes fadeInDown {
				from {
					opacity: 0;
				}

				to {
					opacity: 1;
				}
			}
			@keyframes altaPlan {
				from {
					background-color: var(--formulario);
				}

				to {
					background-color: var(--on-formulario);
				}
			}
		`;
	}
	firstUpdated() {
		super.firstUpdated();
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("registro")) {
			this.expandido = false;
			if (this.registro?.conTareas && this.registroseleccionado?.id == this.registro?.id) {
				this.expandido = true;
			}
		}
		if (changedProperties.has("registroseleccionado")) {
			this.expandido = false;
			if (this.registro?.conTareas && this.registroseleccionado?.id == this.registro?.id) {
				this.expandido = true;
			}
		}
	}
	render() {
		if (this.registro) {
			return html`
				<div id="div-trajeta" ?cursorpointer=${this.registro.conTareas} ?seleccionado=${this.registroseleccionado?.id == this.registro.id}>
					<div id="div-estado" ?cumplido=${this.registro.estado == "cumplida"} ?alertado=${this.registro.estado == "alerta"} ?vencida=${this.registro.estado == "vencida"} ?pendiente=${this.registro.estado == "pendiente"} ?vigente=${this.registro.estado == "vigente"} ?pausada=${this.registro.estado == "pausada"} ?anulada=${this.registro.estado == "anualada"}></div>
					<div id="div-cuerpo">
						<textarea id="textarea-titulo" readonly>${this.registro.descripcion}</textarea>
						<div id="div-botonera">
							<button class="btn" @click="${this.mostrarAmparo}" title="Ver el detlle del amparo">AMPARO</button>
							<button class="btn" @click="${this.mostrarTareas}" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id != this.registro.id ? "MOSTRAR" : "OCULTAR"} TAREAS</button>
							<div id="div-menu" @click="${this.popup}" title="Menu de opciones">${TRESPUNTOS}</div>
						</div>
					</div>
				</div>
			`;
		}
	}
	popup(e) {
		// this.id: El nombre del componente (propiedad id)
		store.dispatch(mostrarPopupPlanes(this.registro, this.id, e.clientX, e.clientY));
	}
	mostrarAmparo(e) {
		e.preventDefault();
		e.stopPropagation();
		window.open("https://www.uocra.net/Amparos/Index.html?dni=" + this.registro.urlReferencia, "_blank");
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
window.customElements.define("plan-componente", planComponente);
