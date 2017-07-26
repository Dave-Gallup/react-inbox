import thunk from 'redux-thunk';
import * as actions from './actions';

describe('actions testing', () => {

  it('TOGGLE_SELECTED', () => {
    const action = {type: actions.TOGGLE_SELECTED, id: 1};
    expect(actions.toggleSelected(1)).toEqual(action);
  });

  it('fetchMessages', function () {
    const mockApiFetchMessages = jest.fn();
    mockApiFetchMessages.mockReturnValue(
      Promise.resolve({
        _embedded: {
          products: [
            {"id": 1}
          ]
        }
      })
    );

    const extraArgument = {
      Api: {
        fetchAllMessages: mockApiFetchMessages
      }
    }

    const initialState = {
      messages: {
        messageList: [],
        messageMap: {}
      }
    }

    const mockGetState = jest.fn()
    mockGetState.mockReturnValue(initialState);

    const mockDispatch = jest.fn();

    const thunk = actions.fetchMessages();

    thunk(mockDispatch, mockGetState, extraArgument)
    // .then(() => {
    //   expect(mockDispatch).toBeCalledWith(
    //     {
    //       type:MESSAGES_RECEIVED,
    //       messages:result._embedded.messages
    //     }
    //   );
    // });
    
  });

});