import React from 'react'

const nav = () => {
  return (
    <div>
        <nav>
			<ul className="Nav-header">
			<li  className="navli">
				<a href="/">Home</a>
			</li>
			<li className="navli">
				<a href="/About">About Us</a>
			</li>
			<li className="navli">
				<a href="/Contact">Contact Us</a>
			</li>
			</ul>
      </nav>
    </div>
  )
}

export default nav