import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('cardlist', () => {
  it('expect to render CardList component', () => {
    expect.assertions(1);
    const mockRobots = [
      {
        id: 1,
        name: 'John Goerzen',
        email: 'john@gmail.com'
      }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
