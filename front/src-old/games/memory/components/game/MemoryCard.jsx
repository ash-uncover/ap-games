import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import './_game.scss'

class MemoryCard extends React.Component {
  constructor (props) {
    super(props)

    this.onClickCard = this.onClickCard.bind(this)
    this.onClickImage = this.onClickImage.bind(this)
  }

  // VIEW CALLBACKS //

  onClickCard () {
    if (
      !this.props.blocked &&
      !this.props.item.revealed &&
      !this.props.item.found
    ) {
      this.props.onRevealCard(this.props.item)
    } else if (this.props.blocked) {
      this.props.onUnrevealCards()
      this.props.onRevealCard(this.props.item)
    }

  }

  onClickImage () {
    if (this.props.blocked) {
      this.props.onUnrevealCards()
    }
  }

  // RENDERING //

  buildClassName () {
    let result = 'card'
    if (this.props.card.found) {
      result += ' found'
    }
    if (this.props.card.revealed) {
      result += ' revealed'
    }
    return result
  }

  render () {
    return (
      <div className={this.buildClassName()}>
        <div className='background' />
        <button
          className='image'
          onClick={this.onClickImage}>
          <img src={`/images/${this.props.card.item.src}`} />
        </button>
        <button
          className='mask'
          onClick={this.onClickCard} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blocked: state.memory.game.blocked,
    card: ownProps.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUnrevealCards: () => dispatch(ActionRegistry.memoryUnrevealCards()),
    onRevealCard: (item) => dispatch(ActionRegistry.memoryRevealCard(item))
  }
}

const MemoryCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryCard)

export default MemoryCardContainer

