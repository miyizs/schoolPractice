import React, { Component } from 'react'
import '../assets/style/component/topToolBar.css'
import share from '../assets/images/share.png'
class ShareToolBar extends Component{
    render() {
        return (
            <div className="topToolBar clearfix">
                <span className="HomeButton">
                    <span className="goBackArrow"></span>
                </span>
                test
                <span className="TopButton">
                    <img src={share}/>
                </span>
            </div>
        )
    }
}

export default ShareToolBar