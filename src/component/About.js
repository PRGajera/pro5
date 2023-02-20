import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
function About () {
	return <div>
		<Nav/>
		<h2>GeeksforGeeks is a computer science portal for geeks!</h2>

		Read more about us at :
		<a href="https://www.geeksforgeeks.org/about/">
			https://www.geeksforgeeks.org/about/
		</a>
		<Footer/>
	</div>
}
export default About;
