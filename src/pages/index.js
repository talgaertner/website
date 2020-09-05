import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import CarouselWrap from "../components/carouselItem"

const IndexPage = () => {

const data = useStaticQuery(graphql`
query {
  content: markdownRemark(fileAbsolutePath: {regex: "/(home.md)/"}) {
    frontmatter {
      seotitle
      intro
    }
    html
  }
  insta: allInstaNode(filter: { username: { eq: "7005914713" } }) {
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
  services: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(services)/"}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
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
  }
  logos: allFile(filter: {relativePath: {regex: "/(service-)/"}}) {
    edges {
      node {
        childImageSharp {
          fixed(width: 25) {
            src
          }
        }
        name
      }
    }
  }
}
`)


return ( <Layout active="home">
    <SEO title={data.content.frontmatter.seotitle} />
    <Container fluid="md" className="layout-center pb-4">
    <Row xs={1} md={2} className="justify-content-md-center">
      <Col>
        <p>{data.content.frontmatter.intro}</p>
      </Col>
      <Col>
        <CarouselWrap data={data} />
      </Col>
    </Row>
    <Row className="pt-4">
      <Col>
        <div className="wrap" dangerouslySetInnerHTML={{__html: data.content.html}}/>
      </Col>
    </Row>
    </Container>
  </Layout> 
)
};


export default IndexPage
