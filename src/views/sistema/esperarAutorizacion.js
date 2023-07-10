/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { SVGS } from "../../../assets/icons/svgs";
import { IMAGES } from "../../../assets/images/images";
import { dmdButton } from "../css/dmdButton";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class esperarAutorizacion extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
	}
	static get styles() {
		return css`
			${dmdButton}
			:host {
				display: grid;
				height: 100%;
				width: 100%;
				background-color: var(--formulario);
				justify-content: center;
				align-content: flex-start;
				padding-top: 10rem;
			}
			:host([hidden]) {
				display: none;
			}
			#ventana {
				padding: 5rem;
				width: 40vw;
				border: solid 0.1px var(--on-aplicacion-bajada);
				font-size: var(--font-header-h1-size);
				font-weight: 200;
				background-color: var(--aplicacion);
				color: var(--on-aplicacion);
			}
		`;
	}
	render() {
		return html` <div id="ventana">El administrador del sistema todavia no autorizó su ingreso al sistema, aguarde el mail de confirmación.</div> `;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-esperarAutorizacion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				this.update();
			}
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
window.customElements.define("esperar-autorizacion", esperarAutorizacion);
