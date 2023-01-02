import React from 'react';
import { motion } from 'framer-motion';
import "./intro.css";
import {introvertNo} from "../../assets/constant/images";
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="introContainer">
    
       <div className="introContent">
       <motion.div 
       whileInView={{x:[-100,0],opacity:[0,1]}}
       transition={{duration:1,delay:0.5}}
       className="greeting"
       >
           <span className="greet">Hi Everyone !</span>
           <span className='name' >
           I am Yarzar
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
        <span className="introBtn" onClick={()=>navigate("/info")} >See Projects</span>
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