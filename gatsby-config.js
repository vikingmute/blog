

module.exports = {
  siteMetadata: {
    title: `Viking Zhang, 一个前端开发工程师以及独立开发者的故事`,
    author: `Viking Zhang`,
    name: `Viking Zhang`,
    siteUrl: `https://vikingz.me`,
    description: `一个前端开发工程师的故事`,
    social: {
      twitter: `vikingmute`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "Viking Zhang, 一个前端开发工程师以及独立开发者的故事",
            output: "/rss.xml",
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              function substrWithTags(str, len) {
                let result = str.substr(0, len),
                    lastOpening = result.lastIndexOf('<'),
                    lastClosing = result.lastIndexOf('>');
                console.log('opening', lastOpening, lastClosing)
                if (lastOpening !== -1 && (lastClosing === -1 || lastClosing < lastOpening)) {
                    result += str.substring(len, str.indexOf('>', len) + 1);
                }
                return result;
              }
              return allMarkdownRemark.nodes.map(node => {
                const url = `${site.siteMetadata.siteUrl}${node.fields.slug}`
                const sliceHtml = 
                  substrWithTags(node.html, 500) + 
                  `<div style="margin-top: 50px; font-style: italic;"> <strong><a href="${url}">继续阅读</a>.</strong> </div> <br /> <br />`
                const obj = Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  custom_elements: [
                    { "content:encoded": sliceHtml },
                  ],
                })
                return obj
              })
            },
            query: `
            {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  html
                  frontmatter {
                    title
                    date
                    excerpt
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            `
          }
        ]
    
      }
    },

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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-serviceworker`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter Blog`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/gatsby-icon.png`,
    //   },
    // },
    //`gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149835006-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5048625497751877`
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    'gatsby-plugin-dark-mode'
  ],
}
