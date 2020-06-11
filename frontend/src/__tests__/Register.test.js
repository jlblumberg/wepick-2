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
});
