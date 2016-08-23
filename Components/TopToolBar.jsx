import React, { Component } from 'react'
import '../assets/style/component/topToolBar.css'
import HomeIcon from '../assets/images/home.png'
import downArrow from '../assets/images/downArrow.png'
class TopToolBar extends Component{
    render() {
        return (
            <div className="topToolBar clearfix">
                <span className="HomeButton">
                    <img src={HomeIcon}/>
                </span>
                    test
                <span className="TopButton">
                    <img src={downArrow}/>
                </span>
            </div>
        )
    }
}

export default TopToolBar