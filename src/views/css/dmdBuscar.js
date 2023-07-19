/** @format */

import { css } from "lit";

export const dmdBuscar = css`
	.dmd-buscar {
		display: grid;
		position: relative;
		grid-template-rows: auto auto auto;
		grid-gap: 0rem;
		background-color: transparent;
		font-weight: 300;
	}
	.dmd-buscar input {
		/*padding: 0.15rem 0.6rem;*/
		padding: 0rem 2.2rem 0rem 0.6rem;
		background-color: transparent;
		border: 1px solid var(--on-formulario);
		color: var(--on-formulario);
		font-size: var(--font-bajada-size);
		outline: none;
		border-radius: var(--control-radius);
		transition: all 0.3s ease-in-out;
	}
	.dmd-buscar input {
		height: 2.1rem;
	}
	.dmd-buscar input[readonly] {
		cursor: pointer;
	}
	.dmd-buscar:focus-within input {
		border: 1px solid var(--primario);
		background-color: var(--aplicacion);
	}
	.dmd-buscar input[error] {
		border: 1px solid var(--error);
	}
	.dmd-buscar label {
		color: var(--on-formulario);
		font-size: var(--font-label-size);
	}
	.dmd-buscar:focus-within label {
		color: var(--on-aplicacion);
		transition: all 0.3s ease-in-out;
	}
	.dmd-buscar div {
		color: var(--error);
		font-size: 0.7rem;
		display: none;
	}
	.dmd-buscar input[error] + div {
		display: grid;
	}
	input::placeholder {
		/* Firefox, Chrome, Opera */
		color: var(--on-formulario-disabled);
	}
	.dmd-buscar span {
		margin-left: 0.5rem;
		font-size: 0.7rem;
		display: none;
	}
	.dmd-buscar[helper] span {
		display: grid;
	}
	.dmd-buscar[helper] input[error] ~ span {
		display: none;
	}
	.dmd-buscar svg {
		display: none;
		position: absolute;
		top: 0.4rem;
		right: 0.1rem;
		height: 1.1rem;
		width: 1.1rem;
		transform: translateY(-50%) scale(0.9);
		fill: var(--error);
	}
	.dmd-buscar input[error] ~ svg {
		display: grid;
	}
	.dmd-buscar img {
		position: absolute;
		top: 1.4rem;
		right: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
		cursor: pointer;
		outline: none;
	}
`;

/*
Como Usarlo 
--Importarlo
import { dmdBuscar } from "../css/dmdBuscar";
---------------------------------------------------
--Cargarlo
${dmdBuscar}
---------------------------------------------------
--HTML en el Render ( Tiene que tener el svg INFO )
--buscar
	<div class="dmd-buscar" helper>
		<img
			@click="${this.mostrar}"
			tabindex="1"
			src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg=="
		/>
		<label>Busqueda</label>
		<input type="text" id="cuatro" @click="${this.mostrar}" autocomplete="off" placeholder="Seleccione Opcion dsdsds sd dsd sds ds" value="" readonly />
		<div>Debe cargar Nombre</div>
		<span>En centimetros</span>
		${SVGS["INFO"]}
	</div>
---------------------------------------------------
-- colores usados
	--color-control-texto
	--color-control-fondo
	--color-error
	--color-primario
---------------------------------------------------
-- fuente
	--font-bajada-size
Como recorrer todos estos input
	[].forEach.call(this.shadowRoot.querySelectorAll("Input"), (element) => {
		element.value="";
	});

Como recorrer todos estos input que estan con error
	[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
		element.removeAttribute("error");
	});

*/
