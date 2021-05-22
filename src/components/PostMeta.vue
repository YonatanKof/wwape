<template>
    <div class="post-meta">
        <p>
            By <em>{{ postmeta.author_name }}</em>
             • {{ postmeta.date }}
            <template v-if="postmeta.timeToRead">
                <em> • {{ postmeta.timeToRead }} min read</em>
            </template>
        </p>
    </div>
</template>

<script>
export default {
    props: ["postmeta"],
};
</script>

<style lang="scss">
.post-meta {
    font-size: 0.8em;
    opacity: 0.8;
    em {
        display: inline-block;
    }
}
</style>