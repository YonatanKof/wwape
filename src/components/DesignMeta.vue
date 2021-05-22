<template>
    <div>
        <p>
            Design by <em>{{ designmeta.author_name }}</em>
             ◦ {{ designmeta.date }}
            <span v-if="designmeta.updated">
                <i> ◦ Updated on {{ designmeta.updated }}</i>
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
span {
    opacity: 0.75;
}
</style>