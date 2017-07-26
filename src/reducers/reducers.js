import { combineReducers } from 'redux';
import {
  MESSAGES_RECEIVED,
  TOGGLE_SELECTED,
  TOGGLE_STARRED,
  SELECT_ALL,
  UNSELECT_ALL,
  SET_READ,
  ADD_LABEL,
  REMOVE_LABEL,
  DELETE_MESSAGES,
  ADD_MESSAGE,
  GET_BODY
} from '../actions/actions';

export function messages(state = { messageList:[], messageMap:{} }, action) {

  switch (action.type) {

    case MESSAGES_RECEIVED:
      return formatState(action.messages);

    case TOGGLE_SELECTED:
      return updateState(state, action.id, {selected: !state.messageMap[action.id].selected});

    case TOGGLE_STARRED:
      return updateState(state, action.id, {starred: !state.messageMap[action.id].starred});

    case SELECT_ALL:
      return updateState(state, state.messageList, {selected: true});

    case UNSELECT_ALL:
      return updateState(state, state.messageList, {selected: false});

    case SET_READ:
      return updateState(state, action.ids, {read: action.read});

    case ADD_LABEL:
      return updateAddLabels(state, action.ids, action.label);

    case REMOVE_LABEL:
      return updateRemoveLabels(state, action.ids, action.label);

    case DELETE_MESSAGES:
      return updateDeletes(state, action.ids);

    case ADD_MESSAGE:
      return addMessage(state, action.result);

    case GET_BODY:
      return updateState(state, action.id, {read: true, body: action.body});

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

function updateState(state, ids, change){

  if(typeof ids === 'number'){
    ids = [ids];
  }

  var newState = {...state};
  newState.messageMap = {...state.messageMap};

  for(let id of ids){
    newState.messageMap[id] = {...newState.messageMap[id], ...change};
  }
  return newState;
}

function updateAddLabels(state, ids, label){
  var newState = {...state};
  newState.messageMap = {...state.messageMap};

  for(let id of ids){
    if(!state.messageMap[id].labels.includes(label)){
      newState.messageMap[id] = {...state.messageMap[id]};
      newState.messageMap[id].labels = [...state.messageMap[id].labels, label];
    }
  }
  return newState;
}

function updateRemoveLabels(state, ids, label){

  var newState = {...state};
  newState.messageMap = {...state.messageMap};

  for(let id of ids){
    if(state.messageMap[id].labels.includes(label)){
      newState.messageMap[id] = {...state.messageMap[id]};

      let index = newState.messageMap[id].labels.indexOf(label);
      if(index >= 0){
        newState.messageMap[id].labels =
          [...newState.messageMap[id].labels.slice(0,index),
           ...newState.messageMap[id].labels.slice(index + 1)];
      }
    }
  }
  return newState;
}

function updateDeletes(state, ids){
  var newState = {...state};
  newState.messageList = state.messageList.filter(e=>!ids.includes(e));
  return newState;
}

function addMessage(state, result){
  var newState = {...state};
  newState.messageMap = {...state.messageMap};
  newState.messageList = [...state.messageList];
  newState.messageMap[result.id] =
    {
      id: result.id,
      labels: result.labels,
      read: result.read,
      starred: result.starred,
      subject: result.subject
    };
  return newState;
}





