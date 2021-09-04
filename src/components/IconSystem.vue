<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		aria-labelledby="title"
		role="presentation"
		:width="width"
		:height="height"
		:fill="iconColor"
	>
		<slot />
		<rect id="Bounding box" fill="none" width="100%" height="100%"/>
	</svg>
</template>

<script>
export default {
	props: {
		width: {
			type: [Number, String],
			default: "1.5em",
		},
		height: {
			type: [Number, String],
			default: "1.5em",
		},
		iconColor: {
			type: String,
			default: "var(--system-color)",
		},
	},
};
</script>

<style lang="scss" scoped>
svg {
	transition: fill 0.35s ease-out;
	&:hover {
		fill: var(--system-color-HL);
	}
}
</style>
