import React,{ Component } from 'react'
import '../assets/style/component/futureBox.css'
import seegrey from '../assets/images/seegrey.png'
import playImg from '../assets/images/projectplay.png'
import star from '../assets/images/star.png'
class PlayBox extends Component{
    render(){
        return(
            <div>
                <div className="playBox">
                    <div><img src={playImg} className="playImg"/></div>
                </div>
                <div className="futureInfo">
                    <span>[鱼说LIVE]中国传媒大学,创业区</span>
                    <span className="eyesee"><img src={seegrey}/><span>0人</span></span>
                </div>
                <div className="commentBox">
                    <img src={star}/>
                    <h2>还没有评论</h2>
                </div>
            </div>

        )
    }
}

export default PlayBox