import React from 'react';
import Intro from "../../components/intro/Intro";
import Projector from '../../components/projector/Projector';
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
        <Intro />
        <Projector />
    </div>
  )
}

export default Home