<template>
	<article class="design-card">
		<h2 class="-title">{{ designData.title }}</h2>
		<g-image
			:alt="designData.cover_caption"
			v-if="designData.cover_image"
			class="-image"
			:src="designData.cover_image"
			fit="contain"
			position="left bottom"
			background="red"
			width="100"
		/>
		<g-link class="-link" :to="designData.path"> </g-link>
	</article>
</template>

<script>
export default {
	props: ["designData"],
};
</script>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_shadow.scss";

.design-card {
	@include content-box($display-size-xs);
	@include content-box-Hover;
    margin-block-end: var(--content-space);
    -webkit-column-break-inside: avoid;
	break-inside: avoid;
	> .-title {
		text-align: center;
		margin: var(--space-md);
		margin-top: var(--space-xl);
		font-size: var(--font-size-lg);
	}
}
</style>
