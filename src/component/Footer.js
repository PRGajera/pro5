import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// import { AiFillFacebook } from "react-icons/ai";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutubeSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
// import WhatsAppIcon from '../img/whatsapp.png';
import imgLogo from '../img/logo.png';
import whatsapp from '../img/what.png';
import instagram from '../img/inst.png';
import facebook from '../img/face.png';
import linkedin from '../img/linked.png';
import call from '../img/call.png';
import email from '../img/email.png';
import location from '../img/pin1.png';

const Footer = () => {
    return (
        <div>
            <div className='row container-fluid r1'>
                <h5 className='head1'>Subscribe To Our Newsletter</h5>
                <h1 className='head1'>Get <span style={{ color: 'black', wordSpacing: '10px' }}> 50% </span> off for your</h1>
                <h1 className='head1'>First Purchase</h1>
                <input id='input3' type="search" placeholder="Enter your email " aria-label="Search" />
                <button href='#' id='btn2' >SUBSCRIBE</button>
            </div>
            <div className='row container-fluid r2' >
                <div className='col-sm-4 col'>
                    <a href='' className='brand'>
                        <img src={imgLogo} alt="" />
                    </a>
                    <div>
                        <span >
                            <a href='#'>
                                <img src={whatsapp} className='icon1' ></img>
                            </a>
                            <a href='#'>
                                <img src={instagram} className='icon1' ></img>
                            </a>
                            <a href='#'>
                                <img src={facebook} className='icon1' ></img>
                            </a>
                            <a href='#'>
                                <img src={linkedin} className='icon1' ></img>
                            </a>
                        </span>
                    </div>

                    <div>
                        <a href='#' className="link1">
                            <img src={call} className='icon2' ></img>+91987654321
                        </a>
                        <br />
                        <a href='#' className="link1">
                            <img src={email} className='icon2' ></img>GRO4U@gmail.com
                        </a>
                        <br />
                        <a href='#' className="link1">
                            <img src={location} className='icon2' ></img>Gujarat,India
                        </a>
                    </div>
                </div>

                <div className='col-sm-2 col'  >
                    <ul className='list'>
                        <h6 className='head'>QUICK LINKS</h6>
                        <li className="navli">
                            <a href="/" className="link1">Home</a>
                        </li>
                        <li className="navli">
                            <a href="/Offer" className="link1">Offer</a>
                        </li>
                        <li className='navli'>
                            <a href="/Groceries" className="link1">Groceries</a>
                        </li>
                        <li className="navli">
                            <a href="/About" className="link1">About us</a>
                        </li>
                    </ul>
                </div>

                <div className='col-sm-2 col'  >
                    <ul className='list' >
                        <h6 className='head'>CATEGORIES</h6>
                        <li className="navli">
                            <a href="" className="link1">Vegetables</a>
                        </li>
                        <li className="navli">
                            <a href="" className="link1">Fruits</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link1">Seeds & Nuts</a>
                        </li>
                    </ul>
                </div>

                <div className='col-sm-3 col'  >
                    <ul className='list' >
                        <h6 className='head'>CUSTOMER SERVICES</h6>
                        <li className="navli">
                            <a href="" className="link1">About Us</a>
                        </li>
                        <li className="navli">
                            <a href="" className="link1">FAQ</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link1">Term & COndition</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link1">Privacy Policy</a>
                        </li>
                        <li className='navli'>
                            <a href="" className="link1">E-waste Policy</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='row container-fluid r3'>
                <h6  style={{
                    "text-align": 'center',
                    "background-color": '#55b142',
                    color: 'white',
                }}>2023 All right reserved@Gro4U Retail Ltd</h6>
            </div>
        </div>
    )
}

export default Footer