import React from "react"
import { Link, graphql } from "gatsby"
import styles from '../css/utils.module.css'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/tagList"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.list.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="欢迎来到首页" />
        <Bio />
        <TagList />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className={styles.article}>
              <header className={styles.header}>
                <h3 className={styles.headerline}>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small className={styles.headerdate}>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  style={{lineHeight: 1.8, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <div className={styles.pagination}>
            <Link to="/posts/2" rel="next">
              查看更多文章 →
            </Link>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    list: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      skip: 0
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            excerpt
          }
        }
      }
    }
  }
`
