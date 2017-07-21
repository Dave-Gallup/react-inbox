export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';

export function messagesReceived(messages){
  return {
    type: MESSAGES_RECEIVED,
    messages
  }
}












export function fetchMessages(){
  return (dispatch, getState, { Api }) => {
    const state = getState();

    // only if the state is empty or undefined, fetch messages from API
    if(!state.messages.length){
      Api.fetchAllMessages()
      .then(json => dispatch(messagesReceived(json._embedded.products)));
    }
  }
}