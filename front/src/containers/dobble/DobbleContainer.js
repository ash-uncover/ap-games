import React from 'react'
import { connect } from 'react-redux'

// actions
import { dobbleStartGame, dobbleSelectSymbol } from 'actions/dobble'

// Components
import Dobble from 'components/games/dobble/Dobble'

const mapStateToProps = state => {
    return {
       state: state.dobble.state,
       errors: state.dobble.errors,
       cardsLeft: state.dobble.cardsLeft,
       cardsFound: state.dobble.cardsFound
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStart: () => {
            dispatch(dobbleStartGame())
        },
        onSelectSymbol: (symbolId) => {
            dispatch(dobbleSelectSymbol(symbolId))
        }
    }
}

const DobbleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dobble)

export default DobbleContainer