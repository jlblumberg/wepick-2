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
    expect(wrapper.find('#alreadyregistered').text()).toContain('Already have an account?');
    expect(wrapper.find('#login').text()).toEqual('Log In');
  });

  it('has a field for name', () => {
    expect(wrapper.find('input#name').prop('value')).toEqual("");
    expect(wrapper.find('input#name').prop('type')).toEqual("name");
    expect(wrapper.find('input#name').prop('errors')).toEqual("");
  });
  
  it('has a field for email', () => {
    expect(wrapper.find('input#email').prop('value')).toEqual("");
    expect(wrapper.find('input#email').prop('type')).toEqual("email");
    expect(wrapper.find('input#email').prop('errors')).toEqual("");
  });

  it('has a field for password', () => {
    expect(wrapper.find('input#password').prop('value')).toEqual("");
    expect(wrapper.find('input#password').prop('type')).toEqual("password");
    expect(wrapper.find('input#password').prop('errors')).toEqual("");
  });

  it('has a field for password2', () => {
    expect(wrapper.find('input#password2').prop('value')).toEqual("");
    expect(wrapper.find('input#password2').prop('type')).toEqual("password2");
    expect(wrapper.find('input#password2').prop('errors')).toEqual("");
  });

  it('stores field values in state', () => {
    wrapper.find({ id: 'name' }).simulate('change', { target: { id: 'name', value: 'Mike'} });
    expect(wrapper.find({ id: 'name' }).prop('value')).toEqual('Mike');
  });
});