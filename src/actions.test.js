import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('setSearchField actions', () => {
  it('should create an action to search robots', () => {
    expect.assertions(1);
    const text = 'woooo';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toStrictEqual(expectedAction);
  });
});

describe('requestRobots actions', () => {
  it('handles requesting robots API', () => {
    expect.assertions(1);
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toStrictEqual(expectedAction);
  });
});
