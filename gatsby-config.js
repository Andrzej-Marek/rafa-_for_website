module.exports = {
  siteMetadata: {
    title: `Diseno.5`,
    description: `Projekty
    budowlane i wykonawcze budynków mieszkalnych, usługowych i innych,
    oraz projekty infrastruktury związanej z budynkami na działkach
    budowlanych.`,
    author: `Andrzej Marek - EXELO`,
  },
  plugins: [
    "gatsby-plugin-root-import",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
  ],
  proxy: {
    prefix: "/app",
    url: "http://localhost:6000",
  },
}
