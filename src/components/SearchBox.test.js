import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('searchbox', () => {
  it('expect to render SearchBox component', () => {
    expect.assertions(1);
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
