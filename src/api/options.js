import { fetchApi } from '../utils/api';
import { apiMock } from './_root';

export const getLocationOptions = ({ queryKey }) => {
  const [, params] = queryKey;
  console.log('===params', params, queryKey);
  return fetchApi({
    url: apiMock('location/options'),
    params,
  });
};
