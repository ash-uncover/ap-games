import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import I18NHelper from 'utils-lib/i18n/I18NHelper'
import './_home.scss'

class OptionMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='option-menu'>
        <div className='menu-title'>
          Options
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

const OptionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionMenu)

export default OptionMenuContainer
