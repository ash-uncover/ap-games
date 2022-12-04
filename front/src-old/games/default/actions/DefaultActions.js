import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'DEFAULT_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)