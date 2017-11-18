# Pokedex

List of pokemons based on [pokeapi.co](https://pokeapi.co).

## Links

[Demo](http://172.104.147.64/pokedex/)

[API repository](https://github.com/Ohar/pokedex-api)

## Install

1. Install Node.js 8.6.0+
3. `yarn install`
4. create `config.json` [as described](#configjson-example)

```bash
node index.js
```

## Usage

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

## `config.json` example

```json
{
  "API_URL": "http://172.104.147.64/pokedex/api"
}
```
