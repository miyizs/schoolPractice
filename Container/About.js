import React,{ Component,PropTypes} from 'react'
import connect from 'react-redux'
import ShareToolBar from '../Components/ShareToolBar'
import PlayBox from '../Components/playBox'
import FutureBox from '../Components/FutureBox'
class About extends Component{
    render(){
        return (
            <div>
                <ShareToolBar />
                <PlayBox />
            </div>
        )
    }
}

export default About
