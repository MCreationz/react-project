import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
class DemoCarousel extends Component {
    render() {
        return (
             
             <Carousel>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-4.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-3.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-3.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-4.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="http://www.menucool.com/slider/prod/image-slider-3.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;