import React from 'react'
import './Pendu.scss'

import PenduData from 'game-data/pendu/PenduData'

import FailedTile from './FailedTile'
import SecretTile from './SecretTile'

export default class Pendu extends React.Component {
  constructor (props) {
    super(props)

    let word = PenduData.WORDS[Math.floor((Math.random() * PenduData.WORDS.length))]
    let secret = []
    for (var i = 0; i < word.length; i++) {
      secret.push(word[i].toUpperCase())
    }
    let found = secret.map(function (v, index) {
      if (index === 0) {
        return v
      }
      return (PenduData.REGEX.test(v) ? '' : v)
    })
    this.state = {
      lost: false,
      won: false,
      status: 0,
      secret: secret,
      failed: [],
      found: found
    }

    this.buildSecretTile = this._buildSecretTile.bind(this)
    this.buildFailedTile = this._buildFailedTile.bind(this)

    this.onBlur = this._onBlur.bind(this)
    this.onChange = this._onChange.bind(this)
  }

  _buildSecretTile (s, index) {
    return (
      <SecretTile key={index} value={s} secret={this.state.secret[index]} />
    )
  }
  _buildFailedTile (s, index) {
    return (
      <FailedTile key={index} value={s} />
    )
  }

  _onChange (event) {
    if (!this.state.lost && !this.state.won) {
      let v = event.target.value.toUpperCase()
      if (PenduData.REGEX.test(v)) {
        for (let i = 0; i < this.state.secret.length; i++) {
          if (this.state.secret[i] === v) {
            this.state.found[i] = v
          }
        }
        if (this.state.found.indexOf('') === -1) {
          this.state.score = (this.state.score || 0) + 1
          this.state.won = true
        }
        if (this.state.secret.indexOf(v) === -1 && this.state.failed.indexOf(v) === -1) {
          this.state.failed.push(v)
          this.state.status++
          if (this.state.status > 10) {
            this.state.lscore = (this.state.lscore || 0) + 1
            this.state.lost = true
            this.state.found = this.state.secret
          }
        }
        this.forceUpdate()
      }
    }
  }

  replay () {
    this.setState(this.getInitialState())
  }
  _onBlur () {
    this.refs.input.focus()
  }

  render () {
    return (
      <div className={(this.state.lost ? 'lost ' : (this.state.won ? 'won ' : '')) + 'pendu'} >
        <div>
          <img src={'assets/images/pendu/' + this.state.status + '.png'} />
        </div>
        <input autoFocus ref='input' onBlur={this.onBlur} className='userInput' value={''} onChange={this.onChange} />
        <div className='secretTiles'>
          {this.state.found.map(this.buildSecretTile)}
        </div>
        <div className='failedTiles'>
          {this.state.failed.map(this.buildFailedTile)}
        </div>
        <div>
          {this.state.lost || this.state.won
            ? <button onClick={this.replay}>Rejouer</button>
            : '' }
        </div>
        <div className='score'>
                    MOTS TROUVES : {this.state.score || 0}
        </div>
        <div className='score'>
                    MOTS PERDUS : {this.state.lscore || 0}
        </div>
      </div>
    )
  }
}
