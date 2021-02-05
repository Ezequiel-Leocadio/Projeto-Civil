import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  user: [],
};

export default function auth(state = INITIAL_STATE, action) {
  if (action.type === '@auth/SIGN_OUT_CLEAR') {
    return INITIAL_STATE;
  }
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_TOKEN_SUCCESS': {
        draft.token = action.value;
        draft.user = action.user;
        break;
      }
      default:
    }
  });
}
