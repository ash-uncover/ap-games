import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

import MemoryHome from './MemoryHome'
import MemoryGame from './game/MemoryGame'
import MemorySummary from './summary/MemorySummary'

import Helper from '../actions/MemoryActionsHelper'

import './_memory.scss'

class MemoryApp extends React.Component {
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
      <div className='memory'>
        <Switch>
          <Route path={url + '/game'} component={MemoryGame} />
          <Route path={url + '/summary'} component={MemorySummary} />
          <Route path={url + '/'} component={MemoryHome} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loaded, loading, loadingError } = state.memory.data
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

const MemoryAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryApp)

export default MemoryAppContainer
