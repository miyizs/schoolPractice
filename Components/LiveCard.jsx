import React,{ Component } from 'react'
import projectplay from '../assets/images/projectplay.png'
import projectimg from '../assets/images/projectimg.png'
import see from '../assets/images/see.png'
import waiting from '../assets/images/waiting.png'
import noItem from '../assets/images/noItem.jpg'
import '../assets/style/component/monthcarousel.css'
class LiveCard extends Component{
    goToDetailPage(source){
        this.props.seeDetail(source.status,source.title,source.people)
        this.context.router.push('/about')
    }
    render(){
        var liveCards;
        if(this.props.liveItems.length == 0){
            liveCards = <div className="noContent">
                <div className="noItem">
                    <img src={noItem}/>
                </div>
                <h3>本月还没有直播项目哦</h3>
            </div>
        }else{
            liveCards = this.props.liveItems.map((x,i)=>{
                return(
                    <div className="liveCard" key={i} onTouchStart={this.goToDetailPage.bind(this,x)}>
                        <img src={projectimg}/>
                        {(()=>{
                            if(x.status == 'crowd'){
                                return (<div className="cover"></div>)
                            }else{
                                return (<div className="cover grey"></div>)
                            }
                        })()}
                        <div className="liveInside">
                            <span className="projectStatus">{x.statusName}</span>
                            <div className="playStatus">
                                <img src={projectplay}/>
                            </div>
                            <h2>{x.title}</h2>
                            <div className="projectInfo clearfix">
                                <span className="leftSpan">主播:{x.anchor}</span>
                                {(()=>{
                                    if(x.status == 'progressing'){
                                        return (<spans className="rightSpan"><img src={see}/>{x.people}人</spans>)
                                    }else if(x.status == 'notstart'){
                                        return (<span className="rightSpan"><img src={waiting} className="waiting"/>{x.time}</span>)
                                    }else if(x.status == 'crowd'){
                                        return (<span className="rightSpan">还剩{x.residue}次,&nbsp;&nbsp;¥{x.price}申请</span>)
                                    }else{
                                        return (<span className="rightSpan"><img src={see}/>{x.people}人</span>)
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <div className="liveOutside">
                    {liveCards}
                </div>
            </div>
        )
    }
}
LiveCard.contextTypes = {
    router: React.PropTypes.object
}

export default LiveCard