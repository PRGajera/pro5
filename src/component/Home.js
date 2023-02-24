import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


import Nav from './Nav';
import Footer from './Footer';
import dboy from '../img/dboy5.jpg';




function Home() {
  return (
    <div>
      <Nav />
      <div className='row container-fluid ' >
        <div className='col-sm-8 col1' >
          <h1 id='head2'>Bring The <span style={{ color: '#55b142' }}>Store</span><br />To Your <span style={{ color: '#55b142' }}>Door</span></h1>
          <h6>Get the best quailty and the most delicious grocery food <br /> in the world you can get them on your door<br />by useing our website </h6>
          <button  id='btn3'>Shop Now</button>
          
        </div>
        <div className='col-sm-4'>
         <img src={dboy}></img>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home