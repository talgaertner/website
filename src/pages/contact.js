import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import whatsapp from "../../content/images/whatsapp.png"

const IndexPage = () => {

const info = require("../../content/data/info.json")



return (
  <Layout active="contact">
    <SEO title="Kontakt" />
    <Container fluid="md" className="layout-center">
      <Row xs={1} md={3}>
        <Col className="pb-2">
          <div className="card contact-card">
            <div className="card-image-top contact-img mx-auto mt-5">
              <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path fillRule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>  
            <div className="card-body">
              <div className="card-title">
                <p>{info.adresse.adress_text}</p>
              </div>
              <div className="card-text">
                <div>
                  {info.adresse.strasse}
                </div>
                <div>
                  {info.adresse.plz}{' '}{info.adresse.stadt}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="pb-2">
          <div className="card contact-card">
            <div className="card-image-top contact-img mx-auto mt-5">
                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                </svg> 
            </div>
            <div className="card-body">
              <div className="card-title">
                <p>{info.contact.call_text}</p>
              </div>
              <div className="card-text">
                <div>
                  Telefon: <a href="tel:+491639732387">{info.contact.tel}</a>
                </div>  
                <div>
                  <a href="https://api.whatsapp.com/send?phone=+491639732387">
                  <Container className="py-2" fluid="md">
                    <Row md={2} xs={2}>
                      <Col md={1} xs={1} className="pl-0 pr-0">
                        <Image className="icon" width="25" src={whatsapp} roundedCircle fluid />
                      </Col>
                      <Col md={11} xs={11}>
                        <div>{info.contact.whatsapp_text}</div> 
                      </Col>
                    </Row>
                  </Container> 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="pb-2">
          <div className="card contact-card">
            <div className="card-image-top contact-img mx-auto mt-5">
              <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>
            </div>
            <div className="card-body">
              <div className="card-title">
                <p>Senden Sie uns eine Mail!</p>
              </div>
              <div className="card-text">
                <div>
                  <a href="mailto:talgaertner@gmx.de">talgaertner@gmx.de</a>
                </div>   
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)
}
export default IndexPage
