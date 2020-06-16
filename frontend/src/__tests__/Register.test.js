import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Register from '../components/auth/Register';

Enzyme.configure({ adapter: new Adapter() });

describe('Register', () => {
  const wrapper = shallow(<Register/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an already have account log in link', () => {
    expect(wrapper.find('#alreadyregistered').text()).toContain('Already have an account?')
    expect(wrapper.find('#login').text()).toEqual('Log In')
  })

  it('has a field for name', () => {
    expect(wrapper.find('input#name').exists()).toEqual(true);
    expect(wrapper.find('input#name').prop('value')).toEqual("")
  });

});
