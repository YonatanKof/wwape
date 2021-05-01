<template>
    <Layout :show-logo="true">
        <!-- Author intro -->
        <Author
            :show-title="true"
            :author-title="$static.metadata.siteName"
            :show-bio-text="true"
            author-bio="🚨 UNDER CONSTRUCTION 🚨 I help individuals &amp; organizations get 💩 done while keeping it agile &amp; keeping it real. I love creating things from nothing, concepts form conversetions &amp; products from ideas"
        />
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
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
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
                    }), author name (${
                        process.env.GRIDSOME_AUTHOR
                    }) and the Kof icon`,
                },
            ],
        };
    },
};
</script>
