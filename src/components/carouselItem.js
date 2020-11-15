import React from "react"
import { Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../../content/images/logo.png";

import "../styles/styles.scss"


const CarouselItem = ({data, node, index}) => {
    //console.log(data)
    let found = false;

    return (
        <>
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <Container fluid="md">
                <Row>
                  <Col>
                    {data.insta.edges.map(instagram => {
                      if ( instagram.node.caption !== null && found === false && instagram.node.caption.indexOf(node.frontmatter.title.split("/").join("")) !== -1 ) {
                        found = true;
                        return (<Link className="link-carousel" to={`/projects#${instagram.node.id}`}>
                          <Img fluid={instagram.node.localFile.childImageSharp.fluid} alt={`${node.frontmatter.title} Image`} />
                        </Link>)
                      } else {
                        return "";
                      } 
                    })}
                    {
                      found === false ? (<Link className="link-carousel" to={node.fields.slug}>
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={`${node.frontmatter.title} Image`} />
                      </Link>) : ""
                    }
                  </Col>
                </Row>
                <Row xs={3} md={3} className="pt-3">
                  <Col className="ml-5 pl-3 pr-0 mr-0" xs={2} md={2}>
                    <Link to={node.fields.slug}>
                      {data.logos.edges.map(current => {
                          if ( current.node.name.indexOf(node.fields.slug.split("/").join("")) !== -1 ) {
                            return <Image key={`${node.frontmatter.title}_icon_${index}`} className="icon" width="25" src={current.node.childImageSharp.fixed.src} alt={`${node.frontmatter.title} Icon`} roundedCircle fluid />
                          } else {
                            return <Image key={`${node.frontmatter.title}_icon_${index}`} className="icon" width="25" src={logo} alt={`${node.frontmatter.title} Icon`} roundedCircle fluid />
                          }
                        })}
                    </Link>
                  </Col>
                  <Col className="pr-4 pl-0" xs={8} md={8}>
                    <Link to={node.fields.slug}>
                      <span className="carouselText">{node.frontmatter.title}</span>
                    </Link>
                  </Col>
                </Row>
                </Container>
              </div>
            </>
    )
  }; 


export const CarouselWrap = ({data}) => {

  
    return (
    <> 
          <div className="slide carousel" id="carousel" data-ride="carousel">
            <div className="carousel-inner">
              {
                data.services.edges.map((service, index) => ( 
                  <CarouselItem key={service.node.frontmatter.title} data={data} node={service.node} index={index} />
                )) 
              }
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>  
          </div>
    </> 
    )
}; 

export default CarouselWrap