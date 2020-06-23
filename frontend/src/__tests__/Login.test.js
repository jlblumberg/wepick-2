import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Login from '../components/auth/Login';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  const wrapper = shallow(<Login/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a signup link if you don\'t already have an account', () => {
    expect(wrapper.find('#notregistered').text()).toContain('Don\'t have an account?')
  })


});
