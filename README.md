# AppsScript with Bun

Caution!!: Bun BundlerはES2017へのトランスパイルに対応していないため、ユースケースによってはGASのV8ランタイムで動作しない可能性があります。

> 注意: ES6 モジュールはまだサポートされていません。
> [V8ランタイムの概要 - develogers.google.com](https://developers.google.com/apps-script/guides/v8-runtime?hl=ja)

![ScreenShot in script.google.com](./screenshot.png)

## Using this project as a template

```sh
# first time
bun x @google/clasp login

# recreate your project
rm .clasp.json
bun x @google/clasp create --type standalone --title "GAS with Bun"

# test
bun test

# deploy
bun push
```

## License

Copyright (c) HikaruEgashira. All rights reserved.
