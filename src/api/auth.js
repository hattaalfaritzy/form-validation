import { fetchApi } from '../utils/api';
import { apiMock } from './_root';

export const login = (data) => fetchApi({
  url: apiMock('user/login'),
  method: 'POST',
  data,
});

export const signUp = (data) => fetchApi({
  url: apiMock('user/register'),
  method: 'POST',
  data,
});
