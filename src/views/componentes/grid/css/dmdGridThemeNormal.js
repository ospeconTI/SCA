import { css } from "lit";

export const dmdGridThemeNormal = css`
	*[hidden] {
		display: none;
	}
	.dmd-grid {
		border: 1px solid var(--formulario);
		user-select: none; /* Chrome */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
	}
	.dmd-grid-cabecera {
		background: var(--primario);
		color: var(--formulario);
		font-size: 0.8rem;
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		z-index: 3;
	}
	.dmd-grid-cabecera svg {
		fill: var(--formulario);
		width: 1.8rem;
		height: 1.8rem;
	}
	.dmd-grid-cuerpo[anchocero] {
		grid-template-columns: 0 1fr;
	}
	.dmd-grid-cuerpo[anchocero] .dmd-grid-menu {
		visibility: hidden;
	}

	.dmd-grid-menu {
		background-color: var(--formulario);
		border-right: 1px solid var(--formulario);
		color: var(--on-formulario);
		width: 100%;
		font-size: 0.8rem;
		-webkit-box-shadow: 6px 0px 19px -4px rgba(0, 0, 0, 0.1);
		box-shadow: 6px 0px 19px -4px rgba(0, 0, 0, 0.1);
		z-index: 2;
	}
	.dmd-grid-menu svg {
		fill: var(--on-formulario);
	}
	.dmd-grid-menu div:hover {
		background-color: var(--primario10);
		color: var(--primario-10);
	}
	.dmd-grid-menu div:hover svg {
		fill: var(--primario-10);
	}
	.dmd-grid-datos {
		background-color: var(--formulario);
	}
	.dmd-grid-datos-titulos {
		background-color: var(--terciario);
		background: var(--terciario);
		color: var(-on-formulario);
	}
	.dmd-grid-datos-titulo {
		font-size: 1rem;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden],
	.dmd-grid-datos-titulo[dmd-grid-orden] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente] label {
		cursor: pointer;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente] label {
		background: var(--terciario-10);
		color: var(--on-terciario);
	}

	.dmd-grid-datos-registros {
		background-color: var(--formulario);
		color: var(--on-formulario);
		border-top: 1px solid var(--on-formulario);
		border-bottom: 1px solid var(--on-formulario);
		font-size: 0.9rem;
	}
	.dmd-grid-datos-registros:hover {
		background-color: var(--secundario);
		background: var(--secundario);
		color: var(--on-secundario);
		border-top: 1px solid var(--secundario);
		border-bottom: 1px solid var(--secundario);
	}
	.dmd-grid-datos-registros[seleccionado] {
		background-color: var(--primario);
		background: var(--primario);
		color: var(--on-primario);
		border-top: 1px solid var(--primario-10);
		border-bottom: 1px solid var(--primario-10);
	}
	.dmd-grid-cabecera-find {
		display: grid;
		position: absolute;
		width: 45%;
		grid-template-columns: 1fr auto auto;
		grid-gap: 0.3rem;
		right: 0.3rem;
		justify-content: right;
		background-color: transparent;
	}
	.dmd-grid-cabecera-find svg {
		background-color: transparent;
		border-radius: 0.4rem;
		width: 1.6rem;
		height: 1.6rem;
	}
	.dmd-grid-cabecera-find input {
		width: 95%;
		border: 1px solid var(--formulario);
		border-radius: 0.4rem;
		font-size: 1rem;
		text-decoration: none;
		justify-self: right;
	}
	.dmd-grid-cabecera-find-buscar {
		justify-self: right;
	}
	.dmd-grid-formulario {
		display: grid;
		position: relative;
		padding: 1.5rem 2rem;
		margin-top: 2rem;
		grid-gap: 0.4rem;
		background-color: var(--formulario);
		border-radius: 0.4rem;
		overflow: auto;
		height: fit-content;
		width: fit-content;
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		justify-items: flex-end;
	}
	.dmd-grid-formulario label {
		color: var(--on-formulario);
		font-family: var(--font-header-h2-family);
		font-size: var(--font-header-h2-size);
	}
	.dmd-grid-formulario input {
		color: var(--on-formulario);
		font-family: var(--font-label-family);
		font-size: var(--font-label-size);
		font-weight: 600;
	}
`;
