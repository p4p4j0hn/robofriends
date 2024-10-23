import renderer from 'react-test-renderer';
import Card from './Card';

describe('card', () => {
  it('expect to render Card component without crashing', () => {
    expect.assertions(1);
    expect(renderer.create(<Card />).toJSON()).toMatchSnapshot();
  });
});
