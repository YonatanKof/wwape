<template>
    <Layout>
        <Author
            :show-title="true"
            v-bind:author-title="$page.post.title"
            :show-bio-text="true"
            v-bind:author-bio="$page.post.description"
        />
        <div class="post-title">
            <!-- <h2 class="post-title__text">{{ $page.post.title }}</h2> -->
            <PostMeta :postmeta="$page.post" />
        </div>
        <div class="post">
            <div class="post__header">
                <g-image
                    v-if="$page.post.cover_image"
                    :src="$page.post.cover_image"
                    :alt="$page.post.cover_caption"
                />
            </div>
            <VueRemarkContent />
            <div class="post__footer">
                <PostTags :posttags="$page.post" />
            </div>
        </div>
        <div class="post-comments">
            <!-- Add comment widgets here -->
        </div>
    </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
    components: {
        Author,
        PostMeta,
        PostTags,
    },
    metaInfo() {
        return {
            title: this.$page.post.title + " by " + this.$page.post.author_name,
            meta: [
                {
                    name: "description",
                    content: this.$page.post.description,
                },
            ],
        };
    },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    author_name
    date (format: "MMM D, YYYY")
    # timeToRead
    tags {
      id
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
    cover_caption
  }
}
</page-query>

<style lang="scss">
@import "../assets/style/index";

.post-title {
    padding-bottom: var(--space-xl);
    text-align: center;
}
.post {
    @include content-box;
    margin-bottom: 0;
    @include mQ-max($display-size-sm) {
        // Remove padding on small screens
        margin: 0 calc(var(--content-space) * -1);
        border-radius: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: var(--spacem-md);
    }
    :is(h1, h2, h3, h4, h5, h6):first-child {
        margin-top: 0;
    }
    &__header {
        /* width: calc(100% + var(--space) * 2); */
        margin-left: calc(var(--space-2xl) * -1);
        margin-right: calc(var(--space-2xl) * -1);
        margin-bottom: var(--space-md);
        margin-top: calc(var(--space-2xl) * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;
        @include mQ-max($display-size-sm) {
            // Remove border-radius on small screens
            border-radius: 0;
        }
        img {
            width: 100%;
        }
        &:empty {
            display: none;
        }
    }
    &__content {
        img {
            width: calc(100% + var(--content-space) * 2);
            margin-left: calc(var(--content-space) * -1);
            display: block;
            max-width: none;
        }
    }
}
.post-comments {
    padding: calc(var(--content-space) / 2);
    &:empty {
        display: none;
    }
}
.post-author {
    margin-top: calc(var(--content-space) / 2);
}

.footnotes {
    margin: 0;
    padding: 0;
    text-align: center;
    ol {
        list-style-type: none;
        margin: 0;
    }
    li {
        margin-bottom: var(--space-2xl);
        background-color: var(--bg-pre);
        padding: var(--space-lg);
        border-radius: var(--radius);
    }
    img {
        margin-top: var(--spacem-xs);
        border-radius: var(--radius);
    }
    a {
        font-size: var(--font-size-md);
        background-color: var(--bg-code);
        font-weight: var(--font-wight--bolder);
        padding: var(--spacem-2xs) var(--spacem-xs);
        border-radius: var(--radius);
        margin: 0;
        display: inline-block;
        &::after {
            content: " Back to footnote";
        }
    }
}

sup {
    vertical-align: super;
    font-size: var(--font-size-sm);
    // font-size: smaller;
    padding-inline-start: var(--spacem-3xs);
    padding-inline-end: var(--spacem-4xs);
    @include dimmed;
    transition: opacity ease-in-out 0.25s;
    &:hover {
        opacity: 1;
    }
    &::before {
        content: "[";
        padding-inline-end: var(--spacem-3xs);
    }
    &::after {
        content: "]";
        padding-inline-start: var(--spacem-3xs);
    }
}
</style>
