import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'MEMORY_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)

ActionRegistry.register(
  'MEMORY_START_GAME',
  [ 'difficulty' ]
)

ActionRegistry.register(
  'MEMORY_REVEAL_CARD',
  [ 'card' ]
)

ActionRegistry.register(
  'MEMORY_UNREVEAL_CARDS'
)

ActionRegistry.register(
  'MEMORY_REVEAL_ALL'
)

ActionRegistry.register(
  'MEMORY_END_GAME'
)
