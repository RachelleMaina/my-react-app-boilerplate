/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { GetNumberView, mapStateToProps } from '../../containers/GetNumberView';

configure({ adapter: new Adapter() });
let props;
let component;

describe('GetNumberView container', () => {
  props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    dayIncreament: jest.fn(),
    dayDecreament: jest.fn(),
    getNumber: jest.fn(),
    number: {
      getNumber: {
        data:
          "January 1st is the day in 1985 that the Internet's Domain Name System is created.",
        loading: false,
        errorMessage: [],
        month: '01',
        day: '01',
      },
    },
    errorMessage: {
      getNumber: {
        data: [],
        loading: false,
        errorMessage:
          'Event cannot be displayed. Please check your network and try again.',
        month: '01',
        day: '01',
      },
    },
  };

  beforeEach(() => {
    component = shallow(<GetNumberView {...props} />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });

  it('maps state to props', () => {
    const { number, errorMessage } = props;
    expect(mapStateToProps(number.data, errorMessage.errorMessage)).toEqual({
      number: number.data,
      errorMessage: errorMessage.errorMessage,
    });
  });
});
