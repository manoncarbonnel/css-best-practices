<img src="https://postcss.org/postcss.cbfff7d9.svg" alt="PostCSS" width="200px">

PostCSS is a tool for transforming styles with JS plugins using a task runner.

These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

The [Autoprefixer](https://github.com/postcss/autoprefixer) PostCSS plugin is one of the most popular CSS processors.

PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree).
This API can then be used by [plugins](https://github.com/postcss/postcss#plugins) to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.

[See full documentation](https://github.com/postcss/postcss)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Summary**

- [Prerequisites](#prerequisites)
- [Plugins](#plugins)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

To install these tools, you need to have the following software installed on your local machine:
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) (works best when installed with [NVM](https://github.com/nvm-sh/nvm))
- a compatible task runner such as [Webpack](https://webpack.js.org/)

**Windows**

Use [NVM for Windows](https://github.com/coreybutler/nvm-windows) instead of regular NVM.

## Plugins

You can customize your configuration using [plugins](https://github.com/postcss/postcss#plugins). I recommend:
- [autoprefixer](https://github.com/postcss/autoprefixer) (automatically ads vendor prefixes to your rules)
- [stylelint](https://github.com/stylelint/stylelint) (a modular stylesheet linter).
- [doiuse](https://github.com/anandthakker/doiuse) (lints CSS for browser support).
