<template>
    <Layout :show-logo="true" :show-posts="true">
        <Author
            :show-title="true"
            author-title="Posts"
            :show-bio-text="true"
            author-bio="Some writing by the kof himself"
        />
        <!-- List posts -->
        <div class="posts">
            <PostCard
                v-for="edge in $page.posts.edges"
                :key="edge.node.id"
                :postdata="edge.node"
            />
        </div>
        <!-- Author intro -->
    </Layout>
</template>

<page-query>
query {
  posts: allPost(
    filter: { published: { eq: true }} 
    sortBy: "date", order: DESC
    ) 
  {
    edges {
      node {
        id
        title
        path
        author_name
        date (format: "MMM D, YYYY")
        # timeToRead
        description
        cover_image (width: 800, blur: 10)
        cover_caption
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import IconBase from "~/components/IconBase.vue";
import KofIcon from "~/components/icons/KofIcon.vue";

export default {
    components: {
        Author,
        PostCard,
        IconBase,
        KofIcon,
    },
    data() {
        return {
          about: `I like to write and this is where I do it. In this Posts page you'll be able to see and filter all of my published writings on the ${process.env.GRIDSOME_SITE_NAME}`,
          postTitle: `Post feed page for ${process.env.GRIDSOME_SITE_NAME}, ${process.env.GRIDSOME_AUTHOR}'s website`
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
                    }/social-cover-posts.jpg`,
                },
                {
                    name: "twitter:creator",
                    content: "@yonatankof",
                },
                {
                    property: "og:url",
                    content: process.env.GRIDSOME_BASE_URL + "/posts",
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
                    }/social-cover-posts.jpg`,
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
                    content: `Cover image for this Posts page showing the Website name (${
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