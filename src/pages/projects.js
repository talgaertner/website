import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import InstagramPosts from '../components/InstagramPosts'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const IndexPage = ({data}) => {

const { allInstaNode, content } = data 

console.log(content)

return (  
  <Layout active="projects">
    <SEO title={content.frontmatter.seotitle} />
    <Container fluid className="pb-4">
      <Row className="justify-content-md-center">
        <Col>
          <p>{content.frontmatter.intro}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="wrap" dangerouslySetInnerHTML={{__html: content.html}}/>
        </Col>
      </Row>
      <InstagramPosts nodes={allInstaNode} />
    </Container>
  </Layout>
)
}

export const pageQuery = graphql`
  query ScrapingQuery {
    content: markdownRemark(fileAbsolutePath: {regex: "/(projects.md)/"}) {
      html
      frontmatter {
        seotitle
        intro
      }
    }
    allInstaNode(filter: { username: { eq: "44200929358" } }) {
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
