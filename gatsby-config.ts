export const siteMetadata = {
  title: `For the Love of Korok`,
  description: `Simple Site made for the @gatsby #sillysitechallenge 2020`,
  author: `@dsbrux`,
}

export const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `for-the-love-of-koroks`,
      short_name: `fortheloveofkoroks`,
      start_url: `/`,
      background_color: `#749A85`,
      theme_color: `#749A85`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
    }
  }
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]
