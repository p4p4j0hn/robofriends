import { apiCall } from './api';
import fetch from 'jest-fetch-mock';
global.fetch = fetch;

describe('apiCall', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls the given URL and returns the data', async () => {
    const mockData = [{ id: 1, name: 'John Doe' }];
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const response = await apiCall('https://jsonplaceholder.typicode.com/users');

    expect(response).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('throws an error when fetch fails', async () => {
    fetch.mockRejectOnce(new Error('Failed to fetch'));

    await expect(apiCall('https://jsonplaceholder.typicode.com/users')).rejects.toThrow(
      'Failed to fetch'
    );
  });
});
