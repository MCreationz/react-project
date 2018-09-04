
import React, { Component } from "react";
import Slider from 'react-animated-slider';
import './horizontal.css';
import './normalize.css';
import './slideranimation.css';
import './styles.css';
import './progressinput.css';
require("react-bootstrap/lib/NavbarHeader");

const content = [
  {
    title: 'Switzerland',
    description:
    'Switzerland officially the Swiss Confederation, is a sovereign state in Europe. It consists of 26 cantons, and the city of Bern is the seat of the federal authorities.',
    destination: 'Destination ____01',
    button1: 'Reservation',
    button2: 'Explore',
    image: 'http://mastercreationz.com/switzrland/banner.png',
    user: 'Luan Gjokaj',
    userProfile: 'http://mastercreationz.com/switzrland/destination.png'
  },
  {
    title: 'Switzerland',
    description:
    'Switzerland officially the Swiss Confederation, is a sovereign state in Europe. It consists of 26 cantons, and the city of Bern is the seat of the federal authorities.',
    destination: 'Destination ____02',
    button1: 'Reservation',
     button2: 'Explore',
    image: 'http://mastercreationz.com/switzrland/banner.png',
    user: 'Erich Behrens',
    userProfile: 'http://mastercreationz.com/switzrland/destination.png'
  },
  {
    title: 'Switzerland',
    description:
    'Switzerland officially the Swiss Confederation, is a sovereign state in Europe. It consists of 26 cantons, and the city of Bern is the seat of the federal authorities.',
   destination: 'Destination ____03',
    button1: 'Reservation',
     button2: 'Explore',
    image: 'http://mastercreationz.com/switzrland/banner.png',
    user: 'Bruno Vizovskyy',
    userProfile: 'http://mastercreationz.com/switzrland/destination.png'
  }
];

class Animateslider extends Component {
  render(){
    var settings = {
      speed: 1
     
    };
    return(
      <div>

    
    <Slider {...settings} className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
        <div className="sliderdestination "><img className="destination-icon" src={item.userProfile}/>{item.destination}</div>
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="sliderbtns">
            <button className="sliderbtn reservationbtn">{item.button1}</button>
            <button className="sliderbtn Explorebtn">{item.button2}</button></div>
            
          </div>
          <section>
          
            <img src={item.userProfile} alt={item.user} className="displ_none" />
            <span className="displ_none">
              Posted by <strong>{item.user}</strong>
            </span>
           
          </section>
        </div>
      ))}
    </Slider>
  </div>
      );
  }
  
}
export default Animateslider;


