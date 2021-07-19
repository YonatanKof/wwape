<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:fill="iconColor"
		viewBox="0 0 24 24"
		role="presentation"
	>
		<g>
			<slot />
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		width: {
			type: [Number, String],
			default: 24,
		},
		height: {
			type: [Number, String],
			default: 24,
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
    opacity: 0.75;
    transition: opacity 0.35s ease-out;
	&:hover {
		opacity: 1;
	}
}
</style>
