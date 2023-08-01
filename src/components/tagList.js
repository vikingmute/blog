/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  const { group } = data.tags
  group.sort((tag1, tag2) => {
    return tag2.totalCount - tag1.totalCount
  })
  console.log(group)
  return (
    <div
      className="tag-list"
      style={{
        display: `flex`,
        marginBottom: rhythm(.5),
        alignItems: 'center'
      }}
    >
      标签列表：
      { 
        group.map((tag) => {
          return (
            <div 
              className="tag-item" 
              key={tag.tag}
              style={{
                marginRight: rhythm(.5)
              }}
            >
              <Link to={`/tags/${tag.tag}`}>
                <b>{tag.tag}</b>({tag.totalCount})
              </Link>
            </div>
          )
        }) 
      }
    </div>
  )
}

export default Bio
