// This is the main.js file.
// Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/style/index.scss";
import DefaultLayout from "~/layouts/Default.vue";


export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    head.script.push({
        async: true,
        src: "https://cdn.splitbee.io/sb.js",
    });
    head.meta.push(
        { name: "keywords", content: "Design, Web, UX, Philosophy" },
        { name: "author", content: "Yonatan Ben Knaan" }
    );
}
