import React from "react"
import {useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "404.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)

 return ( <Layout active="">
    <SEO title="404: Not found" />
    <div class="notFound">
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="content-wrap">
                <h1 class="title is-2">404</h1>
                <figure class="image">
                    <Img fluid={data.image.childImageSharp.fluid} />
                </figure>
                <h2 class="title is-4">Sorry! This is not the Page you were looking for</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout> );
}

export default NotFoundPage
