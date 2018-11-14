import StringLabel from 'utils-lib/StringLabel'

const ActionRegistry = {}

const registerAction = (actionName, args) => {
  if (!actionName) {
    throw new Error('Action must be given a name in upper snake case')
  }
  const name = new StringLabel(actionName, '_')
  if (ActionRegistry[name.serpent]) {
    throw new Error(`ActionRegistry.register - Action already defined: ${name.serpent}`)
  }
  ActionRegistry[name.serpent] = name.serpent
  ActionRegistry[name.camel] = function () {
    const myArgs = {}
    args && args.forEach((arg, index) => {
      myArgs[arg] = arguments.length > index ? arguments[index] : null
    })
    return {
      args: myArgs,
      type: name.serpent
    }
  }
}

ActionRegistry.register = (actionName, args, async) => {
  if (async) {
    registerAction(`${actionName}_request`, args[0])
    registerAction(`${actionName}_success`, args[1])
    registerAction(`${actionName}_failure`, [ 'error' ])
  } else {
    registerAction(actionName, args)
  }
}

export default ActionRegistry
