<template>
	<Layout>
		<Author
			:show-title="true"
			v-bind:author-title="$page.post.title"
			:show-bio-text="true"
			v-bind:author-bio="$page.post.description"
		/>
		<div class="post-title">
			<!-- <h2 class="post-title__text">{{ $page.post.title }}</h2> -->
			<PostMeta :postmeta="$page.post" />
		</div>
		<div class="post-body">
			<g-image
				class="-image"
				v-if="$page.post.cover_image"
				:src="$page.post.cover_image"
				:alt="$page.post.cover_caption"
			/>
			<div class="-content">
				<VueRemarkContent />
				<PostTags :posttags="$page.post" />
			</div>
		</div>
		<div class="post-comments">
			<!-- Add comment widgets here -->
		</div>
	</Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
	components: {
		Author,
		PostMeta,
		PostTags,
	},
	metaInfo() {
		return {
			// keywords: this.$page.post.tags,
			title: this.$page.post.title + " by " + this.$page.post.author_name,
			link: [
				{
					rel: "canonical",
					href: process.env.GRIDSOME_BASE_URL + "/post/" + this.$page.post.urlname,
					// href: this.getPostURL,
				},
			],
			meta: [
				{
					name: "description",
					content: this.$page.post.description,
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:description",
					content: this.$page.post.description,
				},
				{
					name: "twitter:title",
					content: this.$page.post.title,
				},
				{
					name: "twitter:site",
					content: "@yonatankof",
				},
				{
					name: "twitter:image",
					content: process.env.GRIDSOME_BASE_URL + this.$page.post.social_image.src,
				},
				{
					name: "twitter:image:alt",
					content: this.$page.post.cover_caption,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: process.env.GRIDSOME_BASE_URL + "/post/" + this.$page.post.urlname,
				},
				{
					property: "og:type",
					content: "article",
				},
				{
					property: "og:title",
					content: this.$page.post.title,
				},
				{
					property: "og:description",
					content: this.$page.post.description,
				},
				{
					property: "og:image",
					content: process.env.GRIDSOME_BASE_URL + this.$page.post.social_image.src,
					
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
					content: this.$page.post.cover_caption,
				},
			],
		};
	},
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    urlname
    author_name
    date (format: "MMM D, YYYY")
    # timeToRead
    tags {
      id
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
    social_image (width: 1200, height: 630, quality: 90, background: "#999")
    cover_caption
  }
}
</page-query>

<style lang="scss">
@import "../assets/style/_layout.scss";
@import "../assets/style/_content-box.scss";
@import "../assets/style/_content-main.scss";

.post-title {
	padding-bottom: var(--space-xl);
	text-align: center;
}
.post-body {
	@include content-box($display-size-sm);
	@include content-main;
	max-width: var(--content-width-sm);
}
.post-comments {
	padding: calc(var(--content-space) / 2);
	&:empty {
		display: none;
	}
}
</style>
