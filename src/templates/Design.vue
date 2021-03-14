<template>
    <Layout>
        <Author
            :show-title="true"
            v-bind:author-title="$page.design.title"
            :show-bio-text="true"
            v-bind:author-bio="$page.design.description"
        />
        <main class="design-body">
            <section class="-content">
                <VueRemarkContent />
            </section>
        </main>
    </Layout>
</template>

<script>
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
    },
};
</script>

<page-query>
query Design ($id: ID!) {
  design: design (id: $id) {
    title
    description
  }
}
</page-query>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_content-main.scss";
@import "../assets/style/_layout.scss";
.design-body {
    @include content-box($display-size-sm);
    @include content-main;
    max-width: $display-size-md;
}
</style>
