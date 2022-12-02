import React from "react";
import Pic from "../homePage/img/8271062_5551.jpg";
import Logo from "../homePage/img/feedlogo.jpg";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div>
        <img className="photo" src={Logo} alt="logo of our project" />
      </div>
      <div>
        <img className="photo" src={Pic} alt="photo of people talking" />
      </div>

      <h1>Click Me</h1>
    </>
  );
};

export default HomePage;
