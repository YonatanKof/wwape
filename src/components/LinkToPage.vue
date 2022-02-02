<template>
	<g-link class="link-to-page unlink" :to="linkToPage">
		<h3 class="link-to-page__title">{{ linkTitle }}</h3>
		<slot />
	</g-link>
</template>

<script>
export default {
	props: ["linkTitle", "linkToPage"],
};
</script>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_shadow.scss";

.link-to-page {
	display: inline-block;
	@include content-box(0);
	@include content-box-Hover;
	width: 100%;
	text-align: center;
	&__title {
		pointer-events: none;
		margin: var(--space-4xl);
		position: relative;
		z-index: 100;
	}
	svg {
		display: flow-root;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
