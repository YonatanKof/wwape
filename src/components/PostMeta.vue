<template>
    <div>
        <p>
            Written by <em>{{ postmeta.author_name }}</em>
             ◦ {{ postmeta.date }}
            <span v-if="postmeta.timeToRead">
                <i> ◦ {{ postmeta.timeToRead }} min read</i>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: ["postmeta"],
};
</script>

<style lang="scss" scoped>
div {
    font-size: 0.8em;
}
</style>