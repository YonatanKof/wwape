<template>
	<g id="grid-item" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<rect id="Rect" width="100%" height="100%" rx="var(--radius)" ry="var(--radius)" />
		<path
			id="Polygon"
			d="M103.122935,-72.4637973 L185.629374,-38.2885114 C189.549823,-36.6646081 192.664608,-33.5498231 194.288511,-29.6293738 L228.463797,52.8770651 C230.087701,56.7975145 230.087701,61.2024855 228.463797,65.1229349 L194.288511,147.629374 C192.664608,151.549823 189.549823,154.664608 185.629374,156.288511 L103.122935,190.463797 C99.2024855,192.087701 94.7975145,192.087701 90.8770651,190.463797 L8.37062624,156.288511 C4.45017685,154.664608 1.33539194,151.549823 -0.288511363,147.629374 L-34.4637973,65.1229349 C-36.0877006,61.2024855 -36.0877006,56.7975145 -34.4637973,52.8770651 L-0.288511363,-29.6293738 C1.33539194,-33.5498231 4.45017685,-36.6646081 8.37062624,-38.2885114 L90.8770651,-72.4637973 C94.7975145,-74.0877006 99.2024855,-74.0877006 103.122935,-72.4637973 Z"
		/>
		<ellipse id="Oval" cx="286.5" cy="274" rx="140" ry="120" />
	</g>
</template>

<style lang="scss" scoped>
$color-me-bad: GoldenRod;
#Rect {
	fill: transparentize($color-me-bad, 0.85);
	stroke: $color-me-bad;
	stroke-width: var(--space-3xs);
}
#Polygon {
	fill: transparentize($color-me-bad, 0.85);
	transform: scale(0.67) translate(-8%, 50%) rotateZ(-8deg);
	transform-origin: 50% 50%;
	transition: fill 0.35s ease-in-out, transform 0.75s ease-in-out;
	&:hover {
		transform: scale(0.77) translate(-7%, 48%) rotateZ(-16deg);
		fill: transparentize($color-me-bad, 0.8);
	}
}
#Oval {
	fill: transparentize($color-me-bad, 0.85);
	transform: scale(0.62) translate(10%, -200%) rotateZ(25deg);
	transform-origin: 50% 50%;
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(0.67) translate(10%, -200%) rotateZ(22deg);
		fill: transparentize($color-me-bad, 0.8);
	}
}
</style>
