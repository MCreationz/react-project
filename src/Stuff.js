import React, { Component } from "react";

 class Stuffbanner extends Component{
  render(){ 
    return(
        <div>
            <header className="masthead bannerstuf">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Man must explore</h1>
              <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
      );
  }
 }
class Stuff extends Component {
  render() {
    return (
      <div>
      <Stuffbanner/>
        <h2>STUFF</h2>

        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        
      </div>
    );
  }
}
 
export default Stuff;