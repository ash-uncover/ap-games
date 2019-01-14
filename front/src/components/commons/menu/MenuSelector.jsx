import React from 'react'
import PropTypes from 'prop-types'

class MenuSelector extends React.Component {
  constructor (props) {
    super(props)
   }

  // VIEW CALLBACKS //


  // RENDERING //

  render () {
    return (
      <div
        className='menu-selector'>
        <button
          className='menu-selector-action'
          disabled={this.props.previousValueDisabled}
          onClick={this.props.onPreviousValue}>
          {'<'}
        </button>
        <div
          className='menu-selector-value'>
          { this.props.value }
        </div>
        <button
          className='menu-selector-action'
          disabled={this.props.nextValueDisabled}
          onClick={this.props.onNextValue}>
          {'>'}
        </button>
      </div>
    )
  }
}

MenuSelector.propTypes = {
  value: PropTypes.string,
  previousValueDisabled: PropTypes.bool,
  nextValueDisabled: PropTypes.bool,
  onPreviousValue: PropTypes.func,
  onNextValue: PropTypes.func
}
MenuSelector.defaultProps = {
  value: '',
  previousValueDisabled: false,
  nextValueDisabled: false,
  onPreviousValue: () => {},
  onNextValue: () => {}
}

export default MenuSelector
