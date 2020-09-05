import { Link } from "gatsby"
import React from "react"
import {useStaticQuery, graphql } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = ({active}) => {

const data = useStaticQuery(  
graphql`query { 
  content: markdownRemark (fileAbsolutePath: {regex: "/(header.md)/" }) {
    fileAbsolutePath
    frontmatter {
      projects
      services
      about
      headcontact
      home
      logo_image {
        childImageSharp {
          fixed(height: 75, width: 75) {
            src
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
        }
      }
    }
  }
}`)

  return (
      <Navbar className="navcontainer" fixed="top" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img src={data.content.frontmatter.logo_image.childImageSharp.fixed.src} width="75" height="75" className="d-inline-block align-top"
        alt="Talgärtner"/>  
          </Link>
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`nav ml-auto justify-content-end`}>
                <Link className={` nav-link ${active === "home" ? "is-active" : '' }`} to="/">{data.content.frontmatter.home}</Link>
              <NavDropdown title={data.content.frontmatter.services} id="collasible-nav-dropdown" className={`${active === "services" ? "is-active" : '' }`}>           
                  {
                    data.services.edges.map(current => (
                      <Link key={current.node.fields.slug} className="ml-2 dropdown-item nav-link" to={current.node.fields.slug}>
                        {current.node.frontmatter.title}
                      </Link>
                    ))
                  }
              </NavDropdown>
                <Link className={`nav-link ${active === "projects" ? "is-active" : '' }`} to="/projects">{data.content.frontmatter.projects}</Link>
                <Link className={`nav-link ${active === "about" ? "is-active" : '' }`} to="/about">{data.content.frontmatter.about}</Link>
                <Link className={`nav-link ${active === "contact" ? "is-active" : '' }`} to="/contact">{data.content.frontmatter.headcontact}</Link>
            </Nav>
        </Navbar.Collapse> 
      </Navbar>
  );

}


export default Header