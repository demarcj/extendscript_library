const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./ts/hostscript.ts"],
  bundle: true,
  outfile: "jsx/hostscript.jsx",

  platform: "neutral",
  target: ["es5"],

  format: "cjs",

  treeShaking: false,

  minify: false,
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ["./ts/main.ts"],
  bundle: true,
  outfile: "js/main.js",

  platform: "browser",
  target: ["chrome74"],

  format: "iife",

  treeShaking: false,

  minify: false,
}).catch(() => process.exit(1));
