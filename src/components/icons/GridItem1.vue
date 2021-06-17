<template>
	<g id="grid-item" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<polygon id="Polygon" points="60 -96 187.442 -3.408 138.763 146.408 -18.763 146.408 -67.442 -3.408" />
		<circle id="Oval" cx="75%" cy="100%" r="50%" />
	</g>
</template>

<style lang="scss" scoped>
#Polygon {
	fill: transparentize(salmon, 0.9);
	transform: scale(0.6) translate(5%, 20%) rotateZ(-5deg);
	transform-origin: 50% 50%;
	transition: fill 0.35s ease-in-out, transform 0.75s ease-in-out;
	&:hover {
		transform: scale(0.7) translate(10%, 10%) rotateZ(-8deg);
		fill: transparentize(salmon, 0.8);
	}
}
#Oval {
	fill: transparentize(salmon, 0.9);
	transform: scale(1);
	transform-origin: 50% 50%;
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2)  translate(-7%, -2%);
		fill: transparentize(salmon, 0.8);
	}
}
</style>
