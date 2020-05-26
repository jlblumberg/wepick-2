import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Navbar from '../components/layout/Navbar';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {

  it('renders correctly', () => {
    const component = shallow(<Navbar/>);
    expect(component).toMatchSnapshot();
  });

  it('renders a home link', () => { 
    const { getByText } = render(<Navbar/>);
    const linkElement = getByText(/WePick2/i)
    expect(linkElement).toBeInTheDocument();
  }); 
});
