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

  it('renders a signup link', () => { 
    expect(wrapper.find('#signup').text()).toEqual('Sign Up')
  });

  it('renders a login link', () => {
    expect(wrapper.find('#login').text()).toEqual('Log In')
  });
  
});
