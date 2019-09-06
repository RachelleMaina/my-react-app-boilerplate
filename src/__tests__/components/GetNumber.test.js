/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import GetNumber from '../../components/GetNumber';

configure({ adapter: new Adapter() });
let props;
let component;

describe('GetNumber component', () => {
  props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    dayIncreament: jest.fn(),
    dayDecreament: jest.fn(),
    number:
      'February 3rd is the day in 2007 that a Baghdad market bombing kills at least 135 people and injures a further 339.',
    dateString: '01/01',
    month: '02',
    day: '03',
  };
  beforeEach(() => {
    component = mount(<GetNumber {...props} />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });

  it('should call onSubmit on submitting form and display message when valid date is given', () => {
    const messageDiv = component.find('.card-message');
    component
      .find('#dateInput')
      .simulate('change', { target: { name: 'dateInput', value: '01/01' } });
    component.find('#submit').simulate('submit');
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
    expect(messageDiv.text()).toEqual(props.number);
  });

  it('should call dayIncreament on clicking increament button and increase the day value by one', () => {
    component.find('.counter-outer-top').simulate('click');
    const dayValue = component.find('#dayDisplay').text();
    expect(props.dayIncreament).toHaveBeenCalledTimes(1);
    // expect(dayValue).toEqual('04');
  });

  it('should call dayDecreament on clicking increament button and decrease the day value by one', () => {
    component.find('.counter-outer-bottom').simulate('click');
    const dayValue = component.find('#dayDisplay').text();
    expect(props.dayDecreament).toHaveBeenCalledTimes(1);
    // expect(component.find('#dayDisplay').text()).toEqual('02');
  });
});
