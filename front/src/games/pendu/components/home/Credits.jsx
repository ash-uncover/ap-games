import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import './_home.scss'

import I18NHelper from 'utils-lib/i18n/I18NHelper'
class Credits extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='credits'>
        <div className='menu-title'>
          Credits
        </div>
        <ul className='menu'>
          <li className='menu-entry'>
            <Link to={`/pendu`}>
              <MenuButton>
                {I18NHelper.get('pendu.menu.back')}
              </MenuButton>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const CreditsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits)

export default CreditsContainer
