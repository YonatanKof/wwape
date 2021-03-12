<template>
    <div
        class="post-card"
        :class="{ 'post-card--has-poster': postdata.poster }"
    >
        <div class="post-card__header">
            <g-image
                alt="Cover image"
                v-if="postdata.cover_image"
                class="-content-box-image"
                :src="postdata.cover_image"
            />
        </div>
        <div class="post-card__content">
            <h3 class="post-card__title" v-html="postdata.title" />
            <p class="post-card__description" v-html="postdata.description" />
            <PostMeta class="post-card__meta" :postmeta="postdata" />
            <PostTags
                v-if="postdata.tags"
                class="post-card__tags"
                :posttags="postdata"
            />
        </div>
        <g-link class="post-card__link" :to="postdata.path"></g-link>
    </div>
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
    @include content-box-hover;
    
    margin-bottom: var(--content-space);
    &:last-child {
        margin-bottom: 0;
    }
    p {
        line-height: 1.5em;
    }
    &__header {
        @include content-box-image($display-size-xs);
    }
    &__title {
        margin-top: 0;
    }
    &__tags {
        z-index: 1;
        position: relative;
    }
    &__link {
        @include content-box-Link;
    }
    &__content {
        padding: var(--space-lg);
    }
}
</style>
