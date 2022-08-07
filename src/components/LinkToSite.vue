<template>
	<div class="link">
		<g-image
			:alt="linkdata.title"
			v-if="linkdata.icon"
			class="image"
			:src="linkdata.icon"
			fit="contain"
			background="red"
		/>

		<span
			><a :href="linkdata.URL" target="_blank" rel="nofollow noopener noreferrer">
				{{ linkdata.title }}
			</a>
			<p v-html="linkdata.description"></p
		></span>
	</div>
</template>

<script>
import IconBase from "~/components/SVGFreeBase.vue";

export default {
	components: { IconBase },
	props: ["linkdata"],
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_layout.scss";
.link {
	display: flex;
	flex-direction: row;
	gap: var(--space-sm);
	@include mQ-max($display-size-sm) {
		align-items: start;
	}
	.image {
		box-shadow: var(--shadow-sm);
		width: auto;
		height: var(--space-4xl);
		border-radius: var(--radius);
	}
	* {
		margin-bottom: unset;
	}
	span {
		display: flex;
		gap: var(--space-3xs);
		flex-direction: column;
	}
	a {
		font-size: var(--font-size-xl);
		width: fit-content;
	}
	p {
		font-size: var(--font-size-md);
	}
}
</style>
