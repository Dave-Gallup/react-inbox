export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';
export const MESSAGE_SELECTED = 'MESSAGE_SELECTED';

export function messagesReceived(messages){
  return {
    type: MESSAGES_RECEIVED,
    messages
  }
}

export function messageSelected(id){
  return {
    type: MESSAGE_SELECTED,
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

// export function updateNumUnread(){
//   return { type: MESSAGES_LOADED};
// }