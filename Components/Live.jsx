import React,{ Component,PropTypes } from 'react'
import MonthCarousel from '../Components/MonthCarousel'
import LiveCard from '../Components/LiveCard'
import '../assets/style/component/monthcarousel.css'
const Live = ({liveItems,seeDetail}) => {
        return (
                <div className="liveBox">
                    <MonthCarousel />
                    <LiveCard liveItems={ liveItems } seeDetail={seeDetail}/>
                </div>
        )
    }

export default Live