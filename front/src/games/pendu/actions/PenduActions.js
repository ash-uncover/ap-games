import ActionRegistry from 'core/actions/ActionRegistry'

ActionRegistry.register(
  'PENDU_START_GAME'
)

ActionRegistry.register(
  'PENDU_SEND_LETTER',
  [ 'letter' ]
)
