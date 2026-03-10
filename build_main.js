const esbuild = require("esbuild");

const build_map = {
  entryPoints: ["./ts/main.ts"],
  bundle: true,
  outfile: "js/main.js",
  platform: "browser",
  target: ["chrome74"],
  format: "iife",
  treeShaking: false,
  minify: false,
}

const build_main = () => esbuild.build(build_map);

module.exports = build_main;

if (require.main === module) {
  build_main().catch(() => process.exit(1));
}