import React from 'react';
import "./projects.css";
import { motion } from 'framer-motion';
import {GiBat,GiAlarmClock} from "react-icons/gi";
import {result} from "../../assets/constant/images";

const ProjectCard = ({obj}) => {
  console.log("ehalfjalfa",obj)
const {header,imgUrl,projectLink,projectInfo} = obj;

  return(
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.5}}
    className="projectCardContainer">
     <span className="projectCardHeader"> {header} </span>
     <div className="projectImg"  >
       <img src={imgUrl} className="projectImage" />
     </div>
     <ul>
      {projectInfo.map( (item,index) => {
        return (
         <div className="projectListContainer" key={index} >
          <GiAlarmClock />
          <li  > {item} </li>
         </div>
        )
      })}
     </ul>

     <div className='projectCardBtns' >
     <a href={projectLink} className="projectCardBtn" >View Page</a>

     </div>
    </motion.div>
  )
}



const ProjectAppCard = ({obj}) => {
  console.log("ehalfjalfa",obj)
const {header,imgUrl,projectLink,projectInfo} = obj;

  return(
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.5}}
    className="projectCardContainer">
     <span className="projectCardHeader"> {header} </span>
     <div className="projectAppImg"  >
       <img src={imgUrl} className="projectImage" />
     </div>
     <ul>
      {projectInfo.map( (item,index) => {
        return (
         <div className="projectListContainer" key={index} >
          <GiAlarmClock />
          <li  > {item} </li>
         </div>
        )
      })}
     </ul>

     <div className='projectCardBtns' >
     <a href={projectLink} className="projectCardAppBtn" >View Page</a> 

     </div>
    </motion.div>
  )
}

const Projects = () => {
const webDevData = [
  {
    header:"Node,Firebase Project",
    id:"one",
    imgUrl: result,
    projectLink:"#",
    projectInfo:["E-commerce website","Node make faster the site","Firebase can handle easily"]
  },
  {
    header:"MERN Stack Webapp",
    imgUrl: result,
    id:"two",
    projectLink:"#",
    projectInfo:["Hotel Online Booking App","24 hours can book hotel room","All the feature will make you happy"]
  },
  {
    header:"Firebase,React Project",
    imgUrl: result,
    id:"three",
    projectLink:"#",
    projectInfo:["Super star blog website","Firebase realtime database","Really fast super star can post easily"]
  },
  {
    header:"Node,Firebase Project",
    imgUrl: result,
    id:"four",
    projectLink:"#",
    projectInfo:["E-commerce website","Node make faster the site","Firebase can handle easily"]
  },
  {
    header:"MERN Stack Webapp",
    imgUrl: result,
    id:"five",
    projectLink:"#",
    projectInfo:["Hotel Online Booking App","24 hours can book hotel room","All the feature will make you happy"]
  },
  {
    header:"Firebase,React Project",
    imgUrl: result,
    id:"six",
    projectLink:"#",
    projectInfo:["Super star blog website","Firebase realtime database","Really fast super star can post easily"]
  }
]

  return (
       <div className="projectContainer">
        <div className="webDevHeader">
          <GiBat color='black' className='webDevHeaderIcon' />
          Web Developement
        </div>
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.5}}
        className="webDev">
         {webDevData.map((obj,index)=>{ 
          return(
            <ProjectCard obj={obj} key={index} />
          )
          })}
        </motion.div>

        <div className="webDevHeader">
          <GiBat color='black' className='webDevHeaderIcon' />
          App Developement
        </div>
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.5}}
        className="webDev">
         {webDevData.map((obj)=>{ 
          return(
            <ProjectAppCard obj={obj} key={obj.id} />
          )
          })}
        </motion.div>
        
       </div>
    )
}

export default Projects