<template>
    <Layout :show-logo="true">
        <!-- Author intro -->
        <Author
            :show-title="true"
            :author-title="$static.metadata.siteName"
            :show-bio-text="true"
            author-bio='🚨 UNDER CONSTRUCTION 🚨 I help individuals &amp; organizations get 💩 done while keeping it agile &amp; keeping it real. I love creating things from nothing, concepts form conversetions &amp; products from ideas'
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
            title: "Index page of Yonatan Ben Knaan's website",
            meta: [
                {
                    name: "description",
                    content: this.$static.metadata.siteDescription,
                },
                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:description",
                    content: this.$static.metadata.siteDescription,
                },
                { name: "twitter:title", content: this.$static.metadata.siteName},
                { name: "twitter:site", content: "@yonatankof" },
                { name: "twitter:image", content: "https://wwape.com/social-cover-main.jpg" },
                { name: "twitter:creator", content: "@yonatankof" },
            ],
        };
    },
};
</script>
