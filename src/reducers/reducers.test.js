import { messages } from './reducers';
import { REMOVE_LABEL } from '../actions/actions';


const startState = {
  messageList: [1,2],
  messageMap: {
    1:{
      selected: false,
      read: true,
      starred: true,
      labels: [
        'startLabel'
      ],
      subject: 'test subject 1',
      body: 'this is a test body'
    },
    2:{
      selected: true,
      read: false,
      starred: false,
      labels: [
        'startLabel',
        'secondLabel'
      ],
      subject: 'test subject 2',
      body: 'this is another test body'
    }
  }
}

describe('reducer test - Remove Label', () => {

  it('REMOVE_LABEL', () => {
    const returned = messages(startState,
      {type: REMOVE_LABEL, ids: [1,2], label: 'startLabel'}
    );

    expect(returned).toEqual({
      messageList: [1,2],
      messageMap: {
        1:{
          selected: false,
          read: true,
          starred: true,
          labels: [ ],
          subject: 'test subject 1',
          body: 'this is a test body'
        },
        2:{
          selected: true,
          read: false,
          starred: false,
          labels: [
            'secondLabel'
          ],
          subject: 'test subject 2',
          body: 'this is another test body'
        }
      }
    });
  });



});

