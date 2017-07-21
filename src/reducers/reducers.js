import { combineReducers } from 'redux';
import { MESSAGES_RECEIVED } from '../actions/actions';

export function messages(state = { messageList:[], messages:{} }, action) {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      const { items } = action;
      return {
        ids: items.map((item) => {
          return item.id;
        }),
        itemsById: items.reduce((result, item) => {
          result[item.id] = item;
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
