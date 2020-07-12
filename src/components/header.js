import { Link } from "gatsby"
import React from "react"
import {useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import logo from "../images/logo.svg";

const Header = () => {

  const [state, setState] = React.useState(false);
  const data = useStaticQuery(graphql`
        query {
          logo: file(relativePath: { eq: "logo_dog.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
  `);

  const menuActive = state ? 'is-active' : '';
  const burgerActive = state ? 'is-active' : '';

  function toggleMenu() {
    setState(!state)
  }

  function clearMenu() {
    setState(false)
  }

  return (
    <header>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" onClick={clearMenu} >
            <Link to="/">
              Talgärtner
            </Link>
          </div>
          <a role="button" onClick={toggleMenu} className={`navbar-burger burger ${burgerActive}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navigation navbar-menu ${menuActive}`} >
          <div className="navbar-start">
          </div>
          <div className="navbar-end"></div>
        </div>
      </nav>
    </header>
  );

}


export default Header
