import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import world from '../../../public/world.png';


const HeroSection = () => {
  return (
    <main className='hero-section main'>
      <div className='container grid grid-two-cols'>
        <div className="hero-content">
         <h1 className="heading-xl">
            Explore The World, One Country At A Time.
         </h1>
         <p className="paragraph">
            Discover the history, culture, and the beauty of every nation. sort,
            search and filter threw countries to find the details you want
         </p>
         <button className="btn btn-darken btn-inline bg-white-box explore-btn">
           <NavLink to="/country">Start Exploring  <FaLongArrowAltRight/></NavLink> 
         </button>
        </div>
        <div className="hero-image">
                <img src={world}  alt="World image" className="banner-image" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection