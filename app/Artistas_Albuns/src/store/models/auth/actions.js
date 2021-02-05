export function signInRequest(login, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {login, senha},
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function token_push(value) {
  return {
    type: '@auth/TOEKN_PUSH',
    value,
  };
}

export function verificaLoginRequest() {
  return {
    type: '@auth/VERIFICA_LOGIN_REQUEST',
  };
}

export function verificaLoginSuccess(value) {
  return {
    type: '@auth/VERIFICA_LOGIN_SUCCESS',
    value,
  };
}
