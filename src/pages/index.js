import React from "react"
import {useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/styles.scss"
// Import Components
import Header from '../components/header'

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "under_construction.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return (
    <div class="notFound">
      <Header />
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="content-wrap">
                <h1 class="title is-2">Website Under Construction!</h1>
                <figure class="image">
                    <Img fluid={data.image.childImageSharp.fluid} />
                </figure>
                <h2 class="title is-4"><a href= "mailto:talgaertner@gmx.de">Kontakt: talgaertner@gmx.de</a></h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
 }

export default NotFoundPage
