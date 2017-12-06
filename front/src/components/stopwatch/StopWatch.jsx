import React from 'react'
import './StopWatch.scss'

import { DateUtils } from 'utils-lib'

export default class StopWatch extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        console.log('newprops')
        console.log(props)
    }

    renderDuration() {
        if (this.props.startTime && this.props.stopTime) {
            let data = DateUtils.durationToHumanTime(this.props.stopTime - this.props.startTime);
            return data.hours + 'h' + data.minutes + 'm' + data.seconds + 's'
        }
        return ''
    }

    render() { 
        return (
            <div className='stop-watch'>
                {this.props.state === 'STOPPED' ? (<button onClick={this.props.onStart}>Start</button>) : null }
                {this.props.state === 'STARTED' ? (<button onClick={this.props.onStop}>Stop</button>) : null }
                {this.props.state} {this.renderDuration()}
            </div>
        )
    }
}
