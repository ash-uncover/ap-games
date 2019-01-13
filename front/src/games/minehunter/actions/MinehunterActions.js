import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'MINEHUNTER_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)

ActionRegistry.register(
  'MINEHUNTER_START_GAME',
  [ 'width', 'height', 'bombs' ]
)

ActionRegistry.register(
  'MINEHUNTER_SET_SELECT_MODE',
  [ 'selectMode' ]
)

ActionRegistry.register(
  'MINEHUNTER_REVEAL_TILE',
  [ 'x', 'y' ]
)

ActionRegistry.register(
  'MINEHUNTER_END_GAME'
)
