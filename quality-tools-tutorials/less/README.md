<img width="200px" alt="Less" src="http://lesscss.org/public/img/less_logo.png" />

Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS.

[See full documentation](http://lesscss.org/features/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Summary**

- [Prerequisites](#prerequisites)
- [Install](#install)
  - [WebStorm](#webstorm)
    - [File watchers](#file-watchers)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

To install this tool, you need to have the following software installed on your local machine:
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) (works best when installed with [NVM](https://github.com/nvm-sh/nvm))

**Windows**

Use [NVM for Windows](https://github.com/coreybutler/nvm-windows) instead of regular NVM.

## Install

Install Less with its basic configuration:

``` shell script
npm install -g less
```

NPM will install LESS in :
 
 - Windows : `C:\Program Files\Git\usr\bin\less.exe`
 - Linux : `/usr/bin/less`

### WebStorm

Jetbrains' IDE offers compilation tools and watchers for LESS preprocessor.

[See full documentation](https://www.jetbrains.com/help/webstorm/transpiling-sass-less-and-scss-to-css.html#create_file_watcher)

#### File watchers

Open the `Settings/Preferences` dialog, go to `Tools > File watchers` to create one for LESS with the following settings:

| Key | Value |
| ------ | ------ |
| File type | SCSS |
| Scope | Project Files |
| Program | /usr/bin/less |
| Arguments | $FileDir$/$FileName$ $FileDir$/dist/css/$FileNameWithoutExtension$.css --source-map |
| Output paths to refresh | $FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map |
| Working directory | $FileDir$ |
| Environment variables | PATH={content of your PATH variable for node} |
 

## Usage

Once you have Less installed, you can run the sass executable to compile `.less` files to `.css` files.

```shell script
lessc [option option=parameter ...] <source> [destination]
```

```shell script
lessc bootstrap.less bootstrap.css
```

```shell script
lessc bootstrap.less bootstrap.css --source-map
```
