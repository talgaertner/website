import React from "react";
import {Helmet} from "react-helmet";
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
    <div class="wip">
        <Helmet>
            <html lang="de" amp />
            <meta charset="utf-8" />
            <title>Talgärtner</title>
            <meta name="viewport" content="width=device-width" minimum-scale="1" initial-scale="1" />
            <meta name="description" content="Ihre Talgärtner" />
            <meta name="google-site-verification" content="DTMnqKYWsS-n5IoBDZy2iax7ZzLJgK8-FRlOIEPvEow" />
            <base target="_blank" href="https://talgaertner.de/" />
            <link rel="canonical" href="https://talgaertner.de/index.html" />
            <script async src="https://cdn.ampproject.org/v0.js"></script>
        </Helmet>
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
