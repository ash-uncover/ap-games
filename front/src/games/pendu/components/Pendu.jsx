import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
 
import Home from './home/Home'
import Board from './board/Board'
import Helper from '../actions/PenduActionsHelper'

import './_pendu.scss'

class Pendu extends React.Component {
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
      <div className='pendu'>
        <Switch>
          <Route path={url + '/game'} component={Board} />
          <Route path={url + '/'} component={Home} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loaded, loading, loadingError } = state.pendu.data
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

const PenduContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pendu)

export default PenduContainer
