import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Router } from 'react-router-dom'
import Landing from '../components/layout/Landing'
import App from '../App'
import { createMemoryHistory } from 'history'
import { render as renderTest, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

Enzyme.configure({ adapter: new Adapter() });

describe('Router', () => {
  test('Landing page is the default page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(1);
  })

  test('allows linking from landing to signup page', () => {
    const history = createMemoryHistory()
    const { container, getByText } = renderTest(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch('Sign Up')
    fireEvent.click(getByText(/sign up/i))
    expect(container.innerHTML).toMatch('Name')
  })

  test('allows linking from landing to login page', () => {
    const history = createMemoryHistory()
    const { container, getByText } = renderTest(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch('Log In')
    fireEvent.click(getByText(/Log In/i))
    expect(container.innerHTML).toMatch('Email')
  })
})
