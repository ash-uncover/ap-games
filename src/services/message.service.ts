import MessageDispatcher, { MessageService } from '@uncover/js-utils-microfrontend'

MessageDispatcher.start('GAD')
const MessageServiceCentral = new MessageService('GAS')

export default MessageServiceCentral