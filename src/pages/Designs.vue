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

    data() {
        return {
          about: `I like to illustarte and to design, and here is where its at. In this Desisgns page you'll be able to see stuff I'm uploading to the ${process.env.GRIDSOME_SITE_NAME}`,
          postTitle: `Illustations and designs by ${process.env.GRIDSOME_AUTHOR}`,
          pageName: 'designs',
        };
    },
    metaInfo() {
        return {
            title: this.$data.postTitle,
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
                    content: this.$data.postTitle,
                },
                {
                    name: "twitter:site",
                    content: "@yonatankof",
                },
                {
                    name: "twitter:image",
                    content: `${
                        process.env.GRIDSOME_BASE_URL
                    }social-cover-${this.$data.pageName}.jpg`,
                },
                {
                    name: "twitter:creator",
                    content: "@yonatankof",
                },
                {
                    property: "og:url",
                    content: process.env.GRIDSOME_BASE_URL + this.$data.pageName,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content: this.$data.postTitle,
                },
                {
                    property: "og:description",
                    content: this.$data.about,
                },
                {
                    property: "og:image",
                    content: `${
                        process.env.GRIDSOME_BASE_URL
                    }/social-cover-${this.$data.pageName}.jpg`,
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
                    content: `Cover image for this ${this.$data.pageName} page showing the Website name (${
                        process.env.GRIDSOME_SITE_NAME
                    }), page name (${this.$data.pageName} By ${
                        process.env.GRIDSOME_AUTHOR
                    }) and the Kof icon`,
                },
            ],
        };
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