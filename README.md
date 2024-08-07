# re2js-legendary

a node v0.10 compatible build of [RE2JS]

## install

```sh
npm i re2js-legendary
```

## usage

usage instructions are the same as [RE2JS]

## updating

`index.cjs` and `index.cjs.map` are generated directly by [RE2JS] by running `npm i core-js@3`, using the following babel config, and then building:

```js
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { 'node': '0.10' },
        'useBuiltIns': 'usage',
        'corejs': '3'
      }
    ]
  ],
```

[RE2JS]: https://github.com/le0pard/re2js
