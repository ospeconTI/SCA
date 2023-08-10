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

export class inicialScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                position: relative;
                height: 100%;
                width: 100%;
                background-color: var(--formulario);
                color: var(--on-formulario);
                grid-template-columns: 80%;
                grid-gap: 4rem;
                justify-content: center;
                justify-items: center;
                align-content: center;
                overflow-y: auto;
            }
            :host([hidden]) {
                display: none;
            }
            :host::-webkit-scrollbar {
                display: none;
            }
            #titulo {
            }
            label {
                padding-top: 5vh;
                font-size: var(--font-header-h1-size);
                font-weight: var(--font-header-h1-weight);
                color: var(--on-formulario);
                text-align: center;
            }
        `;
    }
    render() {
        return html` <div id="titulo">${IMAGES["LOGO_GRANDE"]}</div> `;
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-inicial-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                this.update();
            }
        }
    }
    sesion() {
        store.dispatch(goTo("login"));
    }
    registro() {
        store.dispatch(goTo("registro"));
    }
    registroUpdate() {
        store.dispatch(goTo("registroUpdate"));
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
window.customElements.define("inicial-screen", inicialScreen);
