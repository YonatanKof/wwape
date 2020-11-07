<template>
    <div class="post-card" :class="{'post-card--has-poster' :postdata.poster}">
        <div class="post-card__header">
            <g-image
                alt="Cover image"
                v-if="postdata.cover_image"
                class="post-card__image"
                :src="postdata.cover_image"
            />
        </div>
        <div class="post-card__content">
            <h3 class="post-card__title" v-html="postdata.title" />
            <p class="post-card__description" v-html="postdata.description" />
            <PostMeta class="post-card__meta" :postmeta="postdata" />
            <PostTags v-if="postdata.tags" class="post-card__tags" :posttags="postdata" />
            <g-link class="post-card__link" :to="postdata.path">Link</g-link>
        </div>
    </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
    components: {
        PostMeta,
        PostTags
    },
    props: ["postdata"]
};
</script>

<style lang="scss">
@import "../assets/style/_content-box.scss";

.post-card {
    @include content-box;
    position: relative;
    &__header {
        /* margin: var(--space-2xl); */
        margin-left: calc(var(--content-space) * -1);
        margin-right: calc(var(--content-space) * -1);
        margin-bottom: var(--space-lg);
        margin-top: calc(var(--content-space) * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;
        &:empty {
            display: none;
        }
    }
    &__image {
        min-width: 100%;
    }
    &__title {
        margin-top: 0;
    }
    &:hover {
        transform: translateY(calc(var(--space-3xs) * -1));
        box-shadow: var(--shadow-md);
    }
    &__tags {
        z-index: 1;
        position: relative;
    }
    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        text-indent: -9999px;
        z-index: 0;
    }
}
</style>
