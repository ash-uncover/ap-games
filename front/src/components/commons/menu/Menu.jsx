import React from 'react'
import PropTypes from 'prop-types'

import PageContainer from 'components/commons/pagecontainer/PageContainer'

import './_menu.scss'

class Menu extends React.Component {
  constructor (props) {
    super(props)
  }

  // VIEW CALLBACKS //

  // RENDERING //

  render () {
    return (
      <div
        className='menu'>
        <PageContainer page={this.props.page}>
          { this.props.children }
        </PageContainer>
      </div>
    )
  }
}

Menu.propTypes = {
}
Menu.defaultProps = {
}

export default Menu
