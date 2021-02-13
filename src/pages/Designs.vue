<template>
    <Layout :show-logo="true" :show-posts="true">
        <Author
            :show-title="true"
            author-title="Design"
            :show-bio-text="true"
            author-bio="Some designs by the kof himself"
        />
        <DesignCard
            v-for="edge in $page.designs.edges"
            :key="edge.node.id"
            :designData="edge.node"
        />
    </Layout>
</template>

<page-query>
query {
  designs: allDesign {
    edges {
      node {
        id
        title
        path
        author_name
        cover_image (width: 800, blur: 10)
        cover_caption
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import DesignCard from "~/components/DesignCard.vue";

export default {
    components: {
        Author,
        DesignCard,
    },
};
</script>