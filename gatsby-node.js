const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async function ({ actions, graphql }) {
  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/index-page/index-page-template.jsx`),
    context: { slug: '/' },
  })

  actions.createPage({
    path: '/quiz',
    component: require.resolve(`./src/templates/quiz-page/quiz-page-template.jsx`),
    context: { slug: '/quiz' },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}