import React from "react"
import {  graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"


export default function Template({data}) {


const { markdownRemark } = data
const { frontmatter, html } = markdownRemark


return (
  <Layout active="services">
    <SEO title={frontmatter.title} />
    <Container fluid="md" className="layout-leistung">
          <h1 className="leistung-header">{frontmatter.title}</h1>
          <Row xs={1} md={2} className="justify-content-md-center">
            <Col className="pb-3">
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            </Col>
            <Col>
                <div className="wrap" dangerouslySetInnerHTML={{__html: frontmatter.simple}} />
                <Button variant="success" className="contact">
                  <Link to="/contact">{frontmatter.contact_text}</Link> 
                </Button>
            </Col>
          </Row>
          <Row className="extra pt-4">
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
          fluid(quality: 100, maxHeight: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
