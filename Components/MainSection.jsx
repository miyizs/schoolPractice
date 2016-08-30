import React,{ Component } from 'react'
import '../assets/style/component/tabBox.css'
import SingleCard from '../Components/SingleCard'
import Asking from '../Components/asking'
import Live from '../Components/Live'
class MainSection extends Component{
    render(){
        var cards = this.props.school.map((x,i)=>{
          return (
            <SingleCard eachItem={x} key={i} idx={i}/>
          )
        });
        var askinglist = this.props.qaList.map((x,i)=>{
            return (
                <Asking eachQuestion={x} key={i} idx={i}/>
            )
        })
        var boxContent;
        if(this.props.activeIdx == 0){
          boxContent = cards;
        }else if(this.props.activeIdx ==1){
            boxContent = <Live liveItems={this.props.liveItems} seeDetail={this.props.seeDetail}/>
        }else{
          boxContent = askinglist;
        }
        return(
          <div>
            <div className="TabBox">
                <div className="TabContent">
                    {
                        this.props.tabList.map((x,i)=>{
                            if(x == 'firstActive'){
                                return <span onTouchStart={this.props.activeTab.bind(this,i)} key={x}>校园故事</span>
                            }else if( x == 'secondActive'){
                                return <span onTouchStart={this.props.activeTab.bind(this,i)} key={x}>校园直播</span>
                            }else{
                                return <span onTouchStart={this.props.activeTab.bind(this,i)} key={x}>校园问答</span>
                            }

                        })
                    }
                </div>
                <div id="marker" ref="marker" className={this.props.tabList[this.props.activeIdx]}></div>
            </div>
            {boxContent}
          </div>
        )
    }
}
export default MainSection
