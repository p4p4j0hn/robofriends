import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect.assertions(1);
    expect(reducers.searchRobots(undefined, {})).toStrictEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD action', () => {
    expect.assertions(1);
    expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))).toStrictEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };

  it('should return the initial state', () => {
    expect.assertions(1);
    expect(reducers.requestRobots(undefined, {})).toStrictEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect.assertions(1);
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toStrictEqual({
      isPending: true,
      robots: [],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect.assertions(1);
    const mockRobotsPayload = [
      {
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }
    ];
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobotsPayload
      })
    ).toStrictEqual({
      isPending: false,
      robots: mockRobotsPayload,
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect.assertions(1);
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOO!!!!!!!'
      })
    ).toStrictEqual({
      isPending: false,
      robots: [],
      error: 'NOOOOO!!!!!!!'
    });
  });
});
