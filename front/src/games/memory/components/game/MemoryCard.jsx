import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import './_game.scss'

class MemoryCard extends React.Component {
  constructor (props) {
    super(props)

    this.onClickCard = this.onClickCard.bind(this)
  }

  // VIEW CALLBACKS //

  onClickCard () {
    if (
      !this.props.blocked &&
      !this.props.item.revealed &&
      !this.props.item.found
    ) {
      this.props.onRevealCard(this.props.item)
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
        <img src={`/src/games/memory/assets/img/${this.props.card.item.src}`}/>
        <button onClick={this.onClickCard} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blocked: state.memory.blocked,
    card: ownProps.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRevealCard: (item) => dispatch(ActionRegistry.memoryRevealCard(item))
  }
}

const MemoryCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryCard)

export default MemoryCardContainer

