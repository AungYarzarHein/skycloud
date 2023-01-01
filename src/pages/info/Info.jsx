import React from 'react';
import "./info.css";
import { motion } from 'framer-motion';
import {team,man1,man2,girl1,girl2,girl3} from "../../assets/constant/images";
import {GiAnt,GiBat} from "react-icons/gi";


const Info = () => {
  return (
   <div className="infoContainer">
     <div className="infoHeader" >
      <span className="white">Sky</span><span className="dark">Cloud</span>
     </div>

     <motion.div 
     whileInView={{opacity:[0,1]}}
     transition={{duration:2}}
     className="infoImage" >
      <div className="leftInfo">
         <span className="infoTitle">Why & When?</span>
         <p className="smallDetails">
          Sky Cloud was established by Mr.Aung Yarzar Hein and his few friends to perform secure and develope environment in technology for Myanmar People who don't really about the internet thing and want to upgrade their working environment.Sky Cloud was established by Mr.Aung Yarzar Hein and his few friends to perform secure and develope environment in technology for Myanmar People who don't really about the internet thing and want to upgrade their working environment.
         </p>
      </div>
      <img src={team} className="infoImg" />
      <div className="rightInfo">
          <ul>
            <li className="infoListHeader"> Our Goals </li>
            <li className="goals"> <GiBat color="red" /> Quality is number one </li>
            <li className="goals"><GiBat color="red" /> Good Feature for Client </li>
            <li className="goals"><GiBat color="red" /> Not too expansive  </li>
            <li className="goals"><GiBat color="red" /> Every small business well develope </li>
          </ul>
      </div>
     </motion.div>

     <motion.div
     whileInView={{opacity:[0,1]}}
     transition={{duration:2}}
     className="teamMembersContainer">
      <div className="menberCard"> 
        <div className='cardImage' >
           <img src={man1} alt="man1" />
        </div>
       
         <span className="memberName">Mr.Arjun Yarzar</span>
         <span className="memberJob">Founder of Sky Cloud</span>
        
      </div>
      <div className="menberCard"> 
        <div className='cardImage' >
           <img src={girl1} alt="girl1" />
        </div>
       
         <span className="memberName">Ms.Parineeti Chopra</span>
         <span className="memberJob">Co-Founder of Sky Cloud</span>
      </div>
      <div className="menberCard"> 
      <div className='cardImage' >
           <img src={girl3} alt="girl3" />
        </div>
       
         <span className="memberName">Ms.Christina </span>
         <span className="memberJob">Marketing Manager</span>
        
      </div>
      <div className="menberCard"> 
        <div className='cardImage' >
           <img src={girl2} alt="girl2" />
        </div>
       
         <span className="memberName">Ms.Shamarr Shanti</span>
         <span className="memberJob">Java Developer</span>
        
      </div>
      <div className="menberCard"> 
        <div className='cardImage' >
           <img src={man2} alt="man2" />
        </div>
       
         <span className="memberName">Mr.Elliot</span>
         <span className="memberJob">Network Engineer</span>
        
      </div>
     </motion.div>
   </div>
  )
}

export default Info