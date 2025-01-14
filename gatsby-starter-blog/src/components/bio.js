/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <p>
          `gatsby-demo-plugin-recommend-article`のデモです。
          このサイト内の記事は生成AIを用いて生成しているため、内容には誤りが含まれる可能性があります。
          また記事内の記載はすべてフィクションであり、実在の人物・団体・場所とは一切関係ありません。
        </p>
      )}
    </div>
  )
}

export default Bio
