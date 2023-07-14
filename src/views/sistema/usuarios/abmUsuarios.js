/** @format */
import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { MENU, FLECHARIGTH, BACK, MAS, EDIT, TRASH, SEARCH, CLOSE, KEY, ROL } from "../../../../assets/icons/svgs";
import { showWarning, showMsgBox } from "../../../redux/ui/actions";
import { goTo, goHistoryPrev } from "../../../redux/routing/actions";

import { dmdGridBase } from "../../componentes/grid/js/dmdGridBase";
import { dmdGrid } from "../../componentes/grid/css/dmdGrid";
import { dmdGridThemeNormal } from "../../componentes/grid/css/dmdGridThemeNormal";
import { dmdInput } from "../../css/dmdInput";
import { dmdButton } from "../../css/dmdButton";

import { verRoles__Load01 } from "../../../redux/entreComponentes/actions";

import { getAllUsuarios as getTable, activarIntegrante } from "../../../redux/sectores/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

const TABLE = "sectores.usuariosAll.timeStamp";
const TABLE_ERROR = "sectores.usuariosAll.errorTimeStamp";

const ACTIVAR_INTEGRANTE = "sectores.activarIntegrante.timeStamp";
const ACTIVAR_INTEGRANTE_ERROR = "sectores.activarIntegrante.errorTimeStamp";

export class abmUsuarios extends dmdGridBase(connect(store, ACTIVAR_INTEGRANTE, ACTIVAR_INTEGRANTE_ERROR, TABLE, TABLE_ERROR, MEDIA_CHANGE, SCREEN)(LitElement)) {
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
		//this.grid = this.dataSource;
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
				height: 95%;
				min-height: 20rem;
				width: 95%;
				padding-top: 1rem;
			}
			.dmd-grid-datos-titulos,
			.dmd-grid-datos-registros {
				grid-template-columns: 14rem 14rem 13rem 6rem 7rem 14rem 14rem;
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
					<label>Administracion de usuarios</label>
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
						<div title="Roles" @click=${this.roles} ?hidden=${this.usuarioRol == "" || this.accion == "view"}>${ROL}<label style="display:none">Roles</label></div>
						<div title="Activar" @click=${this.activar} ?hidden=${this.usuarioRol == "" || this.accion == "view"}>${KEY}<label style="display:none">Activar</label></div>
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
							<div .campo=${"__activo"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Activo</label>
							</div>
							<div .campo=${"__esResponsable"} class="dmd-grid-datos-titulo">
								<label>Responsable</label>
							</div>
							<div .campo=${"__sector"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Sector</label>
							</div>
							<div .campo=${"contacto"} class="dmd-grid-datos-titulo">
								<label>Contacto</label>
							</div>
						</div>
						${this.grid.map((item, index) => {
							return html`
								<div class="dmd-grid-datos-registros" .item=${item} .index=${index} ?fondorojo=${item.estado == "Rechazado"} ?fondoverde=${item.estado == "Conciliado"} @click=${this._seleccionarRegistroDmdGrid}>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.apellido}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.nombre}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${item.email}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${item.__activo}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${item.__esResponsable}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left	">${item.__sector}</div>
									<div class="dmd-grid-datos-registro" style="text-align:rigth">${item.contacto}</div>
								</div>
							`;
						})}
					</div>
				</div>
			</div>
		`;
	}
	roles() {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			if (seleccionado.item.activo) {
				store.dispatch(verRoles__Load01(this.item, this.item.sector, "edit"));
			} else {
				store.dispatch(showWarning("Atencion!", "El usuario no esta activado.", "fondoError", 3000));
			}
		} else {
			store.dispatch(showWarning("Atencion!", "No selecciono registro.", "fondoError", 3000));
		}
	}
	activar(e) {
		let seleccionado = this.shadowRoot.querySelector("[seleccionado]");
		if (seleccionado) {
			if (!seleccionado.item.activo) {
				let body = {};
				body.identificador = seleccionado.item.identificacion;
				body.sectorId = seleccionado.item.sector.id;
				store.dispatch(activarIntegrante(body));
			} else {
				store.dispatch(showWarning("Atencion!", "El usuario no esta activado.", "fondoError", 3000));
			}
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
			const SeMuestraEnUnasDeEstasPantallas = "-abmUsuarios-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getTable());
			}
		}
		if (name == TABLE) {
			this.dataSource = state.sectores.usuariosAll.entities;
			this.grid = [];
			this.dataSource.forEach((item, index) => {
				item.__activo = item.activo ? "Activo" : "Inactivo";
				item.__esResponsable = item.esResponsable ? "Si" : "No";
				item.__sector = item.sector.descripcion;
				this.grid.push(item);
			});
			//this.grid = this._buscarDmdGrid();
			this._buscarDmdGrid();
			//this.update();
		}
		if (name == TABLE_ERROR && state.screen.name == "abmUsuarios") {
			store.dispatch(showWarning("Error", "No se pudo acceder a los datos, verifique su conexion", "fondoError", 4000));
		}
		if (name == ACTIVAR_INTEGRANTE) {
			store.dispatch(getTable());
			store.dispatch(showWarning("Activado", "El usuario fue activado", "fondoOk", 4000));
		}
		if (name == ACTIVAR_INTEGRANTE_ERROR && state.screen.name == "abmUsuarios") {
			store.dispatch(showWarning("Error", "No se pudo activar al usuario, verifique su conexion", "fondoError", 4000));
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
window.customElements.define("abm-usuarios", abmUsuarios);
