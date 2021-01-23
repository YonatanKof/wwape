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
            <div class="post__content">
                <VueRemarkContent />
                <div class="post__footer">
                    <PostTags :posttags="$page.post" />
                </div>
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
                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:description",
                    content: this.$page.post.description,
                },
                { name: "twitter:title", content: this.$page.post.title },
                { name: "twitter:site", content: "@yonatankof" },
                { name: "twitter:image", content: this.getCoverImage },
                { name: "twitter:creator", content: "@yonatankof" },
            ],
        };
    },
    computed: {
        getCoverImage() {
            let coverImage = "";
            const cover = this.$page.post.social_image;
            if (cover != null) {
                coverImage = `${this.getBaseUrl}${
                    this.$page.post.social_image.src
                }`;
            }
            return coverImage;
        },
        getBaseUrl() {
            return process.env.GRIDSOME_BASE_URL;
        },
    },
};
</script>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    siteUrl
  }
}
</static-query>

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
    social_image
    cover_caption
  }
}
</page-query>

<style lang="scss">
@import "../assets/style/_layout.scss";
@import "../assets/style/_content-box.scss";

.post-title {
    padding-bottom: var(--space-xl);
    text-align: center;
}
.post {
    @include content-box($display-size-sm);
    margin-bottom: 0;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: var(--spacem-md);
        margin-bottom: var(--space-xs);
    }

    h1 {
        font-size: var(--font-size-7xl);
    }

    h2 {
        font-size: var(--font-size-5xl);
    }

    h3 {
        font-size: var(--font-size-3xl);
    }
    &__header {
        @include content-box-image($display-size-sm);
    }

    &__content {
        padding: var(--space-4xl);
        padding-top: var(--space-2xl);
        @include mQ-max($display-size-sm) {
            padding: var(--space-2xl);
        }
        img {
            border-radius: var(--radius);
        }
    }
    pre {
        max-width: calc(
            100vw - calc(calc(var(--space-4xl) + var(--content-space)) * 2) -
                2px
        );
        @include mQ-max($display-size-sm) {
            max-width: calc(100vw - calc(var(--space-2xl) * 2) - 2px);
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

@mixin blockquote {
    border-left-width: var(--space-xs);
    border-left-style: solid;
    border-left-color: var(--border-color);
    padding: var(--space-xs) var(--space-md);
    background-color: var(--bg-pre);
    color: var(--title-color);
    margin: var(--spacem-xs) 0;
    font-size: 95%;
    p {
        margin: 0;
    }
}

blockquote {
    @include blockquote;
}

.hint {
    @include blockquote;
}

.tip {
    background-color: var(--bg-primary);
    border-left-color: var(--bg-primary-HL);
}
.warn {
    color: var(--system-color-invert);
    font-weight: var(--font-wight--bold);
    background-color: var(--bg-color-invert);
    border-left-color: var(--system-color-HL);
    code {
        background-color: var(--system-color);
    }
}
.error {
    background-color: var(--bg-caution);
    border-left-color: var(--bg-caution-HL);
}

// These 2 styles are for image and caption that are placed in a div tag
// Gridsome adds the noscript tag, if it didn't then -> img + em
// Read more here - https://thesynack.com/posts/markdown-captions/

strong em {
    font-weight: var(--font-wight--black);
}
noscript + em {
    font-size: var(--font-size-3xl);
}
p img {
    transform: translateY(var(--space-sm));
    @include mQ-max($display-size-sm) {
        margin-inline-start: calc(var(--content-space) * -1);
        margin-inline-end: calc(var(--content-space) * -1);
        max-width: unset;
        width: calc(100% + 4rem);
        border-radius: 0 !important;
    }
}

.footnotes {
    padding: 0;
    line-height: 1.5em;
    @include mQ-max($display-size-sm) {
        margin-inline-start: calc(var(--content-space) * -1);
        margin-inline-end: calc(var(--content-space) * -1);
        max-width: unset;
        width: calc(100% + 4rem);
    }
    hr {
        margin-bottom: var(--space-lg);
        @include mQ-max($display-size-sm) {
            margin-inline-start: var(--space-2xl);
            margin-inline-end: var(--space-2xl);
        }
    }
    ol {
        list-style-type: none;
        margin: 0;
    }
    li {
        background-color: var(--bg-pre);
        padding: var(--space-lg);
        border-radius: var(--radius);
        margin-bottom: var(--space-md);
        &:last-child,
        &:only-of-type {
            margin-bottom: 0;
        }
        @include mQ-max($display-size-sm) {
            border-radius: 0;
            padding: var(--space-2xl);
        }
    }
    img {
        margin-top: var(--spacem-sm);
        max-height: calc(16 * var(--space-4xl));
        width: auto;
    }
    a {
        font-size: var(--font-size-sm);
        background-color: var(--bg-pre);
        font-weight: var(--font-wight--bolder);
        padding: var(--spacem-xs) var(--spacem-sm);
        border-radius: var(--radius);
        margin: 0;
        margin-top: var(--spacem-sm);
        display: block;
        max-width: max-content;
        &::after {
            content: " Back to footnote";
        }
    }
}

sup {
    vertical-align: super;
    font-size: 75%;
    padding-inline-start: var(--spacem-3xs);
    padding-inline-end: var(--spacem-4xs);
    opacity: 0.8;
    transition: opacity ease-out 0.25s;
    line-height: 1;
    &:hover {
        opacity: 1;
    }
    a {
        &::before {
            content: "[";
            padding-inline-end: var(--spacem-3xs);
        }
        &::after {
            content: "]";
            padding-inline-start: var(--spacem-3xs);
        }
    }
}

.task-list-item {
    list-style: none;
    margin-left: calc(-1 * var(--space-3xl));
    position: relative;
    display: flex;
    input[type="checkbox"] {
        width: var(--space-xl);
        height: var(--space-xl);
    }
}
</style>
