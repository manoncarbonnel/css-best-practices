<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/467124/images/2872758/stylelint-icon-black.svg" alt="StyleLint" width="200px">

Stylelint is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

[See full documentation](https://github.com/stylelint/stylelint)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Summary**

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Configuration](#configuration)
  - [From a file](#from-a-file)
    - [Configuration format](#configuration-format)
  - [WebStorm](#webstorm)
    - [Inspections](#inspections)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

To install these tools, you need to have the following software installed on your local machine:
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/) (works best when installed with [NVM](https://github.com/nvm-sh/nvm))

**Windows**

Use [NVM for Windows](https://github.com/coreybutler/nvm-windows) instead of regular NVM.

## Install

Install Stylelint with its standard configuration base:

``` shell
npm install -g stylelint stylelint-config-standard
```

NPM will install Stylelint in :
 
 - Windows : `C:\Program Files\nodejs\stylelint`
 - Linux : `/home/<username>/.nvm/versions/node/v14.13.1/bin/stylelint`

## Configuration

You can customize your configuration.

For example, you may want to use the popular:

- [`stylelint-config-sass-guidelines` config](https://github.com/bjankord/stylelint-config-sass-guidelines) if you write SCSS
- [`stylelint-order` plugin](https://github.com/hudochenkov/stylelint-order) if you want to order things like properties

You'll find more [configs](https://github.com/stylelint/awesome-stylelint#configs) and [plugins](https://github.com/stylelint/awesome-stylelint#plugins) listed in [awesome stylelint](https://github.com/stylelint/awesome-stylelint).

To further customize your stylelint configuration, you can adapt your:

- [rules](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#rules)
- [shared configs](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends)
- [plugins](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#plugins)

### From a file

#### Configuration format

Example `.stylelintrc.json`:

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "max-nesting-depth": 2,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-order": [
      "width",
      "height"
    ],
    "selector-max-id": 2
  }
}

```

### WebStorm

[See official documentation](https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html)

To activate Stylelint, open the Settings/Preferences dialog, go to `Languages and Frameworks > Style Sheets > Stylelint`, and select the `Enable` checkbox.
After that the controls in the dialog become available.

In the `Node Interpreter` field, specify the Node.js interpreter to use.

In the `Stylelint Package` field, specify the location of the stylelint package installed globally or in the current project.

#### Inspections

Open the `Settings/Preferences` dialog, go to `Editor > Inspection > CSS > Code quality tools > Stylelint` to enable inspection. 

## Usage

To get started right away with sensible defaults:

```shell script
npx stylelint {source_file_or_directory_with_pattern}
```

To automatically fix problems, run:

```shell script
npx stylelint --fix {source_file_or_directory_with_pattern}
```
