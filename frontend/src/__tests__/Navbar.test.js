import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Navbar from '../components/layout/Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a home link', () => { 
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('#home-link').text()).toEqual('WePick2')
  });

  // it('renders log out button when logged in', () => {
  //   const wrapper = shallow(<Navbar/>);
  //   expect(wrapper.find('#log-out').text()).toEqual('Log out')
  // });
});
