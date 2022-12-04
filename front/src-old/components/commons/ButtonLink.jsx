import React from 'react'

class ButtonLink extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  // VIEW CALLBACKS //

  onClick () {
    this.props.history.push(this.props.to)
  }

  // RENDERING //

  render () {
    return (
      <button 
        className='button-link'
        onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default ButtonLink
