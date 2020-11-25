<img width="200px" alt="Sass" src="https://rawgit.com/sass/sass-site/master/source/assets/img/logos/logo.svg" />

Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.

It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system.

[See full documentation](https://sass-lang.com/documentation)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Summary**

- [Prerequisites](#prerequisites)
- [Install](#install)
  - [WebStorm](#webstorm)
    - [File watchers](#file-watchers)
- [Usage](#usage)
- [Tools](#tools)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

To install this tool, you need to have the following software installed on your local machine:
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) (works best when installed with [NVM](https://github.com/nvm-sh/nvm))

**Windows**

Use [NVM for Windows](https://github.com/coreybutler/nvm-windows) instead of regular NVM.

## Install

Install Sass with its basic configuration:

``` shell script
npm install -g sass
```

NPM will install SASS in :
 
 - Windows : `C:\Program Files\nodejs\sass`
 - Linux : `/home/<username>/.nvm/versions/node/v<version>/bin/sass`

### WebStorm

Jetbrains' IDE offers compilation tools and watchers for SASS preprocessor.

[See full documentation](https://www.jetbrains.com/help/webstorm/transpiling-sass-less-and-scss-to-css.html#create_file_watcher)

#### File watchers

Open the `Settings/Preferences` dialog, go to `Tools > File watchers` to create one for SASS with the following settings:

| Key | Value |
| ------ | ------ |
| File type | SCSS |
| Scope | Project Files |
| Program | /home/{username}/.nvm/versions/node/v{version}/bin/sass |
| Arguments | $FileDir$/$FileName$:$FileDir$/dist/css/$FileNameWithoutExtension$.min.css --style compressed |
| Output paths to refresh | $FileNameWithoutExtension$.min.css:$FileNameWithoutExtension$.css.map |
| Working directory | $FileDir$ |
| Environment variables | PATH={content of your PATH variable for node} |
 

## Usage

Once you have Sass installed, you can run the sass executable to compile `.sass` and `.scss` files to `.css` files.

```shell script
sass <input.scss> [output.css]
```

to run Sass watcher:

```shell script
sass --watch input.scss output.css
```

You can watch and output to directories by using folder paths as your input and output, and separating them with a colon.
In this example Sass would watch all files in the app/sass folder for changes, and compile CSS to the public/stylesheets folder:

```shell script
sass --watch app/sass:public/stylesheets
```

## Tools

The @import rule is going to be, slowly but surely, deprecated. It is still used in frontend frameworks though.

Use sass-migrator tool and module migration to help you update your code [https://sass-lang.com/documentation/cli/migrator](https://sass-lang.com/documentation/cli/migrator).

```shell-script
$ sass-migrator module my_file.scss
```
