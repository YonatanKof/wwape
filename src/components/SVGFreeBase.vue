<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:stroke="stroke"
		:stroke-width="strokeWidth"
		:viewBox="viewBox"
		:aria-labelledby="iconName"
		role="presentation"
	>
		<title :id="iconName" lang="en">{{ iconName }}</title>
		<g :fill="iconColor">
			<slot />
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		iconName: {
			type: String,
			default: "",
		},
		width: {
			type: [Number, String],
			default: 24,
		},
		height: {
			type: [Number, String],
			default: 24,
		},
		viewBox: {
			type: String,
			default: "0 0 32 32",
		},
		iconColor: {
			type: String,
			default: "currentColor",
		},
		stroke: {
			type: String,
			default: "none",
		},
		strokeWidth: {
			type: [Number, String],
			default: "none",
		},
	},
};
</script>
