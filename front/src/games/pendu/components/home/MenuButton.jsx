import React from 'react'

import './_home.scss'

const icon = '/src/games/pendu/assets/img/icon.svg'
class MenuButton extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button onClick={this.props.onClick} className='menu-button'>
        <img src={icon} />
        <div className='menu-button-inner'>
          {this.props.children}
        </div>
        <img src={icon} />
      </button>
    )
  }
}

export default MenuButton
