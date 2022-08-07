<template>
	<Layout :show-logo="true" :show-posts="true">
		<section class="about">
			<IntroForPage :intro-script="$data.scriptTitle" :intro-title="$data.myName" :intro-subtitle="about" />
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
			about: `A family man & lover, a design system manager & maker, a mismatched persona & an alright dude from TLV 🏴🇮🇱`,
			webLinks: [
				{
					URL: "https://wwape.com/",
					title: "World Wide Ape",
					description: "This site is <em>Under Construction</em>",
					icon: "../icon/weblink-1.svg",
				},
				{
					URL: "https://yonatankof.com/",
					title: "Yonatan Kof",
					description: "Showcasing UX/UI",
					icon: "../icon/weblink-2.svg",
				},
				{
					URL: "https://design.yonatankof.com/",
					title: "Kof Art",
					description: "Archival site for my <em>art</em> & <em>design</em>",
					icon: "../icon/weblink-3.svg",
				},
				{
					URL: "https://www.notion.so/yonatankof/Yonatan-Ben-Knaan-CV-615078174644460db169c928cd409f9e",
					title: "My CV",
					description: "Learn how I lead design and successfully ship products to market for more than 13 years",
					icon: "../icon/weblink-4.svg",
				},
			],
			socialLinks: [
				{
					URL: "https://dribbble.com/yonatan_kof",
					title: "Dribbble",
					description: "Assorted designs",
					icon: "../icon/dribbble.svg",
				},
				{
					URL: "https://twitter.com/yonatankof",
					title: "Twitter",
					description: "Zero influence",
					icon: "../icon/twitter.svg",
				},
				{
					URL: "https://github.com/YonatanKof",
					title: "GitHub",
					description: "A profile of an aspiring developer",
					icon: "../icon/github.svg",
				},
				{
					URL: "https://www.last.fm/user/oMonkey",
					title: "Last.fm",
					description: "Scrobbling since 2006",
					icon: "../icon/lastfm.svg",
				},
				{
					URL: "https://www.mixcloud.com/yonatankof",
					title: "MixCloud",
					description: "Leftfield mixed music",
					icon: "../icon/mixcloud.svg",
				},
				{
					URL: "https://bandcamp.com/yoantankof",
					title: "Bandcamp",
					description: "Fuck the middle men",
					icon: "../icon/bandcamp.svg",
				},
				{
					URL: "https://www.linkedin.com/in/yonatankof/",
					title: "Linkedin",
					description: "Life as a pro",
					icon: "../icon/linkedin.svg",
				},
				{
					URL: "https://abu-kof.tumblr.com/",
					title: "Tumblr",
					description: "We go way back",
					icon: "../icon/tumblr.svg",
				},
				{
					URL: "https://www.instagram.com/yonatan_kof/",
					title: "Instagram",
					description: "Love-hate relationship",
					icon: "../icon/instagram.svg",
				},
				{
					URL: "https://www.tiktok.com/@abu.kof",
					title: "TikTok",
					description: 'A few "what?" monentes',
					icon: "../icon/tiktok.svg",
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
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-about.jpg`,
				},
				{
					name: "twitter:creator",
					content: "@yonatankof",
				},
				{
					property: "og:url",
					content: this.$static.metadata.siteUrl + "/about",
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
					content: `${process.env.GRIDSOME_BASE_URL}/social-cover-about.jpg`,
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
	max-width: var(--content-width-xs);
	&__links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4xl);
		@include mQ-max($display-size-xs) {
			grid-template-columns: unset;
			grid-template-rows: auto;
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
