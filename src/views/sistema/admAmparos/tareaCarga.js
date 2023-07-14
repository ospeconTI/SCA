/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../../redux/routing/actions";
import { isInLayout } from "../../../redux/screens/screenLayouts";
import { showWarning } from "../../../redux/ui/actions";
import { INFO } from "../../../../assets/icons/svgs";
import { dateReturnForComponente } from "../../../libs/funciones";
import { dmdButton } from "../../css/dmdButton";
import { dmdInput } from "../../css/dmdInput";
import { dmdSelect } from "../../css/dmdSelect";

import { getById as tareaGetById, addSimple as addTareaSimpleDeTarea, addLapso as addTareaLapsoDeTarea, addFecha as addTareaFechaDeTarea, remove as eliminarTarea, update as modificarTarea } from "../../../redux/tareas/actions";
import { addSimple as addTareaSimpleDePlan, addLapso as addTareaLapsoDePlan, addFecha as addTareaFechaDePlan, getAll as getPlanesAll } from "../../../redux/planes/actions";
import { tareaCargaAAmparo_Retorno01 } from "../../../redux/entreComponentes/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const TAREA_BY_ID = "tareas.byId.timeStamp";
const TAREA_BY_ID_ERROR = "tareas.byId.errorTimeStamp";
const I_SHOW = "entreComponentes.tareaCarga_Load01.timeStamp";
const I_SHOW_LAPSO = "entreComponentes.tareaCarga_Load02.timeStamp";
const I_SHOW_FECHA = "entreComponentes.tareaCarga_Load03.timeStamp";
const ADD_TAREA_SIMPLE_DE_PLAN = "planes.addSimpleTimeStamp";
const ADD_TAREA_LAPSO_DE_PLAN = "planes.addLapsoTimeStamp";
const ADD_TAREA_FECHA_DE_PLAN = "planes.addFechaTimeStamp";
const ADD_ERROR_DE_PLAN = "planes.commandErrorTimeStamp";
const ADD_TAREA_SIMPLE_DE_TAREA = "tareas.addSimpleTimeStamp";
const ADD_TAREA_LAPSO_DE_TAREA = "tareas.addLapsoTimeStamp";
const ADD_TAREA_FECHA_DE_TAREA = "tareas.addFechaTimeStamp";
const ADD_ERROR_DE_TAREA = "tareas.commandErrorTimeStamp";
const TAREA_REMOVE = "tareas.removeTimeStamp";
const TAREA_REMOVE_ERROR = "tareas.commandErrorTimeStamp";
const TAREA_UPDATE = "tareas.updateTimeStamp";
const TAREA_UPDATE_ERROR = "tareas.commandErrorTimeStamp";

export class tareaCargaScreen extends connect(store, TAREA_UPDATE, TAREA_UPDATE_ERROR, TAREA_REMOVE, TAREA_REMOVE_ERROR, ADD_TAREA_SIMPLE_DE_TAREA, ADD_TAREA_LAPSO_DE_TAREA, ADD_TAREA_FECHA_DE_TAREA, ADD_ERROR_DE_TAREA, ADD_TAREA_SIMPLE_DE_PLAN, ADD_TAREA_LAPSO_DE_PLAN, ADD_TAREA_FECHA_DE_PLAN, ADD_ERROR_DE_PLAN, TAREA_BY_ID, TAREA_BY_ID_ERROR, I_SHOW, I_SHOW_LAPSO, I_SHOW_FECHA, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.accion = "";
		this.item = {};
		this.origen = "";
		this.plan_tarea = {};
		this.tarea = {};
		this.tipoTarea = "";
		this.body = {};
		this.camposEditables = true;
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
				height: 90vh;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 40%;
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
				border-top: 1px solid var(--on-formulario-separador);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				justify-self: center;
				overflow-y: scroll;
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
				color: var(--on-formulario);
				cursor: pointer;
			}
			*[hidden] {
				display: none;
			}
		`;
	}
	get _creador() {
		return this.shadowRoot.querySelector("#creador");
	}
	get _ejecutor() {
		return this.shadowRoot.querySelector("#ejecutor");
	}
	get _vigencia() {
		return this.shadowRoot.querySelector("#vigencia");
	}
	get _vencimiento() {
		return this.shadowRoot.querySelector("#vencimiento");
	}
	get _alerta() {
		return this.shadowRoot.querySelector("#alerta");
	}
	get _descripcion() {
		return this.shadowRoot.querySelector("#descripcion");
	}
	get _instrucciones() {
		return this.shadowRoot.querySelector("#instrucciones");
	}
	get _diaDelMes() {
		return this.shadowRoot.querySelector("#diaDelMes");
	}
	get _lapsoEnDias() {
		return this.shadowRoot.querySelector("#lapsoEnDias");
	}
	get _cantidad() {
		return this.shadowRoot.getElementById("cantidad");
	}
	get _planControl() {
		return this.shadowRoot.getElementById("planControl");
	}
	get _tareaControl() {
		return this.shadowRoot.getElementById("tareaControl");
	}
	get _botonAceptar() {
		return this.shadowRoot.getElementById("btnAceptar");
	}
	firstUpdated() {
		super.firstUpdated();
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("mostrar")) {
		}
	}

	render() {
		if (true) {
			return html`
				<div id="cuerpo" tabindex="1">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo" ?hidden=${this.accion != "add"}>Nueva tarea</div>
					<div id="titulo" ?hidden=${this.accion != "view"}>Visualizacion de tarea</div>
					<div id="titulo" ?hidden=${this.accion != "edit"}>Mofidicacion de tareas</div>
					<div id="titulo" ?hidden=${this.accion != "delete"}>Eliminar la tarea</div>
					<hr />
					<div id="datos">
						<div class="dmd-input" helper ?hidden=${this.accion != "view"}>
							<label>Plan</label>
							<input type="text" id="planControl" autocomplete="off" autocomplete="off" placeholder="" disabled />
							<div></div>
							<span></span>
							${INFO}
						</div>

						<div class="dmd-input" helper ?hidden=${this.accion != "view"}>
							<label>tarea</label>
							<input type="text" id="tareaControl" autocomplete="off" autocomplete="off" placeholder="" disabled />
							<div></div>
							<span></span>
							${INFO}
						</div>

						<div class="dmd-select" helper ?hidden=${this.accion == "edit"}>
							<label>Sector originante</label>
							<select id="creador" ?disabled=${true || !this.camposEditables}>
								${store.getState().sectores.all.entities
									? store.getState().sectores.all.entities.map((item, index) => {
											return html`<option ?selected=${this.selectedEjecutor(item.id)} value=${item.id}>${item.descripcion}</option> `;
											//	return html`<option ?selected=${item.id == store.getState().miSetup.set.sectorId || (this.tarea?.creador?.id && item.id == this.tarea.creador.id)} value=${item.id}>${item.descripcion}</option> `;
									  })
									: ""}
							</select>
							<div>Debe cargar una opcion</div>
							<span>Seleccione un sector</span>
							${INFO}
						</div>

						<div class="dmd-select" helper ?hidden=${this.accion == "edit"}>
							<label>Sector ejecutor</label>
							<select id="ejecutor" ?disabled=${!this.camposEditables}>
								<option value="-1" disabled selected hidden>Seleccione opcion</option>
								${store.getState().sectores.all.entities
									? store.getState().sectores.all.entities.map((item, index) => {
											return html`<option ?selected=${this.tarea?.ejecutor?.id && item.id == this.tarea.ejecutor.id} value=${item.id}>${item.descripcion}</option> `;
									  })
									: ""}
							</select>
							<div>Debe cargar una opcion</div>
							<span>Seleccione un sector</span>
							${INFO}
						</div>

						<div class="dmd-input" helper ?hidden=${this.accion == "edit"}>
							<label>Fecha de inicio</label>
							<input type="date" id="vigencia" min=${new Date().toISOString().substring(0, 10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar fecha de inicio</div>
							<span>Fecha que comienza la tarea</span>
							${INFO}
						</div>

						<div class="dmd-input" helper ?hidden=${this.accion == "edit"}>
							<label>Dias al vencimiento</label>
							<input type="number" id="vencimiento" min=${new Date().toISOString().substring(0, 10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar fecha de vencimiento</div>
							<span>Fecha que vence la tarea</span>
							${INFO}
						</div>

						<div class="dmd-input" helper ?hidden=${this.accion == "edit"}>
							<label>Dias previo al vencimiento</label>
							<input type="number" id="alerta" min=${new Date().toISOString().substring(0, 10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar fecha de alerta</div>
							<span>Fecha que el estado de la tarea pasa a amarillo</span>
							${INFO}
						</div>
						<!-- Solo para fecha -->
						<div class="dmd-select" helper ?hidden=${this.tipoTarea != "fecha" || this.accion == "edit"}>
							<label>Dia del mes</label>
							<select id="diaDelMes" ?disabled=${!this.camposEditables}>
								<option value="-1" disabled selected hidden>Seleccione opcion</option>
								${Array.from({ length: 30 }, (_, index) => index + 1).map((x) => {
									return html`<option ?selected=${this.diaDelMes && x == this.diaDelMes} value=${x}>${x}</option> `;
								})}
							</select>
							<div>Debe cargar una opcion</div>
							<span>Seleccione un dia del mes</span>
							${INFO}
						</div>
						<!-- Solo para Lapso -->
						<div class="dmd-input" helper ?hidden=${this.tipoTarea != "lapso" || this.accion == "edit"}>
							<label>Lapso en dias</label>
							<input type="number" id="lapsoEnDias" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar un numero</div>
							<span>Ingrese el lapso en dias</span>
							${INFO}
						</div>

						<div class="dmd-input" helper ?hidden=${this.tipoTarea == "simple" || this.accion == "edit"}>
							<label>Cantidad De repeticiones</label>
							<input type="number" id="cantidad" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar un numero</div>
							<span>Ingrese la cantidad</span>
							${INFO}
						</div>

						<div class="dmd-input" helper>
							<label>Descripcion</label>
							<textarea id="descripcion" placeholder="" rows="5" ?disabled=${!this.camposEditables}></textarea>
							<div>Debe ingresar la descripcion de la tarea</div>
							<span>Ingrese un texto</span>
							${INFO}
						</div>

						<div class="dmd-input" helper>
							<label>Instrucciones</label>
							<textarea id="instrucciones" placeholder="" rows="5" ?disabled=${!this.camposEditables}></textarea>
							<div>Debe las instrucciones de la tarea</div>
							<span>Ingrese un texto</span>
							${INFO}
						</div>

						<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}" ?hidden=${this.accion == "view"}>Aceptar</button>
						<div style="height:2rem"></div>
					</div>
				</div>
			`;
		}
	}
	selectedEjecutor(a) {
		let reto = false;
		if (this.accion == "add") a == store.getState().autorizacion.entities.result.sectores[0].id ? (reto = true) : (reto = false);
		if (this.accion != "add") a == this.tarea?.creador?.id ? (reto = true) : (reto = false);
		return reto;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.current = state.screen.name;
		}
		if (name == TAREA_BY_ID && state.screen.name == "amparos") {
			this.tarea = state.tareas.byId.entities;
			let fVigencia = new Date(this.tarea.vigenteDesde.substring(0, 10));
			let fVencimiento = new Date(this.tarea.vencimiento.substring(0, 10));
			let fAlerta = new Date(this.tarea.alerta.substring(0, 10));

			this._vigencia.value = dateReturnForComponente(this.tarea.vigenteDesde);
			this._vencimiento.value = (fVencimiento - fVigencia) / (1000 * 60 * 60 * 24);
			this._alerta.value = (fVencimiento - fAlerta) / (1000 * 60 * 60 * 24);
			this._descripcion.value = this.tarea.descripcion;
			this._instrucciones.value = this.tarea.instrucciones;
			this._planControl.value = this.tarea.planId;
			this._tareaControl.value = this.tarea.id;
			this.hidden = false;
			this.update();
		}
		if (name == TAREA_BY_ID_ERROR && state.screen.name == "amparos") {
			store.dispatch(showWarning("Atencion!", "No se puede mostrar la tarea, intente nuevamente", "fondoError", 3000));
		}
		if ((name == ADD_TAREA_SIMPLE_DE_PLAN || name == ADD_TAREA_LAPSO_DE_PLAN || name == ADD_TAREA_FECHA_DE_PLAN) && !this.hidden) {
			this.hidden = true;
			this._botonAceptar.disabled = false;
			store.dispatch(showWarning("Atencion!", "La tarea se agrego correctamente", "fondoOk", 3000));
			store.dispatch(tareaCargaAAmparo_Retorno01(this.body, this.item, "add"));
		}
		if ((name == ADD_TAREA_SIMPLE_DE_TAREA || name == ADD_TAREA_LAPSO_DE_TAREA || name == ADD_TAREA_FECHA_DE_TAREA) && !this.hidden) {
			this.hidden = true;
			this._botonAceptar.disabled = false;
			store.dispatch(showWarning("Atencion!", "La tarea se agrego correctamente", "fondoOk", 3000));
			store.dispatch(tareaCargaAAmparo_Retorno01(this.body, this.item, "add"));
		}
		if (name == (ADD_ERROR_DE_PLAN || ADD_ERROR_DE_TAREA || TAREA_REMOVE_ERROR) && !this.hidden) {
			this._botonAceptar.disabled = false;
			store.dispatch(showWarning("Atencion!", "No se pudo agregar la tarea, intente nuevamente", "fondoError", 3000));
		}
		if (name == TAREA_REMOVE && !this.hidden) {
			this.hidden = true;
			this._botonAceptar.disabled = false;
			store.dispatch(showWarning("Atencion!", "La tarea se elimino correctamente", "fondoOk", 3000));
			store.dispatch(tareaCargaAAmparo_Retorno01(this.item, null, "delete"));
		}
		if (name == TAREA_UPDATE && !this.hidden) {
			this.hidden = true;
			this._botonAceptar.disabled = false;
			store.dispatch(showWarning("Atencion!", "La tarea se modifica correctamente", "fondoOk", 3000));
			store.dispatch(tareaCargaAAmparo_Retorno01(this.item, null, "edit"));
		}
		if (name == I_SHOW || name == I_SHOW_LAPSO || name == I_SHOW_FECHA) {
			//this.shadowRoot.getElementById("cuerpo").focus();
			if (name == I_SHOW) {
				this.tipoTarea = "simple";
				this.item = state.entreComponentes.tareaCarga_Load01.item;
				this.accion = state.entreComponentes.tareaCarga_Load01.accion;
				this.plan_tarea = state.entreComponentes.tareaCarga_Load01.item;
				this.origen = this.item.clase;
			} else if (name == I_SHOW_LAPSO) {
				this.tipoTarea = "lapso";
				this.item = state.entreComponentes.tareaCarga_Load02.item;
				this.accion = state.entreComponentes.tareaCarga_Load02.accion;
				this.plan_tarea = state.entreComponentes.tareaCarga_Load02.item;
				this.origen = this.item.clase;
			} else if (name == I_SHOW_FECHA) {
				this.tipoTarea = "fecha";
				this.item = state.entreComponentes.tareaCarga_Load03.item;
				this.accion = state.entreComponentes.tareaCarga_Load03.accion;
				this.plan_tarea = state.entreComponentes.tareaCarga_Load03.item;
				this.origen = this.item.clase;
			}
			if (this.accion == "view") {
				this.camposEditables = false;
			} else if (this.accion == "delete") {
				this.camposEditables = false;
				this._botonAceptar.innerText = "Eliminar tarea";
			} else if (this.accion == "add") {
				this.camposEditables = true;
				this._botonAceptar.innerText = "Agregar tarea";
			} else if (this.accion == "edit") {
				this.camposEditables = true;
				this._botonAceptar.innerText = "Modifcar tarea";
			} else {
				this.camposEditables = false;
				this._botonAceptar.innerText = "Aceptar";
			}

			[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
				element.removeAttribute("error");
			});
			if (this.accion == "add") {
				this.tarea = null;
				this._creador.value = store.getState().autorizacion.entities.result.sectores[0].id ? store.getState().autorizacion.entities.result.sectores[0].id : -1;
				this._ejecutor.value = -1;
				this._vigencia.value = "";
				this._vencimiento.value = "";
				this._alerta.value = "";
				this._descripcion.value = "";
				this._instrucciones.value = "";
				this._planControl.value = "";
				this._tareaControl.value = "";
				this._lapsoEnDias.value = "1";
				this._diaDelMes.value = "1";
				this._cantidad.value = "";

				this._ejecutor.value = store.getState().autorizacion.entities.result.sectores[0].id ? store.getState().autorizacion.entities.result.sectores[0].id : -1;
				this._vigencia.value = dateReturnForComponente("07/31/2023");
				this._vencimiento.value = "10";
				this._alerta.value = "5";
				this._descripcion.value = "DEssssss";
				this._instrucciones.value = "Inssssss";
				this._planControl.value = "";
				this._tareaControl.value = "";
				this._lapsoEnDias.value = "1";
				this._diaDelMes.value = "1";
				this._cantidad.value = "";

				this.hidden = false;
			} else if (this.accion == "view" || this.accion == "delete" || this.accion == "edit") {
				store.dispatch(tareaGetById(this.plan_tarea.id));
			}
		}
	}
	volver() {
		this.hidden = true;
	}
	grabar(e) {
		if (this.accion == "delete") {
			this.body = {};
			this.body.tareaId = this.tarea.id;
			store.dispatch(eliminarTarea(this.body));
			return;
		}
		let mensageError = "";
		this._botonAceptar.disabled = true;
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		var ok = true;
		if (this._descripcion.value == "") {
			ok = false;
			this._descripcion.setAttribute("error", "");
		}
		if (this._instrucciones.value == "") {
			ok = false;
			this._instrucciones.setAttribute("error", "");
		}
		if (this.accion == "edit" && ok) {
			this.body = {};
			this.body.tareaId = this.tarea.id;
			this.body.descripcion = this._descripcion.value;
			this.body.instrucciones = this._instrucciones.value;
			store.dispatch(modificarTarea(null, this.body));
			return;
		}
		if (this._creador.value == "-1") {
			ok = false;
			this._creador.setAttribute("error", "");
		}
		if (this._ejecutor.value == "-1") {
			ok = false;
			this._ejecutor.setAttribute("error", "");
		}
		if (this._vigencia.value == "" || !new Date(this._vigencia.value)) {
			ok = false;
			this._vigencia.setAttribute("error", "");
		} else if (new Date(this._vigencia.value + "T23:59:59") < new Date()) {
			ok = false;
			this._vigencia.setAttribute("error", "");
			mensageError = "La fecha de vigencia debe ser mayor o igual que hoy";
		}
		if (this._vencimiento.value == "" || this._vencimiento.value == "0") {
			ok = false;
			this._vencimiento.setAttribute("error", "");
		}
		if (this._alerta.value == "" || this._alerta.value == "0") {
			ok = false;
			this._alerta.setAttribute("error", "");
		} else if (this._alerta.value > this._vencimiento.value) {
			ok = false;
			this._vencimiento.setAttribute("error", "");
			this._alerta.setAttribute("error", "");
			mensageError = "Los dias de alerta debe ser menor a los dias de vencimiento";
		}
		if (this.tipoTarea == "lapso") {
			if (this._lapsoEnDias.value == "") {
				ok = false;
				this._lapsoEnDias.setAttribute("error", "");
			}
		} else if (this.tipoTarea == "fecha") {
			if (this._diaDelMes.value == "") {
				ok = false;
				this._diaDelMes.setAttribute("error", "");
			}
		}
		if (this.tipoTarea != "simple") {
			if (this._cantidad.value == "") {
				ok = false;
				this._cantidad.setAttribute("error", "");
			}
		}
		if (ok) {
			this.body = {};
			this.body.planId = this.plan_tarea.planId;
			this.body.creadorId = this._creador.value;
			this.body.ejecutorId = this._ejecutor.value;
			this.body.vigenteDesde = this._vigencia.value;
			this.body.venceEn = parseInt(this._vencimiento.value, 10);
			this.body.alerta = parseInt(this._alerta.value, 10);
			this.body.descripcion = this._descripcion.value;
			this.body.instrucciones = this._instrucciones.value;
			if (this.tipoTarea == "lapso") {
				this.body.cantidad = this._cantidad.value;
				this.body.lapsoEnDias = this._lapsoEnDias.value;
			} else if (this.tipoTarea == "fecha") {
				this.body.cantidad = this._cantidad.value;
				this.body.diaDelMes = this._diaDelMes.value;
			}
			if (this.origen == "plan") {
				if (this.tipoTarea == "simple") {
					store.dispatch(addTareaSimpleDePlan(this.body));
				} else if (this.tipoTarea == "lapso") {
					store.dispatch(addTareaLapsoDePlan(this.body));
				} else if (this.tipoTarea == "fecha") {
					store.dispatch(addTareaFechaDePlan(this.body));
				}
			} else {
				this.body.tareaId = this.plan_tarea.id;
				if (this.tipoTarea == "simple") {
					store.dispatch(addTareaSimpleDeTarea(this.body));
				} else if (this.tipoTarea == "lapso") {
					store.dispatch(addTareaLapsoDeTarea(this.body));
				} else if (this.tipoTarea == "fecha") {
					store.dispatch(addTareaFechaDeTarea(this.body));
				}
			}
		} else {
			this._botonAceptar.disabled = false;
			if (mensageError == "") {
				mensageError = "Falta cargar campos.";
			}
			store.dispatch(showWarning("Atencion!", mensageError, "fondoError", 3000));
		}
	}

	static get properties() {
		return {
			tipoTarea: {
				type: String,
				reflect: true,
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
window.customElements.define("tarea-carga-screen", tareaCargaScreen);
