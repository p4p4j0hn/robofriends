import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('test MainPage', () => {
  it('renders MainPage without crashing', () => {
    expect.assertions(1);
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    expect.assertions(1);
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com'
        }
      ],
      searchField: 'John',
      isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toStrictEqual([
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ]);
  });

  it('filters robots correctly 2', () => {
    expect.assertions(1);
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com'
        }
      ],
      searchField: 'a',
      isPending: false
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filteredRobots()).toStrictEqual([]);
  });

  it('tests isPending', () => {
    expect.assertions(1);
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    };
    const wrapper4 = shallow(<MainPage {...mockProps4} />);
    expect(wrapper4.find('[id="loading"]')).toHaveLength(1);
  });
});
