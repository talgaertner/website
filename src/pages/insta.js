import React from "react"
import { graphql } from "gatsby"
import "../styles/styles.scss"

// Import Components
import Header from '../components/header'
import InstagramPosts from '../components/InstagramPosts'

const IndexPage = ({ data: { allInstaNode } }) => (
  <div>
    <Header />
    <InstagramPosts nodes={allInstaNode}/>
  </div>
)

export const pageQuery = graphql`
  query ScrapingQuery {
    allInstaNode(filter: { username: { eq: "rekxsh" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
