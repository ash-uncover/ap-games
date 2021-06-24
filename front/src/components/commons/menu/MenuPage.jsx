import React from 'react'
import PropTypes from 'prop-types'

import './_menu.scss'

class MenuPage extends React.Component {
  constructor (props) {
    super(props)
  }

  // VIEW CALLBACKS //

  // RENDERING //

  render () {
    let children = this.props.children
    if (!Array.isArray(children)) {
      children = [ children ]
    }
    return (
      <div 
        className='menu-page'>
        <h2
          className='menu-page-title'>
          { this.props.title }
        </h2>
        { children.map((child, index) => (
          index < children.length - 1 ?
            <div
              key={`menu-page-entry-${index}`}
              className='menu-page-entry'>
              { child }
            </div>
          : null
        )) }
        <div className='menu-page-fill' />
        <div
          className='menu-page-entry menu-page-footer'>
          { children[children.length - 1] }
        </div>
      </div>
    )
  }
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
}
MenuPage.defaultProps = {
  children: []
}

export default MenuPage
