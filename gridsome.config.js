// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Kof'R'Us",
    siteDescription:
        "Yonatan Ben Knaan - A design system manager, a creative director, a mismatched persona and an alright dude.",
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
                pathPrefix: "/post", // Add route prefix. Optional
                template: "./src/templates/Post.vue", // Optional
                plugins: ["@gridsome/remark-prismjs"],
                refs: {
                    tags: "Tag",
                },
            },
        },
    ],
};
