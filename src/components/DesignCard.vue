<template>
    <article class="design-card">
        <h2 class="design-card__title">{{ designData.title }}</h2>
        <g-image
            :alt="designData.cover_caption"
            v-if="designData.cover_image"
            class="-content-box-image"
            :src="designData.cover_image"
            fit="contain"
            position="left bottom"
            background="red"
            width="100"
        />
        <g-link class="design-card__link" :to="designData.path"> </g-link>
    </article>
</template>

<script>
export default {
    props: ["designData"],
};
</script>

<style lang="scss">
@import "../assets/style/_content-box.scss";
@import "../assets/style/_shadow.scss";

.design-card {
    @include content-box($display-size-xs);
    @include content-box-hover;    
    &__titlebackground {
        text-align: center;
        margin: var(--space-sm);
        font-size: var(--font-size-lg);
    }
    &__link {
        @include content-box-Link;
    }
}
</style>