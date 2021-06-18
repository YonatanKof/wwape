<template>
    <article
        class="content-box post-card"
        :class="{ 'post-card--has-poster': postdata.poster }"
    >
        <g-image
            alt="Cover image"
            v-if="postdata.cover_image"
            class="-image"
            :src="postdata.cover_image"
        />
        <div class="-content">
            <h3 class="-title" v-html="postdata.title" />
            <p class="-description" v-html="postdata.description" />
            <PostMeta class="-meta" :postmeta="postdata" />
            <PostTags
                v-if="postdata.tags"
                class="-tags"
                :posttags="postdata"
            />
        </div>
        <g-link class="-link" :to="postdata.path"></g-link>
    </article>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
    components: {
        PostMeta,
        PostTags,
    },
    props: ["postdata"],
};
</script>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_shadow.scss";

.post-card {
    @include content-box($display-size-xs);
    @include content-box-Hover;
    margin-bottom: var(--content-space);
    &:last-child {
        margin-bottom: 0;
    }
    p {
        line-height: 1.5em;
    }
    > .-link {
        /* @include content-box-Link; */
    }
    > .-title {
        margin-top: 0;
    }
    > .-tags {
        z-index: 1;
        position: relative;
    }
    > .-content {
        padding: var(--space-lg);
    }
}
</style>
