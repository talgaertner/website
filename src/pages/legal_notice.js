import React from "react"
import {useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = () => {

const data = useStaticQuery(graphql`
  query {
    content: markdownRemark(fileAbsolutePath: {regex: "/(impressum.md)/"}) {
      frontmatter {
        seotitle
        seodescription
        headline
        intro
      }
      html
    }
  }
`)


return (
  <Layout>
    <SEO title={data.content.frontmatter.seotitle} description={data.content.frontmatter.seodescription}/>
    <Container fluid="md" className="layout-center">
      <Row xs={1} md={2} className="justify-content-md-center">
        <Col>
          <h1>{data.content.frontmatter.headline}</h1>
          <p>
            {data.content.frontmatter.intro}
          </p>
          <div className="wrap" dangerouslySetInnerHTML={{__html: data.content.html}}/>
        </Col>
      </Row>
    </Container>
  </Layout>
)
}

export default IndexPage
