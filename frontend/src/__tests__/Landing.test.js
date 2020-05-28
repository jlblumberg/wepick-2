import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Landing from '../components/layout/Landing';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing', () => {
  const wrapper = shallow(<Landing/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a signup button', () => { 
    expect(wrapper.find('button#signup').type()).toEqual('button')
    expect(wrapper.find('button#signup').text()).toEqual('Sign Up')
  }); 

  it('renders a login button', () => {
    expect(wrapper.find('button#login').type()).toEqual('button')
    expect(wrapper.find('button#login').text()).toEqual('Log In')
  })
});
