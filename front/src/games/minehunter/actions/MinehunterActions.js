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
