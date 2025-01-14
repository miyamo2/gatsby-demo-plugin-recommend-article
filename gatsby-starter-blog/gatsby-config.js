/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/gatsby-demo-plugin-recommend-article`,
  siteMetadata: {
    title: `Demo for gatsby-plugin-recommend-article`,
    author: {
      name: `Bob`,
    },
    description:
      "A Demo for `gatsby-plugin-recommend-article`. powered by Gatsby Starter Blog.",
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-recommend-article`,
      options: {
        qdrant: {
          url: "http://localhost:6333",
          onDisk: true,
        },
        openai: {
          apiKey: `${process.env.OPENAI_API_KEY}`,
        },
        limit: 3,
        toPayload: node => {
          return JSON.stringify({
            title: node.frontmatter.title,
            content: node.excerpt,
            tags: node.frontmatter.tags,
          })
        },
      },
    },
  ],
}
