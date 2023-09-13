import React from "react"
import { Link, graphql } from "gatsby"
import styles from '../css/utils.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

class TagListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="博客文章列表" />
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
      </Layout>
    )
  }
}

export default TagListTemplate

export const pageQuery = graphql`
  query tagListQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
