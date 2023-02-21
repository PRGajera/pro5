import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';



import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import imgLogo from '../img/GRO4U Online Grocery.png';
import search from '../img/s1.png';
import user from '../img/u1.png';
import cart from '../img/cart.png';
import wish from '../img/wish.png';

function nav() {
	return (
		<div>
			<nav>
				<div>
					<div className='top-header'>
						<div className='licon'>
							<a href='' className='brand'>
								<img src={imgLogo} alt="" />
							</a>
						</div>
						<div className='micon'>
							<form class="nosubmit">
  <input class="nosubmit" type="search" placeholder="Search product..." aria-label="Search"/>

</form>

							{/* <input id='input1' type="search" placeholder="Search product... " aria-label="Search" />
							<a href='#' id='icon1'><img src={search}></img></a> */}
						</div>
						<div>
							<input type="location" placeholder="Order Tracking ..." aria-label="Search" />
							<span href='#' id='icon2'><GoLocation /></span>
							<span className='ricon'>
								<a href='#'>
									<img src={user}></img>
								</a>
								<a href='#'>
									<img src={cart}></img>
								</a>
								<a href='#'>
									<img src={wish}></img>
								</a>
							
							</span>

						</div>
					</div>

				</div>

				<div>
					<ul className="bot-header">
						<li className="navli">
							<a href="/" className="link">Home</a>
						</li>
						<li className="navli">
							<a href="/Offer" className="link">Offer</a>
						</li>
						<li className='nav-item dropdown'>
							<a href="/Groceries" className='nav-link dropdown-toggle' role="button" data-bs-toggle='dropdown' aria-expanded='false' style={{ color: "white" }}>Groceries</a>
							<ul class="dropdown-menu">
								<li className="opt"> <a class="dropdown-item" href="#">Vegetables</a></li>
								<li className="opt"><a class="dropdown-item" href="#">Fruits</a></li><hr />
								<li className="opt"><a class="dropdown-item" href="#">Seeds & Nuts</a></li>
							</ul>
						</li>
						<li className="navli">
							<a href="/About" className="link">About us</a>
						</li>
						<a href='' id='support'><span id='icon3'><MdOutlineCall />+919882456752</span><span className="link"> 24/7support</span></a>
					</ul>

				</div>
			</nav>
		</div>
	);
}

export default nav