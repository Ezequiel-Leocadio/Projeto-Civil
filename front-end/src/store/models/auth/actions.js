export function signOut() {
  return {
    type: '@auth/SIGN_OUT_CLEAR',
  };
}

export function setToken(value, user) {
  return {
    type: '@auth/SIGN_IN_TOKEN',
    value,
    user,
  };
}

export function setTokenSuccess(value, user) {
  return {
    type: '@auth/SIGN_IN_TOKEN_SUCCESS',
    value,
    user,
  };
}
