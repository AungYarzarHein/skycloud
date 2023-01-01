import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css";
import {pageLogo} from "../../assets/constant/images"; 

const Header = () => {

const navigate = useNavigate();
const onClickHandler = (routeName) => navigate(routeName);

  return (
    <div className='headerContainer' >
        <div className="headerLogo">
            <img src={pageLogo} className="img" />
            <span className="headerTitle" onClick={()=>onClickHandler("/")} >
             Sky Cloud
            </span>
        </div>

        <div className="menuBar">
            <span className="menuBtn" onClick={()=>onClickHandler("projects")} >Projects</span>
            <span className="menuBtn">Experiences</span>
            <span className="menuBtn" onClick={()=>onClickHandler("info")} >About Us</span>
            <span className="menuBtn">Contact</span>
        </div>

        <div className="menuIcon">
            Hello
        </div>
    </div>
  )
}

export default Header