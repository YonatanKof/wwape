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
    description
  }
}
</page-query>
