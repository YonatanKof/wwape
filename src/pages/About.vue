<template>
    <Layout :show-logo="true" :show-posts="true">
        <section class="about">
            <p id="my-name">Hi There 👋 <br />My Name Is</p>
            <h1 class="about__title">
                Yonatan <span class="grab-word">Ben Knaan</span>
            </h1>
            <h2 class="about__subtitle">
                A design system manager, a mismatched persona and an alright
                dude from TLV 🇮🇱
            </h2>
            <Hr hr-margin-bottom="var(--spacem-2xl)" />
            <div class="about__bio-text">
                <div id="the-text">
                    <p>
                        A design system manager, proficient in brand crafting
                        and hands-on UX/UI with more them 10 years of
                        experience.
                    </p>
                    <p>
                        My passion is merging <em>ideas</em> with
                        <em>business</em>, and <em>people</em> with
                        <em>technology</em> with the goal of creating valuable
                        and beautiful products that are easy to maintain.
                    </p>
                    <p>
                        I design digital products for a living but I build
                        websites for fun, to explore the language of design in
                        code and to tell stories.
                    </p>
                    <p id="cv-text">
                        Check out
                        <g-link
                            to="https://www.notion.so/yonatankof/Yonatan-Ben-Knaan-CV-615078174644460db169c928cd409f9e"
                        >
                            my full CV here</g-link
                        >.
                    </p>
                    <Hr
                        id="hidden-hr"
                        hr-margin-top="var(--space-2xl)"
                        hr-margin-bottom="var(--space-2xl)"
                    />
                </div>
                <ul id="meta-list">
                    <li v-for="meta in metas" :key="meta.mess">
                        <span>{{ meta.icon }}</span> {{ meta.mess }}
                    </li>
                </ul>
            </div>
        </section>
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    siteUrl
  }
}
</static-query>

<script>
import Author from "~/components/Author.vue";
import Hr from "~/components/Hr.vue";

export default {
    components: {
        Author,
        Hr,
    },
    metaInfo() {
        return {
            title: `About page for ${this.$static.metadata.siteName}, ${
                process.env.GRIDSOME_AUTHOR
            }'s website`,
            link: [
                {
                    rel: "canonical",
                    href: `${this.$static.metadata.siteUrl}about`,
                },
            ],
            meta: [
                {
                    name: "description",
                    content: this.$data.about,
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:description",
                    content: this.$data.about,
                },
                {
                    name: "twitter:title",
                    content: this.$static.metadata.siteName,
                },
                {
                    name: "twitter:site",
                    content: "@yonatankof",
                },
                {
                    name: "twitter:image",
                    content: `${process.env.GRIDSOME_BASE_URL}social-cover-about.jpg`,
                },
                {
                    name: "twitter:creator",
                    content: "@yonatankof",
                },
                {
                    property: "og:url",
                    content: this.$static.metadata.siteUrl + "about",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content: this.$static.metadata.siteName,
                },
                {
                    property: "og:description",
                    content: this.$data.about,
                },
                {
                    property: "og:image",
                    content: `${process.env.GRIDSOME_BASE_URL}social-cover-about.jpg`,
                },
                {
                    property: "og:image:width",
                    content: 600,
                },
                {
                    property: "og:image:height",
                    content: 315,
                },
                {
                    property: "og:image:alt",
                    content: `Cover image for this About page showing the name (${
                        this.$static.metadata.siteName
                    }), author name (About ${
                        process.env.GRIDSOME_AUTHOR
                    }) and Kof icon`,
                },
            ],
        };
    },
    data() {
        return {
            about: `Wanna get to know ${process.env.GRIDSOME_AUTHOR}? Good, your in the right place! For this is the About page`,
            infos: {
                Age: 41,
                Status: "Married +1* + Cat + Dog",
                Residence: "Tel Aviv, IL",
                Education: "Shenkar",
                Mobile: "+972-50-785-5149",
            },
            metas: [
                {
                    icon: "💪",
                    mess: "High on performance and strong on delivery",
                },
                {
                    icon: "🤹‍♂️",
                    mess:
                        "Big projects? Not so intimidating when break them down to small stuff",
                },
                {
                    icon: "👂",
                    mess:
                        "My management style is questioning without answering",
                },
                {
                    icon: "💼",
                    mess:
                        "My DesignOps is simple or complex - where accuracy is the aim",
                },
                {
                    icon: "📐",
                    mess: "Love UX engineering and designing with code",
                },
                {
                    icon: "🖋",
                    mess: "Digital craftsman and documenter",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "../assets/style/_layout.scss";

.grab-word {
    white-space: nowrap;
}
.about {
    margin-top: var(--spacem-6xl);
    max-width: var(--content-width-md);
    display: flex;
    flex-direction: column;

    &__title {
        font-size: var(--font-size-9xl);
        @include mQ-max($display-size-sm) {
            font-size: var(--font-size-8xl);
        }
    }
    &__subtitle {
        border-left: var(--spacem-xs) double var(--link-color-HL);
        padding: var(--spacem-2xs) 0 var(--spacem-2xs) var(--spacem-xs);
        font-weight: var(--font-wight--bold);
        font-family: var(--font-family--body);
        @include mQ-max($display-size-sm) {
            font-size: var(--font-size-5xl);
        }
    }

    &__bio-text {
        display: flex;
        font-size: var(--font-size-2xl);
        #cv-text {
            font-size: initial;
            opacity: 0.9;
            margin-top: var(--space-2xl);
        }
        @include mQ-max($display-size-sm) {
            flex-direction: column;
        }
        #the-text {
            margin-inline-end: var(--space-2xl);
        }
        #meta-list {
            list-style: none;
            margin-left: 0;
            min-width: 30%;
            font-size: var(--font-size-md);
            li {
                display: flex;
            }
            span {
                margin-inline-end: var(--spacem-sm);
            }
            @include mQ-max($display-size-sm) {
                font-size: var(--font-size-xl);
            }
        }
    }

    &__image-cont {
        display: flex;
        flex-direction: row-reverse;
    }
    &__image {
        filter: saturate(0.5) opacity(0.5) hue-rotate(30deg);
        max-width: 50%;
        border-radius: 50%;
        transform: scale(1.35);
        transform-origin: 80% 100%;
    }
    #hidden-hr {
        display: none;
        @include mQ-max($display-size-sm) {
            display: block;
        }
    }
    #my-name {
        font-family: var(--font-family--hand);
        line-height: 1.1em;
        opacity: 0.8;
        transform: rotateZ(-12deg);
        width: max-content;
        position: relative;
        left: calc(var(--space-lg) * -1);
        top: var(--space-md);
        font-weight: 600;
    }
}
</style>
