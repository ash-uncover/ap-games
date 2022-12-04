import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MinehunterHome from './MinehunterHome'
import MinehunterGame from './game/MinehunterGame'

import Helper from '../actions/MinehunterActionsHelper'

import './_minehunter.scss'

class MinehunterApp extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  componentWillMount() {
    this.checkLoad({
      loaded: this.props.loaded,
      loading: this.props.loading,
      loadingError: this.props.loadingError
    })
  }

  componentWillReceiveProps(props) {
      this.checkLoad(props)
  }

  checkLoad(args) {
    if(!args.loaded && !args.loading && !args.loadingError) {
      this.props.onLoadData()
    }
  }

  /* RENDERING */

  render () {
    const url = this.props.match.url
    return (
      <div className='minehunter'>
        <Switch>
          <Route path={url + '/game'} component={MinehunterGame} />
          <Route path={url + '/'} component={MinehunterHome} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loaded, loading, loadingError } = state.minehunter.data
  return {
    loaded,
    loading,
    loadingError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: () => { Helper.loadData(dispatch) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterApp)

