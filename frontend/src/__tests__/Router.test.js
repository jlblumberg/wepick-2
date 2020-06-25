import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Landing from '../components/layout/Landing'
import App from '../App'
import Login from '../components/auth/Login'
import NavBar from '../components/layout/NavBar'

Enzyme.configure({ adapter: new Adapter() });

test('Landing page is the default page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Landing)).toHaveLength(1);
})

test('Signup routing', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Landing />
    </MemoryRouter>,
    root
  );
  // expect(wrapper.find(Login)).toHaveLength(1)
  console.log(document.body.textContent);
  act(() => {
    const goToSignup = document.querySelector('#signup')
    goToSignup.dispatchEvent(new MouseEvent("click", { bubbles: "true" }))
  })
})