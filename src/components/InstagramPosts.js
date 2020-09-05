import React from "react"
import Img from "gatsby-image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


const Node = ({ node }) => {
    // Handle Instagram Post

    return (
    <Col xl={3} lg={3} className="pb-3">
      <div id={node.id} className="card insta-card">
        <div className="card-image-top insta-img">
            <Img fluid={node.localFile.childImageSharp.fluid} />
        </div>
        <div className="card-body">
          <div className="card-title">
            <p>
              <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank" rel="noreferrer">@{node.username}</a>
            </p>
          </div>
          <div className="card-text">
              { node.caption ? <p>{node.caption}</p> : ''}
          </div>
        </div>
      </div>
    </Col>
    )
}


export const InstagramPosts = ({ nodes }) => {

  return (
    
      <Row className="justify-content-md-center mb-5">
          {
            nodes.edges.map(instagram => (
              <Node key={instagram.node.id} node={instagram.node} />
            ))
          }
      </Row>
  )
};

export default InstagramPosts
