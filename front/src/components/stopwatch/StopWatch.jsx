import React from 'react'
import './StopWatch.scss'

import { DateUtils } from 'utils-lib'

export default class StopWatch extends React.Component {

    constructor(props) {
        super(props)
    }

    renderDuration() {
        if (this.props.startTime && this.props.stopTime) {
            let data = DateUtils.durationToHumanTime(this.props.stopTime - this.props.startTime);
            if (data.hours) {
                return DateUtils.logTime(data.hours) + 'h' + DateUtils.logTime(data.minutes) + 'm' + DateUtils.logTime(data.seconds) + 's'
            }
            return DateUtils.logTime(data.minutes) + ':' + DateUtils.logTime(data.seconds) + 's'
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
