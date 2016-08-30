import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TabActions from '../actions/monthAction'
import TopToolBar from '../Components/TopToolBar'
import Carousel from '../Components/Carousel'
import MainSection from '../Components/MainSection'
import '../assets/style/style.css'
import '../assets/style/reset.css'

class StoryPage extends Component{
    render() {
        return (
            <div>
                <TopToolBar />
                <Carousel />
                <MainSection school={this.props.school} qaList={this.props.qaList} liveItems={this.props.items} activeTab={this.props.actions.activeTab} tabList={this.props.tabList} activeIdx={this.props.activeIdx} seeDetail={this.props.actions.seeDetail}/>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        school: state.schoolItemReducer.school,
        qaList: state.schoolItemReducer.qaList,
        items:  state.monthReducer,
        tabList: state.tabReducer.tabList,
        activeIdx: state.tabReducer.currentActive
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(TabActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StoryPage)
