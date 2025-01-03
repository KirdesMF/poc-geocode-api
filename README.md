# ./poc-geocode-api

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Geocode API

- [✓] mapbox (https://docs.mapbox.com/api/search/geocoding/)
- [✓] radar (https://radar.com/documentation/api#geocoding)
- [✓] maptiler (https://docs.maptiler.com/cloud/api/geocoding/)
- [✓] opencage (https://opencagedata.com/api)
- [✓] here (https://www.here.com/docs/bundle/geocoding-and-search-api-v7-api-reference/page/index.html)

### TODO

- [✓] combobox
- [ ] google places api current pricing
- [ ] list of available languages per api
- [ ] rate limit per api
- [ ] pricing per api
- [ ] feature types per api (place, address, etc)
- [ ] links to documentation per api
- [ ] links to pricing per api
- [ ] list current queries per api
- [ ] section for why not openstreetmap and woosmap
- [ ] list current languages of our app
