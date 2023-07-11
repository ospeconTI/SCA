/** @format */
import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { MENU, FLECHARIGTH, BACK, MAS, EDIT, PERSON, TRASH, SEARCH, CLOSE } from "../../../../assets/icons/svgs";
import { showWarning, showMsgBox } from "../../../redux/ui/actions";
import { goTo, goHistoryPrev } from "../../../redux/routing/actions";

import { dmdGridBase } from "../../componentes/grid/js/dmdGridBase";
import { dmdGrid } from "../../componentes/grid/css/dmdGrid";
import { dmdGridThemeNormal } from "../../componentes/grid/css/dmdGridThemeNormal";
import { dmdInput } from "../../css/dmdInput";
import { dmdButton } from "../../css/dmdButton";

import { getAll as getTable } from "../../../redux/sectores/actions";
import { cargaSectores_Load01 } from "../../../redux/entreComponentes/actions";
import { verUsuarios_Load01 } from "../../../redux/entreComponentes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const TABLE = "sectores.all.timeStamp";
const TABLE_ERROR = "sectores.all.errorTimeStamp";

export class verSectores extends dmdGridBase(connect(store, TABLE, TABLE_ERROR, MEDIA_CHANGE, SCREEN)(LitElement)) {
	constructor() {
		super();
		this.area = "body";
		this.current = "";
		this.hidden = true;
		this.dataSource = [];
		this.item = {};
		this.grid = [];
		this.usuarioRol = "CEMAP";
	}
	firstUpdated() {
		super.firstUpdated();
		this.grid = this.dataSource;
	}
	static get styles() {
		return css`
			${dmdGrid}
			${dmdGridThemeNormal}
			${dmdInput}
			${dmdButton}
			:host {
				display: grid;
				position: relative;
				height: 100%;
				width: 100%;
				background-color: var(--color-fondo);
				grid-gap: 1rem;
				overflow-y: auto;
				justify-items: center;
			}

			:host([hidden]) {
				display: none;
			}
			.dmd-grid {
				height: 70%;
				min-height: 20rem;
				width: max-content;
				padding-top: 1rem;
			}
			.dmd-grid-datos-titulos,
			.dmd-grid-datos-registros {
				grid-template-columns: 22rem 15rem 8rem 8rem;
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

	get _anticipoCarga() {
		return this.shadowRoot.querySelector("#anticipoCarga");
	}

	get _anticipoFechaCierre() {
		return this.shadowRoot.querySelector("#anticipoFechaCierre");
	}

	render() {
		return html`
			<div class="dmd-grid dmd-grid-theme-normal">
				<div class="dmd-grid-velo" hidden></div>
				<div class="dmd-grid-cabecera">
					<div @click=${this._menuOcultarDmdGrid}>${MENU}</div>
					<label>Administracion de sectores</label>
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
						<div title="Usuarios" @click=${this.usuarios} ?hidden=${this.usuarioRol == ""}>${PERSON}<label style="display:none">Usuarios</label></div>
					</div>
					<div class="dmd-grid-datos">
						<div class="dmd-grid-datos-titulos">
							<div .campo=${"id"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Id</label>
							</div>
							<div .campo=${"descripcion"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Descripcion</label>
							</div>
							<div .campo=${"activo"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Activo</label>
							</div>
							<div .campo=${"usuarios"} class="dmd-grid-datos-titulo">
								<label>Usuarios</label>
							</div>
						</div>
						${this.grid.map((item, index) => {
							return html`
								<div class="dmd-grid-datos-registros" .item=${item} .index=${index} ?fondorojo=${item.estado == "Rechazado"} ?fondoverde=${item.estado == "Conciliado"} @click=${this._seleccionarRegistroDmdGrid}>
									<div class="dmd-grid-datos-registro id" style="text-align:right" .valor=${item.id}>${item.id}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.descripcion}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${item.activo ? "Si" : "Si"}</div>
									<div class="dmd-grid-datos-registro" style="text-align:right">${item.usuarios.length}</div>
								</div>
							`;
						})}
					</div>
				</div>
			</div>
		`;
	}
	usuarios(e) {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			store.dispatch(verUsuarios_Load01(this.item.usuarios, this.item, "abm"));
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}
	alta(e) {
		store.dispatch(cargaSectores_Load01(null, "add"));
	}
	modificar(e) {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			store.dispatch(cargaSectores_Load01(this.item, "edit"));
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}
	eliminar() {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}

	_itemSeleccionado(e) {
		this.item = e.currentTarget.item;
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-verSectores-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getTable());
			}
		}
		if (name == TABLE && state.screen.name == "verSectores") {
			this.dataSource = state.sectores.all.entities;
			this._buscarDmdGrid();
		}
		if (name == TABLE_ERROR && state.screen.name == "verSectores") {
			store.dispatch(showWarning("Error", "No se pudo acceder a los datos, verifique su conexion", "fondoError", 4000));
		}
	}

	static get properties() {
		return {
			grid: {
				type: Object,
				state: true,
			},
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
window.customElements.define("ver-sectores", verSectores);
