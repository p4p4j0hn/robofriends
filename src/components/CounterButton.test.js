import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

const wrapper = shallow(<CounterButton color='red' />);

describe('counterbutton', () => {
  it('expect to render CounterButton component', () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    expect.assertions(3);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toStrictEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toStrictEqual({ count: 3 });
  });

  it('only re-renders when required', () => {
    expect.assertions(2);
    expect(wrapper.instance().shouldComponentUpdate({ count: 3 })).toBe(false);
    expect(wrapper.instance().shouldComponentUpdate({ count: 4 })).toBe(true);
  });
});
