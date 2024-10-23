import renderer from 'react-test-renderer';
import CardList from './CardList';

describe('cardlist', () => {
  it('expect to render CardList component without crashing', () => {
    expect.assertions(1);
    const mockRobots = [
      {
        id: 1,
        name: 'John Goerzen',
        email: 'john@gmail.com'
      }
    ];
    expect(renderer.create(<CardList robots={mockRobots} />).toJSON()).toMatchSnapshot();
  });
});
