import React from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Footer = () => { 

const data = require("../../content/data/footer.json")
    
return ( 
        <Navbar className="navcontainer" fixed="bottom"> 
            <Nav className="nav ml-auto mr-auto">
                    <Link className="nav-link" to="/legal_notice">{data.impressum}</Link> 
                    <Link className="nav-link" to="/contact">{data.contact_field}</Link> 
                    <Link className="nav-link" to="/privacy">{data.datenschutz}</Link> 
            </Nav>
        </Navbar>
                
   
);
}

export default Footer;