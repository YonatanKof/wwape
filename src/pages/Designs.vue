<template>
    <Layout :show-logo="true" :show-posts="true">
        <Author
            :show-title="true"
            author-title="Design"
            :show-bio-text="true"
            author-bio="Some designs by the kof himself"
        />
        <div class="design-grid">
            <DesignCard
                v-for="edge in $page.designs.edges"
                :key="edge.node.id"
                :designData="edge.node"
            />
        </div>
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

export default {
    components: {
        Author,
        DesignCard,
    },
};
</script>

<style lang="scss">
@import "../assets/style/_layout.scss";

.design-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
    max-width: var(--content-width-md);
    @include mQ-max($display-size-sm) {
        grid-template-columns: repeat(2, 1fr);
    }
    @include mQ-max($display-size-xs) {
        grid-template-columns: 1fr;
    }
}
</style>