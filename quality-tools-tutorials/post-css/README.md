<img src="https://postcss.org/postcss.cbfff7d9.svg" alt="PostCSS" width="200px">

PostCSS is a tool for transforming styles with JS plugins.

These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree).
This API can then be used by [plugins](https://github.com/postcss/postcss#plugins) to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.

The [Autoprefixer](https://github.com/postcss/autoprefixer) PostCSS plugin is one of the most popular CSS processors.

You can use it using the CLI or a task runner.

[See full documentation](https://github.com/postcss/postcss)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Summary**

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Plugins](#plugins)
- [Configuration](#configuration)
  - [From a file](#from-a-file)
    - [Configuration format](#configuration-format)
  - [WebStorm](#webstorm)
    - [Plugin](#plugin)
  - [Webpack](#webpack)
- [Usage with CLI](#usage-with-cli)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

To install these tools, you need to have the following software installed on your local machine:
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) (works best when installed with [NVM](https://github.com/nvm-sh/nvm))

If you do not want to use the CLI:
- a compatible IDE or task runner such as [Webpack](https://webpack.js.org/)

**Windows**

Use [NVM for Windows](https://github.com/coreybutler/nvm-windows) instead of regular NVM.

## Install

Install PostCSS with its CLI:

```shell script
npm install -g postcss postcss-cli
```

NPM will install postcss in :
 
 - Windows : `C:\Program Files\nodejs\postcss`
 - Linux : `/home/<username>/.nvm/versions/node/v14.13.1/bin/postcss`
 
## Plugins

You can customize your configuration using [plugins](https://github.com/postcss/postcss#plugins).

I recommend:
- [autoprefixer](https://github.com/postcss/autoprefixer) (automatically ads vendor prefixes to your rules)
- [stylelint](https://github.com/stylelint/stylelint) (a modular stylesheet linter).
- [doiuse](https://github.com/anandthakker/doiuse) (lints CSS for browser support).

## Configuration

There are several ways to customize the configuration.

### From a file

#### Configuration format

Example `postcss.config.js`:

```js
module.exports = {
  parser: 'sugarss',
  plugins: [
    require('postcss-import')({ ...options }),
    require('postcss-url')({ url: 'copy', useHash: true }),
  ],
}
```

For more advanced usage it's recommend to use a function in postcss.config.js.

**This gives you access to the CLI context to dynamically apply options and plugins per file.**

|   Name    |    Type    |              Default               | Description          |
| :-------: | :--------: | :--------------------------------: | :------------------- |
|   `env`   | `{String}` |          `'development'`           | process.env.NODE_ENV |
|  `file`   | `{Object}` |    `dirname, basename, extname`    | File                 |
| `options` | `{Object}` | `map, parser, syntax, stringifier` | PostCSS Options      |

If you want to set options via CLI, it's mandatory to reference `ctx.options` in `postcss.config.js`.

```js
module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
```

### WebStorm

WebStorm has built-in PostCSS support.

#### Plugin

Go to `Settings > Plugins > Marketplace` and search for "PostCSS" [plugin](https://plugins.jetbrains.com/plugin/8578-postcss).

### Webpack

Use postcss-loader in `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```

Then create `postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}
```

## Usage with CLI

Replace (overwrite) the input file:

```shell script
postcss <input.css>... [OPTIONS] --replace
```

Use the watcher:

```shell script
postcss <input.css>... [OPTIONS] --replace [--watch|-w]
```

Choose a different output, file or directory:

```shell script
postcss [input.css] [OPTIONS] [-o|--output output.css]
postcss <input.css>... [OPTIONS] --dir <output-directory>
```

Process a directory instead of files:

```shell script
postcss <input-directory> --replace
```

Specify a list of plugins:

```shell script
postcss --use autoprefixer -o main.css css/*.css
```

Specify a configuration file:

```shell script
postcss -c postcss.config.js -o main.css css/*.css
```
