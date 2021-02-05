import produce from 'immer';

const INITIAL_STATE = {
  load: false,
  ipAcesso: 'http://192.168.0.1:3333',
};

export default function all(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@all/LOAD': {
        draft.load = action.value;
        break;
      }

      case '@all/IP': {
        draft.ipAcesso = action.ip;
        break;
      }

      default:
    }
  });
}
