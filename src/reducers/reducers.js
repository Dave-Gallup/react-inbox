import { combineReducers } from 'redux';
import { MESSAGES_RECEIVED } from '../actions/actions';

export function messages(state = { messageList:[], messageMap:{} }, action) {
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






/********** Helper functions ***********/

function formatState(json){
  var state = { messageList: [], messageMap: {} };
  json.forEach(msg => {
    state.messageList.push(msg.id);
    state.messageMap[msg.id] = msg;
    state.messageMap[msg.id].selected = false;
  });
  return state;
}

