<template>
	<Layout :show-logo="false" :show-links="false">
		<section class="about">
			<IntroForPage :intro-script="$data.scriptTitle" :intro-title="$data.myName" :intro-subtitle="theText" />
			<div class="about__links">
				<div id="link-list">
					<h3>Sites</h3>
					<LinkToSite v-for="link in webLinks" :key="link.title" :linkdata="link" />
				</div>
				<div id="link-list">
					<h3>Social</h3>
					<LinkToSite v-for="link in socialLinks" :key="link.title" :linkdata="link" />
				</div>
			</div>
		</section>
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
import Hr from "~/components/Hr.vue";
import IconBase from "~/components/SVGFreeBase.vue";
import KofIcon from "~/components/icons/KofIcon.vue";
import LinkToSite from "~/components/LinkToSite.vue";

export default {
	components: {
		IntroForPage,
		Hr,
		IconBase,
		KofIcon,
		LinkToSite,
	},
	data() {
		return {
			scriptTitle: "Hi There 👋 <br /> My Name Is",
			myName: 'Yonatan <span class="grab-word">Ben Knaan</span>',
			about: `A mismatched persona and an alright dude from TLV 🇮🇱`,
			theText: "And here are some links from the World Wide Web",
			webLinks: [
				{
					URL: "https://wwape.com/",
					title: "World Wide Ape",
					description: "My <em>Under Construction</em> Website",
					// icon: "../icons/link-linkedin.svg",
				},
				{
					URL: "https://yonatankof.com/",
					title: "Yonatan Kof",
					description: "Showcasing UX/UI",
					// icon: "../icons/link-twitter.svg",
				},
				{
					URL: "https://design.yonatankof.com/",
					title: "Kof Art & Design",
					description: "An archival website showing some nice <em>art</em> and <em>design</em> work",
					// icon: "../assets/images/link-tumblr.svg",
				},
			],
			socialLinks: [
				{
					URL: "https://dribbble.com/yonatan_kof",
					title: "Dribbble",
					description: "Some assorted designs",
				},
				{
					URL: "https://twitter.com/yonatankof",
					title: "Twitter",
					description: "I don't Tweet a lot but if I do you can find it here",
				},
				{
					URL: "https://github.com/YonatanKof",
					title: "GitHub",
					description: "An aspiring developer for a while now",
				},
				{
					URL: "https://www.instagram.com/yonatan_kof/",
					title: "Instagram",
					description: "Some photos taken with my lovely cameras",
				},
				{
					URL: "https://www.tiktok.com/@abu.kof",
					title: "TikTok",
					description: "Some weird ass videos here",
				},
				{
					URL: "https://www.last.fm/user/oMonkey",
					title: "Last.fm",
					description: "Tracking my listening since 2006",
				},
				{
					URL: "https://bandcamp.com/yoantankof",
					title: "Bandcamp",
					description: "I love my music and Bandcamp has opened up my range",
				},
				{
					URL: "https://www.linkedin.com/in/yonatankof/",
					title: "Linkedin",
					description: "My pro life",
				},
			],
		};
	},
	metaInfo() {
		return {
			title: `About page for ${this.$static.metadata.siteName}, ${process.env.GRIDSOME_AUTHOR}'s website`,
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
					content: this.$static.metadata.siteName,
				},
				{
					name: "twitter:site",
					content: "@yonatankof",
				},
				{
					name: "twitter:image",
					content: `${process.env.GRIDSOME_BASE_URL}social-cover-about.jpg`,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: this.$static.metadata.siteUrl + "about",
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
					content: this.$data.about,
				},
				{
					property: "og:image",
					content: `${process.env.GRIDSOME_BASE_URL}social-cover-about.jpg`,
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
					content: `Cover image for this About page showing the Website name (${
						process.env.GRIDSOME_SITE_NAME
					}), the page name (About ${process.env.GRIDSOME_AUTHOR}) and the Kof icon`,
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/style/_layout.scss";

.about {
	max-width: var(--content-width-md);
	display: flex;
	flex-direction: column;

	&__links {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-4xl);
		@include mQ-max($display-size-sm) {
			flex-direction: column;
		}
		#link-list {
			display: flex;
			flex-direction: column;
			gap: var(--space-lg);
			@include mQ-max($display-size-sm) {
				font-size: var(--font-size-3xl);
			}
		}
	}
}
.grab-word {
	white-space: nowrap;
}
</style>
