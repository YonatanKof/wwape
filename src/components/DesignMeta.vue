<template>
    <div>
        <p>
            Design by <em>{{ designmeta.author_name }}</em>
             ◦ {{ designmeta.date }}
            <span v-if="designmeta.updated">
                ◦ Updated {{ designmeta.updated }}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: ["designmeta"],
};
</script>

<style lang="scss" scoped>
div {
    font-size: 0.8em;
}
</style>