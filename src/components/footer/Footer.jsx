import React from 'react';
import { motion } from 'framer-motion';
import "./footer.css";
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaTiktok,FaWhatsapp} from "react-icons/fa"


const Footer = () => {

const categories = ["MERN Stack Web Development","React Native App","Our Price List","How To Contact Us?","What we havd done?"] ;
const addressInfo = ["Yangon , Myanmar , Hledan TownShip ","12 Street , No(34) ","Sky Cloud Team"]

  return (
   <motion.div 
   whileInView={{opacity:[0,1]}}
   transition={{duration:1.5}}
   className="footerContainer"
   >

  <div className="footerTitle">
     <div><span className="fText1"> Sky</span><span className="fText2">Cloud</span></div>
     <span className="jobTitle">Mern & React Native App Developement</span>
     <div className="socialContainer">
        <FaFacebook  className="socialIcon" />
        <FaInstagram  className="socialIcon" />
        <FaTwitter  className="socialIcon" />
        <FaLinkedin  className="socialIcon" />
        <FaWhatsapp  className="socialIcon" />
        <FaTiktok  className="socialIcon" />
     </div>
  </div>

  <div className="footerTypes">
     <ul>
        <li className='listHeader' > Commonly Asked Questions </li>
        {categories.map((item,index) => {
            return (
                <li className='listItem' key={index} >
                    {item}
                </li>
            )
        })}
     </ul>
  </div>

  <div className="footerInfo">
  <ul>
        <li className='listHeader' > Our Address </li>
        {addressInfo.map((item,index) => {
            return (
                <li className='listItem' key={index} >
                    {item}
                </li>
            )
        })}
     </ul>
  </div>

   </motion.div>
  )
}

export default Footer