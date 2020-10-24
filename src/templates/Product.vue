<template>
    <Layout>
        <h1 v-html="$page.product.title" />
        <h3 v-html="'<span>Item ID: </span>' + $page.product.prodID" />
        <h3 v-html="'<span>Added on: </span>' + $page.product.date_added" />
        <p v-html="$page.product.description" />
        <hr />
        <div v-html="$page.product.content" />
        <g-image :src="$page.product.image_main" />
    </Layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title:
                this.$page.product.title +
                " on " +
                this.$page.product.date_added,
            meta: [
                {
                    name: "description",
                    content: this.$page.product.description,
                },
            ],
        };
    },
};
</script>

<page-query>
  query Product ($id: ID!) {
    product (id: $id) {
      title
      prodID
      date_added (format:"MMMM DD, YYYY")
      description
      content
      image_main (width: 860, blur: 10)
    }
  }
</page-query>

<style>
span {
    color: red;
    font-weight: 400;
    font-size: 80%;
}
img {
    max-width: 100%;
}
</style>