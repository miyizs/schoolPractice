import React,{ Component } from 'react'
import '../assets/style/component/tabBox.css'
import SingleCard from '../Components/SingleCard'
import Asking from '../Components/asking'
class MainSection extends Component{
    constructor() {
        super()
        this.state = {
            classList:['firstActive','secondActive','thirdActive'],
            nameList:['校园故事','校园直播','校园问答'],
            currentActive:0
        }
    }
    activeTab(i){
        document.getElementById('marker').className = this.state.classList[i];
        this.setState({currentActive:i});
    }
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
        if(this.state.currentActive == 0){
          boxContent = cards;
        }else if(this.state.currentActive ==1){
            boxContent = <div>111</div>
        }else{
          boxContent = askinglist;
        }
        return(
          <div>
            <div className="TabBox">
                <div className="TabContent">
                    {
                        this.state.nameList.map((x,i)=>{
                            return(
                                <span onTouchStart={this.activeTab.bind(this,i)} key={x}>{x}</span>
                            )
                        })
                    }
                </div>
                <div id="marker"></div>
            </div>
            {boxContent}
          </div>
        )
    }
}
export default MainSection
