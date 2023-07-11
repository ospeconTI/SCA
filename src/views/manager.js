/** @format */

import { html, LitElement, css } from "lit";
import { connect } from "@brunomon/helpers";
import { store } from "../redux/store";
import { layoutsCSS } from "../views/ui/layouts";
import { getLayout } from "../redux/screens/screenLayouts";
import { goTo } from "../redux/routing/actions";
//import { spinner } from "@brunomon/template-lit/src/views/css/spinner";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
import { SpinnerControl } from "./componentes/spinner";

import { pantallaWarning } from "./componentes/warning";
import { AlertControl } from "./componentes/alert";
import { ConfirmControl } from "./componentes/confirm";

import { menuPrincipal } from "../views/headers/menu";

import { amparosScreen } from "../views/sistema/admAmparos/amparos";
import { inicialScreen } from "../views/sistema/inicial";
import { solicitarAutorizacion } from "../views/sistema/solicitarAutorizacion";
import { esperarAutorizacion } from "../views/sistema/esperarAutorizacion";
import { busquedaDescripcionScreen } from "../views/sistema/admAmparos/busquedaDescripcion";
import { tareaCargaScreen } from "../views/sistema/admAmparos/tareaCarga";
import { planCargaScreen } from "../views/sistema/admAmparos/planCarga";
import { verSectores } from "../views/sistema/sectores/verSectores";
import { cargaSectores } from "../views/sistema/sectores/cargaSectores";
import { verUsuarios } from "../views/sistema/sectores/verUsuarios";
import { cargaUsuarios } from "../views/sistema/sectores/cargaUsuarios";
import { abmUsuarios } from "../views/sistema/usuarios/abmUsuarios";
import { verRoles } from "../views/sistema/sectores/verRoles";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const SELECTION = "ui.menu.timeStamp";

export class viewManager extends connect(store, MEDIA_CHANGE, SCREEN, SELECTION)(LitElement) {
	constructor() {
		super();
		window.onpopstate = (event) => {
			if (event.state) {
				store.dispatch(goTo(event.state.option, true));
			} else {
				window.history.back();
			}
		};
	}

	static get styles() {
		return css`
			${layoutsCSS}
			${gridLayout}
            :host {
				display: grid;
				padding: 0;
				background-color: var(--aplicacion);
				overflow: hidden;
			}

			:host::-webkit-scrollbar {
				width: 0.5vw;
				cursor: pointer;
			}
			:host::-webkit-scrollbar([media-size="small"]) {
				display: none;
			}
			:host::-webkit-scrollbar-thumb {
				background: var(--secundario);
				border-radius: 5px;
			}
			#spinner {
				position: absolute;
				z-index: 100;
				height: 3rem;
				width: 3rem;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		`;
	}

	render() {
		return html`
			<spinner-control id="spinner" aro></spinner-control>

			<menu-principal id="menu" class="header"></menu-principal>

			<inicial-screen id="inicial" class="body"></inicial-screen>
			<solicitar-autorizacion id="solicitarAutorizacion" class="body"></solicitar-autorizacion>
			<esperar-autorizacion id="esperarAutorizacion" class="body"></esperar-autorizacion>
			<amparos-screen id="amparos" class="body"></amparos-screen>
			<busqueda-descripcion-screen id="busquedaDescripcion" class="body"></busqueda-descripcion-screen>
			<tarea-carga-screen id="tareaCarga" class="body"></tarea-carga-screen>
			<plan-carga-screen id="planCarga" class="body"></plan-carga-screen>
			<ver-sectores id="verSectores" class="body"></ver-sectores>
			<carga-sectores id="cargaSectores" class="body"></carga-sectores>
			<ver-usuarios id="verUsuarios" class="body"></ver-usuarios>
			<carga-usuarios id="cargaUsuarios" class="body"></carga-usuarios>
			<abm-usuarios id="abmUsuarios" class="body"></abm-usuarios>
			<ver-roles id="verRoles" class="body"></ver-roles>

			<pantalla-warning id="warning"></pantalla-warning>
			<alert-control></alert-control>
			<confirm-control></confirm-control>
		`;
	}

	stateChanged(state, name) {
		if (name == MEDIA_CHANGE || name == SCREEN) {
			this.mediaSize = state.ui.media.size;
			this.orientation = state.ui.media.orientation;
			this.layout = getLayout(state).name;
			if (!window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
				if ("standalone" in window.navigator && window.navigator.standalone) {
					this.style.height = document.documentElement.offsetHeight ? document.documentElement.offsetHeight : window.innerHeight + "px";
				} else {
					if (state.ui.media.orientation == "portrait") {
						this.style.height = window.innerHeight < window.innerWidth ? window.innerWidth : window.innerHeight + "px";
					} else {
						this.style.height = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight + "px";
					}
				}
			}
		}
		this.update();
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
			orientation: {
				type: String,
				reflect: true,
			},
		};
	}
}

window.customElements.define("view-manager", viewManager);
