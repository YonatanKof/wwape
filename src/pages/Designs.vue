<template>
	<Layout :show-logo="true" :show-posts="true">
		<Author
			:show-title="true"
			author-title="Design"
			:show-bio-text="true"
			author-bio="Some designs by the kof himself"
		/>
		<div class="design-grid">
			<DesignCard v-for="edge in $page.designs.edges" :key="edge.node.id" :designData="edge.node" />
		</div>
		<Pagination :paginationInfo="$page.designs.pageInfo" />
	</Layout>
</template>

<page-query>
query ($page: Int) {
  designs: allDesign(
        perPage: 12, page: $page
        filter: { published: { eq: true }} 
        sortBy: "date", order: DESC
    ) @paginate {   
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        cover_image (width: 900, quality: 90, blur: 10, background: "#999")
        cover_caption
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import DesignCard from "~/components/DesignCard.vue";
import Pagination from "~/components/Pagination.vue";

export default {
	components: {
		Author,
		DesignCard,
		// Pager,
		Pagination,
	},

	data() {
		return {
			about: `I like to illustrate and to design, and here is where its at. In this page you'll be able to see stuff I'm uploading to the ${
				process.env.GRIDSOME_SITE_NAME
			}`,
			postTitle: `Illustrations and designs by ${process.env.GRIDSOME_AUTHOR}`,
			pageName: "designs",
		};
	},
	metaInfo() {
		return {
			title: this.$data.postTitle,
			link: [
				{
					rel: "canonical",
					href: process.env.GRIDSOME_BASE_URL,
				},
			],
			meta: [
				{
					name: "description",
					content: this.$data.about,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:description",
					content: this.$data.about,
				},
				{
					name: "twitter:title",
					content: this.$data.postTitle,
				},
				{
					name: "twitter:site",
					content: "@yonatankof",
				},
				{
					name: "twitter:image",
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-${this.$data.pageName}.jpg`,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: process.env.GRIDSOME_BASE_URL + this.$data.pageName,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:title",
					content: this.$data.postTitle,
				},
				{
					property: "og:description",
					content: this.$data.about,
				},
				{
					property: "og:image",
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-${this.$data.pageName}.jpg`,
				},
				{
					property: "og:image:width",
					content: 1200,
				},
				{
					property: "og:image:height",
					content: 630,
				},
				{
					property: "og:image:alt",
					content: `Cover image for this ${this.$data.pageName} page showing the Website name (${
						process.env.GRIDSOME_SITE_NAME
					}), page name (${this.$data.pageName} By ${process.env.GRIDSOME_AUTHOR}) and the Kof icon`,
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/style/_layout.scss";

.design-grid {
    display: block;
	columns: 3;
	column-gap: var(--content-space);
	max-width: var(--content-width-lg);
	@include mQ-max($display-size-md) {
		column-count: 2;
		column-gap: calc(var(--content-space) * 0.75);
	}
	@include mQ-max($display-size-xs) {
		column-count: 1;
	}
}
</style>
