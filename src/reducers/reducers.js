import { combineReducers } from 'redux';
import { MESSAGES_RECEIVED } from '../actions/actions';

export function messages(state = { messageList:[], messages:{} }, action) {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return formatState(action.messages);

    default:
      return state;
  }
}

export default combineReducers({
  messages
});



function formatState(json){
  var state = { messageList: [], messages: {} };
  json.forEach(msg => {
    state.messageList.push(msg.id);
    state.messages[msg.id] = msg;
  });
  return state;
}

