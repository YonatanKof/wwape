<template>
    <Layout>
        <h1 v-html="$page.product.title" />
        <h3>
            <span>Item ID: </span>
            {{ $page.product.prodID }}
        </h3>
        <h3>
            <span>Added on: </span>
            {{ $page.product.date_added }}
        </h3>
        <p v-html="$page.product.description" />
        <hr />
        <g-image :src="$page.product.image_main" />
        <VueRemarkContent />
    </Layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title:
                this.$page.product.title + ", id: " + this.$page.product.prodID,
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
p{
    font-size: 1.1em;
}
span {
    color: red;
    font-weight: 400;
    font-size: 80%;
}
img {
    max-width: 100%;
}
</style>