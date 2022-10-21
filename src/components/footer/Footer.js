import React from 'react';
import {NavLink} from "react-router-dom";


import logo from '../../resources/images.png'
import facebook from '../../resources/facebook.png'
import linkedin from '../../resources/linkedin.png'
import instagram from '../../resources/instagram.png'
import twitter from '../../resources/twitter.png'
import youtube from '../../resources/youtube.png'
import submit from '../../resources/send-mail.png'
import payment from '../../resources/Visa-Mastercard.webp'
import download from '../../resources/png-clipart-app-store-google-play-apple-apple-text-logo.png'


import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-box'>
                  <div className='footer-box-social '>
                      <NavLink to="/">
                      <img className="footer-logo" src={logo} alt="logo" height={100} width={100}/>
                      </NavLink>
                      <h2>Name company</h2>
                      <div className='footer-social'>
                      <NavLink to={'/'}>
                          <img src={facebook} alt="facebook"/>
                      </NavLink>
                      <NavLink to={'/'}>
                          <img src={instagram} alt="instagram"/>
                      </NavLink>
                      <NavLink to={'/'}>
                          <img src={linkedin} alt="linkedin"/>
                      </NavLink>
                      <NavLink to={'/'}>
                          <img src={twitter} alt="twitter"/>
                      </NavLink>
                      <NavLink to={'/'}>
                          <img src={youtube} alt="youtube"/>
                      </NavLink>
                      </div>
                  </div>
                <div className='footer-box-product'>
                    <h3>Product</h3>
                    <h5>product 1</h5>
                    <h5>product 1</h5>
                    <h5>product 1</h5>
                    <h5>product 1</h5>
                    <h5>product 1</h5>
                </div>
                <div className='footer-box-price'>
                    <h3>Price</h3>
                    <h5>price1</h5>
                    <h5>price1</h5>
                    <h5>price1</h5>
                    <h5>price1</h5>
                    <h5>price1</h5>
                </div>
                <div className="footer-box-help">
                    <h3>Help</h3>
                    <h5>Help1</h5>
                    <h5>Help1</h5>
                    <h5>Help1</h5>
                    <h5>Help1</h5>
                    <h5>Help1</h5>
                    <h5>Help1</h5>
                </div>

                <div className="footer-box-contacts">
                    <h3>Contact</h3>
                    <h5>contact1</h5>
                    <h5>contact1</h5>
                    <h5>contact1</h5>
                    <h5>contact1</h5>
                    <h5>contact1</h5>
                    <h5>contact1</h5>
                </div>
                <div className="subscribe-box">
                    <h3 className="subscribe-box-download">
                        Download the APP
                        <img src={download} alt="download"/>
                    </h3>
                    <h3 className="subscribe-box-payment">
                    Payment Methods
                        <img src={payment} alt="payment"/>
                    </h3>
                    <h3 className="subscribe">Subscribe</h3>
                    <form action="#" method="#">
                    <input type="email" placeholder="Enter your Email"/>
                        <img src={submit} alt="submit"/>
                    </form>
                </div>
                <div className="subscribe-box_info"></div>
            </div>
            <hr/>
            <div className='footer-box-copyright'>
                <h4> © Copyright 2022. All Rights Reserved. </h4>
            </div>
        </div>
    );
};

export {Footer};
