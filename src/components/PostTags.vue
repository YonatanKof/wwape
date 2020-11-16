<template>
    <div class="post-tags">
        <g-link
            class="post-tags__link"
            v-for="tag in posttags.tags"
            :key="tag.id"
            :to="tag.path"
        >
            # {{ tag.id }}
        </g-link>
    </div>
</template>

<script>
export default {
    props: ["posttags"],
};
</script>

<style lang="scss">
.post-tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: var(--space-xs);
    &__link {
        margin: 0;
        margin-inline-end: var(--space-sm);
        margin-block-start: var(--space-sm);
        font-size: var(--font-size-sm);
        background-color: var(--bg-code);
        padding: var(--spacem-sm) var(--spacem-lg);
        border-radius: var(--radius);
    }
}
</style>