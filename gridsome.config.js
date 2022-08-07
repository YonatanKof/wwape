// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "World Wide Ape",
    siteDescription:
        "A website by Yonatan Ben Knaan: a designer, a maker and an alright dude",
    siteUrl: "https://wwape.com/",
    icon: {
        favicon: "./src/assets/images/kof-logo.png",
        touchicon: "./src/assets/images/kof-logo-full.png",
    },
    plugins: [
        {
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Review", // Required
                baseDir: "./content/prods", // Where .md files are located
                pathPrefix: "/review", // Add route prefix. Optional
                template: "./src/templates/Review.vue", // Optional
                plugins: ["@gridsome/remark-prismjs"],
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Design", // Required
                baseDir: "./content/designs", // Where .md files are located
                template: "./src/templates/Design.vue", // Optional
                route: "/design/:urlname", // Using the "urlname" value in greymatter instead of title
                plugins: [],
                refs: {
                    tags: "Tag",
                },
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Tag",
                baseDir: "./content/tags",
                pathPrefix: "/tag",
                template: "./src/templates/Tag.vue",
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Post", // Required
                baseDir: "./content/posts", // Where .md files are located
                // pathPrefix: "/post", // Add route prefix. Optional
                template: "./src/templates/Post.vue", // Optional
                route: "/post/:urlname", // Using the "urlname" value in greymatter instead of title
                plugins: [
                    "@gridsome/remark-prismjs",
                    "remark-hint",
                    "remark-autolink-headings",
                ],
                refs: {
                    tags: "Tag",
                },
                remark: {
                    config: {
                        footnotes: true,
                    },
                },
            },
        },
    ],
    transformers: {
        //Add markdown support to all file-system sources
        vueRemark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"],
            anchorClassName: "icon icon-link",
        },
    },
};
