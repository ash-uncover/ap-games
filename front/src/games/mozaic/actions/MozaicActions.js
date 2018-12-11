import ActionRegistry from 'core/actions/ActionRegistry'

/* User Actions */

// Game preparation
ActionRegistry.register(
  'MOZAIC_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)

ActionRegistry.register(
  'MOZAIC_START_GAME',
  [ 'size', 'image' ]
)

ActionRegistry.register(
  'MOZAIC_CLICK_TILE',
  [ 'tileId' ]
)
