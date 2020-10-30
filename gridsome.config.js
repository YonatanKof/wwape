// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Gridsome",
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
    ],
};
