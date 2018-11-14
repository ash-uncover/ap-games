import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PlayerColor from '../..//model/constants/PlayerColor'

import './_home.scss'

class NewMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 2,
      players: this.buildInitialPlayers()
    }
    this.onRemovePlayer = this.onRemovePlayer.bind(this)
    this.onAddPlayer = this.onAddPlayer.bind(this)
    this.onStartNewGame = this.onStartNewGame.bind(this)
  }
  
  /* INTERNAL METHODS */

  buildInitialPlayers () {
    return Object.values(PlayerColor.VALUES).map((color, index) => ({
      id: `Player ${index + 1}`,
      color: color
    }))
  }

  /* VIEW CALLBACKS */

  onRemovePlayer () {
    this.setState({
      value: this.state.value - 1
    })
  }

  onAddPlayer () {
    this.setState({
      value: this.state.value + 1
    })
  }

  onNextPlayerColor (player) {
    const initialColor = player.color
    const possibleColors = Object.values(PlayerColor.VALUES)
      .filter((color) => !this.state.players.some((playerX, index) => {
        return index < this.state.value && color === playerX.color && playerX !== player
      }))
    const currentIndex = possibleColors.indexOf(player.color)
    let nextIndex = currentIndex - 1
    if (nextIndex < 0) {
      nextIndex += possibleColors.length
    }
    const newColor = possibleColors[nextIndex]
    this.state.players.find((player) => player.color === newColor).color = initialColor
    player.color = newColor
    this.forceUpdate()
  }

  onPreviousPlayerColor (player) {
    const initialColor = player.color
    const possibleColors = Object.values(PlayerColor.VALUES)
      .filter((color) => !this.state.players.some((playerX, index) => {
        return index < this.state.value && color === playerX.color && playerX !== player
      }))
    const currentIndex = possibleColors.indexOf(player.color)
    let nextIndex = currentIndex + 1
    if (nextIndex >= possibleColors.length) {
      nextIndex -= possibleColors.length
    }
    const newColor = possibleColors[nextIndex]
    this.state.players.find((player) => player.color === newColor).color = initialColor
    player.color = newColor
    this.forceUpdate()
  }

  onStartNewGame () {
    this.props.history.push('/risk/game')
  }

  /* RENDERING */

  render () {
    const url = this.props.match.url
    console.log(this.props)
    return (
      <div className='new-menu'>
        <h2 className='title'>
          Create a New Game
        </h2>
        <div className='selector-group'>
          <div className='label'>
            Number of Players
          </div>
          <div className='selector'>
            <button
              className='selector-button'
              onClick={this.onRemovePlayer}
              disabled={this.state.value <= 2}>
              {'-'}
            </button>
            <div className='selector-content'>
              { this.state.value }
            </div>
            <button
              className='selector-button'
              onClick={this.onAddPlayer}
              disabled={this.state.value >= 5}>
              {'+'}
            </button>
          </div>
        </div>
        <ul className='players-list'>
          {this.state.players
            .filter((player, index) => index < this.state.value)
            .map((player, index) => {
              return (
                <div className='selector-group'>
                  <div className='label'>
                    {player.id}
                  </div>
                  <div className='selector'>
                    <button
                      className='selector-button'
                      onClick={this.onNextPlayerColor.bind(this, player)}>
                      {'<'}
                    </button>
                    <div className='selector-content'>
                      <span
                        className='player-color'
                        style={{background:player.color.color}} />
                    </div>
                    <button
                      className='selector-button'
                      onClick={this.onPreviousPlayerColor.bind(this, player)}>
                      {'>'}
                    </button>
                  </div>
                </div>
              )
            })
          }
        </ul>
        <button
          className='menu-entry'
          onClick={this.onStartNewGame}>
          {'Create Game'}
        </button>
        <Link to={`/risk`}>
          <button className='menu-entry'>
            {'Back'}
          </button>
        </Link>
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

const NewMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMenu)

export default NewMenuContainer
