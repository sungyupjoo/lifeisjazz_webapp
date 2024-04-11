import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -3%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
}`;

const fadeOut = keyframes`
from {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}
to {
	opacity: 0;
	transform: translate3d(0, 0, 0);
}
`;

const bounce = keyframes`
0% {
  transform: translateY(-40px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

export { fadeIn, fadeOut, bounce };
