import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Board from './board/Board'
import Helper from '../actions/RiskActionsHelper'

import './_risk.scss'

class Risk extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    this.checkLoad({
      dataLoaded: this.props.dataLoaded,
      dataLoading: this.props.dataLoading,
      dataLoadingError: this.props.dataLoadingError
      })
  }

  componentWillReceiveProps(props) {
      this.checkLoad(props)
  }

  checkLoad(args) {
    if(!args.dataLoaded && !args.dataLoading && !args.dataLoadingError) {
      this.props.onLoadData()
    }
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='risk'>
        <Switch>
          <Route path={url + '/game'} component={Board} />
          <Route path={url + '/'} component={Home} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dataLoaded: state.risk.data.loaded,
    dataLoading: state.risk.data.loading,
    dataLoadingError: state.risk.data.loadingError,

    territories: state.risk.data.territories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: () => { Helper.loadData(dispatch) }
  }
}

const RiskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Risk)

export default RiskContainer
