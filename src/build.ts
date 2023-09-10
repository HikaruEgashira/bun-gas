const build = await Bun.build({
  entrypoints: ["src/env/dev.ts"],
  outdir: "dist",
});

const artifact = build.outputs[0];
console.log(artifact);
