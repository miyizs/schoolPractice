import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopToolBar from '../Components/TopToolBar'
import Carousel from '../Components/Carousel'
import MainSection from '../Components/MainSection'
import {Link } from 'react-router'
import '../assets/style/style.css'
import '../assets/style/reset.css'

class StoryPage extends Component{
    render() {
        return (
            <div>
                <TopToolBar />
                <Carousel />
                <MainSection school={this.props.school} qaList={this.props.qaList}/>
            </div>
        )
    }
}

StoryPage.propTypes = {
    school: PropTypes.array.isRequired,
    qaList: PropTypes.array.isRequired
}
function mapStateToProps(state, ownProps) {
    return {
        school: state.schoolItemReducer.school,
        qaList: state.schoolItemReducer.qaList
    }
}
export default connect(mapStateToProps, {
})(StoryPage)
