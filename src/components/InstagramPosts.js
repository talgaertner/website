import React, { useContext } from "react"
import Img from "gatsby-image"

const Node = ({ node }) => {
    // Handle Instagram Post
    console.log(node);

    return (
    <div className="column is-one-quarter">
      <div className="node card">
        <div className="card-image">
          <figure className="image">
            <Img fluid={node.localFile.childImageSharp.fluid} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content content">
              <p className="is-5">
                <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank">@{node.username}</a>
              </p>
              { node.caption ? <p className="is-6">{node.caption}</p> : ''}
            </div>
          </div>

        </div>
      </div>
    </div>
    )
}


export const InstagramPosts = ({ nodes }) => {

  return (
    <div className="instagram-feed hero is-fullheight-with-navbar">
      <div calssName="hero-body">
        <div className="container is-fluid">
          <div className="columns is-multiline is-desktop">
          {
            nodes.edges.map(instagram => (
              <Node key={instagram.node.id} node={instagram.node} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
};

export default InstagramPosts
