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

		<a :href="linkdata.URL">
			{{ linkdata.title }}
		</a>
		<p v-html="linkdata.description"></p>
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
.link {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	.image {
		width: auto;
		height: 3rem;
	}
	* {
		margin-bottom: unset;
	}
	a {
		font-size: var(--font-size-3xl);
	}
	p {
		font-size: var(--font-size-lg);
	}
}
</style>
