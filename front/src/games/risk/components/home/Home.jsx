import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MainMenu from './MainMenu'
import NewMenu from './NewMenu'
import LoadMenu from './LoadMenu'
import OptionMenu from './OptionMenu'
import Credits from './Credits'

import './_home.scss'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='risk-home'>
        <div className='risk-home-logo'>
          <img
            src="/src/games/risk/assets/images/risk_logo.png"
            alt="RISK ****" />
        </div>
        <div className='risk-home-content'>
          <Switch>
            <Route path={url + '/new'} component={NewMenu} />
            <Route path={url + '/load'} component={LoadMenu} />
            <Route path={url + '/options'} component={OptionMenu} />
            <Route path={url + '/credits'} component={Credits} />
            <Route path={url + '/'} component={MainMenu} />
          </Switch>
        </div>
        <div className='risk-home-disclaimer'>
          We are not affiliate with Risk
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
