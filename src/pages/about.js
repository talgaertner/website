import React from "react"

import {useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Img from "gatsby-image";

const IndexPage = () => {

const data = useStaticQuery(graphql`
  query {
    content: markdownRemark(fileAbsolutePath: {regex: "/(about.md)/"}) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seotitle
        about
        namen
      }
    }
  }
`)

return (
  <Layout active="about">
    <SEO title={data.content.frontmatter.seotitle} />
    <Container fluid="md" className="layout-center">
      <Row xs={1} md={2}>
        <Col className="pb-3">
          <Img fluid={data.content.frontmatter.image.childImageSharp.fluid} />
        </Col>
        <Col className="pb-3">
          <h3>{data.content.frontmatter.namen}</h3>
          <p>{data.content.frontmatter.about}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="wrap" dangerouslySetInnerHTML={{__html: data.content.html}}/>
        </Col>
      </Row>
    </Container>
  </Layout>
)
}

export default IndexPage