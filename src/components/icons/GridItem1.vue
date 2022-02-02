<template>
	<svg width="100%" height="100%" viewBox="0 0 100% 100%">
		<g id="grid-item" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
			<rect id="Rect" width="100%" height="100%" rx="0.3em" ry="0.3em" />
			<path
				id="Polygon"
				d="M69.404564,-89.1671843 L178.037009,-10.241093 C183.644808,-6.16678886 185.991338,1.0550883 183.849349,7.64745084 L142.355448,135.352549 C140.213459,141.944912 134.070164,146.408277 127.138543,146.408277 L-7.13854336,146.408277 C-14.0701635,146.408277 -20.2134592,141.944912 -22.3554476,135.352549 L-63.8493494,7.64745084 C-65.9913378,1.0550883 -63.6448077,-6.16678886 -58.0370091,-10.241093 L50.595436,-89.1671843 C56.2032345,-93.2414884 63.7967655,-93.2414884 69.404564,-89.1671843 Z"
			/>
			<circle id="Oval" cx="75%" cy="100%" r="50%" />
		</g>
	</svg>
</template>

<style lang="scss" scoped>
@import "~/assets/style/_layout.scss";
$color-me-bad: DarkSalmon;

#Rect {
	fill: transparentize($color-me-bad, 0.85);
	stroke: $color-me-bad;
	stroke-width: 2;
}
#Polygon {
	fill: transparentize($color-me-bad, 0.85);
	transform: scale(0.6) translate(5%, 20%) rotateZ(-5deg);
	transform-origin: 50% 40%;
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(0.65) translate(10%, 25%) rotateZ(-9deg);
		fill: transparentize($color-me-bad, 0.8);
	}
	@include mQ-max($display-size-sm) {
		transform: scale(0.9) translate(15%, 50%);
		&:hover {
			transform: scale(1) translate(15%, 50%);
		}
	}
}
#Oval {
	fill: transparentize($color-me-bad, 0.85);
	transform: scale(0.8) translate(-7%, 8%);
	transform-origin: 50% 50%;
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(0.9) translate(-6%, 10%);
		fill: transparentize($color-me-bad, 0.8);
	}
}
</style>
