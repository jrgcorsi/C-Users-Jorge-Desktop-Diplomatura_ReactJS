import React from 'react'
import "/Users/Jorge/Desktop/Diplomatura_ReactJS/Unidad4_M1/frontend/src/styles/components/layout/Footer.css"

import {
    FaWhatsapp,
    FaLinkedin,
    FaTwitter,
    FaFacebookSquare,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-6 col-xs-8">
                        <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by Jorgito
                        </p>
                    </div>
                    <div class="col-md-12 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" rel="noopener noreferrer" href="http:\\www.facebook.com.ar" target="_blank"><FaFacebookSquare /></a></li>
                            <li><a class="twitter" rel="noopener noreferrer" href="http:\\www.twitter.com" target="_blank"><FaTwitter /></a></li>
                            <li><a class="dribbble" rel="noopener noreferrer" href="https://walink.co/0316f0" target="_blank"><FaWhatsapp /></a></li>
                            <li><a class="linkedin" rel="noopener noreferrer" href="https://ar.linkedin.com/" target="_blank"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer

