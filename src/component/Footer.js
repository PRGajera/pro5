import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import {ImMail } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GoLocation  } from "react-icons/go";
// import WhatsAppIcon from '../img/whatsapp.png';
const Footer = () => {
    return (
        <div className='row' >
            <div className='col-sm-4' id='col1' >
                <div id='cn1'>
                <a href='' className='brand'>
                    <span id='n1'>GRO</span><span id='n2'>4U</span>
                    <div id='n3'>online Grocery</div>
                </a>
                </div>
                <pre>This is a perfect place for fresh Vegetables and Fruits</pre>
                <div id='bicon'>
                    <a href='#' className='icons'><AiFillFacebook /></a>
                    {/* <img src={WhatsAppIcon} alt=""  className="wp-icon"/> */}
                    <a href='#' className='icons'><FaInstagramSquare /></a>
                    <a href='#' className='icons'><FaYoutubeSquare /></a>
                </div>
            </div>
            <div className='col-sm-3' id='col2' >
            <a href='#'className='row ' ><ImMail  /><span> </span></a>
            <a href='#' className='row ' ><FaPhoneSquareAlt /><span> </span></a>
            <a href='#' className='row ' ><GoLocation /><span> </span></a>
            </div>
            <div className='col-sm-4' id='col3' >
                This is my first block
            </div>

        </div>
    )
}

export default Footer