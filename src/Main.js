import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Stuff from "./Stuff.js";
import Animatedtext from "./animatedtext.js";
import Animateslider from "./animatedslider.js";
const contentlogo = [
  {
     
     logo: 'http://mastercreationz.com/switzrland/logo.png'

  }
];
const contenticon = [
  {
     
     logoleft: 'http://mastercreationz.com/switzrland/leftcorner.png'

  }
];

class Footer extends Component{
  render(){
    return(
      <div>
      <footer>
      
        
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
             
              <li class="list-inline-item">
                <a href="/">
                  <span class="fa-stack fa-lg">
                     <p class="copyright text-muted">Facebook</p>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="/">
                  <span class="fa-stack fa-lg">
                     <p class="copyright text-muted">Instagram</p>
                  </span>
                </a>
              </li>
            </ul>
           
          </div>
    </footer>
</div>
      );
  }
}
class Main extends Component {
  render() {
    return (
  <HashRouter>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="mymenus">
      <div className="col-sm-4 pading-no">
      <div className="col-sm-2 pading-no">
           {contenticon.map((itemm, index) => (        
          <a className="navbar-brand leftcornr" href="index.html"  style={{ background: `url('${itemm.logoleft}') no-repeat center center` }}></a>
 ))}
 </div>
 <div className="col-sm-6 pading-no">
   {contentlogo.map((item, index) => (        
          <a className="navbar-brand logoswit" href="index.html"  style={{ background: `url('${item.logo}') no-repeat center center` }}></a>
 ))}
 </div>
     
         
      </div>
      <div className="col-sm-8 pading-no">
       <div className="col-sm-12 pading-no">
           <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="header navbar-nav ml-auto col-sm-8">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Tour</NavLink></li>
           
            <li><NavLink to="/">Booking</NavLink></li>
            <li><NavLink to="/animatedslider">Album</NavLink></li>
          </ul>
            <div className="col-sm-4 pading-no">
          <ul className="header navbar-nav ml-auto">
            <li><NavLink to="/">Search</NavLink></li>
            <li><NavLink to="/">My Account</NavLink></li>
          </ul>
        </div>
        </div>
        </div>
      
      </div>
    </div>
    </nav>
    <div className="content">
           <Route exact path="/" component={Home}/>
          
             <Route path="/animatedslider" component={Animateslider}/>
            
          </div>



             <Footer/>
        </div>
      </HashRouter>
   
    );
  }
}
export default Main;