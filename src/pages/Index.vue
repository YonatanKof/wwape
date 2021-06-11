<template>
	<Layout :show-logo="true">
		<main class="main-page">
			<IntroForPage
				:intro-script="$data.scriptTitle"
				:intro-title="$static.metadata.siteName"
				:intro-subtitle="$static.metadata.siteDescription"
			/>
		</main>
	</Layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    siteUrl
  }
}
</static-query>

<script>
import IntroForPage from "~/components/IntroForPage.vue";

export default {
	components: {
		IntroForPage,
	},
	data() {
		return {
			// scriptTitle: `A Website By <br /> ${process.env.GRIDSOME_AUTHOR}`,
			scriptTitle: "Hi There 👋 <br /> Welcome To The",
		};
	},
	metaInfo() {
		return {
			title: `Index page for ${this.$static.metadata.siteName}, ${process.env.GRIDSOME_AUTHOR}'s website`,
			link: [
				{
					rel: "canonical",
					href: this.$static.metadata.siteUrl,
				},
			],
			meta: [
				{
					name: "description",
					content: this.$static.metadata.siteDescription,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:description",
					content: this.$static.metadata.siteDescription,
				},
				{
					name: "twitter:title",
					content: this.$static.metadata.siteName,
				},
				{
					name: "twitter:site",
					content: "@yonatankof",
				},
				{
					name: "twitter:image",
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-index.jpg`,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: this.$static.metadata.siteUrl,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:title",
					content: this.$static.metadata.siteName,
				},
				{
					property: "og:description",
					content: this.$static.metadata.siteDescription,
				},
				{
					property: "og:image",
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-index.jpg`,
				},
				{
					property: "og:image:width",
					content: 600,
				},
				{
					property: "og:image:height",
					content: 315,
				},
				{
					property: "og:image:alt",
					content: `Cover image for this website showing the Website name (${
						process.env.GRIDSOME_SITE_NAME
					}), author name (${process.env.GRIDSOME_AUTHOR}) and the Kof icon`,
				},
			],
		};
	},
};
</script>
<style lang="scss">
.main-page {
	max-width: var(--content-width-md);
	display: flex;
	flex-direction: column;
}
</style>
