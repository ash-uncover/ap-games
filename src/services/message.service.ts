import { AnyAction } from '@reduxjs/toolkit'
import MessageDispatcher, { Message, MessageService } from '@uncover/js-utils-microfrontend'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'

MessageDispatcher.start()
const MessageServiceCentral = new MessageService()

export const useDispatchMessage = (dispatch?: Dispatch<AnyAction>) => {
  let dispatcher = dispatch
  if (!dispatcher) {
    dispatcher = useDispatch()
  }
  return (message: Message) => {
    dispatch(message)
    MessageServiceCentral.sendMessage(message)
  }
}

export default MessageServiceCentral