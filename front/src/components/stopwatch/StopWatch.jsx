import React from 'react'
import './StopWatch.scss'

export default class StopWatch extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        console.log('newprops')
        console.log(props)
    }

    render() { 
        return (
            <div className='stop-watch'>
                {this.props.state === 'STOPPED' ? (<button onClick={this.props.onStart}>Start</button>) : null }
                {this.props.state === 'STARTED' ? (<button onClick={this.props.onStop}>Stop</button>) : null }
                {this.props.state} {this.props.startTime} {this.props.stopTime}
            </div>
        )
    }
}
