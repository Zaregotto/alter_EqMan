import React from 'react';
import {RiSendPlaneFill} from 'react-icons/ri';
import {NavLink} from "react-router-dom";


import logo from '../../resources/images.png'
import facebook from '../../resources/facebook.png'
import linkedin from '../../resources/linkedin.png'
import instagram from '../../resources/instagram.png'
import twitter from '../../resources/twitter.png'
import youtube from '../../resources/youtube.png'


import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-box'>
                  <div className='footer-box-social '>
                      <img className="footer-logo" src={logo} alt="logo" height={100} width={100}/>
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

                <div className="subscribe">
                    <h3>Subscribe</h3>
                </div>
                <div className="subscribe-box">
                    <input type="email" placeholder="Enter your Email"/>
                    <RiSendPlaneFill className="subscribe-box-send" />
                </div>
                <div className="subscribe-box_info"></div>
            </div>
        </div>
    );
};

export {Footer};
