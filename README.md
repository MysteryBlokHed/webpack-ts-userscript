# webpack-ts-userscript

A template to create UserScripts using TypeScript and Webpack.

<!-- Info on how to use the template -->

## Customizing the template

### Changing UserScript info

The UserScript's name, description, version, and author are all retrieved from the project's `package.json`.
Anything else such as the site to match and the grants are changed from the [Webpack Config].

<!-- These instructions can be updated to fit your project's requirements -->

## Building

### Setup

Building this project requires Node.js and Yarn.
To install dependencies, run:

```sh
yarn install
```

### Building files

To build the project, run:

```sh
yarn build
```

To automatically build when a source file is modified, run:

```sh
yarn dev
```

This will output files in the `build/` directory, including `webpack-ts-userscript.user.js`, which is the UserScript.
Opening this file in your browser with a UserScript extension installed should prompt you to install it.

## Installation

Open a built UserScript in a new browser tab with a UserScript extension installed
and you should be prompted to install the script.

## License

This template is licensed under either of

- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or
  <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or
  <http://opensource.org/licenses/MIT>)

at your option.

[webpack config]: webpack.config.js
