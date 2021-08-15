<template>
	<g id="grid-item" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<defs>
			<path
				id="star-3"
				d="M119.421223,209.856802 L54.5618946,231.942943 C50.3794575,233.367162 45.8343645,231.131185 44.4101453,226.948748 C44.1152242,226.082667 43.9710542,225.172413 43.9839071,224.257586 L44.9081715,158.471627 C44.9577988,154.939322 43.8370137,151.4899 41.7206279,148.661376 L2.3048658,95.9826863 C-0.342091267,92.4450602 0.379938677,87.4314649 3.91756482,84.7845078 C4.65012123,84.2363873 5.47127285,83.8179897 6.34529749,83.5475162 L69.1970759,64.0975646 C72.5718327,63.0532209 75.5060862,60.9213609 77.5421733,58.0344964 L115.462444,4.26926861 C118.008972,0.658676243 123.000304,-0.203918621 126.610896,2.34260906 C127.358562,2.86993306 128.010232,3.52160267 128.537556,4.26926861 L166.457827,58.0344964 C168.493914,60.9213609 171.428167,63.0532209 174.802924,64.0975646 L237.654703,83.5475162 C241.8755,84.8536736 244.238283,89.3341559 242.932126,93.5549536 C242.661652,94.4289783 242.243255,95.2501299 241.695134,95.9826863 L202.279372,148.661376 C200.162986,151.4899 199.042201,154.939322 199.091829,158.471627 L200.016093,224.257586 C200.078162,228.675428 196.54711,232.307113 192.129268,232.369182 C191.21444,232.382034 190.304187,232.237864 189.438105,231.942943 L124.578777,209.856802 C122.906734,209.287431 121.093266,209.287431 119.421223,209.856802 Z"
			/>
			<ellipse id="Oval-3" cx="65%" cy="120%" rx="90%" ry="70%" />
		</defs>
		<rect id="Rect" width="100%" height="100%" rx="0.3em" ry="0.3em" />
		<use class="star-3" href="#star-3" />
		<use class="Oval-3" href="#Oval-3" />
	</g>
</template>

<style lang="scss" scoped>
@import "~/assets/style/_layout.scss";
$color-me-bad: RosyBrown;

#Rect {
	fill: transparentize($color-me-bad, 0.85);
	stroke: $color-me-bad;
	stroke-width: 2;
}
.star-3 {
	fill: transparentize($color-me-bad, 0.85);
	transform-origin: 50% 50%;
	transform: scale(.6) translate(-50%, -50%) rotateZ(-10deg);
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(.64) translate(-50%, -50%) rotateZ(-15deg);
		fill: transparentize($color-me-bad, 0.8);
	}
	@include mQ-max($display-size-sm) {
		transform: scale(1) translate(5%, -30%);
		&:hover {
			transform: scale(1.04) translate(5%, -30%);
		}
	}
}
.Oval-3 {
	fill: transparentize($color-me-bad, 0.85);
	transform-origin: 150% -150%;
	transform: scale(0.72) rotateZ(-5deg);
	transition: fill 0.35s ease-in-out, transform 0.5s ease-in-out;
	&:hover {
		transform: scale(0.77) rotateZ(-2deg);
		fill: transparentize($color-me-bad, 0.8);
	}
}
</style>
