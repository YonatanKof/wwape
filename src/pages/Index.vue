<template>
    <Layout :show-logo="true">
        <!-- Author intro -->
        <Author
            :show-title="true"
            :author-title="$static.metadata.siteName"
            :show-bio-text="true"
            author-bio="I help individuals &amp; organizations get 💩 done while keeping it agile &amp; keeping it real. I love creating things from nothing, concepts form conversetions &amp; products from ideas"
            
        />
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
    },
    metaInfo: {
        title: "World Wide Ape by Yonatan Ben Knaan",
    },
};
</script>