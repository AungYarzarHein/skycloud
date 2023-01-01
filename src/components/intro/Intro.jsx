import React from 'react';
import { motion } from 'framer-motion';
import "./intro.css";
import {introvertNo} from "../../assets/constant/images";

const Intro = () => {
  return (
    <div className="introContainer">
    
       <div className="introContent">
       <motion.div 
       whileInView={{x:[-100,0],opacity:[0,1]}}
       transition={{duration:1,delay:0.5}}
       className="greeting"
       >
           <h1>
            Hi Everyone !
           </h1>
           <span className='name' >
           This is Yarzar
           </span>
      </motion.div>

      <motion.div
       whileInView={{opacity:[0,1],x:[100,0]}}
       transition={{duration:1,delay:.5}}
       className="greeting"
      >
           <span className='jobname' >
            Marn stack  & React Native developer
           </span>
      </motion.div>    
        
      <motion.div
      whileInView={{opacity:[0,1],x:[100,0]}}
      transition={{duration:1,delay:1}}
      className="introBtns"
      >
        <span className="introBtn">See Projects</span>
        <span className="introBtn">Contact Us</span>
      </motion.div>

       </div>

        <div className="introImg">
          <img src={introvertNo} className="introImage" />
        </div>
    </div>
  )
}

export default Intro