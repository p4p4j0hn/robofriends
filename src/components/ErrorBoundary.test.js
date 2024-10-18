import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import util from 'util';

describe('errorboundary', () => {
  it('expect to render ErrorBoundary component', () => {
    expect.assertions(1);
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });

  it('expect the component to catch', () => {
    expect.assertions(4);
    Object.defineProperty(global, 'TextEncoder', {
      value: util.TextEncoder
    });
    const MyComponent = () => <div>Render</div>;
    const DecoratedComponent = () => {
      return (
        <ErrorBoundary fallback={<div>Fallback</div>}>
          <MyComponent />
        </ErrorBoundary>
      );
    };
    const wrapper = mount(<DecoratedComponent />);
    expect(wrapper.contains(<div>Render</div>)).toBe(true);
    expect(wrapper.contains(<div>Fallback</div>)).toBe(false);
    wrapper.find(MyComponent).simulateError(new Error('Error While Rendering'));
    expect(wrapper.contains(<div>Render</div>)).toBe(false);
    expect(wrapper.contains(<div>Fallback</div>)).toBe(true);
  });
});
