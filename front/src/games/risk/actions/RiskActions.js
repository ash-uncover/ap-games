import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'RISK_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)

/* GAME PREPARATION */
// start a new local game
ActionRegistry.register(
  'RISK_START_LOCAL_GAME',
  [ 'players' ]
)

/* REINFORCEMENT PHASE */
// player uses a bonus
ActionRegistry.register(
  'RISK_REINFORCEMENT_BONUS',
  [ 'bonusId' ]
)
// player adds armies
ActionRegistry.register(
  'RISK_REINFORCEMENT_ADD',
  [ 'territoryId', 'nbArmies' ]
)
// player removes armies
ActionRegistry.register(
  'RISK_REINFORCEMENT_CANCEL',
  [ 'territoryId', 'nbArmies' ]
)
// player is done with reinforcement
ActionRegistry.register(
  'RISK_REINFORCEMENT_END'
)

/* ATTACK PHASE */
// player attacks a territory
ActionRegistry.register(
  'RISK_BATTLE_START',
  [ 'territoryFromId', 'territoryToId' ]
)
// attacker chooses #army
ActionRegistry.register(
  'RISK_BATTLE_CHOOSE_ATTACK',
  [ 'nbArmies' ]
)
// defender chooses #army
ActionRegistry.register(
  'RISK_BATTLE_CHOOSE_DEFENSE',
  [ 'nbArmies' ]
)
// attacker stops battle
ActionRegistry.register(
  'RISK_BATTLE_RETREAT'
)
// attacker move army on conquered territory
ActionRegistry.register(
  'RISK_BATTLE_CONQUEST',
  [ 'nbArmies' ]
)
// player ends attack phase
ActionRegistry.register(
  'RISK_ATTACK_END'
)

/* MOVE PHASE */
// player moves an army
ActionRegistry.register(
  'RISK_MOVE',
  [
    'territoryFrom',
    'territoryTo',
    'nbArmies'
  ]
)
// player ends move phase
ActionRegistry.register(
  'RISK_MOVE_END'
)

/* Event Action */
