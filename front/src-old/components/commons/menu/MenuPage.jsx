import React from 'react'
import PropTypes from 'prop-types'

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
          <div
            key={`menu-page-entry-${index}`}
            className='menu-page-entry'>
            { child }
          </div>
        )) }
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
