var allMessages = require('./seeds.json');


class Sandbox{

  constructor(){
    this.props = this.formatState(allMessages);

    console.log(this.props);
  }

  formatState(json){
    var state = { messageList: [], messages: {} };
    json.forEach(msg => {
      state.messageList.push(msg.id);
      state.messages[msg.id] = msg;
    });
    console.log(state);
    return state;
  }


}




var test = new Sandbox();