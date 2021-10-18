const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const package = require('./package.json')

/** The UserScript info to add to the top of the outputted file */
const banner = `
// ==UserScript==
// @name        ${package.name}
// @description ${package.description}
// @version     ${package.version}
// @author      ${package.author}
// @match       *://example.com/*
// @grant       none
// ==/UserScript==
`

/** The name of the generated Userscript file */
const outFile = `${package.name}.user.js`

module.exports = {
  entry: path.resolve(__dirname, 'build/index.js'),
  output: {
    filename: outFile,
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments(_, comment) {
              const userScriptComment = /==\/?UserScript==|@/g
              return (
                comment.type === 'comment1' &&
                userScriptComment.exec(comment.value)
              )
            },
          },
        },
      }),
    ],
  },
  mode: 'production',
}
