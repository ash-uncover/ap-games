import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'PENDU_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)

ActionRegistry.register(
  'PENDU_START_GAME'
)

ActionRegistry.register(
  'PENDU_SEND_LETTER',
  [ 'letter' ]
)
