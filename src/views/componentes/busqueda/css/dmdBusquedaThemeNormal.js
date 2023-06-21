import { css } from "lit";

export const dmdBusquedaThemeNormal = css`
	.dmd-busqueda {
		border: 1px solid var(--on-formulario);
		border-radius: 0.3rem;
		user-select: none; /* Chrome */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
	}
	.dmd-busqueda-cabecera {
		background: var(--primario);
		color: var(--on-primario);
		font-size: 0.8rem;
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		z-index: 3;
	}
	.dmd-busqueda-cabecera-cerrar svg {
		fill: var(--on-primario);
		width: 1.2rem;
		height: 1.2rem;
		cursor: pointer;
	}
	.dmd-busqueda-datos {
		background-color: var(--formulario10);
	}
	.dmd-busqueda-datos-titulos {
		background-color: var(--primario10);
		color: var(--negro);
		font-size: 0.9rem;
	}
	.dmd-busqueda-datos-titulo,
	.dmd-busqueda-datos-titulo label {
		cursor: pointer;
	}
	.dmd-busqueda-datos-titulo[ascendente],
	.dmd-busqueda-datos-titulo[ascendente] label,
	.dmd-busqueda-datos-titulo[descendente],
	.dmd-busqueda-datos-titulo[descendente] label {
		background: var(--primario);
		color: var(--on-primario);
	}

	.dmd-busqueda-datos-registros {
		background-color: transparent;
		color: var(--on-formulario);
		border-bottom: 1px solid var(--on-formulario-separador);
		font-size: 0.9rem;
	}
	.dmd-busqueda-datos-registros[seleccionado] {
		background-color: var(--on-formulario-separador);
		background: var(--on-formulario-separador);
		color: var(--negro);
	}
	.dmd-busqueda-datos-registros:hover {
		border-bottom: 1px solid var(--primario);
		color: var(--primario);
	}
`;
