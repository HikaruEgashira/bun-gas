import { BunPlugin } from "bun";
const generateEntryFunctions: (i: string) => string = require('gas-entry-generator').generate;

// GasPlugin
const gasPlugin: BunPlugin = {
  name: "gas",
  setup(builder) {
    // https://qiita.com/mahaker/items/7beb8aaf357fb3c32144
    // https://bun.sh/docs/bundler/vs-esbuild#plugin-api
    // 1. ビルド後のソースに対してgas-entry-generatorを実行して、関数宣言文を生成
    // builder.onEnd(async (artifact) => {
    // TODO until implement `onEnd`
    // 2. ビルド後のソースの先頭に1.を追記
    // Bun.write(artifact, `${generateEntryFunctions(artifact.code)}\n${artifact.code}`);
  },
}

// Bun Bundler
const build = await Bun.build({
  entrypoints: ["src/env/dev.ts"],
  outdir: "dist",
  plugins: [gasPlugin],
});

const artifact = build.outputs[0];
console.log(artifact);
