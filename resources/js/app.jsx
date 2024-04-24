import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        //the delay after which the progress bar will appear in milliseconds
        delay: 250,

        //the color of the progress bar
        color: "#29d",

        //include default Nprogress styles
        includeCSS: true,

        //Nprogress Spinner will be shown
        showSpinner: false,
    },
});
