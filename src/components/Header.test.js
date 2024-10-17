import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header', () => {
  it('expect to render Header component', () => {
    expect.assertions(1);
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
