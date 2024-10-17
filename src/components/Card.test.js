import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('card', () => {
  it('expect to render Card component', () => {
    expect.assertions(1);
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
