/** @format */
import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { MENU, FLECHARIGTH, BACK, MAS, EDIT, TRASH, SEARCH, CLOSE } from "../../../../assets/icons/svgs";
import { showWarning, showMsgBox } from "../../../redux/ui/actions";
import { goTo, goHistoryPrev } from "../../../redux/routing/actions";

import { dmdGridBase } from "../../componentes/grid/js/dmdGridBase";
import { dmdGrid } from "../../componentes/grid/css/dmdGrid";
import { dmdGridThemeNormal } from "../../componentes/grid/css/dmdGridThemeNormal";
import { dmdInput } from "../../css/dmdInput";
import { dmdButton } from "../../css/dmdButton";

import { cargaUsuarios_Load01 } from "../../../redux/entreComponentes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const SECTORES_ALL = "sectores.all.timeStamp";

const SHOW = "entreComponentes.verUsuarios_Load01.timeStamp";

export class verUsuarios extends dmdGridBase(connect(store, SECTORES_ALL, SHOW, MEDIA_CHANGE, SCREEN)(LitElement)) {
	constructor() {
		super();
		this.area = "body";
		this.current = "";
		this.hidden = true;
		this.dataSource = [];
		this.item = {};
		this.usuarioRol = "CEMAP";
		this.sector = null;
	}
	firstUpdated() {
		super.firstUpdated();
	}
	static get styles() {
		return css`
			${dmdGrid}
			${dmdGridThemeNormal}
			${dmdInput}
			${dmdButton}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				grid-gap: 1rem;
				overflow-y: auto;
				justify-items: center;
				z-index: 99;
			}

			:host([hidden]) {
				display: none;
			}
			.dmd-grid {
				height: 60%;
				min-height: 20rem;
				width: 60rem;
				align-self: center;
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
				border: 0;
			}
			.dmd-grid-datos-titulos,
			.dmd-grid-datos-registros {
				grid-template-columns: 18rem 18rem 16rem;
			}
			.dmd-grid-datos-registros[fondorojo] {
				color: var(--color-error) !important;
			}
			.dmd-grid-datos-registros[fondoverde] {
				color: green !important;
			}
			*[hidden] {
				display: none !important;
			}
		`;
	}

	render() {
		return html`
			<div class="dmd-grid dmd-grid-theme-normal">
				<div class="dmd-grid-velo" hidden></div>
				<div class="dmd-grid-cabecera">
					<div @click=${this._menuOcultarDmdGrid}>${MENU}</div>
					<label>Usuarios del Sector: ${"   " + this.sector?.descripcion}</label>
					<div class="dmd-grid-cabecera-find">
						<input class="dmd-grid-cabecera-find-input" hidden type="text" autocomplete="off" value="" />
						<buscar class="dmd-grid-cabecera-find-buscar">${SEARCH}</buscar>
						<cerrar class="dmd-grid-cabecera-find-cerrar" hidden>${CLOSE}</cerrar>
					</div>
				</div>

				<div class="dmd-grid-cuerpo">
					<div class="dmd-grid-menu">
						<div title="Mostar / ocultar barra de menu" @click=${this._menuAmpliarDmdGrid}>${FLECHARIGTH}<label style="display:none"></label></div>
						<div title="Atras" atras @click=${this.atras}>${BACK}<label style="display:none">Atras</label></div>
						<div title="Nuevo" @click=${this.alta} ?hidden=${this.usuarioRol == ""}>${MAS} <label style="display:none">Nuevo</label></div>
						<div title="Modificar" @click=${this.modificar} ?hidden=${this.usuarioRol == ""}>${EDIT}<label style="display:none">Modificar</label></div>
						<div title="ELiminar" @click=${this.eliminar} ?hidden=${this.usuarioRol == ""}>${TRASH}<label style="display:none">Eliminar</label></div>
					</div>
					<div class="dmd-grid-datos">
						<div class="dmd-grid-datos-titulos">
							<div .campo=${"apellido"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Apellido</label>
							</div>
							<div .campo=${"nombre"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Nombre</label>
							</div>
							<div .campo=${"email"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Email</label>
							</div>
						</div>
						${this.dataSource.map((item, index) => {
							return html`
								<div class="dmd-grid-datos-registros" .item=${item} .index=${index} ?fondorojo=${item.estado == "Rechazado"} ?fondoverde=${item.estado == "Conciliado"} @click=${this._seleccionarRegistroDmdGrid}>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.apellido}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.nombre}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.email}</div>
								</div>
							`;
						})}
					</div>
				</div>
			</div>
		`;
	}
	alta(e) {
		store.dispatch(cargaUsuarios_Load01(null, this.sector, "add"));
	}
	modificar(e) {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			store.dispatch(cargaUsuarios_Load01(this.item, this.sector, "edit"));
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}
	eliminar() {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			store.dispatch(cargaUsuarios_Load01(this.item, this.sector, "delete"));
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}

	_itemSeleccionado(e) {
		this.item = e.currentTarget.item;
	}
	atras() {
		this.hidden = true;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.current = state.screen.name;
		}
		if (name == SHOW) {
			this.dataSource = state.entreComponentes.verUsuarios_Load01.usuariosItems;
			this.sector = state.entreComponentes.verUsuarios_Load01.sectorItem;
			this._buscarDmdGrid();
			this.hidden = false;
		}
		if (name == SECTORES_ALL) {
			if (this.sector) {
				let r = state.sectores.all.entities.filter((item) => {
					return item.id == this.sector.id;
				});
				if (r.length > 0) {
					this.dataSource = r[0].usuarios;
					this._buscarDmdGrid();
				}
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
window.customElements.define("ver-usuarios", verUsuarios);
