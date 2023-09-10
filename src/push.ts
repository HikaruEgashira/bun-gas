const generateEntryFunctions: (i: string) => { entryPointFunctions: string } = require('gas-entry-generator').generate;

// Bun Bundler
const build = await Bun.build({
  entrypoints: ["src/env/dev.ts"],
  outdir: "dist",
});

// GAS Compitable
const artifact = build.outputs[0];
const babeledCode = await Bun.file(artifact.path).text();
const output = generateEntryFunctions(babeledCode);
console.log(output);

await Bun.write(artifact.path, `const global=this;\n${output.entryPointFunctions}\n(() => {\n${babeledCode}\n})();`);

// Clasp Push
const { stdout } = Bun.spawn(["bun", "x", "@google/clasp", "push"]);
const text = await Bun.readableStreamToText(stdout);
console.log(text);
