import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Message, mapStateToProps } from './Message';

describe('Message', () => {
  it('should render without any props other than empty labels defined', () => {
    const component = shallow(
      <Message labels={[]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })

  it('should render with starred=true prop passed in', () => {
    const component = shallow(
      <Message starred={true} labels={[]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })

  it('should render with selected=true prop passed in', () => {
    const component = shallow(
      <Message selected={true} labels={[]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })

  it('should render with read=true prop passed in', () => {
    const component = shallow(
      <Message read={true} labels={[]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })


  it('mapStateToProps', () => {
    const state = {
      messages: {
        messageList: [1,2],
        messageMap:{
          1:{
            subject: 'test subject',
            labels:[
              'test-label1',
              'test-label2'
            ],
            starred: true,
            read: false,
            selected: false,
            body: 'This is the test body.'
          },
          2:{
            subject: 'another test subject',
            labels:[
              'test-label2',
              'test-label4'
            ],
            starred: false,
            read: true,
            selected: true,
            body: 'Second test body.'
          }
        }
      }
    }

    const ownProps = {
      id: 1
    }

    const expectedResult = {
      subject: 'test subject',
      labels:[
        'test-label1',
        'test-label2'
      ],
      starred: true,
      read: false,
      selected: false,
      body: 'This is the test body.'
    }

    expect(mapStateToProps(state, ownProps)).toEqual(expectedResult)
  })



    //
    // component.find('[name="toggle-preview"]').simulate('click');
    // expect(toJson(component)).toMatchSnapshot();
});
