import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Landing from '../components/layout/Landing';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Landing/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a signup button', () => { 
    const wrapper = shallow(<Landing />);
    expect(wrapper.find('#signup-button').type()).toEqual('button')
  }); 
});
