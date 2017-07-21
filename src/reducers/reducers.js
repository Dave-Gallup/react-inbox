import { combineReducers } from 'redux';
import { MESSAGES_RECEIVED } from '../actions/actions';

export function messages(state = { messageList:[], messages:{} }, action) {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      const { messages } = action;
      return {
        ids: messages.map((msg) => {
          return msg.id;
        }),
        itemsById: messages.reduce((result, msg) => {
          result[msg.id] = msg;
          return result;
        }, {})
      }
      default:
        return state;
  }
}

export default combineReducers({
  messages
});
