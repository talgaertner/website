/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

    }
}


// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const servicePostTemplate = require.resolve(`./src/pages/services/serviceTemplate.js`)
    return new Promise((resolve, reject) => {
    
    resolve(graphql(`
      query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(services)/"}}
        ) {
          edges {
            node {
              fields {
                  slug
              }  
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
            // Handle errors
            if (result.errors) {
                reporter.panicOnBuild(`Error while running GraphQL query.`)
                return reject(result.errors)
            }

            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: servicePostTemplate,
                    context: {
                        // additional data can be passed via context
                        slug: node.fields.slug,
                    },
                })
            })
            return
        }))
    })
}