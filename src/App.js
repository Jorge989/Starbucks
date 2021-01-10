import React from "react";
import "./App.css";
import Logo from "./assets/logo.png";
import Starbucks from "./assets/img1.png";
import Starbucks1 from "./assets/img2.png";
import Starbucks2 from "./assets/img3.png";
import thumb1 from "./assets/thumb1.png";
import thumb2 from "./assets/thumb2.png";
import thumb3 from "./assets/thumb3.png";
import face from "./assets/facebook.png";
import twit from "./assets/twitter.png";
import ista from "./assets/instagram.png";
function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}
function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle ('active')
  navigation.classList.toggle ('active')
  
}
function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function App() {
  return (
    <body>
      <section>
        <div className="circle"></div>
        <header>
          <a href="/" className="logo">
            <div className="toggle" onClick={toggleMenu}></div>
           <ul className="navigation">

           </ul>
            <img src={Logo} alt=""/>
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">What's New</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </header>
        <div className="content">
          <div className="textBox">
            <h2>
              It's not just Coffee
              <br />
              It's<span>Starbucks</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a href="#">Leran More</a>
          </div>
          <div className="imgBox">
            <img src={Starbucks} alt=""className="starbucks"></img>
          </div>
        </div>
        <ul className="thumb">
          <li>
            <img src={thumb1} alt=""onClick={() => {imgSlider(Starbucks);changeCircleColor('#017143')}}></img>
          </li>
          <li>
            <img src={thumb2}alt="" onClick={() => {imgSlider(Starbucks1);changeCircleColor('#eb7495')}}></img>
          </li>
          <li>
            <img src={thumb3} alt=""onClick={() => {imgSlider(Starbucks2);changeCircleColor('#d752b1')}}></img>
          </li>
        </ul>
        <ul className="sci">
          <li>
            <a href="/">
              <img src={face}alt=""></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={twit}alt=""></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ista}alt=""></img>
            </a>
          </li>
        </ul>
      </section>
    </body>
  );
}

export default App;
