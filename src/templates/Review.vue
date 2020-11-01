<template>
    <Layout>
        <h1 v-html="$page.review.title" />
        <h3>
            <span>Item ID: </span>
            {{ $page.review.prodID }}
        </h3>
        <h3>
            <span>Added on: </span>
            {{ $page.review.date_added }}
        </h3>
        <p v-html="$page.review.description" />
        <hr />
        <g-image :src="$page.review.image_main" />
        <VueRemarkContent />
    </Layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title:
                this.$page.review.title + ", id: " + this.$page.review.prodID,
            meta: [
                {
                    name: "description",
                    content: this.$page.review.description,
                },
            ],
        };
    },
};
</script>

<page-query>
  query review ($id: ID!) {
    review (id: $id) {
      title
      prodID
      date_added (format:"MMMM DD, YYYY")
      description
      content
      image_main (width: 860, blur: 10)
    }
  }
</page-query>

<style scoped>
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