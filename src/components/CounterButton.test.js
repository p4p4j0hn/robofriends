import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import CounterButton from './CounterButton';

describe('counterbutton', () => {
  test('expect to render CounterButton component without crashing', () => {
    expect.assertions(1);
    const mockColour = 'red';
    expect(renderer.create(<CounterButton color={mockColour} />).toJSON()).toMatchSnapshot();
  });

  test('correctly increments the counter', async () => {
    expect.assertions(2);
    const mockColour = 'red';
    render(<CounterButton color={mockColour} />);
    const element = screen.getByText(/count/i);
    await fireEvent.click(element);
    expect(element).toHaveTextContent('Count: 1');
    await fireEvent.click(element);
    await fireEvent.click(element);
    expect(element).toHaveTextContent('Count: 3');
  });

  // React Testing Library recommends only testing what the user sees,
  // not the implementation. So I'm not sure this test is required
  // even though the coverage won't be 100%
  // test('only re-renders when required', async () => {
  //   const mockColour = 'red';
  //   const wrapper = shallow(<CounterButton color={mockColour} />);
  //   wrapper.find('[id="counter"]').simulate('click');
  //   wrapper.find('[id="counter"]').simulate('click');
  //   wrapper.find('[id="counter"]').simulate('click');
  //   expect(wrapper.instance().shouldComponentUpdate({ count: 0 })).toBe(false);
  //   expect(wrapper.instance().shouldComponentUpdate({ count: 4 })).toBe(true);
  // });
});
