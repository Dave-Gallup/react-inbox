var allMessages = require('./seeds.json');


class Sandbox{

  constructor(){
    this.props = this.formatState(allMessages);

    console.log(this.props);
  }

  formatState(json){
    var state = {};
    json.forEach(msg => state[msg.id] = msg);
    return state;
  }


}




var test = new Sandbox();