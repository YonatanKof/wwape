<template>
    <Layout>
        <Author
            :show-title="true"
            v-bind:author-title="$page.design.title"
            :show-bio-text="true"
            v-bind:author-bio="$page.design.description"
        />
        <VueRemarkContent />
    </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
    },
  
};
</script>

<page-query>
query Design ($id: ID!) {
  design: design (id: $id) {
    title
    urlname
    author_name
    cover_image (width: 800, blur: 10)
    cover_caption
  }
}
</page-query>
