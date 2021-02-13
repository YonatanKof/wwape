<template>
    <article>
        <g-image
            alt="Cover image"
            v-if="designData.cover_image"
            class=""
            :src="designData.cover_image"
        />
        <g-link class="" :to="designData.path">Go to {{ designData.title }}</g-link>
    </article>
</template>

<script>
export default {
    props: ["designData"],
};
</script>