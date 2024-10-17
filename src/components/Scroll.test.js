import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('scroll', () => {
  it('expect to render Scroll component', () => {
    expect.assertions(1);
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
