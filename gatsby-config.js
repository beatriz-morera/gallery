module.exports = {
  siteMetadata: {
    title: `The Hummingbird Art Gallery`,
    description: `Created by Beatriz Morera López,
    a Cuban visual artist based on Barcelona, Spain.`,
    author: `@beatriz-morera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Hummingbird Art Gallery`,
        short_name: `Hummingbird Gallery`,
        start_url: `/`,
        background_color: `#fedbd0`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
