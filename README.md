# `@typescript-virtual-barrel` sample

Sample (and simple) project to test the capabilities of [TypeScript Virtual Barrel](https://github.com/zaguiini/typescript-virtual-barrel).

Install the dependencies with `npm install`.

Run the compiler with `npm run build` and execute the project with `npm start`. You should see:

```
{ BoxConst: 'BoxConst' }
{ BoxDefault: 'BoxDefault' }
{ SpacerConstAliased: 'SpacerConstAliased' }
{ SpacerConstForwarded: 'SpacerConstForwarded' }
{ dataJson: { user: 'components' } }

{ InfoObject: { prop1: 'value' } }
{ BoxConstFromOther: 'BoxConstFromOther' }
{ BoxDefaultFromOther: 'BoxDefaultFromOther' }
```

All those symbols is exported by the `./src/{components,other}` virtual barrels.

There is more explanation [in the repo](https://github.com/zaguiini/typescript-virtual-barrel), but keeping it short: I've created a compiler plugin that resolves barrel imports that doesn't exist. Crazy, right?

If you're feeling curious, explore the contents of the [`dist` folder of this repo](https://github.com/zaguiini/typescript-virtual-barrel-sample/tree/main/dist). The compiled version does not have a `{components,other}/index.js` file. The import declarations have been rewritten.

And yes, feel free to modify the `src/*.ts` files in VSCode -- changes apply in real time in the editor. [Check the usage example](https://github.com/zaguiini/typescript-virtual-barrel#usage).
