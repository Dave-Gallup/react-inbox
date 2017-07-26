import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Messages, mapStateToProps } from './Messages';

describe('Messages', () => {
  it('should render without any props other than empty messageList defined', () => {
    const component = shallow(
      <Messages messageList={[]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })

  it('should render with messageList defined and populated', () => {
    const component = shallow(
      <Messages messageList={[1,2,3]}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  })



});