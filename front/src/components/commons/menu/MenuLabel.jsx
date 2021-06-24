import React from 'react'
import PropTypes from 'prop-types'

import './_menu.scss'

class MenuLabel extends React.Component {
  constructor (props) {
    super(props)
  }

  // VIEW CALLBACKS //

  // RENDERING //

  render () {
    return (
      <div 
        className='menu-label'>
        { this.props.text }
      </div>
    )
  }
}

MenuLabel.propTypes = {
  text: PropTypes.string
}
MenuLabel.defaultProps = {
  text: ''
}

export default MenuLabel
