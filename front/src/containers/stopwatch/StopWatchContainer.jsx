import React from 'react'
import { connect } from 'react-redux'
// Components
import StopWatch from 'components/stopwatch/StopWatch'

const mapStateToProps = state => {
    return {
       state: state.stopwatch.state,
       startTime: state.stopwatch.startTime,
       stopTime: state.stopwatch.stopTime
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const StopWatchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StopWatch)

export default StopWatchContainer