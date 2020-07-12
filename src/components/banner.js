import React from 'react';
import {useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
            samyRaw: file(relativePath: { eq: "samy-raw.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            samyPillow: file(relativePath: { eq: "samy-pillow.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div className="banner">
            <div className="container is-fluid">
                <div className="columns is-mobile">
                  <div className="column is-3 is-offset-1">
                    <figure className="image is-128x128">
                        <Img fluid={data.samyRaw.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-half is-offset-one-quarter">
                      <div className="title is-1">Woof Woof! Grrrr..</div>
                  </div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-5 is-offset-8">
                    <figure className="image is-128x128">
                        <Img fluid={data.samyPillow.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
