module.exports = {
  siteMetadata: {
   title: `Title from siteMetadata`,
 },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/posts`,
      name: "markdown-pages",
    },
  },
  `gatsby-transformer-remark`,
  ],
}
