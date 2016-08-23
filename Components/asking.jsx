import React,{ Component } from 'react'
import user from '../assets/images/user.png'
import play from '../assets/images/playgreen.png'
import pause from '../assets/images/pausegreen.png'
import progress from '../assets/images/progress.png'
import '../assets/style/component/Asking.css'
class Asking extends Component{
    constructor(){
        super()
        this.state = {
            playList:[],
            timeList:[]
        }
    }
    getTime(idx,e){
        console.log(e.currentTarget.duration)
        console.log(idx)
        var newTimeList = this.state.timeList
        newTimeList[idx] = parseInt(e.currentTarget.duration)
        this.setState({timeList:newTimeList})
    }
    handleAudio(idx){
        var newPlayList = this.state.playList
        var newTimeList = this.state.timeList
        if(this.state.playList[idx] !== 'play'){
            newPlayList[idx] = 'play'
            this.refs.audio.play()
            var timer = setInterval(()=>{
                if(this.refs.audio.ended){
                    clearInterval(timer)
                    newTimeList[idx] = parseInt(this.refs.audio.duration)
                    newPlayList[idx] = 'pause'
                    this.setState({playList:newPlayList,timeList:newTimeList})
                }else{
                    newTimeList[idx] = parseInt(this.refs.audio.duration-this.refs.audio.currentTime)
                    this.setState({playList:newPlayList,timeList:newTimeList})
                }
            },1000)
        }else{
            newPlayList[idx] = 'pause'
            this.refs.audio.pause()
        }
        this.setState({playList:newPlayList,timeList:newTimeList})
    }
    render(){
        var idx = this.props.idx;
        var playStatus;
        if(this.state.playList[idx] !=='play'){
            playStatus = <img src={play}/>
        }else{
            playStatus = <img src={pause}/>
        }
        return(
            <div className="askingBox">
                <div className="askingCard">
                    <div className="askingContent">{this.props.eachQuestion.question}</div>
                    <div className="answer clearfix">
                        <div>
                            <img src={user}/>
                        </div>
                        <div>{this.props.eachQuestion.questioner}</div>
                    </div>
                    <div className="audioBox clearfix">
                        <div onTouchStart={this.handleAudio.bind(this,idx)}>
                            {playStatus}
                            <audio ref="audio" src={this.props.eachQuestion.src} onLoadedMetadata={this.getTime.bind(this,idx)}>
                                Your browser does not support the <code>audio</code> element.
                            </audio>
                        </div>
                        <div>
                            <img src={progress}/>
                        </div>
                        <div className="time">{this.state.timeList[idx]}"</div>
                    </div>
                    <div className="questionInfo">
                        提问{this.props.eachQuestion.money}元,{this.props.eachQuestion.people}人听过
                    </div>
                </div>
            </div>
        )
    }
}
export default Asking