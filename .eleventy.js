const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function(eleventyConfig) {
  // eleventyConfig.addCollection('pages', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/pages/*.md').reverse()
  // })

  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addLayoutAlias('base', 'base.njk')

  eleventyConfig.addPassthroughCopy({
    'node_modules/modern-normalize/modern-normalize.css': '/css/modern-normalize.css'
  })
  eleventyConfig.addPassthroughCopy('src/assets/')

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: 'layouts'
    }
  }
}