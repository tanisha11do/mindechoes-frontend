import React from 'react';
import Navbar from './Navbar';
import image1 from '../assets/Section1.png';
import image2 from '../assets/Section2.png';
import '../App.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="container">
      <Navbar></Navbar>
      <section className='section1'>
        <div>
          <h1>How are you feeling today?</h1>
        <Link to="/Quiz"><button className='testbtn'>Take a Mental Health Test</button></Link>
        </div>
        
        <img src={image1} alt='' className='section1img'/>
        <div><p>"You are the sky. Everything else is just the weather." - Pema Chödrön</p></div>
      </section>
      <section className='section2'>
        <div>
          <h1>Why take a Mental Health Test?</h1>
          <h3>Mental health tests offer valuable insights into your emotional well-being. It's essential to remember that these tests are not diagnostic tools. They are meant to guide you and provide an indication of whether you might benefit from further evaluation by a mental health professional.</h3>
        </div>
        <img src={image2} alt="" className='section2img'/>
      </section>
    </div>
    </>
  )
}

export default Home;