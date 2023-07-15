/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers/connect";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { ALERTADO, VENCIDO, PENDIETE, CUMPLIDO, VIGENTE } from "../../../assets/icons/svgs";

const SHOW = "popup.show.timeStamp";
const HIDDEN = "popup.hidden";

export class popupControl extends connect(store, SHOW, HIDDEN)(LitElement) {
	constructor() {
		super();
		this.addEventListener("mouseleave", this.cerrar);
		this.hidden = true;
		this.items = null;
		this.iconos = { ALERTADO: ALERTADO, VENCIDO: VENCIDO, PENDIETE: PENDIETE, CUMPLIDO: CUMPLIDO, VIGENTE: VIGENTE };
	}
	static get styles() {
		return css`
			${button}
			:host {
				position: fixed;
				display: grid;
				grid-auto-flow: row;
				background-color: var(--formulario);
				padding: 0rem;
				border: solid 0.5px var(--on-formulario);
				border-radius: 0.3rem;
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
			}
			:host([hidden]) {
				display: grid;
				display: none !important;
			}
			.div-cuerpo {
				display: grid;
				grid-template-columns: auto 1fr;
				height: 1.7rem;
				padding: 0.2rem 0.8rem;
				background-color: transparent;
				cursor: pointer;
				align-items: center;
				grid-gap: 0.5rem;
				color: var(--on-formulario);
			}
			.div-cuerpo:hover {
				background-color: var(--on-formulario);
				color: var(--formulario);
			}
			.div-cuerpo svg {
				fill: var(--on-formulario);
			}
			.div-cuerpo:hover svg {
				fill: var(--formulario);
			}
			.div-titulo {
				display: grid;
				height: 2rem;
				text-align: center;
				background-color: var(--primario);
				color: var(--on-primario);
				align-items: center;
				font-family: var(font-header-h1-family);
				font-size: var(--font-header-h1-size);
				font-weight: var(--font-header-h1-weight);
				padding: 0px 4px 2px 4px;
			}
			.div-linea {
				height: 1px;
				background-color: var(--on-formulario);
				margin: 2px 0;
			}
			*[hidden] {
				display: none !important;
			}
			.fadeInDown {
				-webkit-animation-name: fadeInDown;
				animation-name: fadeInDown;
				-webkit-animation-duration: 1s;
				animation-duration: 1s;
				-webkit-animation-fill-mode: both;
				animation-fill-mode: both;
			}
			@-webkit-keyframes fadeInDown {
				0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				}
				100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
			@keyframes fadeInDown {
				0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				}
				100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
		`;
	}
	firstUpdated() {
		super.firstUpdated();
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("hidden")) {
		}
	}
	updated(changedProperties) {
		if (changedProperties.has("hidden")) {
			if (!this.hidden) {
				let w = this.clientWidth;
				let a = this.offsetHeight;
				if (a != 0 && w != 0) {
					let rr = store.getState().popup.show;
					let x = Number(store.getState().popup.show.x.toString().replace("px", ""));
					let y = Number(store.getState().popup.show.y.toString().replace("px", ""));
					let tW = Number(document.documentElement.scrollWidth);
					let tA = Number(document.documentElement.scrollHeight);
					let x1 = 0;
					let y1 = 0;
					x + w <= tW ? (x1 = x - 5) : (x1 = x + 5 - w);
					y + a <= tA ? (y1 = y - 5) : (y1 = y + 15 - a);
					this.style.left = x1 + "px";
					this.style.top = y1 + "px";
				}
			}
		}
	}
	render() {
		if (this.items) {
			return html`
				${this.items.map((item, index) => {
					return html` <div class="div-cuerpo" ?hidden=${item.tipo} .item=${item} @click="${this.accion}">
							<div class="div-opcion" ?hidden=${!item.svg}>${item.svg ? this.iconos[item.svg] : ""}</div>
							<div class="div-opcion">${item.titulo}</div>
						</div>
						<div class="div-titulo" ?hidden=${item.tipo != "titulo"}>${item.titulo}</div>
						<div class="div-linea" ?hidden=${item.tipo != "linea"}></div>`;
				})}
			`;
		}
	}
	accion(e) {
		let item = e.currentTarget.item;
		let param = e.currentTarget.item.param;
		if (param) param.item = store.getState().popup.show.item;
		if (item.accion) {
			store.dispatch({
				type: item.accion,
				param,
			});
		}
		this.cerrar();
	}
	stateChanged(state, name) {
		if (name == SHOW) {
			let a = state.popup.all.entities.filter((it) => {
				return (
					it.opcion.filter((item) => {
						return item.menu == state.popup.show.opcion;
					}).length > 0
				);
			});
			if (a.length > 0) {
				this.items = JSON.parse(JSON.stringify(a));
				this.items.map((item, index) => {
					let mOpc = {};
					item.opcion.map((itOp, inOp) => {
						if (itOp.menu == state.popup.show.opcion) {
							//this.items[index].opcion.splice(inOp, 1);
							mOpc = itOp;
						}
					});
					this.items[index].opcion = [];
					this.items[index].opcion.push(mOpc);
				});
				let rr = this.items;
				this.items.sort((a, b) => a.opcion[0].orden - b.opcion[0].orden);
			} else {
				this.items = null;
			}
			this.hidden = false;
		}
		if (name == HIDDEN) {
			this.hidden = true;
		}
	}
	cerrar() {
		this.hidden = true;
	}
	static get properties() {
		return {
			hidden: {
				type: Boolean,
				reflect: true,
				attribute: "hidden",
			},
		};
	}
}
window.customElements.define("poopup-control", popupControl);
