/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container';


import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

const Layout = ({ children, active }) => {

  return (
    <>
      <Header active={active}/>
      <main className="wrapper">
        <Container fluid className="layout">
            {children}
        </Container>
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
