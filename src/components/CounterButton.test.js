import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('counterbutton', () => {
  it('expect to render CounterButton component', () => {
    expect.assertions(1);
    const mockColour = 'red';
    expect(shallow(<CounterButton color={mockColour} />)).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    expect.assertions(3);
    const mockColour = 'red';
    const wrapper = shallow(<CounterButton color={mockColour} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toStrictEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toStrictEqual({ count: 3 });
  });

  it('only re-renders when required', () => {
    expect.assertions(2);
    const mockColour = 'red';
    const wrapper = shallow(<CounterButton color={mockColour} />);
    expect(wrapper.instance().shouldComponentUpdate({ count: 0 })).toBe(false);
    expect(wrapper.instance().shouldComponentUpdate({ count: 4 })).toBe(true);
  });
});
