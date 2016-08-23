import React, { Component } from 'react'
import Slider from '../node_modules/react-slick/src/slider'
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import '../assets/style/component/carousel.css'
var Carousel = React.createClass({
    render: function() {
        var settings = {
            dots: true
        }
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src={img1} /></div>
                    <div><img src={img2} /></div>
                </Slider>
            </div>
        );
    }
});
export default Carousel
