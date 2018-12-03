import React from 'react'
import PropTypes from 'prop-types'

import './_page-container.scss'

class PageContainer extends React.Component {
  constructor (props) {
    super(props)

    this.buildItem = this.buildItem.bind(this)
  }

  /* LIFECYCLE */

  /* INTERNAL METHODS */

  buildClassName (index) {
    let result = 'page'
    if (index === this.props.page) {
      result += ' current'
    } else if (index === 0) {
      result += ' previous'
    } else {
      result += ' next'
    }
    return result
  }

  /* RENDERING */

  buildItem (item, index) {
    return (
      <div
        key={`page-${index}`}
        className={this.buildClassName(index)}>
        {item}
      </div>
    )
  }

  render () {
    return (
      <div className='page-container'>
        {this.props.children.map(this.buildItem)}
      </div>
    )
  }
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
  page: PropTypes.number
}
PageContainer.defaultProps = {
  children: [],
  page: 0
}


export default PageContainer
