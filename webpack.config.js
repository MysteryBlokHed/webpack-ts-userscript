const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const package = require('./package.json')

/**
 * Values to add to the banner.
 * More info in template README.md
 */
const bannerValues = {
  name: package.name,
  descripton: package.description,
  version: package.version,
  author: package.author,
  license: package.license,
  homepageURL: package.homepage,
  match: ['*://example.com/*', 'http://*.foo.com/bar*'],
}

/** The generated UserScript banner */
const banner = (() => {
  let final = '// ==UserScript==\n'

  const format = (prop, value) =>
    `// @${prop}${' '.repeat(12 - prop.length)}${value}\n`

  for (const [key, value] of Object.entries(bannerValues)) {
    if (typeof value === 'string') {
      final += value ? format(key, value) : ''
    } else {
      for (const val of value) {
        final += val ? format(key, val) : ''
      }
    }
  }

  final += '// ==/UserScript==\n'
  return final
})()

/** The name of the generated Userscript file */
const outFile = `${package.name}.user.js`

module.exports = {
  entry: path.resolve(__dirname, 'build/index.js'),
  output: {
    filename: outFile,
    path: __dirname,
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
  mode: 'development',
  devtool: false,
}
