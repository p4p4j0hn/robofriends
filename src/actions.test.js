import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk'; // Correct import
import * as api from './api/api';
import { setSearchField, requestRobots } from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./api/api');

describe('actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates CHANGE_SEARCHFIELD when setting search field', () => {
    expect.assertions(1);
    const text = 'robot';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });

  it('creates REQUEST_ROBOTS_SUCCESS when fetching robots has been done', async () => {
    expect.assertions(1);
    api.apiCall.mockResolvedValue([{ id: 1, name: 'Robot' }]);

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: [{ id: 1, name: 'Robot' }] }
    ];

    const store = mockStore({});
    await store.dispatch(requestRobots());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  it('creates REQUEST_ROBOTS_FAILED when fetching robots fails', async () => {
    expect.assertions(1);

    api.apiCall.mockRejectedValue(new Error('Failed to fetch'));

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_FAILED, payload: new Error('Failed to fetch') }
    ];

    const store = mockStore({});
    await store.dispatch(requestRobots());

    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
