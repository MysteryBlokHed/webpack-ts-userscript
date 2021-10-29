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

Building will result in JavaScript files in the `build/` directory (these can be ignored)
and a file ending in `.user.js` in the root of the project.
This is the built UserScript.

## Installation

Open the UserScript from the repository as raw with a UserScript extension installed,
and you should be prompted to install it. You can install a locally built version
by dragging and dropping the file into a new browser tab.

## License

This template is licensed under the MIT license
([LICENSE](LICENSE) or <http://opensource.org/licenses/MIT>).

[webpack config]: webpack.config.js
