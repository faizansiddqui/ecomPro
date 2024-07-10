import React from "react"
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo}/>
                <p className="footer-logo-p">AKAMIFY</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="pintester-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="whatsapp-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p> Copyright @ 2024 - all right reserved</p>
            </div>
        </div>
    )
}

export default Footer;
