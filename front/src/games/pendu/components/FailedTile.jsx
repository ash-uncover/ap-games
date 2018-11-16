import React from 'react'

import './_pendu.scss'

export default class FailedTile extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='failedTile'>
        {this.props.value}
      </div>
    )
  }
}