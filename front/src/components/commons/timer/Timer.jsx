import React from 'react'
import PropTypes from 'prop-types'

import { DateUtils } from 'utils-lib'

import './_timer.scss'

class Timer extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  /* INTERNAL METHODS */

  /* RENDERING */

  renderDuration () {
    const result = []
    let duration = DateUtils.durationToHumanTime(this.props.duration)
    if (duration.hours || this.props.showNilHours) {
      result.push(
        <div className='timer-hours'>
          {DateUtils.logTime(duration.hours)}
        </div>
      )
      result.push(
        <div className='timer-separator'>
          {this.props.hoursSeparator}
        </div>
      )
    }
    if (duration.minutes || this.props.showNilMinutes) {
      result.push(
        <div className='timer-minutes'>
          {DateUtils.logTime(duration.minutes)}
        </div>
      )
      result.push(
        <div className='timer-separator'>
          {this.props.minutesSeparator}
        </div>
      )
    }
    if (duration.seconds || this.props.showNilSeconds) {
      result.push(
        <div className='timer-seconds'>
          {DateUtils.logTime(duration.seconds)}
        </div>
      )
      result.push(
        <div className='timer-separator'>
          {this.props.secondsSeparator}
        </div>
      )
    }
    if (duration.millis && this.props.showMillis) {
      result.push(
        <div className='timer-millis'>
          {DateUtils.logTime(duration.millis)}
        </div>
      )
      result.push(
        <div className='timer-separator'>
          {this.props.millisSeparator}
        </div>
      )
    }
    return result
  }

  render () {
    return (
      <div className='timer'>
        {this.renderDuration()}
      </div>
    )
  }
}

Timer.propTypes = {
  duration: PropTypes.number,
  
  hoursSeparator: PropTypes.string,
  minutesSeparator: PropTypes.string,
  secondsSeparator: PropTypes.string,
  millisSeparator: PropTypes.string,
  
  showNilHours: PropTypes.bool,
  showNilMinutes: PropTypes.bool,
  showNilSeconds: PropTypes.bool,

  showMillis: PropTypes.bool
}
Timer.defaultProps = {
  duration: 0,

  hoursSeparator: 'h',
  minutesSeparator: 'm',
  secondsSeparator: 's',
  millisSeparator: 'ms',

  showNilHours: false,
  showNilMinutes: false,
  showNilSeconds: false,
  
  showMillis: false
}


export default Timer
