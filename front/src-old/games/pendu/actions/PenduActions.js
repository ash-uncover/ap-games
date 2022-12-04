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
  'PENDU_START_GAME',
  [ 'difficulty' ]
)

ActionRegistry.register(
  'PENDU_NEXT_WORD'
)

ActionRegistry.register(
  'PENDU_GIVE_UP_WORD'
)

ActionRegistry.register(
  'PENDU_SEND_LETTER',
  [ 'letter' ]
)

ActionRegistry.register(
  'PENDU_END_GAME'
)
