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
    sortBy: "date", order: ASC
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
    metaInfo: {
        title: "Posts from the World Wide Ape",
    },
};
</script>