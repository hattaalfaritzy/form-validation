import { fetchApi } from '../utils/api';
import { apiMock } from './_root';

export const getLocations = ({ queryKey, pageParam }) => {
  const [, params] = queryKey;
  return fetchApi({
    url: apiMock('location'),
    params: {
      ...params,
      page: pageParam,
    },
  });
};
