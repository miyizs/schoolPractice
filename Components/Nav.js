import React,{ Component } from 'react'
import { Link } from 'react-router'
class Nav extends Component {
  render(){
    var linkStyle = {
      color: 'black',
      fontSize:'18px'
    }
    return (
      <div style={linkStyle}>
        <Link to='/'>StroryPage</Link>&nbsp;
        <Link to='/about'>AboutPage</Link>
      </div>
    )
  }
}
export default Nav
