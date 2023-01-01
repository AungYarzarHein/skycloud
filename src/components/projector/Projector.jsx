import React from 'react';
import { motion } from 'framer-motion';
import "./projector.css";
import { result, phones } from '../../assets/constant/images';
import {GiAnt,GiBat} from "react-icons/gi";

const Projector = () => {




  return (
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.5}}
    className="projectorContainer">
        <div className="proCardContainer">
            <div className="card">
                <span className="cardTitle">
                <GiAnt />  Full Stack Web Developement
                </span>
                <ul>
                 
                    <li>   MERN,MEAN Stack Web App </li>
                    <li>Node Express Web App</li>
                    <li>React(or) Anguler + Firebase Web App</li>
                    <li> HTML,CSS,JAVASCRIPT static website </li>
                </ul>
            </div>

            <div className="card">
                <span className="cardTitle">
                <GiBat color="red" />    App Developement
                </span>
                <ul>
                    <li> React Native Web & Android & IOS App </li>
                    <li> Java Game  App</li>
                    <li>C , C++ Game App</li>
                    <li> Desktop App  </li>
                </ul>
            </div>

            <div className="card">
                <span className="cardTitle">
                    Digital Marketing
                </span>
                <ul>
                    <li> Facebook Marketing</li>
                    <li>Instagram Marketing</li>
                    <li>All Social Platform Marketing</li>
                    <li>Global Currency exchange</li>
                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default Projector