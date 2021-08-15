<template>
    <Layout>
        <Author
            :show-title="true"
            v-bind:author-title="'# ' + $page.tag.id"
            :show-bio-text="true"
            v-bind:author-bio="'Some writing about ' + $page.tag.id + ', by the kof himself'"
        />
        <div class="posts">
            <PostCard
                v-for="edge in $page.tag.belongsTo.edges"
                :key="edge.node.id"
                :postdata="edge.node"
            />
        </div>
    </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    id
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            author_name
            path
            cover_image (width: 770, height: 380, blur: 10)
            cover_caption
            date (format: "D. MMMM YYYY")
            # timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
    components: {
        Author,
        PostCard
    },
    data() {
        return {
          about: `I like to write and this is where I do it. If you've reached this page then it's some filter tag of my published writings on the ${process.env.GRIDSOME_SITE_NAME}`,
          postTitle: `Tag page for ${process.env.GRIDSOME_SITE_NAME}, a website by ${process.env.GRIDSOME_AUTHOR}`
        };
    },
    metaInfo() {
        return {
            title: this.$data.postTitle,
            link: [
                {
                    rel: "canonical",
                    href: process.env.GRIDSOME_BASE_URL + "/tags",
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
                    }/social-cover-tags.jpg`,
                },
                {
                    name: "twitter:creator",
                    content: "@yonatankof",
                },
                {
                    property: "og:url",
                    content: process.env.GRIDSOME_BASE_URL + "/tags",
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
                    }/social-cover-tags.jpg`,
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
                    content: `Cover image for this Tag page showing the Website name (${
                        process.env.GRIDSOME_SITE_NAME
                    }), the page name (Posts By ${
                        process.env.GRIDSOME_AUTHOR
                    }) and the Kof icon`,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
</style>

