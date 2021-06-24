import React from 'react'
import PropTypes from 'prop-types'

import './_menu.scss'

class MenuAction extends React.Component {
  constructor (props) {
    super(props)
  }

  // VIEW CALLBACKS //

  // RENDERING //

  render () {
    return (
      <button
        className='menu-action'
        onClick={this.props.onClick}>
        { this.props.text }
      </button>
    )
  }
}

MenuAction.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}
MenuAction.defaultProps = {
  text: '',
  onClick: () => {}
}

export default MenuAction
