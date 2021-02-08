# js-client-nuxt
A Nuxt.js adapter for the javascript client

## Installation

Install the package

```
npm install @getcandy/nuxt-client
```

Add it to your nuxt.config.js file

```
modules: [
 '@getcandy/nuxt-client'
}]
```

## Config

```
{
  host: "http://store-api.test"
}
```

## SSR Support

If you are using SSR, you will need to transpile the js client

```
build: {
  transpile: [
    '@getcandy/js-client'
  ]
}
```

## Usage
 
The Javascript client will be available in your components as `$getcandy`

[See JS client docs for full reference](https://github.com/getcandy/js-client)
