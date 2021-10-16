import * as jwtDecode from 'jwt-decode';

import { AUTH_HEADER, AUTH_COOKIE } from './auth.constant';
import { setCookie } from '../cookie/cookie.core';
import { getBrowserCookie } from '../cookie/cookie.core';
import { httpRequest } from '../http/index';

export function authDecode(raw) {
  return jwtDecode(raw);
}

export function setAutorizationHeader(tokenHash) {
  const token = `bearer ${tokenHash}`;
  console.log('JWT DECODE: ', jwtDecode(tokenHash));
  httpRequest.defaults.headers.common[AUTH_HEADER] = token;
}

export function setAutorization(token) {
  setAutorizationHeader(token);
  setCookie(AUTH_COOKIE, token);
}

export function setCurrentAuthCookie() {
  const authToken = getBrowserCookie(AUTH_COOKIE);

  if (authToken) {
    setAutorizationHeader(authToken);
  }
}
