import React from 'react'

import './_button.scss'

const icon = '/src/games/pendu/assets/img/icon.svg'

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button onClick={this.props.onClick} className='button'>
        <img src={icon} />
        <div className='button-inner'>
          {this.props.children}
        </div>
        <img src={icon} />
      </button>
    )
  }
}

export default Button
