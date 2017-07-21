const URI = 'http://localhost:8181/api';

export default class Api {
  static fetchAllMessages() {
    return fetch(`${URI}/messages`)
    .then(response => response.json());
  }

}