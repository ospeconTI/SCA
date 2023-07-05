import { css } from "lit";

export const animaciones = css`
	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
	@keyframes altaPlan {
		from {
			background-color: var(--formulario);
		}

		to {
			background-color: var(--on-formulario);
		}
	}
`;
