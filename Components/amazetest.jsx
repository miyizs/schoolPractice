import React, { Component } from 'react'
class Counter extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 8
        }
    }

    handleClick() {
        var newCount = this.state.count+1
        this.setState({count:newCount});
    }

    render() {
        return (
            <div className="theBlock"></div>
        )
    }
}

export default Counter
