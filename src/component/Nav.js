import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';



import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";


const nav = () => {
	return (
		<div>
			<nav>
				<div>
					<div className='top-header'>
						<div className='licon'>
							<a href='' className='brand'>
								<span id='n1'>GRO</span><span id='n2'>4U</span>
							</a>
						</div>
						<div className='micon'>
							<button id='btn1' type="submit" >All categories</button>

							<input id='input1' type="search" placeholder="Search product... " aria-label="Search" />
							<a href='#' id='icon1'><FaSearch /></a>
						</div>
						<div>
							<input type="location" placeholder="Order Tracking ..." aria-label="Search" />
							<span href='#' id='icon2'><GoLocation /></span>
							<span className='ricon'>
								<a href='#' className='icons'><CgProfile /></a>
								<a href='#' className='icons'><AiOutlineShoppingCart /></a>
								<a href='#' className='icons'><AiOutlineHeart /></a>
							</span>

						</div>
					</div>

					<div id='n3'>online Grocery</div>
				</div>

				<div >
					<ul className="bot-header">
						<li className="navli">
							<a href="/" className="link">Home</a>
						</li>
						<li className="navli">
							<a href="/Offer" className="link">Offer</a>
						</li>
						<li className='nav-item dropdown'>
							<a href="/Groceries" className='nav-link dropdown-toggle' role="button" data-bs-toggle='dropdown' aria-expanded='false' style={{ color: "white" }}>Groceries</a>
							<ul class="dropdown-menu" >
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
	)
}

export default nav