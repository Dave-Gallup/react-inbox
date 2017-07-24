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

  static postSendMessage(messageSubject, messageBody){
    var newSubjectStr = Api.copyString(messageSubject);
    var newBodyStr = Api.copyString(messageBody);
    console.log(newSubjectStr);
    var newBody = {
      "subject": newSubjectStr,
      "body": newBodyStr
    };

    return fetch(`${URI}/messages`, {
      headers:  {
                  "Accept"      : "application/json",
                  "Content-Type": "application/json"
                },
      method: 'POST',
      body: JSON.stringify(newBody)
    });
  }

  static copyString(str){
    var newStr = '';
    for(let i = 0; i < str.length; i++){
      newStr += str[i];
    }
    return newStr;
  }


}

