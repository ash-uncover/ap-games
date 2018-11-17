import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MainMenu from './MainMenu'
import NewMenu from './NewMenu'
import OptionMenu from './OptionMenu'
import Credits from './Credits'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_home.scss'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='home'>
        <div className='home-logo'>
          <img
            src='/src/games/pendu/assets/images/pendu_logo.png'
            alt='LE PENDU' />
        </div>
        <div className='home-content'>
          <Switch>
            <Route path={url + '/new'} component={NewMenu} />
            <Route path={url + '/options'} component={OptionMenu} />
            <Route path={url + '/credits'} component={Credits} />
            <Route path={url + '/'} component={MainMenu} />
          </Switch>
        </div>
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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer

