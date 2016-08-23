import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../assets/style/component/list.css'
class List extends Component{
    constructor() {
        super()
        this.state = {
            items:['111','222','333','444','555'],
            currentIdx:0
        }
    }
    handleRemove(i){
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    render(){
        return (
           <ul className="listBox">
               <div className="listBoxIn clearfix">
                   <ReactCSSTransitionGroup transitionName="example">
                       <li>{this.state.items[(this.state.currentIdx)]}</li>
                   </ReactCSSTransitionGroup>
               </div>
           </ul>
        )
    }
}

export default List
