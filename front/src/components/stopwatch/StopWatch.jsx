import React from 'react'

import './StopWatch.scss'

export default class StopWatch extends React.Component {

    constructor(props) {
        super(props)
    }


    render() { 
        return (
            <div className='stop-watch'>
                {this.props.state} {this.props.startTime} {this.props.stopTime}
            </div>
        )
    }
}
