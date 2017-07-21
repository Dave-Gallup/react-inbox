import { combineReducers } from 'redux';
import {
  MESSAGES_RECEIVED,
  TOGGLE_SELECTED,
  TOGGLE_STARRED
} from '../actions/actions';

export function messages(state = { messageList:[], messageMap:{} }, action) {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return formatState(action.messages);
    case TOGGLE_SELECTED:
      return updateState(state, action.id, {selected: !state.messageMap[action.id].selected});
    case TOGGLE_STARRED:
      return updateState(state, action.id, {starred: !state.messageMap[action.id].starred})
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

function updateState(state, id, change){
  var newState = {...state};
  newState.messageMap = {...state.messageMap};
  newState.messageMap[id] = {...newState.messageMap[id], ...change};
  return newState;
}

