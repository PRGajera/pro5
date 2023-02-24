import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


import Nav from './Nav';
import Footer from './Footer' 
import carousel from './carousel'
import fastdelivery from '../img/fd.png';
import returninstant from '../img/rn.png';
import payment from '../img/sp.png';




	function About() {
		return (
			<div>
				<Nav />
				<div>
					<div className='row container-fluid '>
						<h3>WHY GRO4U?</h3>
						<h5>What We Serve</h5>
						<div className='col-sm-3'>
							<img src={fastdelivery} className='icon4'></img>
							<h5>FREE FAST DELIVERY</h5>
							<p>Get free delivery faster ever<br />enjoy the freshness of the grocery</p>
						</div>
						<div className='col-sm-3'>
							<img src={returninstant} className='icon4'></img>
							<h5>INSTANT RETURN</h5>
							<p> If you got rotten items <br /> return immediately to us  </p>
						</div>
						<div className='col-sm-3'>
							<img src={payment} className='icon4'></img>
							<h5>SECURE PAYMENT</h5>
							<p> 100% Secure payment <br />we accept any type of payment </p>
						</div>
					</div>
					<div className='container-fluid '>
						<h3>HAPPY CUSTMOER</h3>
						<h5> Oue Custmoer Say About Us</h5>
					<carousel/>
							
						
					</div>

				</div>
				<Footer />
			</div >
		)
	}

export default About
