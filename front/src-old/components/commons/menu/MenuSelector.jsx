import React from 'react'
import PropTypes from 'prop-types'

import './_menu.scss'

class MenuSelector extends React.Component {
  constructor (props) {
    super(props)
   }

  // VIEW CALLBACKS //


  // RENDERING //

  buildClassName () {
    let result = 'menu-selector'
    if (this.props.orientation === MenuSelector.ORIENTATION.VERTICAL) {
      result += ' vertical'
    } else {
      result += ' horizontal'
    }
    return result
  }

  render () {
    return (
      <div
        className={this.buildClassName()}>
        <div
          className='menu-selector-label'>
          { this.props.label }
        </div>
        <div
          className='menu-selector-control'>
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
      </div>
    )
  }
}

MenuSelector.ORIENTATION = {
  VERTICAL: 'v',
  HORIZONTAL: 'h'
}

MenuSelector.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  orientation: PropTypes.string,
  previousValueDisabled: PropTypes.bool,
  nextValueDisabled: PropTypes.bool,
  onPreviousValue: PropTypes.func,
  onNextValue: PropTypes.func
}
MenuSelector.defaultProps = {
  label: '',
  value: '',
  orientation: MenuSelector.ORIENTATION.HORIZONTAL,
  previousValueDisabled: false,
  nextValueDisabled: false,
  onPreviousValue: () => {},
  onNextValue: () => {}
}

export default MenuSelector
