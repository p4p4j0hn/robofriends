import renderer from 'react-test-renderer';
import Header from './Header';

describe('header', () => {
  it('expect to render Header component', () => {
    expect.assertions(1);
    expect(renderer.create(<Header />).toJSON()).toMatchSnapshot();
  });
});
