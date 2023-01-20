import React from 'react';
import "./contact.css";
import { motion } from 'framer-motion';
import logoImage from "../../assets/images/seven.png";


const Contact = () => {
  return (

    <>
    <div className="userContactTitle">
      <span className='userContactTitleHeader' >
        You Can Contact Us Via Email
      </span>
      <span className="contactEmail">
        skycloud16@gmail.com
      </span>
    </div>

    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.5}}
    className="contactContainer">
      <div className="contactImg">
           <div className="contactImgTitle">
             <motion.span 
             whileInView={{x:[-100,0],opacity:[0,1]}}
             transition={{duration:1.5,delay:.5}}
             > Contact Us</motion.span>
           </div>
           <div className="contactImgImage">
            <motion.img src={logoImage} 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.5,delay:1}}
            />
           </div>
      </div>

      <div className="contactInputContainer">
        <div className="contactInputItemGroup">
          <span> Name </span>
          <input type="text" className='contactInputItem' />
        </div>
        <div className="contactInputItemGroup">
          <span> Phone Number </span>
          <input type="text"  className='contactInputItem' />
        </div>
        <div className="contactInputItemGroup">
          <span> Email </span>
          <input type="email" className='contactInputItem' />
        </div>
        <div className="suggestionGroup">
          <textarea name="suggestion" className='suggestionText' ></textarea>
        </div>
        <div className="contactBtns">
          <span className="contactBtn">
            Send 
          </span>
        </div>
      </div>
    </motion.div>
    </>
    
  )
}

export default Contact