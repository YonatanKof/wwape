<template>
	<div class="author">
		<h1 v-if="showTitle" class="author__site-title">{{ authorTitle }}</h1>
		<p v-if="showBioText" class="author__intro">{{ authorBio }}</p>
	</div>
</template>

<script>
export default {
	props: ["showTitle", "showBioText", "authorTitle", "authorBio"],
};
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: calc(var(--spacem-8xl) * 6);
	text-align: center;
	padding: var(--spacem-md) var(--content-space) var(--spacem-2xs);
	@media screen and (max-width: 480px) {
		// Remove padding on small screens
		padding: var(--spacem-md) 0;
	}
	&__logo {
		width: calc(var(--spacem-7xl) * 2);
		height: calc(var(--spacem-7xl) * 2);
		margin-bottom: var(--spacem-md);
	}
	&__intro {
		font-size: var(--font-size--big);
	}
	&__site-title {
		margin: 0;
	}
}
</style>
