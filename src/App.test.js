import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import store from './store/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
});

it('Renders App.js', () => {
  const component = shallow(
    <App />
  )
  expect(toJson(component)).toMatchSnapshot()
});

