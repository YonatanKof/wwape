<template>
    <Layout>
        <ReviewCard
            v-for="edge in $page.review.edges"
            :key="edge.node.id"
            :prefix="edge.node"
        />
    </Layout>
</template>

<script>
import ReviewCard from "../components/ReviewCard.vue";
export default {
    components: {
        ReviewCard,
    },
    metaInfo: {
        title: "Reviews from the World Wide Ape",
    },
};
</script>

<page-query>
query review {
  review: allReview {
    edges {
      node {
        id
        path
        title
        prodID
        date_added (format:"MMM DD, YYYY")
        description
        cool
      }
    }
  }
}
</page-query>