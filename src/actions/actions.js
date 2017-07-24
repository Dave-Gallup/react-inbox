export const MESSAGES_RECEIVED = 'MESSAGES_RECEIVED';
export const TOGGLE_SELECTED   = 'TOGGLE_SELECTED';
export const TOGGLE_STARRED    = 'TOGGLE_STARRED';
export const SELECT_ALL        = 'SELECT_ALL';
export const UNSELECT_ALL      = 'UNSELECT_ALL';
export const SET_READ          = 'SET_READ';
export const ADD_LABEL         = 'ADD_LABEL';
export const REMOVE_LABEL      = 'REMOVE_LABEL';
export const DELETE_MESSAGES   = 'DELETE_MESSAGES';
export const ADD_MESSAGE       = 'ADD_MESSAGE';
export const GET_BODY          = 'GET_BODY';


export function toggleSelected(id){
  return {type: TOGGLE_SELECTED, id};
}

export function toggleStarred(id){
  return (dispatch, getState, { Api }) => {
    const state = getState();

    Api.patchStarred(id, !state.messages.messageMap[id].starred)
    .then(result => {
      if(result.status === 200){
        dispatch({type:TOGGLE_STARRED, id})
      }
    })
    .catch(err => err);
  }
}

export function selectAll(){
  return {type:SELECT_ALL};
}

export function unselectAll(){
  return {type:UNSELECT_ALL};
}

export function setRead(ids, isRead){
  return (dispatch, getState, { Api }) => {

    Api.patchRead(ids, isRead)
    .then(result => {
      if(result.status === 200){
        dispatch({type:SET_READ, ids, read:isRead})
      }
    })
    .catch(err => err);
  }
}

export function fetchMessages(){
  return (dispatch, getState, { Api }) => {
    const state = getState();

    // only if the state is empty or undefined, fetch messages from API
    if(!state.messages.length){
      Api.fetchAllMessages()
      .then(result =>

          dispatch({type:MESSAGES_RECEIVED,messages:result._embedded.messages})

      )
      .catch(err => err);
    }
  }
}

export function addLabel(ids, label){
  return (dispatch, getState, { Api }) => {
    Api.patchAddLabel(ids, label)
    .then(result => {
      if(result.status === 200){
        dispatch({type:ADD_LABEL, ids, label})
      }
    })
    .catch(err => err);

  }
}

export function removeLabel(ids, label){
  return (dispatch, getState, { Api }) => {
    Api.patchRemoveLabel(ids, label)
    .then(result => {
      if(result.status === 200){
        dispatch({type:REMOVE_LABEL, ids, label})
      }
    })
    .catch(err => err);
  }
}

export function deleteMessages(ids){
  return (dispatch, getState, { Api }) => {
    Api.patchDeleteMessages(ids)
    .then(result => {
      if(result.status === 200){
        dispatch({type:DELETE_MESSAGES, ids})
      }
    })
    .catch(err => err);
  }
}

export function addMessage(subject, body){
  return (dispatch, getState, { Api }) => {

    Api.postSendMessage(subject, body)
    .then(result => {
      if(result.status === 200){
        dispatch({type:ADD_MESSAGE, result});
      }
    })
    .catch(err => err);
  }
}

export function getBody(id){

  return (dispatch, getState, { Api }) => {
    Api.getBody(id)
    .then(result => {
      dispatch({type:GET_BODY, id, body: result.body});

    })
    .catch(err => err);
  }
}





