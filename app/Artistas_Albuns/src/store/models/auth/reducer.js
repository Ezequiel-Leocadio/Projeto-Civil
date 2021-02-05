import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loanding: false,
  tokenPush: null,
  user: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/VERIFICA_LOGIN_SUCCESS': {
        draft.signed = action.value;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.loading = false;
        draft.token = null;
        draft.signed = false;
        break;
      }

      case '@auth/TOEKN_PUSH': {
        draft.tokenPush = action.value;
        break;
      }
      default:
    }
  });
}
