const themeDir = __dirname + "/../../";

// Hugo runs PostCSS with Node's permission model, which only allows reads inside the project.
// Browserslist (via autoprefixer and cssnano) searches every parent directory for its config and
// stats files, so stop that search at the project root.
process.env.BROWSERSLIST_ROOT_PATH = process.cwd();

module.exports = {
  plugins: [
    require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [themeDir],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
