/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../../redux/store";
import { connect } from "@brunomon/helpers";
import { showWarning } from "../../../redux/ui/actions";
import { POSTERIOR, ABAJO, TRESPUNTOS } from "../../../../assets/icons/svgs";
import { animaciones } from "../../css/animaciones";

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
            #div-trajeta {
                display: grid;
                background-color: transparent;
                grid-template-columns: 0.4rem 18rem;
                align-content: center;
                padding: 0rem;
                border-radius: 4px;
                gap: 0m;
                border: solid 1px var(--formulario);
            }
            #div-trajeta[seleccionado] {
                background-color: var(--aplicacion);
                box-shadow: var(--shadow-elevation-8-box);
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
                padding: 0.5rem;
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
                grid-template-columns: 1fr auto;
                align-items: center;
                gap: 0.6rem;
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
            .titulo {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 1rem;
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
    updated(changedProperties) {}

    render() {
        if (this.registro) {
            return html`
                <div id="div-trajeta" ?seleccionado=${this.registroseleccionado?.id == this.registro.id}>
                    <div id="div-estado" ?cumplido=${this.registro.estado == "cumplida"} ?alertado=${this.registro.estado == "alerta"} ?vencida=${this.registro.estado == "vencida"} ?pendiente=${this.registro.estado == "pendiente"} ?vigente=${this.registro.estado == "vigente"} ?pausada=${this.registro.estado == "pausada"} ?anulada=${this.registro.estado == "anualada"}></div>
                    <div id="div-cuerpo">
                        <div class="titulo">
                            <div id="textarea-titulo" readonly>${this.registro.descripcion}</div>
                            <div id="div-menu" @click="${this.popup}" title="Menu de opciones">${TRESPUNTOS}</div>
                        </div>
                        <div id="div-botonera">
                            <button class="btn" @click="${this.mostrarAmparo}" title="Ver el detlle del amparo">AMPARO</button>
                            <button class="btn" @click="${this.mostrarTareas}" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id != this.registro.id ? "MOSTRAR" : "OCULTAR"} TAREAS</button>
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
window.customElements.define("plan-componente", planComponente);
