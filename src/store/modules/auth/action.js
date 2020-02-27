export function signRequest(email, password) {
  return {
    type: '@auth/SIGN_REQUEST',
    payload: { email, password },
  };
}

export function signSuccess(admin, token) {
  return {
    type: '@auth/SIGN_SUCCESS',
    payload: { token, admin },
  };
}

export function signFalure() {
  return {
    type: '@auth/SIGN_FALURE',
  };
}
