<template>
    <Layout>
        <ProductCard
            v-for="edge in $page.products.edges"
            :key="edge.node.id"
            :prefix="edge.node"
        />
    </Layout>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
    components: {
        ProductCard,
    },
    metaInfo: {
        title: "Products",
    },
};
</script>

<page-query>
query Products {
  products: allProduct {
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