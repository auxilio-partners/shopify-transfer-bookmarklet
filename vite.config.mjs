import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/bookmarklet.js", // Your bookmarklet entry point
      name: "MyBookmarklet", // Choose a name
      formats: ["iife"], // Important for bookmarklets
      fileName: (format) => `bookmarklet.min.js`, // Output filename
    },
    minify: "terser", // Use Terser for minification
  },
});
