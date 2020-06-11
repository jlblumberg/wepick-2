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
});
