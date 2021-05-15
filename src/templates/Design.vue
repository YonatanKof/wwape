<template>
	<Layout>
		<Author
			:show-title="true"
			v-bind:author-title="$page.design.title"
			:show-bio-text="true"
			v-bind:author-bio="$page.design.description"
		/>
		<main class="design-body">
			<section class="-content">
				<VueRemarkContent />
			</section>
		</main>
	</Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
	components: {
		Author,
	},
	metaInfo() {
		return {
			title: this.$page.design.title,
			link: [
				{
					rel: "canonical",
					href: process.env.GRIDSOME_BASE_URL + "/design/" + this.$page.design.urlname,
				},
			],
			meta: [
				{
					name: "description",
					content: this.$page.design.description,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:description",
					content: this.$page.design.description,
				},
				{
					name: "twitter:title",
					content: this.$page.design.title,
				},
				{
					name: "twitter:site",
					content: "@yonatankof",
				},
				{
					name: "twitter:image",
					content: process.env.GRIDSOME_BASE_URL + this.$page.design.social_image.src,
				},
				{
					name: "twitter:image:alt",
					content: this.$page.design.cover_caption,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: process.env.GRIDSOME_BASE_URL + "/design/" + this.$page.design.urlname,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:title",
					content: this.$page.design.title,
				},
				{
					property: "og:description",
					content: this.$page.design.description,
				},
				{
					property: "og:image",
					content: process.env.GRIDSOME_BASE_URL + this.$page.design.social_image.src,
				},
				{
					property: "og:image:width",
					content: 1200,
				},
				{
					property: "og:image:alt",
					content: this.$page.design.description,
				},
			],
		};
	},
};
</script>

<page-query>
query Design ($id: ID!) {
  design: design (id: $id) {
    title
    description
    urlname
    social_image (width: 1200, height: 630, quality: 90, background: "#999")
    cover_caption
  }
}
</page-query>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_content-main.scss";
@import "../assets/style/_layout.scss";
.design-body {
	@include content-box($display-size-sm);
	@include content-main;
	max-width: $display-size-md;
}
</style>
