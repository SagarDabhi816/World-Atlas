import React from 'react'
import FooterApi from "../../Api/FooterApi.json"
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Footers = () => {
  const footerIcon = {
    MdPlace:<MdPlace/>,
    IoCallSharp: <IoCallSharp/>,
    TbMailPlus: <TbMailPlus/>
  }
  return (
    <footer className='footer-section'>
        <div className='container grid grid-three-cols'>
          {FooterApi.map((elem,index)=>{
            const {icon,title,details} = elem
            return <div className='footer-contact' key={index}>
                <div className="icon">
                  {footerIcon[icon]}
                </div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
            </div>

          })}
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2025, All Rights Reserved 
                <NavLink to="https://sagardabhiportfolio.netlify.app/" target='_blank'>Sagar Dabhi</NavLink>
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/Sagar_dabhi96" target='_blank'>Instagram</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footers