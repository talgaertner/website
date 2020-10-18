import React from "react"
import {  graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


export default function Template({data}) {


const { markdownRemark } = data
const { frontmatter, html } = markdownRemark


return (
  <Layout active="services">
    <SEO title={frontmatter.title} />
    <Container fluid="md" className="layout-center">
          <h1>{frontmatter.title}</h1>
          <Row xs={1} md={2} className="justify-content-md-center">
            <Col>
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            </Col>
            <Col>
              <div className="wrap">
                {console.log(frontmatter.simple)}
                <div className="wrap" dangerouslySetInnerHTML={{__html: frontmatter.simple}} />
                <h4>
                  <Link to="/contact">{frontmatter.contact_text}</Link> 
                </h4>
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
              <div className="wrap" dangerouslySetInnerHTML={{__html: html}}/>
            </Col>
          </Row>
    </Container>
  </Layout>
)

}

export const pageQuery = graphql`
query data($slug: String){
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      contact_text
      simple
      image {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
