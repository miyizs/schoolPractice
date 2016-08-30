import React, { Component, PropTypes } from 'react'
import * as monthAction from '../actions/monthAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Slider from '../node_modules/react-slick/src/slider'
import '../bower_components/slick-carousel/slick/slick.css'
import '../bower_components/slick-carousel/slick/slick-theme.css'
import '../assets/style/component/monthcarousel.css'

class MonthCarousel extends Component {
    constructor(){
        super()
        this.state = {
            activeIdx:0
        }
    }
    handleMonth(idx){
        this.props.actions.chooseMonth(idx)
    }
    handleStart(){
        var startTime = new Date().getTime();
        this.setState({
            startTime
        })
    }
    handleEnd(idx,event){
        var endTime = new Date().getTime();
        var startTime = this.state.startTime;
        if(endTime - startTime < 300){
            this.setState({activeIdx:idx})
            this.handleMonth(idx)
        }
    }
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToScroll: 4,
            slidesToShow: 5
        };

        var elements=[1,2,3,4,5,6,7,8,9,10,11,12].map((x,i)=>{
            if(this.state.activeIdx == i){
                return (<div key={i}><h3 onTouchStart={this.handleStart.bind(this)} onTouchEnd={this.handleEnd.bind(this,i)} className="active">{x}月</h3></div>)
            }
            return (<div key={i}><h3 onTouchStart={this.handleStart.bind(this)} onTouchEnd={this.handleEnd.bind(this,i)}>{x}月</h3></div>)
        })
        return (
            <div className="monthBox">
                <Slider {...settings} ref="monthbox">
                    {elements}
                </Slider>
            </div>
        );
    }
}

MonthCarousel.propTypes = {
    chooseMonth: PropTypes.func,
    actions: PropTypes.object
}

function mapStateToProps(){
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(monthAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MonthCarousel)