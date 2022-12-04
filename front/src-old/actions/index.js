import ActionRegistry from 'core/actions/ActionRegistry'

ActionRegistry.register(
  'I18N_LANG_UPDATE'
)

ActionRegistry.register(
  'I18N_LOADED',
  [ 'data' ]
)

ActionRegistry.register(
  'APP_LOAD_DATA',
  [
    [],
    [ 'result' ]
  ],
  true
)
