/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { TRESPUNTOS, PERSON_OUTLINED, PERSON_ADD, PERSON_LIST, FLECHARIGTH, START, END, NOTIFCATION_IMPORTANT, DONE } from "../../../../assets/icons/svgs";

import { dateToFrench, toShortDate } from "../../../libs/funciones";

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
                max-width: 30rem;
            }
            :host::-webkit-scrollbar {
                display: none;
            }
            .div-etiqueta {
                display: grid;
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
                box-shadow: var(--shadow-elevation-8-box);
            }
            svg {
                cursor: pointer;
            }
            .estado {
                height: 100%;
                width: 0.5rem;
                align-self: center;
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
                gap: 1rem;
                padding: 1rem;
            }

            #textarea-titulo {
                font-family: var(--font-header-h1-menos-family);
                font-size: var(--font-header-h1-size);
                font-weight: bold;
                background-color: transparent;
                color: var(--on-formulario);
                border: 0;
                box-shadow: none;
                padding: 0.2rem 0.1rem;
                cursor: default;
                resize: none;
                text-wrap: wrap;
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
                grid-auto-flow: column;
                align-items: center;
                gap: 0.6rem;
            }
            #div-botonera svg {
                fill: var(--on-formulario-bajada);
            }

            .btn {
                font-family: var(font-header-h1-menos-family);
                font-size: var(--font-header-h1-menos-size);
                font-weight: var(--font-header-h1-menos-weight);
                border-radius: 0.5rem;
                width: max-content;
                justify-self: start;
                background-color: transparent;
                color: var(--primario);
                border: none;
                height: fit-content;
                cursor: pointer;
                padding: 0;
            }
            .btn:hover {
                text-decoration: underline;
            }
            #div-menu {
                display: grid;
                justify-content: right;
            }
            .div-imagen {
                display: grid;
                align-content: center;
            }
            *[hidden] {
                display: none !important;
            }
            *[invisible] {
                visibility: hidden;
            }
            svg {
                fill: var(--on-formulario);
            }
            .caption {
                color: var(--on-formulario-bajada);
            }
            .caption svg {
                fill: var(--on-formulario-bajada);
                cursor: auto;
            }
            .lineas {
                display: grid;
                grid-auto-flow: column;
                font-size: var(--font-bajada-size);
                color: var(--on-formulario);
                align-self: center;
                gap: 2rem;
            }
            .subtitulo {
                display: grid;
                grid-auto-flow: column;
                font-size: var(--font-bajada-size);
                color: var(--on-formulario);
                align-self: center;
                justify-content: start;
            }
            .lineas div {
                display: grid;
                justify-content: start;
                justify-items: start;
                gap: 0.5rem;
            }
            .titulo {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 1rem;
            }
            .titulo div {
                display: grid;
                align-content: center;
                align-items: center;
            }
            .separador {
                height: 0;
                border-top: 1px solid var(--on-aplicacion-disabled);
            }
            .center {
                justify-self: center;
            }
            .end {
                justify-self: end;
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
                        <div class="titulo">
                            <div>
                                <div id="textarea-titulo" readonly>${this.registro.descripcion}</div>
                                <div class="subtitulo">
                                    <div class="btn" @click="${this.verUsuariosCreador}">${this.registro.creador.descripcion.toUpperCase()}</div>
                                    <div class="caption">${FLECHARIGTH}</div>
                                    <div class="btn" @click="${this.verUsuariosEjecutor}">${this.registro.ejecutor.descripcion.toUpperCase()}</div>
                                </div>
                            </div>
                            <div id="div-botonera">
                                <div id="div-menu" @click="${this.popup}" title="Menu de opciones">${TRESPUNTOS}</div>
                            </div>
                        </div>
                        <div class="separador"></div>
                        <div class="lineas">
                            <div title="fecha de inicio">
                                <div class="caption">${START}</div>
                                <div>${toShortDate(this.registro.vigenteDesde)}</div>
                            </div>
                            <div title="fecha de alerta">
                                <div class="caption center">${NOTIFCATION_IMPORTANT}</div>
                                <div>${toShortDate(this.registro.alerta)}</div>
                            </div>
                            <div ?hidden="${!(this.registro.estado == "cumplida" && this.registro.tipo == "simple" && new Date(this.registro.cumplidaEl).getTime() <= new Date(this.registro.vencimiento).getTime())}" title="fecha de cumplimiento">
                                <div class="caption center">${DONE}</div>
                                <div>${toShortDate(this.registro.cumplidaEl)}</div>
                            </div>
                            <div title="fecha de vencimiento">
                                <div class="caption end">${END}</div>
                                <div>${toShortDate(this.registro.vencimiento)}</div>
                            </div>
                            <div ?hidden="${!(this.registro.estado == "cumplida" && this.registro.tipo == "simple" && new Date(this.registro.cumplidaEl).getTime() > new Date(this.registro.vencimiento).getTime())}" title="fecha de cumplimiento">
                                <div class="caption center">${DONE}</div>
                                <div>${toShortDate(this.registro.cumplidaEl)}</div>
                            </div>
                        </div>

                        <div class="separador"></div>

                        <div id="div-botonera">
                            <button class="btn" @click="${this.verTarea}" title="Ver el detlle de la tarea">VER</button>
                            <button class="btn" @click="${this.mostrarTareas}" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id != this.registro.id ? "MOSTRAR" : "OCULTAR"} CONDICIONES</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    popup(e) {
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
            },
            expandido: {
                type: Boolean,
                reflect: true,
                attribute: "expandido",
            },
            registroseleccionado: {
                type: Object,
            },
        };
    }
}
window.customElements.define("tarea-componente", tareaComponente);
