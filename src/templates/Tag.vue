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
    metaInfo: {
        title: "Post tags by Yonatan Ben Knaan"
    }
};
</script>

<style lang="scss">
</style>

