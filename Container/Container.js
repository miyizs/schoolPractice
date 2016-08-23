import React,{ Component } from 'react'
import Nav from '../Components/Nav'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Container extends Component{
  render(){
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="example"
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={5000}
      >
        <div>
            <Nav />
            {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
export default Container
