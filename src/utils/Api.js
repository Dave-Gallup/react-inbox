const URI = 'http://localhost:8181/api';

export default class Api {

  static fetchAllMessages() {
    return fetch(`${URI}/messages`)
    .then(response => response.json())
  }

  static patchStarred(ids, isStarred){
    return fetch(`${URI}/messages`, {
        headers:  {
                    "Accept"      : "application/json",
                    "Content-Type": "application/json"
                  },
        method: 'PATCH',
        body: `{
                 "messageIds" : ${JSON.stringify([ids])},
                 "command"    : "star",
                 "star"       : ${isStarred}
               }`
      });
  }


  static patchRead(ids, isRead){
    return fetch(`${URI}/messages`, {
        headers:  {
                    "Accept"      : "application/json",
                    "Content-Type": "application/json"
                  },
        method: 'PATCH',
        body: `{
                 "messageIds" : ${JSON.stringify(ids)},
                 "command"    : "read",
                 "read"       : ${isRead}
               }`
    });
  }

  static patchAddLabel(ids, label){
    return fetch(`${URI}/messages`, {
        headers:  {
                    "Accept"      : "application/json",
                    "Content-Type": "application/json"
                  },
        method: 'PATCH',
        body: `{
                 "messageIds" : ${JSON.stringify(ids)},
                 "command"    : "addLabel",
                 "label"      : ${JSON.stringify(label)}
               }`
    });
  }

  static patchRemoveLabel(ids, label){
    return fetch(`${URI}/messages`, {
        headers:  {
                    "Accept"      : "application/json",
                    "Content-Type": "application/json"
                  },
        method: 'PATCH',
        body: `{
                 "messageIds" : ${JSON.stringify(ids)},
                 "command"    : "removeLabel",
                 "label"      : ${JSON.stringify(label)}
               }`
    });
  }

  static patchDeleteMessages(ids){

    return fetch(`${URI}/messages`, {
        headers:  {
                    "Accept"      : "application/json",
                    "Content-Type": "application/json"
                  },
        method: 'PATCH',
        body: `{
                 "messageIds": ${JSON.stringify(ids)},
                 "command": "delete"
              }`
    });
  }

}

