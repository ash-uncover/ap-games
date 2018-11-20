import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../commons/Button'
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
          {I18NHelper.get('pendu.menu.options')}
        </div>
        <ul className='menu'>
          <li className='menu-entry'>
            <Link to={`/pendu`}>
              <Button>
                {I18NHelper.get('pendu.menu.back')}
              </Button>
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
