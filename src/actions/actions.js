export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';
export const TOGGLE_SELECTED  = 'TOGGLE_SELECTED';
export const TOGGLE_STARRED   = 'TOGGLE_STARRED';

export function messagesReceived(messages){
  return {
    type: MESSAGES_RECEIVED,
    messages
  }
}

export function toggleSelected(id){
  return {
    type: TOGGLE_SELECTED,
    id
  }
}

export function toggleStarred(id){
  return {
    type: TOGGLE_STARRED,
    id
  }
}

export function fetchMessages(){
  return (dispatch, getState, { Api }) => {
    const state = getState();

    // only if the state is empty or undefined, fetch messages from API
    if(!state.messages.length){
      Api.fetchAllMessages()
      .then(json => dispatch(messagesReceived(json._embedded.messages)))
    }
  }
}

