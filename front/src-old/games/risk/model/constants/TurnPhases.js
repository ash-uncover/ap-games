const TurnPhases = {
  VALUES: {
    TURN_START: 'TURN_START',
    REINFORCEMENT: 'REINFORCEMENT',
    ATTACK: 'ATTACK',
    MOVE: 'ATTACK',
    TURN_END: 'TURN_END'
  }
}

TurnPhases.getNextPhase = (phase) => {
  switch (phase) {
    case TurnPhases.TURN_START:
      return TurnPhases.REINFORCEMENT
    case TurnPhases.REINFORCEMENT:
      return TurnPhases.ATTACK
    case TurnPhases.ATTACK:
      return TurnPhases.MOVE
    case TurnPhases.MOVE:
      return TurnPhases.TURN_END
    default:
      return TurnPhases.TURN_START
  }
}

export default TurnPhases
