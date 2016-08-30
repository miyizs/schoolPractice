import React,{ Component } from 'react'
import '../assets/style/component/futureBox.css'
import seegrey from '../assets/images/seegrey.png'
import star from '../assets/images/star.png'
class FutureBox extends Component{
    render(){
        return(
            <div>
                <div className="futureBox">
                    <div>
                        <h1>敬请期待</h1>
                        <h2>直播时间:&nbsp;2016-07-16&nbsp;07:00</h2>
                    </div>
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

export default FutureBox