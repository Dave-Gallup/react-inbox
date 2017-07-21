// const URI = 'http://localhost:8181/api';

export default class Api {
  static fetchAllMessages() {
    return fetch(`http://localhost:8181/api/messages`)
    .then(response => response.json())
    //.then(json => console.log(json._embedded.messages));
  }

}