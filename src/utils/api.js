import axios from 'axios';
import queryString from 'query-string';
import { publicRuntimeConfig } from '../config/env';
import { getCookieJWT } from './auth';

const { NEXT_PUBLIC_API_HOST, NEXT_PUBLIC_API_TIMEOUT } = publicRuntimeConfig;
const timeout = Number(NEXT_PUBLIC_API_TIMEOUT || 15000);

const guestBearerToken = 'token1';

export const fetchApi = async ({
  url, path, method = 'GET', data, params, headers, isExternalResource, isGuest, usingFetch, req, customToken, ...rest
}) => {
  const token = getCookieJWT(req);

  let authorizationToken = (token && !isGuest) ? `Bearer ${token}` : guestBearerToken;
  if (customToken) { authorizationToken = `Bearer ${customToken}`; }

  const internalResourceAdditionalHeaders = {
    Authorization: authorizationToken,
    'Client-Version': 'web 0.1.0 20211222',
  };

  const finalHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(isExternalResource ? {} : internalResourceAdditionalHeaders),
    ...headers,
  };

  if (usingFetch) {
    const fetchResponse = await fetch(`${NEXT_PUBLIC_API_HOST}${url}?${queryString.stringify(params)}`, {
      method,
      headers: finalHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
      ...rest,
    });

    return fetchResponse.json();
  }

  const response = await axios({
    timeout,
    baseURL: NEXT_PUBLIC_API_HOST,
    url: url || path,
    method,
    data,
    params,
    headers: finalHeaders,
    ...rest,
  });

  return response.data;
};
