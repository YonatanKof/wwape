<template>
	<section class="page-intro">
		<p class="title-script" v-html="introScript">{{introScript}}</p>
		<h1 class="title" v-html="introTitle">{{ introTitle }}</h1>
		<h2 class="subtitle">{{ introSubtitle }}</h2>
		<Hr hr-margin-bottom="var(--spacem-2xl)" />
	</section>
</template>

<script>
import Hr from "~/components/Hr.vue";

export default {
	components: {
		Hr,
	},
	props: ["introTitle", "introSubtitle", "introScript"],
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_layout.scss";
.page-intro {
	margin-top: var(--spacem-6xl);
    position: relative;
}

.title {
	font-size: var(--font-size-9xl);
	@include mQ-max($display-size-sm) {
		font-size: var(--font-size-8xl);
	}
}
.subtitle {
	border-left: var(--spacem-xs) double var(--link-color-HL);
	padding: var(--spacem-2xs) 0 var(--spacem-2xs) var(--spacem-xs);
	font-weight: var(--font-wight--bold);
	font-family: var(--font-family--body);
	@include mQ-max($display-size-sm) {
		font-size: var(--font-size-5xl);
	}
}

.title-script {
	font-family: var(--font-family--hand);
	line-height: 1.1em;
	opacity: 0.8;
	transform: rotateZ(-12deg);
    transform-origin: top left;
	width: max-content;
	position: absolute;
	left: calc(var(--space-lg) * -1);
	top: calc(var(--space-2xl) * -1);
	font-weight: 600;
}
</style>
