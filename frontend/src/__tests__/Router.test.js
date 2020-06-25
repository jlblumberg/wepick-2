import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Landing from '../components/layout/Landing'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() });

test('Landing page is the default page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Landing)).toHaveLength(1);
})