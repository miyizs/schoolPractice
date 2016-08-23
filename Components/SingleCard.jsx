import React,{ Component } from 'react'
import '../assets/style/component/singleCard.css'
import p1 from '../assets/images/s1.png'
import play from '../assets/images/play.png'
class SingleCard extends Component{
    constructor(){
        super()
        this.state = {
            status:['hide','show','hide']
        }
    }
    componentDidMount(){
      let idx = this.props.idx;
      if(this.state.status[idx] == 'hide'){
          document.getElementsByClassName('singleCard')[idx].childNodes[1].className = 'contentBox hide'
      }
    }
    changeHeight(idx){
       let newStatus = this.state.status;
       if(this.state.status[idx]=='hide'){
         newStatus[idx] = 'show';
         this.setState({status:newStatus})
         document.getElementsByClassName('singleCard')[idx].childNodes[1].className = 'contentBox'
       }else{
         newStatus[idx] = 'hide';
         this.setState({status:newStatus})
         document.getElementsByClassName('singleCard')[idx].childNodes[1].className = 'contentBox hide'
       }
    }
    render(){
        var content = this.props.eachItem.schoolItems.map((x,i)=>{
            return(
                <div className="contentLine clearfix" key={i}>
                    <div className="imgBox">
                        <img src={p1} />
                        <div className="iconBox">
                            <img src={play}/>
                        </div>
                    </div>
                    <div className="schoolContent">
                        <div>{x.title}</div>
                        <div>{x.author}</div>
                    </div>
                </div>
            )
        })
        var idx = this.props.idx;
        if(this.state.status[idx] == 'hide'){
            var currentLen = this.props.eachItem.schoolItems.length
            var idx = this.props.idx
            return(
                <div className="singleCard">
                    <div className="titleLine clearfix" onTouchStart={this.changeHeight.bind(this,idx)}>
                        <div>{this.props.eachItem.schoolProjectName}</div>
                        <div><span className="group">展开全部({currentLen})</span><span className="littleArrow"></span></div>
                    </div>
                    <div className="contentBox">
                        {content}
                    </div>
                </div>
            )
        }
        return(
            <div className="singleCard">
                <div className="titleLine clearfix" onTouchStart={this.changeHeight.bind(this,idx)}>
                    <div>{this.props.eachItem.schoolProjectName}</div>
                    <div><span className="group">收起</span><span className="littleArrow"></span></div>
                </div>
                <div className="contentBox">
                    {content}
                </div>
            </div>
        )
    }
}

export default SingleCard
